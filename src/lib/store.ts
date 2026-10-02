import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FEED, type FeedPalette } from "./feed";
import { applyFeedPalette, generatePalette, type CastMeta } from "./generate";
import { normalizeHex } from "./color";

export type Swatch = {
  hex: string;
  locked: boolean;
};

type Snapshot = {
  swatches: Swatch[];
  meta: CastMeta;
};

type PaletteState = {
  swatches: Swatch[];
  meta: CastMeta;
  focused: number;
  history: Snapshot[];
  future: Snapshot[];
  ready: boolean;
  live: FeedPalette[];
  fetchedAt: number;
  setLive: (palettes: FeedPalette[], fetchedAt: number) => void;
  shuffle: () => boolean;
  toggleLock: (index: number) => void;
  setHex: (index: number, hex: string) => void;
  applyFeed: (id: string) => void;
  undo: () => void;
  redo: () => void;
  setFocused: (index: number) => void;
  hydrateDefault: () => void;
};

const OPENING = FEED[0]!;

function fromHexes(hexes: string[], locks?: boolean[]): Swatch[] {
  return hexes.map((hex, i) => ({
    hex,
    locked: locks?.[i] ?? false,
  }));
}

function snapshotOf(s: Pick<PaletteState, "swatches" | "meta">): Snapshot {
  return {
    swatches: s.swatches.map((x) => ({ ...x })),
    meta: { ...s.meta },
  };
}

function corpusOf(live: FeedPalette[]): FeedPalette[] {
  const fresh = live.filter((p) => p.hexes?.length === 5 && p.id);
  if (!fresh.length) return FEED;
  const ids = new Set(fresh.map((p) => p.id));
  return [...fresh, ...FEED.filter((p) => !ids.has(p.id))];
}

const openingMeta: CastMeta = {
  kind: "feed",
  name: OPENING.name,
  handle: OPENING.handle,
  feedId: OPENING.id,
};

export const usePalette = create<PaletteState>()(
  persist(
    (set, get) => ({
      swatches: fromHexes(OPENING.hexes),
      meta: openingMeta,
      focused: 0,
      history: [],
      future: [],
      ready: false,
      live: [],
      fetchedAt: 0,
      setLive: (palettes, fetchedAt) => set({ live: palettes, fetchedAt }),
      hydrateDefault: () => {
        if (get().ready) return;
        set({ ready: true });
      },
      shuffle: () => {
        const { swatches, live } = get();
        if (swatches.every((s) => s.locked)) return false;
        const next = generatePalette(
          swatches.map((s) => s.hex),
          swatches.map((s) => s.locked),
          corpusOf(live),
        );
        set((state) => ({
          history: [...state.history, snapshotOf(state)].slice(-40),
          future: [],
          swatches: fromHexes(
            next.hexes,
            state.swatches.map((s) => s.locked),
          ),
          meta: next.meta,
        }));
        return true;
      },
      toggleLock: (index) => {
        set((state) => ({
          swatches: state.swatches.map((s, i) =>
            i === index ? { ...s, locked: !s.locked } : s,
          ),
        }));
      },
      setHex: (index, hex) => {
        const n = normalizeHex(hex);
        if (!n) return;
        set((state) => ({
          history: [...state.history, snapshotOf(state)].slice(-40),
          future: [],
          swatches: state.swatches.map((s, i) =>
            i === index ? { hex: n, locked: true } : s,
          ),
        }));
      },
      applyFeed: (id) => {
        const pal = corpusOf(get().live).find((p) => p.id === id);
        if (!pal) return;
        const next = applyFeedPalette(pal);
        set((state) => ({
          history: [...state.history, snapshotOf(state)].slice(-40),
          future: [],
          swatches: fromHexes(
            next.hexes,
            state.swatches.map((s) => s.locked),
          ).map((s, i) =>
            state.swatches[i]?.locked
              ? { hex: state.swatches[i]!.hex, locked: true }
              : s,
          ),
          meta: next.meta,
        }));
      },
      undo: () => {
        const { history } = get();
        if (history.length === 0) return;
        const prev = history[history.length - 1]!;
        set((state) => ({
          history: state.history.slice(0, -1),
          future: [snapshotOf(state), ...state.future].slice(0, 40),
          swatches: prev.swatches,
          meta: prev.meta,
        }));
      },
      redo: () => {
        const { future } = get();
        if (future.length === 0) return;
        const next = future[0]!;
        set((state) => ({
          future: state.future.slice(1),
          history: [...state.history, snapshotOf(state)].slice(-40),
          swatches: next.swatches,
          meta: next.meta,
        }));
      },
      setFocused: (index) => set({ focused: index }),
    }),
    {
      name: "huecast-palette",
      partialize: (s) => ({
        swatches: s.swatches,
        meta: s.meta,
        live: s.live,
        fetchedAt: s.fetchedAt,
      }),
    },
  ),
);
