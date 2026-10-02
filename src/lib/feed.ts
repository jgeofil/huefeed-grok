export type FeedPalette = {
  id: string;
  name: string;
  hexes: [string, string, string, string, string];
  handle: string;
  author: string;
  origin: string;
  posted: string;
  /** Direct media URL from a live search. Local seed posts use /feed instead. */
  imageUrl?: string;
  postUrl?: string;
  live?: boolean;
};

/**
 * Five-color palettes extracted from recent design and art posts on X:
 * explicit hex codes in the text, or dominant colors from attached images.
 */
export const FEED: FeedPalette[] = [
  {
    id: "botanical-twist",
    name: "Botanical twist",
    hexes: ["#F5F3CE", "#EEEE88", "#9ECCA7", "#1F6C53", "#4B1C35"],
    handle: "AlexCristache",
    author: "Alex Cristache",
    origin: "Botanical palette with a chilli-red twist, posted with named swatches and contrast ratios.",
    posted: "2026-09-14",
  },
  {
    id: "coastal-gold",
    name: "Coastal gold",
    hexes: ["#FAF6EA", "#FFCF65", "#CBCDCD", "#009BB3", "#092256"],
    handle: "AlexCristache",
    author: "Alex Cristache",
    origin: "Gradient study listing hex stops from cream through gold and teal into navy.",
    posted: "2026-09-11",
  },
  {
    id: "transporter",
    name: "Transporter",
    hexes: ["#F1EFE8", "#FBA765", "#004F54", "#66023C", "#102C33"],
    handle: "AlexCristache",
    author: "Alex Cristache",
    origin: "Warm-and-deep identity palette shared as named swatches (Fuji Snow, Cozy Nook, Tyrian Purple).",
    posted: "2026-09-11",
  },
  {
    id: "illustration-soft",
    name: "Illustration soft",
    hexes: ["#CC8F88", "#F3C7C6", "#EFD5BE", "#E5CD83", "#9AB4B3"],
    handle: "gomes312",
    author: "Coolors",
    origin: "Five-bar palette pulled from an illustration, posted with hex labels.",
    posted: "2026-09-14",
  },
  {
    id: "complements",
    name: "Opposing outlines",
    hexes: ["#5F5FCC", "#5FCCCC", "#5FCC5F", "#CCCC5F", "#CC5F5F"],
    handle: "Rayaan_Pog",
    author: "Rayaan",
    origin: "Explicit complementary hex set from a game-art color study.",
    posted: "2026-09-03",
  },
  {
    id: "deep-reds",
    name: "Three reds",
    hexes: ["#F4E8E6", "#BF1F37", "#AD1517", "#872124", "#2A0A0C"],
    handle: "SunflowerPink4",
    author: "Sunflower Pink",
    origin: "Posted hex and RGB triples for a trio of red pairs, expanded into a five-stop set.",
    posted: "2026-08-22",
  },
  {
    id: "atelier-teal",
    name: "Atelier teal",
    hexes: ["#F3EDE3", "#C4A882", "#0D4F4A", "#1C1A17", "#EDE6D9"],
    handle: "jackjnor",
    author: "Jakson Jr",
    origin: "Interior-architecture site: oak, cream, and a deep teal field.",
    posted: "2026-09-14",
  },
  {
    id: "wing-dust",
    name: "Wing dust",
    hexes: ["#F2EDE4", "#B8D4D8", "#D5E4E6", "#6B4A32", "#3D2A1C"],
    handle: "PEBrandStrat",
    author: "Praise Eric",
    origin: "Nature-match study — powder blue and chocolate from a butterfly wing close-up.",
    posted: "2026-09-14",
  },
  {
    id: "heartsteel",
    name: "Stage lights",
    hexes: ["#F4F1EC", "#D6E04A", "#E23A8C", "#2F6FE0", "#1A1A22"],
    handle: "JumaraloHexCore",
    author: "Jumaralo Hex",
    origin: "Key art — acid lime, magenta, cobalt, and cream against charcoal.",
    posted: "2026-09-14",
  },
  {
    id: "jett-ice",
    name: "Jett ice",
    hexes: ["#E8F4F4", "#5AD0D4", "#2A6A78", "#16303C", "#0B141C"],
    handle: "JumaraloHexCore",
    author: "Jumaralo Hex",
    origin: "Character key art: ice teal armor on a deep navy field.",
    posted: "2026-09-14",
  },
  {
    id: "olive-warrior",
    name: "Olive study",
    hexes: ["#E8D9A8", "#C4A35A", "#7A8F3E", "#4A5C28", "#2C2416"],
    handle: "metalart",
    author: "Bruno",
    origin: "Fantasy illustration color-comp — olive, gold, and cave umber.",
    posted: "2026-09-14",
  },
  {
    id: "dusk-warrior",
    name: "Dusk study",
    hexes: ["#F0D0C4", "#C4786A", "#8B3A4A", "#5C2A3A", "#2A1820"],
    handle: "metalart",
    author: "Bruno",
    origin: "Alternate warm-magenta pass from the same illustration palette sheet.",
    posted: "2026-09-14",
  },
  {
    id: "mascot-field",
    name: "Field badge",
    hexes: ["#F4F1EA", "#5BA3D4", "#4A8B3A", "#C4A06A", "#0B1220"],
    handle: "MiraQuinnArt",
    author: "Mira Quinn",
    origin: "Mascot logo: navy badge, leaf green, sky, and wheat.",
    posted: "2026-09-14",
  },
  {
    id: "chefchaouen",
    name: "Blue city",
    hexes: ["#F5F0E6", "#A8C5D4", "#5B8DB8", "#2E5A88", "#1A3A52"],
    handle: "AlexCristache",
    author: "Alex Cristache",
    origin: "Palette matched to Chefchaouen — stacked blues on warm plaster.",
    posted: "2026-09-10",
  },
  {
    id: "brass-navy",
    name: "Brass navy",
    hexes: ["#F3E5C3", "#C9A227", "#0E5C5A", "#0A1F44", "#1A1A1A"],
    handle: "AlexCristache",
    author: "Alex Cristache",
    origin: "Restrained luxury pairing: navy, brass, teal, charcoal, champagne.",
    posted: "2026-09-10",
  },
  {
    id: "compliance",
    name: "Quiet UI",
    hexes: ["#FAFAF9", "#E7E5E4", "#1C1917", "#B42318", "#F5F5F4"],
    handle: "MAQIB135",
    author: "Aqib",
    origin: "Semantic product colors from a compliance-calendar UI study.",
    posted: "2026-08-01",
  },
  {
    id: "orchid-hex",
    name: "Orchid hex",
    hexes: ["#FFF0FF", "#FF9BFF", "#C45EC4", "#5A2A5A", "#1A101A"],
    handle: "JoakimMonsen",
    author: "Joakim Monsen",
    origin: "Built around the posted hex #FF9BFF.",
    posted: "2026-09-11",
  },
  {
    id: "soft-tone",
    name: "Same tone",
    hexes: ["#F6EDE8", "#E7C9C0", "#C9B8C8", "#8FA6B2", "#5A6B74"],
    handle: "aurellico",
    author: "aurell",
    origin: "Observation that a character sheet’s hexes sit on the soft, desaturated side.",
    posted: "2026-09-14",
  },
];

export function feedImage(id?: string): string | undefined {
  if (!id) return undefined;
  return FEED_IMAGES[id];
}

export function paletteStill(pal: { id: string; imageUrl?: string }): string | undefined {
  if (pal.imageUrl && /^https:\/\/pbs\.twimg\.com\/media\//.test(pal.imageUrl)) return pal.imageUrl;
  return feedImage(pal.id);
}

const FEED_IMAGES: Record<string, string> = {
  "botanical-twist": "/feed/botanical-twist.jpg",
  "coastal-gold": "/feed/coastal-gold.jpg",
  transporter: "/feed/transporter.jpg",
  "illustration-soft": "/feed/illustration-soft.jpg",
  complements: "/feed/complements.jpg",
  "deep-reds": "/feed/deep-reds.png",
  "atelier-teal": "/feed/atelier-teal.jpg",
  "wing-dust": "/feed/wing-dust.jpg",
  heartsteel: "/feed/heartsteel.jpg",
  "jett-ice": "/feed/jett-ice.jpg",
  "olive-warrior": "/feed/olive-warrior.jpg",
  "dusk-warrior": "/feed/dusk-warrior.jpg",
  "mascot-field": "/feed/mascot-field.jpg",
  chefchaouen: "/feed/chefchaouen.jpg",
  "brass-navy": "/feed/brass-navy.png",
  compliance: "/feed/compliance.jpg",
  "soft-tone": "/feed/soft-tone.png",
};

