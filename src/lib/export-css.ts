import { colorName, formatHslChannels, formatRgbChannels } from "./color";
import type { CastMeta } from "./generate";

export function paletteCss(hexes: string[], meta: CastMeta): string {
  const credit = meta.handle
    ? `Huecast · ${meta.name} · from @${meta.handle}`
    : `Huecast · ${meta.name}`;

  const vars = hexes
    .map((hex, i) => {
      const n = i + 1;
      const name = colorName(hex);
      return [
        `  --palette-${n}: ${hex}; /* ${name} */`,
        `  --palette-${n}-rgb: ${formatRgbChannels(hex)};`,
        `  --palette-${n}-hsl: ${formatHslChannels(hex)};`,
      ].join("\n");
    })
    .join("\n\n");

  return `/* ${credit} */\n:root {\n${vars}\n}\n`;
}

export function paletteTheme(hexes: string[]): string {
  const lines = hexes
    .map((hex, i) => `  --color-palette-${i + 1}: ${hex};`)
    .join("\n");
  return `@theme {\n${lines}\n}\n`;
}
