export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };

const HEX = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

export function normalizeHex(input: string): string | null {
  const raw = input.trim();
  const m = HEX.exec(raw);
  if (!m) return null;
  let h = m[1].toLowerCase();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  return `#${h.toUpperCase()}`;
}

export function hexToRgb(hex: string): RGB {
  const n = normalizeHex(hex) ?? "#000000";
  return {
    r: parseInt(n.slice(1, 3), 16),
    g: parseInt(n.slice(3, 5), 16),
    b: parseInt(n.slice(5, 7), 16),
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const c = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`.toUpperCase();
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const R = r / 255;
  const G = g / 255;
  const B = b / 255;
  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: l * 100 };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === R) h = ((G - B) / d + (G < B ? 6 : 0)) * 60;
  else if (max === G) h = ((B - R) / d + 2) * 60;
  else h = ((R - G) / d + 4) * 60;
  return { h, s: s * 100, l: l * 100 };
}

function hueToChannel(p: number, q: number, t: number) {
  let T = t;
  if (T < 0) T += 1;
  if (T > 1) T -= 1;
  if (T < 1 / 6) return p + (q - p) * 6 * T;
  if (T < 1 / 2) return q;
  if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
  return p;
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const S = Math.max(0, Math.min(100, s)) / 100;
  const L = Math.max(0, Math.min(100, l)) / 100;
  const H = ((h % 360) + 360) % 360;
  if (S === 0) {
    const v = Math.round(L * 255);
    return { r: v, g: v, b: v };
  }
  const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
  const p = 2 * L - q;
  const hk = H / 360;
  return {
    r: Math.round(hueToChannel(p, q, hk + 1 / 3) * 255),
    g: Math.round(hueToChannel(p, q, hk) * 255),
    b: Math.round(hueToChannel(p, q, hk - 1 / 3) * 255),
  };
}

export function hexToHsl(hex: string): HSL {
  return rgbToHsl(hexToRgb(hex));
}

export function hslToHex(hsl: HSL): string {
  return rgbToHex(hslToRgb(hsl));
}

export function formatRgb(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${r}, ${g}, ${b})`;
}

export function formatHsl(hex: string): string {
  const { h, s, l } = hexToHsl(hex);
  return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}

export function formatRgbChannels(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return `${r} ${g} ${b}`;
}

export function formatHslChannels(hex: string): string {
  const { h, s, l } = hexToHsl(hex);
  return `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;
}

function linearize(c: number): number {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}

export function relativeLuminance(rgb: RGB): number {
  return 0.2126 * linearize(rgb.r) + 0.7152 * linearize(rgb.g) + 0.0722 * linearize(rgb.b);
}

export function contrastRatio(a: RGB, b: RGB): number {
  const L1 = relativeLuminance(a);
  const L2 = relativeLuminance(b);
  const light = Math.max(L1, L2);
  const dark = Math.min(L1, L2);
  return (light + 0.05) / (dark + 0.05);
}

export function contrastAgainst(hex: string, textHex: string): number {
  return contrastRatio(hexToRgb(hex), hexToRgb(textHex));
}

export type WcagLevel = "AAA" | "AA" | "fail";

export function wcagLevel(ratio: number, large = false): WcagLevel {
  if (large) {
    if (ratio >= 4.5) return "AAA";
    if (ratio >= 3) return "AA";
    return "fail";
  }
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  return "fail";
}

export function bestTextHex(bg: string): "#FFFFFF" | "#000000" {
  const rgb = hexToRgb(bg);
  const white = contrastRatio(rgb, { r: 255, g: 255, b: 255 });
  const black = contrastRatio(rgb, { r: 0, g: 0, b: 0 });
  return white >= black ? "#FFFFFF" : "#000000";
}

export function inkOn(bg: string): string {
  return bestTextHex(bg) === "#FFFFFF" ? "#F7F4EC" : "#161513";
}

export function hueDistance(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return Math.min(d, 360 - d);
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function colorName(hex: string): string {
  const { h, s, l } = hexToHsl(hex);
  if (s < 8) {
    if (l > 92) return "paper";
    if (l > 72) return "mist";
    if (l > 45) return "stone";
    if (l > 18) return "ink";
    return "void";
  }
  const hue =
    h < 15 || h >= 345
      ? "red"
      : h < 40
        ? "amber"
        : h < 65
          ? "gold"
          : h < 90
            ? "lime"
            : h < 150
              ? "green"
              : h < 180
                ? "teal"
                : h < 210
                  ? "cyan"
                  : h < 250
                    ? "blue"
                    : h < 290
                      ? "violet"
                      : h < 330
                        ? "magenta"
                        : "rose";
  const tone = l > 82 ? "pale" : l > 62 ? "soft" : l < 22 ? "deep" : l < 38 ? "dark" : s > 70 ? "vivid" : "muted";
  return `${tone} ${hue}`;
}
