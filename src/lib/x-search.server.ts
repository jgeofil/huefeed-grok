import { env } from "./env.server";
import type { FeedPalette } from "./feed";

const MIN_GAP_MS = 20_000;
const MAX_PER_HOUR = 6;
const HEX = /^#?[0-9A-Fa-f]{6}$/;

type Cache = { at: number; palettes: FeedPalette[] };
type SearchHit = Cache & { added: number };

let cache: Cache | null = null;
let inflight: Promise<SearchHit> | null = null;
let recentCalls: number[] = [];

export type LiveSearchResult = {
  palettes: FeedPalette[];
  fetchedAt: number;
  fresh: boolean;
  added: number;
  error?: string;
};

const WINDOW_DAYS = 45;
const MAX_BATCH = 24;

const ANGLES = [
  "color palettes, hex codes, swatches, and mood boards",
  "brand identity, packaging, posters, and graphic design",
  "interiors, fashion, product design, and photography",
  "illustration, film stills, pixel art, and print",
];

export async function searchLivePalettes(
  force = false,
  excludeIds: string[] = [],
  excludeHandles: string[] = [],
): Promise<LiveSearchResult> {
  if (!env("XAI_API_KEY")) {
    return { palettes: cache?.palettes ?? [], fetchedAt: cache?.at ?? 0, fresh: false, added: 0, error: "unconfigured" };
  }
  if (!force) {
    return { palettes: cache?.palettes ?? [], fetchedAt: cache?.at ?? 0, fresh: false, added: 0 };
  }
  const now = Date.now();
  if (cache && now - cache.at < MIN_GAP_MS) {
    return { palettes: cache.palettes, fetchedAt: cache.at, fresh: false, added: 0, error: "soon" };
  }
  recentCalls = recentCalls.filter((t) => now - t < 60 * 60 * 1000);
  if (recentCalls.length >= MAX_PER_HOUR) {
    return {
      palettes: cache?.palettes ?? [],
      fetchedAt: cache?.at ?? 0,
      fresh: false,
      added: 0,
      error: "capped",
    };
  }
  if (inflight) {
    try {
      const hit = await inflight;
      return { palettes: hit.palettes, fetchedAt: hit.at, fresh: false, added: 0 };
    } catch (err) {
      const message = err instanceof Error ? err.message : "search failed";
      return { palettes: cache?.palettes ?? [], fetchedAt: cache?.at ?? 0, fresh: false, added: 0, error: message };
    }
  }
  const skip = new Set(excludeIds);
  const handles = [...new Set(excludeHandles.map((h) => h.replace(/^@/, "")).filter((h) => /^[A-Za-z0-9_]{1,15}$/.test(h)))].slice(0, 20);
  recentCalls.push(Date.now());
  inflight = runSearch(skip, handles)
    .then((found) => {
      const prev = cache?.palettes ?? [];
      const novel = found.filter((pal) => !skip.has(pal.id.slice(5)) && !prev.some((old) => old.id === pal.id));
      const merged = [...novel, ...prev].slice(0, MAX_BATCH);
      if (!merged.length) throw new Error("no palettes");
      cache = { at: Date.now(), palettes: merged };
      return { ...cache, added: novel.length };
    })
    .finally(() => {
      inflight = null;
    });
  try {
    const hit = await inflight;
    return { palettes: hit.palettes, fetchedAt: hit.at, fresh: hit.added > 0, added: hit.added };
  } catch (err) {
    const message = err instanceof Error ? err.message : "search failed";
    return {
      palettes: cache?.palettes ?? [],
      fetchedAt: cache?.at ?? 0,
      fresh: false,
      added: 0,
      error: message,
    };
  }
}

async function runSearch(skip: Set<string>, handles: string[]): Promise<FeedPalette[]> {
  const key = env("XAI_API_KEY");
  if (!key) return [];
  const to = new Date();
  const from = new Date(to.getTime() - WINDOW_DAYS * 24 * 60 * 60 * 1000);
  const angle = ANGLES[(skip.size + handles.length) % ANGLES.length]!;
  const skipped = [...skip].slice(0, 40);
  const avoidIds = skipped.length ? ` Skip these status ids: ${skipped.join(", ")}.` : "";
  const avoidHandles = handles.length ? ` Skip these accounts: ${handles.map((h) => `@${h}`).join(", ")}.` : "";
  const body = {
    model: "grok-4.7",
    max_tool_calls: 2,
    max_output_tokens: 2000,
    reasoning: { effort: "low" },
    instructions:
      "Search X at most twice, then stop. The entire reply must be one JSON object and nothing else. Never invent a post, a handle, or a hex code.",
    input: [
      {
        role: "user",
        content: `Find recent X posts from the last ${WINDOW_DAYS} days about ${angle}.

Look across design, art, illustration, branding, interiors, fashion, photography, posters, packaging, and UI. Only include a post when the text itself prints hex codes.

Return {"palettes":[ up to 8 items ]} with this shape for each item:
{"name":"2 to 4 words","hexes":["#RRGGBB","#RRGGBB","#RRGGBB","#RRGGBB","#RRGGBB"],"handle":"screenName","author":"Display name","origin":"one sentence","posted":"YYYY-MM-DD","postUrl":"https://x.com/handle/status/id","imageUrl":"https://pbs.twimg.com/media/file.jpg or empty"}

Rules:
- Use only hex codes written in the post. Do not guess colors from an image.
- At least two real colors. If you have 2 to 4, fill to 5 with a lighter or darker version of one of them.
- Find different accounts from the ones you are told to skip.${avoidIds}${avoidHandles}
- If you cannot find 8, return as many real ones as you found. Do not reply with prose.`,
      },
    ],
    tools: [
      {
        type: "x_search",
        from_date: from.toISOString().slice(0, 10),
        to_date: to.toISOString().slice(0, 10),
        enable_image_understanding: false,
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "palette_batch",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          required: ["palettes"],
          properties: {
            palettes: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                required: ["name", "hexes", "handle", "author", "origin", "posted", "postUrl", "imageUrl"],
                properties: {
                  name: { type: "string" },
                  hexes: { type: "array", items: { type: "string" } },
                  handle: { type: "string" },
                  author: { type: "string" },
                  origin: { type: "string" },
                  posted: { type: "string" },
                  postUrl: { type: "string" },
                  imageUrl: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  };

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 75_000);
  try {
    let posted = await postSearch(body, ac.signal, key);
    if (posted.status === 400) {
      const { reasoning: _reasoning, text: _text, ...plain } = body;
      posted = await postSearch(plain, ac.signal, key);
    }
    if (posted.json.error) throw new Error(posted.json.error.message || "search failed");
    return parseSearchResponse(posted.json);
  } finally {
    clearTimeout(timer);
  }
}

async function postSearch(
  body: object,
  signal: AbortSignal,
  key: string,
): Promise<{
  status: number;
  json: {
    error?: { message?: string };
    output?: Array<{
      type?: string;
      content?: Array<{ type?: string; text?: string; annotations?: Array<{ url?: string }> }>;
    }>;
  };
}> {
  const res = await fetch("https://api.x.ai/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
    signal,
  });
  const json = (await res.json()) as {
    error?: { message?: string };
    output?: Array<{
      type?: string;
      content?: Array<{ type?: string; text?: string; annotations?: Array<{ url?: string }> }>;
    }>;
  };
  if (!res.ok && !json.error) json.error = { message: `search ${res.status}` };
  return { status: res.status, json };
}

export function parseSearchResponse(json: {
  output?: Array<{
    type?: string;
    content?: Array<{ type?: string; text?: string; annotations?: Array<{ url?: string }> }>;
  }>;
}): FeedPalette[] {
  const cited = new Set<string>();
  let text = "";
  for (const item of json.output ?? []) {
    if (item.type !== "message") continue;
    for (const part of item.content ?? []) {
      if (part.text) text += part.text;
      for (const note of part.annotations ?? []) {
        const id = statusId(note.url ?? "");
        if (id) cited.add(id);
      }
    }
  }
  const payload = extractJson(text);
  const rows = Array.isArray(payload)
    ? payload
    : payload && typeof payload === "object" && Array.isArray((payload as { palettes?: unknown }).palettes)
      ? (payload as { palettes: unknown[] }).palettes
      : [];

  const out: FeedPalette[] = [];
  const seen = new Set<string>();
  for (const row of rows) {
    const pal = normalizeRow(row, cited);
    if (!pal || seen.has(pal.id)) continue;
    seen.add(pal.id);
    out.push(pal);
    if (out.length >= 12) break;
  }
  return out;
}

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = (fenced?.[1] ?? text).trim();
  const start = raw.indexOf("{");
  const startArr = raw.indexOf("[");
  const cut =
    start === -1 ? startArr : startArr === -1 ? start : Math.min(start, startArr);
  if (cut < 0) return null;
  const slice = raw.slice(cut);
  try {
    return JSON.parse(slice);
  } catch {
    const end = Math.max(slice.lastIndexOf("}"), slice.lastIndexOf("]"));
    if (end < 0) return null;
    try {
      return JSON.parse(slice.slice(0, end + 1));
    } catch {
      return null;
    }
  }
}

function normalizeRow(row: unknown, cited: Set<string>): FeedPalette | null {
  if (!row || typeof row !== "object") return null;
  const r = row as Record<string, unknown>;
  const postUrl = typeof r.postUrl === "string" ? r.postUrl.trim() : "";
  const id = statusId(postUrl);
  if (!id) return null;
  if (cited.size > 0 && !cited.has(id)) return null;

  const found = uniqueHexes(r.hexes);
  if (found.length < 2) return null;
  const hexes = fillFive(found);
  if (!hexes) return null;

  const handle = cleanHandle(r.handle);
  if (!handle) return null;
  const name = clip(typeof r.name === "string" ? r.name : `${handle} palette`, 42);
  const author = clip(typeof r.author === "string" && r.author.trim() ? r.author : handle, 60);
  const origin = clip(
    typeof r.origin === "string" && r.origin.trim()
      ? r.origin
      : "Colors taken from a recent post on X.",
    180,
  );
  const posted =
    typeof r.posted === "string" && /^\d{4}-\d{2}-\d{2}$/.test(r.posted)
      ? r.posted
      : new Date().toISOString().slice(0, 10);
  const imageUrl = cleanImage(r.imageUrl);

  return {
    id: `live-${id}`,
    name,
    hexes,
    handle,
    author,
    origin,
    posted,
    imageUrl,
    postUrl: `https://x.com/${handle}/status/${id}`,
    live: true,
  };
}

function statusId(url: string): string | null {
  const m = url.match(/https?:\/\/(?:www\.)?(?:x|twitter)\.com\/(?:[\w]+\/status|i\/status)\/(\d+)/);
  return m?.[1] ?? null;
}

function uniqueHexes(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== "string" || !HEX.test(item.trim())) continue;
    const hex = `#${item.trim().replace("#", "").toUpperCase()}`;
    if (!out.includes(hex)) out.push(hex);
  }
  return out;
}

function fillFive(hexes: string[]): [string, string, string, string, string] | null {
  const out = hexes.slice(0, 5);
  let i = 0;
  while (out.length < 5 && hexes.length) {
    const base = hexToRgb(hexes[i % hexes.length]!);
    if (!base) return null;
    const toward = out.length % 2 === 0 ? 255 : 0;
    const t = out.length === 4 ? 0.55 : 0.35;
    const mixed = base.map((c) => Math.round(c + (toward - c) * t)) as [number, number, number];
    const hex = rgbHex(mixed);
    if (!out.includes(hex)) out.push(hex);
    i += 1;
    if (i > 8) break;
  }
  if (out.length < 5) return null;
  return out.slice(0, 5) as [string, string, string, string, string];
}

function hexToRgb(hex: string): [number, number, number] | null {
  const n = hex.slice(1);
  if (n.length !== 6) return null;
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

function rgbHex([r, g, b]: [number, number, number]): string {
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function cleanHandle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const handle = value.trim().replace(/^@/, "");
  return /^[A-Za-z0-9_]{1,15}$/.test(handle) ? handle : null;
}

function cleanImage(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const url = value.trim();
  if (!/^https:\/\/pbs\.twimg\.com\/media\/[\w-]+\.(?:jpg|jpeg|png|webp)(?:\?.*)?$/i.test(url)) {
    return undefined;
  }
  return url;
}

function clip(value: string, max: number): string {
  const clean = value.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trim()}…` : clean;
}
