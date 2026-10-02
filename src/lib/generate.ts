import {
  clamp,
  hexToHsl,
  hslToHex,
  hueDistance,
  type HSL,
} from "./color";
import { FEED, type FeedPalette } from "./feed";

export type HarmonyKind =
  | "analogous"
  | "complementary"
  | "triadic"
  | "split"
  | "tetradic"
  | "mono"
  | "tint";

export type CastMeta = {
  kind: "feed" | "harmony" | "remix";
  name: string;
  handle?: string;
  harmony?: HarmonyKind;
  feedId?: string;
};

export type CastResult = {
  hexes: [string, string, string, string, string];
  meta: CastMeta;
};

const HARMONIES: HarmonyKind[] = [
  "analogous",
  "complementary",
  "triadic",
  "split",
  "tetradic",
  "mono",
  "tint",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function jitter(hsl: HSL, h = 8, s = 6, l = 5): HSL {
  return {
    h: (hsl.h + (Math.random() * 2 - 1) * h + 360) % 360,
    s: clamp(hsl.s + (Math.random() * 2 - 1) * s, 4, 96),
    l: clamp(hsl.l + (Math.random() * 2 - 1) * l, 6, 96),
  };
}

function tooClose(a: string, b: string): boolean {
  const A = hexToHsl(a);
  const B = hexToHsl(b);
  return hueDistance(A.h, B.h) < 8 && Math.abs(A.l - B.l) < 8 && Math.abs(A.s - B.s) < 10;
}

function nudgeFrom(hex: string, avoid: string[]): string {
  let hsl = hexToHsl(hex);
  for (let i = 0; i < 8; i++) {
    if (!avoid.some((c) => tooClose(hslToHex(hsl), c))) return hslToHex(hsl);
    hsl = {
      h: (hsl.h + 18) % 360,
      s: clamp(hsl.s + (i % 2 === 0 ? 6 : -4), 8, 90),
      l: clamp(hsl.l + (i % 2 === 0 ? -7 : 7), 10, 92),
    };
  }
  return hslToHex(hsl);
}

function spreadLightness(hexes: string[]): string[] {
  const sorted = hexes
    .map((hex, i) => ({ hex, i, l: hexToHsl(hex).l }))
    .sort((a, b) => b.l - a.l);
  const lights = sorted.filter((x) => x.l > 78);
  const darks = sorted.filter((x) => x.l < 22);
  if (lights.length === 0) {
    const lightest = sorted[0]!;
    const hsl = hexToHsl(lightest.hex);
    hexes[lightest.i] = hslToHex({ ...hsl, s: clamp(hsl.s * 0.55, 4, 40), l: 90 });
  }
  if (darks.length === 0) {
    const darkest = sorted[sorted.length - 1]!;
    const hsl = hexToHsl(darkest.hex);
    hexes[darkest.i] = hslToHex({ ...hsl, s: clamp(hsl.s + 8, 10, 70), l: 14 });
  }
  return hexes;
}

function harmonyFromSeed(seed: string, kind: HarmonyKind): string[] {
  const base = hexToHsl(seed);
  const h = base.h;
  const s = clamp(base.s, 18, 86);
  const steps: HSL[] = [];

  switch (kind) {
    case "analogous":
      steps.push(
        { h: (h - 28 + 360) % 360, s: clamp(s * 0.45, 8, 40), l: 92 },
        { h: (h - 14 + 360) % 360, s: clamp(s * 0.8, 20, 70), l: 72 },
        { h, s, l: clamp(base.l, 38, 58) },
        { h: (h + 18) % 360, s: clamp(s + 4, 20, 80), l: 32 },
        { h: (h + 32) % 360, s: clamp(s * 0.7, 12, 60), l: 14 },
      );
      break;
    case "complementary":
      steps.push(
        { h, s: clamp(s * 0.3, 6, 28), l: 93 },
        { h, s, l: 68 },
        { h, s: clamp(s + 6, 20, 88), l: 42 },
        { h: (h + 180) % 360, s: clamp(s * 0.85, 18, 80), l: 36 },
        { h: (h + 180) % 360, s: clamp(s * 0.55, 10, 50), l: 12 },
      );
      break;
    case "triadic":
      steps.push(
        { h, s: clamp(s * 0.25, 6, 24), l: 92 },
        { h, s, l: 52 },
        { h: (h + 120) % 360, s: clamp(s * 0.9, 20, 80), l: 46 },
        { h: (h + 240) % 360, s: clamp(s * 0.75, 18, 72), l: 38 },
        { h: (h + 240) % 360, s: clamp(s * 0.4, 8, 40), l: 14 },
      );
      break;
    case "split":
      steps.push(
        { h, s: clamp(s * 0.35, 8, 30), l: 91 },
        { h, s, l: 56 },
        { h: (h + 150) % 360, s: clamp(s * 0.85, 18, 80), l: 48 },
        { h: (h + 210) % 360, s: clamp(s * 0.8, 18, 76), l: 34 },
        { h, s: clamp(s * 0.5, 10, 50), l: 13 },
      );
      break;
    case "tetradic":
      steps.push(
        { h, s: clamp(s * 0.3, 6, 26), l: 92 },
        { h, s, l: 54 },
        { h: (h + 90) % 360, s: clamp(s * 0.8, 18, 76), l: 46 },
        { h: (h + 180) % 360, s: clamp(s * 0.75, 16, 72), l: 32 },
        { h: (h + 270) % 360, s: clamp(s * 0.45, 10, 50), l: 14 },
      );
      break;
    case "mono":
      steps.push(
        { h, s: clamp(s * 0.25, 4, 22), l: 94 },
        { h, s: clamp(s * 0.55, 12, 50), l: 76 },
        { h, s, l: 52 },
        { h, s: clamp(s + 4, 16, 80), l: 32 },
        { h, s: clamp(s * 0.7, 10, 60), l: 12 },
      );
      break;
    case "tint":
      steps.push(
        { h, s: clamp(s * 0.2, 4, 18), l: 95 },
        { h, s: clamp(s * 0.5, 10, 40), l: 80 },
        { h, s: clamp(s * 0.85, 16, 70), l: 58 },
        { h, s, l: 36 },
        { h, s: clamp(s * 0.8, 12, 70), l: 14 },
      );
      break;
  }

  return steps.map((hsl) => hslToHex(jitter(hsl, 5, 4, 3)));
}

function jitterPalette(hexes: readonly string[]): string[] {
  return hexes.map((hex) => hslToHex(jitter(hexToHsl(hex), 6, 5, 4)));
}

function remix(a: FeedPalette, b: FeedPalette): string[] {
  return [
    a.hexes[0],
    b.hexes[1],
    a.hexes[2],
    b.hexes[3],
    a.hexes[4],
  ];
}

function matchFeedToLocked(lockedHexes: string[], feed: FeedPalette[]): FeedPalette {
  const corpus = feed.length ? feed : FEED;
  if (lockedHexes.length === 0) return pick(corpus);
  let best = corpus[0]!;
  let bestScore = Infinity;
  for (const pal of corpus) {
    let score = 0;
    for (const hex of lockedHexes) {
      const L = hexToHsl(hex);
      let min = Infinity;
      for (const p of pal.hexes) {
        const P = hexToHsl(p);
        const d =
          hueDistance(L.h, P.h) / 180 +
          Math.abs(L.s - P.s) / 200 +
          Math.abs(L.l - P.l) / 200;
        if (d < min) min = d;
      }
      score += min;
    }
    if (score < bestScore) {
      bestScore = score;
      best = pal;
    }
  }
  return best;
}

export function generatePalette(
  current: string[],
  locked: boolean[],
  feed: FeedPalette[] = FEED,
): CastResult {
  const corpus = feed.length ? feed : FEED;
  const lockedHexes = current.filter((_, i) => locked[i]);
  const roll = Math.random();
  const base = matchFeedToLocked(lockedHexes, corpus);

  let candidate: string[];
  let meta: CastMeta;

  if (lockedHexes.length > 0 && roll < 0.45) {
    const kind = pick(HARMONIES);
    const seed = pick(lockedHexes);
    candidate = harmonyFromSeed(seed, kind);
    meta = {
      kind: "harmony",
      name: `${kind} from lock`,
      harmony: kind,
      handle: base.handle,
      feedId: base.id,
    };
  } else if (roll < 0.42) {
    candidate = jitterPalette(base.hexes);
    meta = {
      kind: "feed",
      name: base.name,
      handle: base.handle,
      feedId: base.id,
    };
  } else if (roll < 0.7) {
    const others = corpus.filter((p) => p.id !== base.id);
    const other = others.length ? pick(others) : base;
    candidate = jitterPalette(remix(base, other));
    meta = {
      kind: "remix",
      name: `${base.name} × ${other.name}`,
      handle: base.handle,
      feedId: base.id,
    };
  } else {
    const kind = pick(HARMONIES);
    const seed = pick([...base.hexes]);
    candidate = harmonyFromSeed(seed, kind);
    meta = {
      kind: "harmony",
      name: `${kind} · ${base.name}`,
      harmony: kind,
      handle: base.handle,
      feedId: base.id,
    };
  }

  if (lockedHexes.length === 0 && Math.random() < 0.65) {
    candidate = spreadLightness(candidate);
  }

  const result: string[] = current.slice();
  const used: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (locked[i]) {
      used.push(current[i]!);
      continue;
    }
    const next = nudgeFrom(candidate[i] ?? pick(base.hexes), used);
    result[i] = next;
    used.push(next);
  }

  return {
    hexes: result as [string, string, string, string, string],
    meta,
  };
}

export function applyFeedPalette(pal: FeedPalette): CastResult {
  return {
    hexes: [...pal.hexes],
    meta: {
      kind: "feed",
      name: pal.name,
      handle: pal.handle,
      feedId: pal.id,
    },
  };
}
