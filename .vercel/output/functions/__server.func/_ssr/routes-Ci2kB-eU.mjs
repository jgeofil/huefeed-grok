import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Rss, c as Lock, d as Download, f as Copy, i as Shuffle, l as LockOpen, n as Undo2, o as Redo2, p as Check, s as Pipette, t as X, u as Keyboard } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, g as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ci2kB-eU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Five-color palettes extracted from recent design and art posts on X:
* explicit hex codes in the text, or dominant colors from attached images.
*/
var FEED = [
	{
		id: "botanical-twist",
		name: "Botanical twist",
		hexes: [
			"#F5F3CE",
			"#EEEE88",
			"#9ECCA7",
			"#1F6C53",
			"#4B1C35"
		],
		handle: "AlexCristache",
		author: "Alex Cristache",
		origin: "Botanical palette with a chilli-red twist, posted with named swatches and contrast ratios.",
		posted: "2026-09-14"
	},
	{
		id: "coastal-gold",
		name: "Coastal gold",
		hexes: [
			"#FAF6EA",
			"#FFCF65",
			"#CBCDCD",
			"#009BB3",
			"#092256"
		],
		handle: "AlexCristache",
		author: "Alex Cristache",
		origin: "Gradient study listing hex stops from cream through gold and teal into navy.",
		posted: "2026-09-11"
	},
	{
		id: "transporter",
		name: "Transporter",
		hexes: [
			"#F1EFE8",
			"#FBA765",
			"#004F54",
			"#66023C",
			"#102C33"
		],
		handle: "AlexCristache",
		author: "Alex Cristache",
		origin: "Warm-and-deep identity palette shared as named swatches (Fuji Snow, Cozy Nook, Tyrian Purple).",
		posted: "2026-09-11"
	},
	{
		id: "illustration-soft",
		name: "Illustration soft",
		hexes: [
			"#CC8F88",
			"#F3C7C6",
			"#EFD5BE",
			"#E5CD83",
			"#9AB4B3"
		],
		handle: "gomes312",
		author: "Coolors",
		origin: "Five-bar palette pulled from an illustration, posted with hex labels.",
		posted: "2026-09-14"
	},
	{
		id: "complements",
		name: "Opposing outlines",
		hexes: [
			"#5F5FCC",
			"#5FCCCC",
			"#5FCC5F",
			"#CCCC5F",
			"#CC5F5F"
		],
		handle: "Rayaan_Pog",
		author: "Rayaan",
		origin: "Explicit complementary hex set from a game-art color study.",
		posted: "2026-09-03"
	},
	{
		id: "deep-reds",
		name: "Three reds",
		hexes: [
			"#F4E8E6",
			"#BF1F37",
			"#AD1517",
			"#872124",
			"#2A0A0C"
		],
		handle: "SunflowerPink4",
		author: "Sunflower Pink",
		origin: "Posted hex and RGB triples for a trio of red pairs, expanded into a five-stop set.",
		posted: "2026-08-22"
	},
	{
		id: "atelier-teal",
		name: "Atelier teal",
		hexes: [
			"#F3EDE3",
			"#C4A882",
			"#0D4F4A",
			"#1C1A17",
			"#EDE6D9"
		],
		handle: "jackjnor",
		author: "Jakson Jr",
		origin: "Interior-architecture site: oak, cream, and a deep teal field.",
		posted: "2026-09-14"
	},
	{
		id: "wing-dust",
		name: "Wing dust",
		hexes: [
			"#F2EDE4",
			"#B8D4D8",
			"#D5E4E6",
			"#6B4A32",
			"#3D2A1C"
		],
		handle: "PEBrandStrat",
		author: "Praise Eric",
		origin: "Nature-match study — powder blue and chocolate from a butterfly wing close-up.",
		posted: "2026-09-14"
	},
	{
		id: "heartsteel",
		name: "Stage lights",
		hexes: [
			"#F4F1EC",
			"#D6E04A",
			"#E23A8C",
			"#2F6FE0",
			"#1A1A22"
		],
		handle: "JumaraloHexCore",
		author: "Jumaralo Hex",
		origin: "Key art — acid lime, magenta, cobalt, and cream against charcoal.",
		posted: "2026-09-14"
	},
	{
		id: "jett-ice",
		name: "Jett ice",
		hexes: [
			"#E8F4F4",
			"#5AD0D4",
			"#2A6A78",
			"#16303C",
			"#0B141C"
		],
		handle: "JumaraloHexCore",
		author: "Jumaralo Hex",
		origin: "Character key art: ice teal armor on a deep navy field.",
		posted: "2026-09-14"
	},
	{
		id: "olive-warrior",
		name: "Olive study",
		hexes: [
			"#E8D9A8",
			"#C4A35A",
			"#7A8F3E",
			"#4A5C28",
			"#2C2416"
		],
		handle: "metalart",
		author: "Bruno",
		origin: "Fantasy illustration color-comp — olive, gold, and cave umber.",
		posted: "2026-09-14"
	},
	{
		id: "dusk-warrior",
		name: "Dusk study",
		hexes: [
			"#F0D0C4",
			"#C4786A",
			"#8B3A4A",
			"#5C2A3A",
			"#2A1820"
		],
		handle: "metalart",
		author: "Bruno",
		origin: "Alternate warm-magenta pass from the same illustration palette sheet.",
		posted: "2026-09-14"
	},
	{
		id: "mascot-field",
		name: "Field badge",
		hexes: [
			"#F4F1EA",
			"#5BA3D4",
			"#4A8B3A",
			"#C4A06A",
			"#0B1220"
		],
		handle: "MiraQuinnArt",
		author: "Mira Quinn",
		origin: "Mascot logo: navy badge, leaf green, sky, and wheat.",
		posted: "2026-09-14"
	},
	{
		id: "chefchaouen",
		name: "Blue city",
		hexes: [
			"#F5F0E6",
			"#A8C5D4",
			"#5B8DB8",
			"#2E5A88",
			"#1A3A52"
		],
		handle: "AlexCristache",
		author: "Alex Cristache",
		origin: "Palette matched to Chefchaouen — stacked blues on warm plaster.",
		posted: "2026-09-10"
	},
	{
		id: "brass-navy",
		name: "Brass navy",
		hexes: [
			"#F3E5C3",
			"#C9A227",
			"#0E5C5A",
			"#0A1F44",
			"#1A1A1A"
		],
		handle: "AlexCristache",
		author: "Alex Cristache",
		origin: "Restrained luxury pairing: navy, brass, teal, charcoal, champagne.",
		posted: "2026-09-10"
	},
	{
		id: "compliance",
		name: "Quiet UI",
		hexes: [
			"#FAFAF9",
			"#E7E5E4",
			"#1C1917",
			"#B42318",
			"#F5F5F4"
		],
		handle: "MAQIB135",
		author: "Aqib",
		origin: "Semantic product colors from a compliance-calendar UI study.",
		posted: "2026-08-01"
	},
	{
		id: "orchid-hex",
		name: "Orchid hex",
		hexes: [
			"#FFF0FF",
			"#FF9BFF",
			"#C45EC4",
			"#5A2A5A",
			"#1A101A"
		],
		handle: "JoakimMonsen",
		author: "Joakim Monsen",
		origin: "Built around the posted hex #FF9BFF.",
		posted: "2026-09-11"
	},
	{
		id: "soft-tone",
		name: "Same tone",
		hexes: [
			"#F6EDE8",
			"#E7C9C0",
			"#C9B8C8",
			"#8FA6B2",
			"#5A6B74"
		],
		handle: "aurellico",
		author: "aurell",
		origin: "Observation that a character sheet’s hexes sit on the soft, desaturated side.",
		posted: "2026-09-14"
	}
];
function feedImage(id) {
	if (!id) return void 0;
	return FEED_IMAGES[id];
}
function paletteStill(pal) {
	if (pal.imageUrl && /^https:\/\/pbs\.twimg\.com\/media\//.test(pal.imageUrl)) return pal.imageUrl;
	return feedImage(pal.id);
}
var FEED_IMAGES = {
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
	"soft-tone": "/feed/soft-tone.png"
};
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchLivePalettes = createServerFn({ method: "POST" }).validator((input) => ({
	force: Boolean(input?.force),
	excludeIds: Array.isArray(input?.excludeIds) ? input.excludeIds.filter((id) => /^\d{8,25}$/.test(id)).slice(0, 40) : [],
	excludeHandles: Array.isArray(input?.excludeHandles) ? input.excludeHandles.filter((h) => /^@?[A-Za-z0-9_]{1,15}$/.test(h)).slice(0, 20) : []
})).handler(createSsrRpc("2a7ae2fdadec1b910390de42d0e98e35eb3d279766ef6fe860d6b5308dc404a0"));
var HEX = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
function normalizeHex(input) {
	const raw = input.trim();
	const m = HEX.exec(raw);
	if (!m) return null;
	let h = m[1].toLowerCase();
	if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
	return `#${h.toUpperCase()}`;
}
function hexToRgb(hex) {
	const n = normalizeHex(hex) ?? "#000000";
	return {
		r: parseInt(n.slice(1, 3), 16),
		g: parseInt(n.slice(3, 5), 16),
		b: parseInt(n.slice(5, 7), 16)
	};
}
function rgbToHex({ r, g, b }) {
	const c = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
	return `#${c(r)}${c(g)}${c(b)}`.toUpperCase();
}
function rgbToHsl({ r, g, b }) {
	const R = r / 255;
	const G = g / 255;
	const B = b / 255;
	const max = Math.max(R, G, B);
	const min = Math.min(R, G, B);
	const l = (max + min) / 2;
	if (max === min) return {
		h: 0,
		s: 0,
		l: l * 100
	};
	const d = max - min;
	const s = l > .5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === R) h = ((G - B) / d + (G < B ? 6 : 0)) * 60;
	else if (max === G) h = ((B - R) / d + 2) * 60;
	else h = ((R - G) / d + 4) * 60;
	return {
		h,
		s: s * 100,
		l: l * 100
	};
}
function hueToChannel(p, q, t) {
	let T = t;
	if (T < 0) T += 1;
	if (T > 1) T -= 1;
	if (T < 1 / 6) return p + (q - p) * 6 * T;
	if (T < 1 / 2) return q;
	if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
	return p;
}
function hslToRgb({ h, s, l }) {
	const S = Math.max(0, Math.min(100, s)) / 100;
	const L = Math.max(0, Math.min(100, l)) / 100;
	const H = (h % 360 + 360) % 360;
	if (S === 0) {
		const v = Math.round(L * 255);
		return {
			r: v,
			g: v,
			b: v
		};
	}
	const q = L < .5 ? L * (1 + S) : L + S - L * S;
	const p = 2 * L - q;
	const hk = H / 360;
	return {
		r: Math.round(hueToChannel(p, q, hk + 1 / 3) * 255),
		g: Math.round(hueToChannel(p, q, hk) * 255),
		b: Math.round(hueToChannel(p, q, hk - 1 / 3) * 255)
	};
}
function hexToHsl(hex) {
	return rgbToHsl(hexToRgb(hex));
}
function hslToHex(hsl) {
	return rgbToHex(hslToRgb(hsl));
}
function formatRgb(hex) {
	const { r, g, b } = hexToRgb(hex);
	return `rgb(${r}, ${g}, ${b})`;
}
function formatHsl(hex) {
	const { h, s, l } = hexToHsl(hex);
	return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}
function formatRgbChannels(hex) {
	const { r, g, b } = hexToRgb(hex);
	return `${r} ${g} ${b}`;
}
function formatHslChannels(hex) {
	const { h, s, l } = hexToHsl(hex);
	return `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;
}
function linearize(c) {
	const x = c / 255;
	return x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4;
}
function relativeLuminance(rgb) {
	return .2126 * linearize(rgb.r) + .7152 * linearize(rgb.g) + .0722 * linearize(rgb.b);
}
function contrastRatio(a, b) {
	const L1 = relativeLuminance(a);
	const L2 = relativeLuminance(b);
	const light = Math.max(L1, L2);
	const dark = Math.min(L1, L2);
	return (light + .05) / (dark + .05);
}
function contrastAgainst(hex, textHex) {
	return contrastRatio(hexToRgb(hex), hexToRgb(textHex));
}
function wcagLevel(ratio, large = false) {
	if (large) {
		if (ratio >= 4.5) return "AAA";
		if (ratio >= 3) return "AA";
		return "fail";
	}
	if (ratio >= 7) return "AAA";
	if (ratio >= 4.5) return "AA";
	return "fail";
}
function bestTextHex(bg) {
	const rgb = hexToRgb(bg);
	return contrastRatio(rgb, {
		r: 255,
		g: 255,
		b: 255
	}) >= contrastRatio(rgb, {
		r: 0,
		g: 0,
		b: 0
	}) ? "#FFFFFF" : "#000000";
}
function inkOn(bg) {
	return bestTextHex(bg) === "#FFFFFF" ? "#F7F4EC" : "#161513";
}
function hueDistance(a, b) {
	const d = Math.abs(a - b) % 360;
	return Math.min(d, 360 - d);
}
function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}
function colorName(hex) {
	const { h, s, l } = hexToHsl(hex);
	if (s < 8) {
		if (l > 92) return "paper";
		if (l > 72) return "mist";
		if (l > 45) return "stone";
		if (l > 18) return "ink";
		return "void";
	}
	return `${l > 82 ? "pale" : l > 62 ? "soft" : l < 22 ? "deep" : l < 38 ? "dark" : s > 70 ? "vivid" : "muted"} ${h < 15 || h >= 345 ? "red" : h < 40 ? "amber" : h < 65 ? "gold" : h < 90 ? "lime" : h < 150 ? "green" : h < 180 ? "teal" : h < 210 ? "cyan" : h < 250 ? "blue" : h < 290 ? "violet" : h < 330 ? "magenta" : "rose"}`;
}
var HARMONIES = [
	"analogous",
	"complementary",
	"triadic",
	"split",
	"tetradic",
	"mono",
	"tint"
];
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function jitter(hsl, h = 8, s = 6, l = 5) {
	return {
		h: (hsl.h + (Math.random() * 2 - 1) * h + 360) % 360,
		s: clamp(hsl.s + (Math.random() * 2 - 1) * s, 4, 96),
		l: clamp(hsl.l + (Math.random() * 2 - 1) * l, 6, 96)
	};
}
function tooClose(a, b) {
	const A = hexToHsl(a);
	const B = hexToHsl(b);
	return hueDistance(A.h, B.h) < 8 && Math.abs(A.l - B.l) < 8 && Math.abs(A.s - B.s) < 10;
}
function nudgeFrom(hex, avoid) {
	let hsl = hexToHsl(hex);
	for (let i = 0; i < 8; i++) {
		if (!avoid.some((c) => tooClose(hslToHex(hsl), c))) return hslToHex(hsl);
		hsl = {
			h: (hsl.h + 18) % 360,
			s: clamp(hsl.s + (i % 2 === 0 ? 6 : -4), 8, 90),
			l: clamp(hsl.l + (i % 2 === 0 ? -7 : 7), 10, 92)
		};
	}
	return hslToHex(hsl);
}
function spreadLightness(hexes) {
	const sorted = hexes.map((hex, i) => ({
		hex,
		i,
		l: hexToHsl(hex).l
	})).sort((a, b) => b.l - a.l);
	const lights = sorted.filter((x) => x.l > 78);
	const darks = sorted.filter((x) => x.l < 22);
	if (lights.length === 0) {
		const lightest = sorted[0];
		const hsl = hexToHsl(lightest.hex);
		hexes[lightest.i] = hslToHex({
			...hsl,
			s: clamp(hsl.s * .55, 4, 40),
			l: 90
		});
	}
	if (darks.length === 0) {
		const darkest = sorted[sorted.length - 1];
		const hsl = hexToHsl(darkest.hex);
		hexes[darkest.i] = hslToHex({
			...hsl,
			s: clamp(hsl.s + 8, 10, 70),
			l: 14
		});
	}
	return hexes;
}
function harmonyFromSeed(seed, kind) {
	const base = hexToHsl(seed);
	const h = base.h;
	const s = clamp(base.s, 18, 86);
	const steps = [];
	switch (kind) {
		case "analogous":
			steps.push({
				h: (h - 28 + 360) % 360,
				s: clamp(s * .45, 8, 40),
				l: 92
			}, {
				h: (h - 14 + 360) % 360,
				s: clamp(s * .8, 20, 70),
				l: 72
			}, {
				h,
				s,
				l: clamp(base.l, 38, 58)
			}, {
				h: (h + 18) % 360,
				s: clamp(s + 4, 20, 80),
				l: 32
			}, {
				h: (h + 32) % 360,
				s: clamp(s * .7, 12, 60),
				l: 14
			});
			break;
		case "complementary":
			steps.push({
				h,
				s: clamp(s * .3, 6, 28),
				l: 93
			}, {
				h,
				s,
				l: 68
			}, {
				h,
				s: clamp(s + 6, 20, 88),
				l: 42
			}, {
				h: (h + 180) % 360,
				s: clamp(s * .85, 18, 80),
				l: 36
			}, {
				h: (h + 180) % 360,
				s: clamp(s * .55, 10, 50),
				l: 12
			});
			break;
		case "triadic":
			steps.push({
				h,
				s: clamp(s * .25, 6, 24),
				l: 92
			}, {
				h,
				s,
				l: 52
			}, {
				h: (h + 120) % 360,
				s: clamp(s * .9, 20, 80),
				l: 46
			}, {
				h: (h + 240) % 360,
				s: clamp(s * .75, 18, 72),
				l: 38
			}, {
				h: (h + 240) % 360,
				s: clamp(s * .4, 8, 40),
				l: 14
			});
			break;
		case "split":
			steps.push({
				h,
				s: clamp(s * .35, 8, 30),
				l: 91
			}, {
				h,
				s,
				l: 56
			}, {
				h: (h + 150) % 360,
				s: clamp(s * .85, 18, 80),
				l: 48
			}, {
				h: (h + 210) % 360,
				s: clamp(s * .8, 18, 76),
				l: 34
			}, {
				h,
				s: clamp(s * .5, 10, 50),
				l: 13
			});
			break;
		case "tetradic":
			steps.push({
				h,
				s: clamp(s * .3, 6, 26),
				l: 92
			}, {
				h,
				s,
				l: 54
			}, {
				h: (h + 90) % 360,
				s: clamp(s * .8, 18, 76),
				l: 46
			}, {
				h: (h + 180) % 360,
				s: clamp(s * .75, 16, 72),
				l: 32
			}, {
				h: (h + 270) % 360,
				s: clamp(s * .45, 10, 50),
				l: 14
			});
			break;
		case "mono":
			steps.push({
				h,
				s: clamp(s * .25, 4, 22),
				l: 94
			}, {
				h,
				s: clamp(s * .55, 12, 50),
				l: 76
			}, {
				h,
				s,
				l: 52
			}, {
				h,
				s: clamp(s + 4, 16, 80),
				l: 32
			}, {
				h,
				s: clamp(s * .7, 10, 60),
				l: 12
			});
			break;
		case "tint": steps.push({
			h,
			s: clamp(s * .2, 4, 18),
			l: 95
		}, {
			h,
			s: clamp(s * .5, 10, 40),
			l: 80
		}, {
			h,
			s: clamp(s * .85, 16, 70),
			l: 58
		}, {
			h,
			s,
			l: 36
		}, {
			h,
			s: clamp(s * .8, 12, 70),
			l: 14
		});
	}
	return steps.map((hsl) => hslToHex(jitter(hsl, 5, 4, 3)));
}
function jitterPalette(hexes) {
	return hexes.map((hex) => hslToHex(jitter(hexToHsl(hex), 6, 5, 4)));
}
function remix(a, b) {
	return [
		a.hexes[0],
		b.hexes[1],
		a.hexes[2],
		b.hexes[3],
		a.hexes[4]
	];
}
function matchFeedToLocked(lockedHexes, feed) {
	const corpus = feed.length ? feed : FEED;
	if (lockedHexes.length === 0) return pick(corpus);
	let best = corpus[0];
	let bestScore = Infinity;
	for (const pal of corpus) {
		let score = 0;
		for (const hex of lockedHexes) {
			const L = hexToHsl(hex);
			let min = Infinity;
			for (const p of pal.hexes) {
				const P = hexToHsl(p);
				const d = hueDistance(L.h, P.h) / 180 + Math.abs(L.s - P.s) / 200 + Math.abs(L.l - P.l) / 200;
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
function generatePalette(current, locked, feed = FEED) {
	const corpus = feed.length ? feed : FEED;
	const lockedHexes = current.filter((_, i) => locked[i]);
	const roll = Math.random();
	const base = matchFeedToLocked(lockedHexes, corpus);
	let candidate;
	let meta;
	if (lockedHexes.length > 0 && roll < .45) {
		const kind = pick(HARMONIES);
		candidate = harmonyFromSeed(pick(lockedHexes), kind);
		meta = {
			kind: "harmony",
			name: `${kind} from lock`,
			harmony: kind,
			handle: base.handle,
			feedId: base.id
		};
	} else if (roll < .42) {
		candidate = jitterPalette(base.hexes);
		meta = {
			kind: "feed",
			name: base.name,
			handle: base.handle,
			feedId: base.id
		};
	} else if (roll < .7) {
		const others = corpus.filter((p) => p.id !== base.id);
		const other = others.length ? pick(others) : base;
		candidate = jitterPalette(remix(base, other));
		meta = {
			kind: "remix",
			name: `${base.name} × ${other.name}`,
			handle: base.handle,
			feedId: base.id
		};
	} else {
		const kind = pick(HARMONIES);
		candidate = harmonyFromSeed(pick([...base.hexes]), kind);
		meta = {
			kind: "harmony",
			name: `${kind} · ${base.name}`,
			harmony: kind,
			handle: base.handle,
			feedId: base.id
		};
	}
	if (lockedHexes.length === 0 && Math.random() < .65) candidate = spreadLightness(candidate);
	const result = current.slice();
	const used = [];
	for (let i = 0; i < 5; i++) {
		if (locked[i]) {
			used.push(current[i]);
			continue;
		}
		const next = nudgeFrom(candidate[i] ?? pick(base.hexes), used);
		result[i] = next;
		used.push(next);
	}
	return {
		hexes: result,
		meta
	};
}
function applyFeedPalette(pal) {
	return {
		hexes: [...pal.hexes],
		meta: {
			kind: "feed",
			name: pal.name,
			handle: pal.handle,
			feedId: pal.id
		}
	};
}
var OPENING = FEED[0];
function fromHexes(hexes, locks) {
	return hexes.map((hex, i) => ({
		hex,
		locked: locks?.[i] ?? false
	}));
}
function snapshotOf(s) {
	return {
		swatches: s.swatches.map((x) => ({ ...x })),
		meta: { ...s.meta }
	};
}
function corpusOf(live) {
	const fresh = live.filter((p) => p.hexes?.length === 5 && p.id);
	if (!fresh.length) return FEED;
	const ids = new Set(fresh.map((p) => p.id));
	return [...fresh, ...FEED.filter((p) => !ids.has(p.id))];
}
var openingMeta = {
	kind: "feed",
	name: OPENING.name,
	handle: OPENING.handle,
	feedId: OPENING.id
};
var usePalette = create()(persist((set, get) => ({
	swatches: fromHexes(OPENING.hexes),
	meta: openingMeta,
	focused: 0,
	history: [],
	future: [],
	ready: false,
	live: [],
	fetchedAt: 0,
	setLive: (palettes, fetchedAt) => set({
		live: palettes,
		fetchedAt
	}),
	hydrateDefault: () => {
		if (get().ready) return;
		set({ ready: true });
	},
	shuffle: () => {
		const { swatches, live } = get();
		if (swatches.every((s) => s.locked)) return false;
		const next = generatePalette(swatches.map((s) => s.hex), swatches.map((s) => s.locked), corpusOf(live));
		set((state) => ({
			history: [...state.history, snapshotOf(state)].slice(-40),
			future: [],
			swatches: fromHexes(next.hexes, state.swatches.map((s) => s.locked)),
			meta: next.meta
		}));
		return true;
	},
	toggleLock: (index) => {
		set((state) => ({ swatches: state.swatches.map((s, i) => i === index ? {
			...s,
			locked: !s.locked
		} : s) }));
	},
	setHex: (index, hex) => {
		const n = normalizeHex(hex);
		if (!n) return;
		set((state) => ({
			history: [...state.history, snapshotOf(state)].slice(-40),
			future: [],
			swatches: state.swatches.map((s, i) => i === index ? {
				hex: n,
				locked: true
			} : s)
		}));
	},
	applyFeed: (id) => {
		const pal = corpusOf(get().live).find((p) => p.id === id);
		if (!pal) return;
		const next = applyFeedPalette(pal);
		set((state) => ({
			history: [...state.history, snapshotOf(state)].slice(-40),
			future: [],
			swatches: fromHexes(next.hexes, state.swatches.map((s) => s.locked)).map((s, i) => state.swatches[i]?.locked ? {
				hex: state.swatches[i].hex,
				locked: true
			} : s),
			meta: next.meta
		}));
	},
	undo: () => {
		const { history } = get();
		if (history.length === 0) return;
		const prev = history[history.length - 1];
		set((state) => ({
			history: state.history.slice(0, -1),
			future: [snapshotOf(state), ...state.future].slice(0, 40),
			swatches: prev.swatches,
			meta: prev.meta
		}));
	},
	redo: () => {
		const { future } = get();
		if (future.length === 0) return;
		const next = future[0];
		set((state) => ({
			future: state.future.slice(1),
			history: [...state.history, snapshotOf(state)].slice(-40),
			swatches: next.swatches,
			meta: next.meta
		}));
	},
	setFocused: (index) => set({ focused: index })
}), {
	name: "huecast-palette",
	partialize: (s) => ({
		swatches: s.swatches,
		meta: s.meta,
		live: s.live,
		fetchedAt: s.fetchedAt
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const el = document.createElement("textarea");
			el.value = text;
			el.setAttribute("readonly", "");
			el.style.position = "fixed";
			el.style.left = "-9999px";
			document.body.appendChild(el);
			el.select();
			const ok = document.execCommand("copy");
			document.body.removeChild(el);
			return ok;
		} catch {
			return false;
		}
	}
}
function isTypingTarget(el) {
	if (!(el instanceof HTMLElement)) return false;
	const tag = el.tagName;
	if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
	return el.isContentEditable;
}
function usePaletteHotkeys({ openExport, openFeed, openShortcuts, onShuffle }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (isTypingTarget(e.target)) return;
			if (document.querySelector("[role=\"dialog\"]")) return;
			const meta = e.metaKey || e.ctrlKey;
			const { swatches, focused, toggleLock, setFocused, undo, redo } = usePalette.getState();
			const hex = swatches[focused]?.hex ?? swatches[0]?.hex;
			if (e.code === "Space") {
				e.preventDefault();
				onShuffle();
				return;
			}
			if (meta && e.key.toLowerCase() === "z") {
				e.preventDefault();
				if (e.shiftKey) redo();
				else undo();
				return;
			}
			if (meta && e.key.toLowerCase() === "y") {
				e.preventDefault();
				redo();
				return;
			}
			if (e.key === "?" || e.shiftKey && e.key === "/") {
				e.preventDefault();
				openShortcuts();
				return;
			}
			if (e.key === "ArrowRight") {
				e.preventDefault();
				setFocused((focused + 1) % 5);
				return;
			}
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				setFocused((focused + 4) % 5);
				return;
			}
			if (e.key >= "1" && e.key <= "5") {
				e.preventDefault();
				const i = Number(e.key) - 1;
				setFocused(i);
				toggleLock(i);
				return;
			}
			if (e.key.toLowerCase() === "l") {
				e.preventDefault();
				toggleLock(focused);
				return;
			}
			if (e.key.toLowerCase() === "e" && !meta) {
				e.preventDefault();
				openExport();
				return;
			}
			if (e.key.toLowerCase() === "f" && !meta) {
				e.preventDefault();
				openFeed();
				return;
			}
			if (e.key.toLowerCase() === "c" && !meta) {
				e.preventDefault();
				if (e.shiftKey) {
					copyText(swatches.map((s) => s.hex).join(", "));
					toast.success("Palette copied", { duration: 1100 });
				} else if (hex) {
					copyText(hex);
					toast.success("Hex copied", { duration: 1100 });
				}
				return;
			}
			if (e.key.toLowerCase() === "r" && !meta && hex) {
				e.preventDefault();
				copyText(formatRgb(hex));
				toast.success("RGB copied", { duration: 1100 });
				return;
			}
			if (e.key.toLowerCase() === "h" && !meta && hex) {
				e.preventDefault();
				copyText(formatHsl(hex));
				toast.success("HSL copied", { duration: 1100 });
			}
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [
		openExport,
		openFeed,
		openShortcuts,
		onShuffle
	]);
}
function paletteCss(hexes, meta) {
	return `/* ${meta.handle ? `Huecast · ${meta.name} · from @${meta.handle}` : `Huecast · ${meta.name}`} */\n:root {\n${hexes.map((hex, i) => {
		const n = i + 1;
		return [
			`  --palette-${n}: ${hex}; /* ${colorName(hex)} */`,
			`  --palette-${n}-rgb: ${formatRgbChannels(hex)};`,
			`  --palette-${n}-hsl: ${formatHslChannels(hex)};`
		].join("\n");
	}).join("\n\n")}\n}\n`;
}
function paletteTheme(hexes) {
	return `@theme {\n${hexes.map((hex, i) => `  --color-palette-${i + 1}: ${hex};`).join("\n")}\n}\n`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			ghost: "hover:bg-accent text-foreground",
			outline: "border border-border bg-transparent hover:bg-accent"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(100%-2rem,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-card p-6 text-card-foreground shadow-[var(--shadow-border)] outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-4 right-4 rounded-md p-1 text-muted-foreground transition-opacity hover:opacity-80",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function ExportDialog({ open, onOpenChange, hexes, meta }) {
	const [tab, setTab] = (0, import_react.useState)("css");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const css = (0, import_react.useMemo)(() => paletteCss(hexes, meta), [hexes, meta]);
	const theme = (0, import_react.useMemo)(() => paletteTheme(hexes), [hexes]);
	const body = tab === "css" ? css : theme;
	const copy = () => {
		setCopied(true);
		toast.success("CSS copied", { duration: 1100 });
		copyText(body);
		window.setTimeout(() => setCopied(false), 900);
	};
	const download = () => {
		const blob = new Blob([css], { type: "text/css" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "huecast-palette.css";
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Downloaded huecast-palette.css", { duration: 1400 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Export CSS variables" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"Drop into a stylesheet or a Tailwind v4 ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "font-mono",
					children: "@theme"
				}),
				" block."
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-1 rounded-lg bg-muted p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("css"),
					className: `h-9 flex-1 rounded-md text-sm font-medium transition-colors ${tab === "css" ? "bg-card text-foreground" : "text-muted-foreground"}`,
					children: ":root"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("theme"),
					className: `h-9 flex-1 rounded-md text-sm font-medium transition-colors ${tab === "theme" ? "bg-card text-foreground" : "text-muted-foreground"}`,
					children: "@theme"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "max-h-72 overflow-auto rounded-lg bg-foreground p-4 font-mono text-xs leading-relaxed text-background",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: copy,
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: download,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download .css"]
				})]
			})
		] })
	});
}
function FeedDialog({ open, onOpenChange, palettes, activeId, searching, onRefresh, onPick }) {
	const live = palettes.filter((p) => p.live);
	const saved = palettes.filter((p) => !p.live);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[min(36rem,85dvh)] overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "From the feed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: searching ? "Searching recent posts on X…" : "Shuffle stays instant. Search looks across design, art, fashion, and interiors, and the next pass skips posts already listed." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: onRefresh,
					disabled: searching,
					children: searching ? "Searching" : "Search again"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "max-h-[min(24rem,55dvh)] overflow-auto px-3 pb-4",
				children: [
					live.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { label: "New posts" }) : null,
					live.map((pal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						pal,
						active: pal.id === activeId,
						onPick: () => {
							onPick(pal.id);
							onOpenChange(false);
						}
					}, pal.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { label: "Saved" }),
					saved.map((pal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						pal,
						active: pal.id === activeId,
						onPick: () => {
							onPick(pal.id);
							onOpenChange(false);
						}
					}, pal.id))
				]
			})]
		})
	});
}
function Section({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "px-3 pt-2 pb-1 text-[11px] tracking-wide text-muted-foreground uppercase",
		children: label
	});
}
function Row({ pal, active, onPick }) {
	const still = paletteStill(pal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onPick,
		className: `flex w-full flex-col gap-2 rounded-lg px-3 py-3 text-left transition-colors ${active ? "bg-accent" : "hover:bg-muted"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [still ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: still,
					alt: "",
					referrerPolicy: "no-referrer",
					className: "h-10 w-14 shrink-0 rounded-md object-cover shadow-[var(--shadow-border)]"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-8 min-w-0 flex-1 overflow-hidden rounded-md",
					children: pal.hexes.map((hex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-full flex-1",
						style: { backgroundColor: hex }
					}, hex))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: pal.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: ["@", pal.handle]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs leading-snug text-muted-foreground",
				children: pal.origin
			})
		]
	}) });
}
var ROWS = [
	{
		keys: "Space",
		action: "Shuffle unlocked colors"
	},
	{
		keys: "1 – 5",
		action: "Lock or unlock a swatch"
	},
	{
		keys: "← →",
		action: "Move focus between swatches"
	},
	{
		keys: "C",
		action: "Copy focused hex"
	},
	{
		keys: "R",
		action: "Copy focused RGB"
	},
	{
		keys: "H",
		action: "Copy focused HSL"
	},
	{
		keys: "Shift + C",
		action: "Copy all five hexes"
	},
	{
		keys: "E",
		action: "Export CSS variables"
	},
	{
		keys: "F",
		action: "Open the design feed"
	},
	{
		keys: "L",
		action: "Lock focused swatch"
	},
	{
		keys: "⌘ Z / Ctrl Z",
		action: "Undo"
	},
	{
		keys: "⌘ ⇧ Z / Ctrl Y",
		action: "Redo"
	},
	{
		keys: "?",
		action: "This list"
	}
];
function ShortcutsDialog({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Keyboard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Built to feel like a design tool, not a form." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border",
			children: ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-baseline justify-between gap-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-tight text-muted-foreground",
					children: row.keys
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: row.action
				})]
			}, row.keys))
		})] })
	});
}
function CopyValue({ value, display, label, className, textClassName, delay = 0 }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const timer = (0, import_react.useRef)(0);
	const onCopy = () => {
		setCopied(true);
		toast.success(`${label} copied`, { duration: 1100 });
		copyText(value);
		window.clearTimeout(timer.current);
		timer.current = window.setTimeout(() => setCopied(false), 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onCopy,
		title: `Copy ${label}`,
		className: cn("group relative flex h-8 w-full items-center justify-between gap-2 rounded-md bg-transparent px-1 text-left text-inherit transition-opacity duration-150 hover:opacity-80 active:scale-[0.98] sm:h-11", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("min-w-0 truncate font-mono text-sm tracking-tight tabular-nums animate-value-in", textClassName),
			style: { animationDelay: `${delay}ms` },
			children: display ?? value
		}, `${value}-${copied ? "c" : "n"}`), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative size-4 shrink-0 opacity-70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", copied ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"),
				strokeWidth: 2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"),
				strokeWidth: 2
			})]
		})]
	});
}
function ContrastRow({ label, sample, ratio, ink }) {
	const body = wcagLevel(ratio, false);
	const large = wcagLevel(ratio, true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 flex-1 items-center justify-between gap-1.5 text-xs leading-none sm:flex-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-6 items-center justify-center rounded-sm font-display text-xs font-medium",
				style: {
					backgroundColor: sample,
					color: ink
				},
				"aria-hidden": true,
				children: "Aa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden opacity-80 sm:inline",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 font-mono tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ratio.toFixed(1) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("uppercase tracking-wide", body === "fail" ? "opacity-50" : "opacity-90"),
				children: body === "fail" ? large === "fail" ? "—" : `L ${large}` : body
			})]
		})]
	});
}
function SwatchColumn({ hex, locked, index, focused, onLock, onFocus, onPick }) {
	const ink = inkOn(hex);
	const whiteRatio = contrastAgainst(hex, "#FFFFFF");
	const blackRatio = contrastAgainst(hex, "#000000");
	const rgb = formatRgb(hex);
	const hsl = formatHsl(hex);
	const pickerId = `swatch-picker-${index}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		role: "group",
		"aria-label": `Swatch ${index + 1} ${hex}`,
		tabIndex: 0,
		onFocus,
		onClick: onFocus,
		className: cn("relative flex min-h-0 min-w-0 flex-col justify-end overflow-hidden outline-none", "px-3 pt-12 pb-3 sm:px-5 sm:pt-14 sm:pb-8"),
		style: {
			backgroundColor: hex,
			color: ink
		},
		children: [
			focused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 ring-2 ring-inset",
				style: { boxShadow: `inset 0 0 0 2px ${ink}` }
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 right-3 flex items-center gap-1 sm:top-4 sm:right-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: pickerId,
					className: "relative flex size-11 items-center justify-center rounded-md bg-transparent text-inherit opacity-80 transition-opacity hover:opacity-100",
					title: "Pick color",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipette, {
						className: "size-4",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: pickerId,
						type: "color",
						value: hex,
						onChange: (e) => onPick(e.target.value),
						className: "absolute inset-0 cursor-pointer opacity-0",
						"aria-label": `Pick color for swatch ${index + 1}`
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation();
						onLock();
					},
					className: "relative flex size-11 items-center justify-center rounded-md bg-transparent text-inherit opacity-80 transition-opacity hover:opacity-100",
					"aria-pressed": locked,
					"aria-label": locked ? `Unlock swatch ${index + 1}` : `Lock swatch ${index + 1}`,
					title: `${locked ? "Unlock" : "Lock"} · ${index + 1}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative size-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", locked ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"),
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, {
							className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200", locked ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"),
							strokeWidth: 1.75
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-col gap-0.5 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyValue, {
						value: hex,
						label: "Hex",
						delay: index * 40,
						textClassName: "font-mono text-lg font-medium tracking-tight sm:text-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyValue, {
						value: rgb,
						label: "RGB",
						delay: index * 40 + 20
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyValue, {
						value: hsl,
						label: "HSL",
						delay: index * 40 + 40
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-3 opacity-90 sm:flex-col sm:items-stretch sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastRow, {
							label: "White",
							sample: "#FFFFFF",
							ratio: whiteRatio,
							ink: "#000000"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastRow, {
							label: "Black",
							sample: "#000000",
							ratio: blackRatio,
							ink: "#FFFFFF"
						})]
					})
				]
			})
		]
	});
}
function SourceFrame({ palette }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!palette) return null;
	const src = paletteStill(palette);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "relative h-11 w-16 shrink-0 overflow-hidden rounded-md bg-secondary shadow-[var(--shadow-border)]",
		"aria-label": `Source post for ${palette.name}`,
		title: palette.origin,
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: "animate-value-in h-full w-full object-contain outline outline-1 -outline-offset-1 outline-foreground/15",
			referrerPolicy: "no-referrer"
		}, src) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-full w-full",
			children: palette.hexes.map((hex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-full flex-1",
				style: { backgroundColor: hex }
			}, hex))
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "w-[min(100%-2rem,28rem)] p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg bg-secondary shadow-[var(--shadow-border)]",
				children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `Post that inspired ${palette.name}`,
					className: "max-h-[60dvh] w-full object-contain outline outline-1 -outline-offset-1 outline-foreground/10",
					referrerPolicy: "no-referrer"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-40 w-full",
					children: palette.hexes.map((hex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-full flex-1",
						style: { backgroundColor: hex }
					}, hex))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "mt-4 mb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: palette.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"@",
						palette.handle,
						" · ",
						palette.origin
					] }),
					palette.postUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: palette.postUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-2 inline-block text-sm underline underline-offset-4",
						children: "Open post"
					}) : null
				]
			})]
		})
	})] });
}
function TooltipProvider({ delayDuration = 200, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
var Tooltip = Root3;
var TooltipTrigger = Trigger;
function TooltipContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground", "animate-in fade-in-0 zoom-in-95", className),
		...props
	}) });
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 20 20",
		className: "size-5",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "3",
				width: "2.4",
				height: "14",
				rx: "0.6",
				fill: "currentColor",
				opacity: "0.28"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5.15",
				y: "3",
				width: "2.4",
				height: "14",
				rx: "0.6",
				fill: "currentColor",
				opacity: "0.48"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9.3",
				y: "3",
				width: "2.4",
				height: "14",
				rx: "0.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "13.45",
				y: "3",
				width: "2.4",
				height: "14",
				rx: "0.6",
				fill: "currentColor",
				opacity: "0.62"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "17.6",
				y: "3",
				width: "1.4",
				height: "14",
				rx: "0.6",
				fill: "currentColor",
				opacity: "0.38"
			})
		]
	});
}
function Toolbar({ sourceLabel, source, canUndo, canRedo, shuffling, onShuffle, onUndo, onRedo, onExport, onFeed, onShortcuts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background px-3 sm:h-16 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceFrame, { palette: source }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-none font-medium tracking-tight italic sm:text-xl",
						children: "Huecast"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 hidden truncate text-xs text-muted-foreground sm:block",
						children: sourceLabel
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ml-auto flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: onUndo,
						disabled: !canUndo,
						"aria-label": "Undo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Undo" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: onRedo,
						disabled: !canRedo,
						"aria-label": "Redo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Redo" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: onFeed,
						"aria-label": "Open feed",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Feed" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: onShortcuts,
						"aria-label": "Keyboard shortcuts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Shortcuts" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon-sm",
					onClick: onExport,
					className: "sm:hidden",
					"aria-label": "Export CSS",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: onExport,
					className: "hidden sm:inline-flex",
					children: "Export"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onShuffle,
					size: "sm",
					className: "sm:min-w-24",
					"aria-label": "Shuffle palette",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: shuffling ? "animate-spin" : void 0 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Shuffle"
					})]
				})
			]
		})]
	});
}
var STALE_MS = 12e5;
function PaletteApp() {
	const swatches = usePalette((s) => s.swatches);
	const meta = usePalette((s) => s.meta);
	const focused = usePalette((s) => s.focused);
	const history = usePalette((s) => s.history);
	const future = usePalette((s) => s.future);
	const live = usePalette((s) => s.live);
	const shuffle = usePalette((s) => s.shuffle);
	const toggleLock = usePalette((s) => s.toggleLock);
	const setHex = usePalette((s) => s.setHex);
	const setFocused = usePalette((s) => s.setFocused);
	const applyFeed = usePalette((s) => s.applyFeed);
	const undo = usePalette((s) => s.undo);
	const redo = usePalette((s) => s.redo);
	const setLive = usePalette((s) => s.setLive);
	const [exportOpen, setExportOpen] = (0, import_react.useState)(false);
	const [feedOpen, setFeedOpen] = (0, import_react.useState)(false);
	const [helpOpen, setHelpOpen] = (0, import_react.useState)(false);
	const [shuffling, setShuffling] = (0, import_react.useState)(false);
	const [searching, setSearching] = (0, import_react.useState)(false);
	const inflight = (0, import_react.useRef)(null);
	const refresh = (0, import_react.useCallback)((force) => {
		if (inflight.current) return inflight.current;
		const run = (async () => {
			setSearching(true);
			try {
				const state = usePalette.getState();
				const res = await fetchLivePalettes({ data: {
					force,
					excludeIds: state.live.map((pal) => pal.id.replace(/^live-/, "")).filter((id) => /^\d+$/.test(id)),
					excludeHandles: [...new Set(state.live.map((pal) => pal.handle))]
				} });
				const prev = usePalette.getState().live;
				const seen = new Set(prev.map((pal) => pal.id));
				const novel = res.palettes.filter((pal) => !seen.has(pal.id));
				if (novel.length) {
					setLive([...novel, ...prev].slice(0, 24), res.fetchedAt);
					toast(`${novel.length} new posts`, { duration: 1400 });
				} else if (force && res.error) toast("Couldn't search X — using saved palettes", { duration: 1800 });
				else if (force) toast("No new posts this pass", { duration: 1600 });
			} catch {
				if (force) toast("Couldn't search X — using saved palettes", { duration: 1800 });
			} finally {
				setSearching(false);
				inflight.current = null;
			}
		})();
		inflight.current = run;
		return run;
	}, [setLive]);
	(0, import_react.useEffect)(() => {
		const state = usePalette.getState();
		if (!(Date.now() - state.fetchedAt > STALE_MS) && state.live.length) return;
		refresh(false);
	}, [refresh]);
	const onShuffle = (0, import_react.useCallback)(() => {
		if (!shuffle()) {
			toast("Unlock a color to shuffle", { duration: 1400 });
			return;
		}
		setShuffling(true);
		window.setTimeout(() => setShuffling(false), 280);
		if (Date.now() - usePalette.getState().fetchedAt > STALE_MS) refresh(false);
	}, [refresh, shuffle]);
	usePaletteHotkeys({
		openExport: () => setExportOpen(true),
		openFeed: () => setFeedOpen(true),
		openShortcuts: () => setHelpOpen(true),
		onShuffle
	});
	const catalog = [...live, ...FEED.filter((p) => !live.some((item) => item.id === p.id))];
	const source = catalog.find((p) => p.id === meta.feedId);
	const sourceLabel = meta.handle ? `${meta.name} · @${meta.handle}` : meta.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-dvh min-h-0 flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {
					sourceLabel,
					source,
					canUndo: history.length > 0,
					canRedo: future.length > 0,
					shuffling,
					onShuffle,
					onUndo: undo,
					onRedo: redo,
					onExport: () => setExportOpen(true),
					onFeed: () => setFeedOpen(true),
					onShortcuts: () => setHelpOpen(true)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "grid min-h-0 flex-1 grid-rows-5 overflow-hidden md:grid-cols-5 md:grid-rows-1",
					children: swatches.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchColumn, {
						index: i,
						hex: s.hex,
						locked: s.locked,
						focused: focused === i,
						onLock: () => {
							setFocused(i);
							toggleLock(i);
						},
						onFocus: () => setFocused(i),
						onPick: (hex) => setHex(i, hex)
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "hidden h-10 shrink-0 items-center justify-between border-t border-border px-5 text-xs text-muted-foreground sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shuffle draws from a live batch of posts on X" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono tracking-tight",
						children: "Space shuffle · 1–5 lock · click to copy · E export"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportDialog, {
			open: exportOpen,
			onOpenChange: setExportOpen,
			hexes: swatches.map((s) => s.hex),
			meta
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedDialog, {
			open: feedOpen,
			onOpenChange: setFeedOpen,
			palettes: catalog,
			activeId: meta.feedId,
			searching,
			onRefresh: () => void refresh(true),
			onPick: applyFeed
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutsDialog, {
			open: helpOpen,
			onOpenChange: setHelpOpen
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "light",
			position: "top-center",
			offset: 72,
			toastOptions: { classNames: {
				toast: "font-sans bg-card text-card-foreground border border-border shadow-[var(--shadow-border)]",
				title: "text-sm font-medium"
			} }
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaletteApp, {});
}
//#endregion
export { Home as component };
