//#region node_modules/.nitro/vite/services/ssr/assets/x-search.server-UM3tJvQZ.js
function env(key) {
	return process.env[key]?.trim() || void 0;
}
var TTL_MS = 12e5;
var HEX = /^#?[0-9A-Fa-f]{6}$/;
var cache = null;
var inflight = null;
async function searchLivePalettes(force = false) {
	if (!env("XAI_API_KEY")) return {
		palettes: cache?.palettes ?? [],
		fetchedAt: cache?.at ?? 0,
		fresh: false,
		error: "unconfigured"
	};
	if (!force && cache && Date.now() - cache.at < TTL_MS) return {
		palettes: cache.palettes,
		fetchedAt: cache.at,
		fresh: false
	};
	if (inflight) try {
		const hit = await inflight;
		return {
			palettes: hit.palettes,
			fetchedAt: hit.at,
			fresh: false
		};
	} catch (err) {
		const message = err instanceof Error ? err.message : "search failed";
		return {
			palettes: cache?.palettes ?? [],
			fetchedAt: cache?.at ?? 0,
			fresh: false,
			error: message
		};
	}
	inflight = runSearch().then((palettes) => {
		if (!palettes.length) throw new Error("no palettes");
		cache = {
			at: Date.now(),
			palettes
		};
		return cache;
	}).finally(() => {
		inflight = null;
	});
	try {
		const hit = await inflight;
		return {
			palettes: hit.palettes,
			fetchedAt: hit.at,
			fresh: true
		};
	} catch (err) {
		const message = err instanceof Error ? err.message : "search failed";
		return {
			palettes: cache?.palettes ?? [],
			fetchedAt: cache?.at ?? 0,
			fresh: false,
			error: message
		};
	}
}
async function runSearch() {
	const key = env("XAI_API_KEY");
	if (!key) return [];
	const to = /* @__PURE__ */ new Date();
	const body = {
		model: "grok-4.7",
		max_tool_calls: 2,
		reasoning: { effort: "low" },
		instructions: "Search X at most twice, then stop. Reply with JSON only, no markdown. Never invent a post, a handle, or a hex code that is not in a post you found.",
		input: [{
			role: "user",
			content: `Find recent posts on X about design, art, or illustration that mention hex color codes or show a palette, color study, or artwork.

Return {"palettes":[ ... up to 8 ... ]} where each item is:
{"name":"2 to 4 words","hexes":["#RRGGBB","#RRGGBB","#RRGGBB","#RRGGBB","#RRGGBB"],"handle":"screenName","author":"Display name","origin":"one sentence on the post","posted":"YYYY-MM-DD","postUrl":"https://x.com/handle/status/id","imageUrl":"https://pbs.twimg.com/media/...jpg or empty"}

Rules:
- Copy hex codes that are written in the post. If an image shows a palette and you can read its colors, use those.
- Need at least two real colors. If you have 2 to 4, fill to exactly 5 by making a clearly lighter or darker version of a real one.
- Skip posts with no real colors.
- imageUrl must be a pbs.twimg.com media URL from that post, or "".
- postUrl must be the real status URL.`
		}],
		tools: [{
			type: "x_search",
			from_date: (/* @__PURE__ */ new Date(to.getTime() - 18144e5)).toISOString().slice(0, 10),
			to_date: to.toISOString().slice(0, 10),
			enable_image_understanding: true
		}]
	};
	const ac = new AbortController();
	const timer = setTimeout(() => ac.abort(), 5e4);
	try {
		let posted = await postSearch(body, ac.signal, key);
		if (posted.status === 400 && "reasoning" in body) {
			const { reasoning: _drop, ...plain } = body;
			posted = await postSearch(plain, ac.signal, key);
		}
		if (posted.json.error) throw new Error(posted.json.error.message || "search failed");
		return parseSearchResponse(posted.json);
	} finally {
		clearTimeout(timer);
	}
}
async function postSearch(body, signal, key) {
	const res = await fetch("https://api.x.ai/v1/responses", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${key}`
		},
		body: JSON.stringify(body),
		signal
	});
	const json = await res.json();
	if (!res.ok && !json.error) json.error = { message: `search ${res.status}` };
	return {
		status: res.status,
		json
	};
}
function parseSearchResponse(json) {
	const cited = /* @__PURE__ */ new Set();
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
	const rows = Array.isArray(payload) ? payload : payload && typeof payload === "object" && Array.isArray(payload.palettes) ? payload.palettes : [];
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const row of rows) {
		const pal = normalizeRow(row, cited);
		if (!pal || seen.has(pal.id)) continue;
		seen.add(pal.id);
		out.push(pal);
		if (out.length >= 8) break;
	}
	return out;
}
function extractJson(text) {
	const raw = (text.match(/```(?:json)?\s*([\s\S]*?)```/)?.[1] ?? text).trim();
	const start = raw.indexOf("{");
	const startArr = raw.indexOf("[");
	const cut = start === -1 ? startArr : startArr === -1 ? start : Math.min(start, startArr);
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
function normalizeRow(row, cited) {
	if (!row || typeof row !== "object") return null;
	const r = row;
	const id = statusId(typeof r.postUrl === "string" ? r.postUrl.trim() : "");
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
	const origin = clip(typeof r.origin === "string" && r.origin.trim() ? r.origin : "Colors taken from a recent post on X.", 180);
	const posted = typeof r.posted === "string" && /^\d{4}-\d{2}-\d{2}$/.test(r.posted) ? r.posted : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
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
		live: true
	};
}
function statusId(url) {
	return url.match(/https?:\/\/(?:www\.)?(?:x|twitter)\.com\/(?:[\w]+\/status|i\/status)\/(\d+)/)?.[1] ?? null;
}
function uniqueHexes(value) {
	if (!Array.isArray(value)) return [];
	const out = [];
	for (const item of value) {
		if (typeof item !== "string" || !HEX.test(item.trim())) continue;
		const hex = `#${item.trim().replace("#", "").toUpperCase()}`;
		if (!out.includes(hex)) out.push(hex);
	}
	return out;
}
function fillFive(hexes) {
	const out = hexes.slice(0, 5);
	let i = 0;
	while (out.length < 5 && hexes.length) {
		const base = hexToRgb(hexes[i % hexes.length]);
		if (!base) return null;
		const toward = out.length % 2 === 0 ? 255 : 0;
		const t = out.length === 4 ? .55 : .35;
		const hex = rgbHex(base.map((c) => Math.round(c + (toward - c) * t)));
		if (!out.includes(hex)) out.push(hex);
		i += 1;
		if (i > 8) break;
	}
	if (out.length < 5) return null;
	return out.slice(0, 5);
}
function hexToRgb(hex) {
	const n = hex.slice(1);
	if (n.length !== 6) return null;
	return [
		parseInt(n.slice(0, 2), 16),
		parseInt(n.slice(2, 4), 16),
		parseInt(n.slice(4, 6), 16)
	];
}
function rgbHex([r, g, b]) {
	return `#${[
		r,
		g,
		b
	].map((c) => c.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}
function cleanHandle(value) {
	if (typeof value !== "string") return null;
	const handle = value.trim().replace(/^@/, "");
	return /^[A-Za-z0-9_]{1,15}$/.test(handle) ? handle : null;
}
function cleanImage(value) {
	if (typeof value !== "string") return void 0;
	const url = value.trim();
	if (!/^https:\/\/pbs\.twimg\.com\/media\/[\w-]+\.(?:jpg|jpeg|png|webp)(?:\?.*)?$/i.test(url)) return;
	return url;
}
function clip(value, max) {
	const clean = value.replace(/\s+/g, " ").trim();
	return clean.length > max ? `${clean.slice(0, max - 1).trim()}…` : clean;
}
//#endregion
export { searchLivePalettes };
