import { useCallback, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { FEED, type FeedPalette } from "@/lib/feed";
import { fetchLivePalettes } from "@/lib/live-feed";
import { usePaletteHotkeys } from "@/hooks/use-palette-hotkeys";
import { usePalette } from "@/lib/store";
import { ExportDialog } from "./export-dialog";
import { FeedDialog } from "./feed-dialog";
import { ShortcutsDialog } from "./shortcuts-dialog";
import { SwatchColumn } from "./swatch-column";
import { Toolbar } from "./toolbar";
import { TooltipProvider } from "./ui/tooltip";

const STALE_MS = 20 * 60 * 1000;

export function PaletteApp() {
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

  const [exportOpen, setExportOpen] = useState(false);
  const [feedOpen, setFeedOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [shuffling, setShuffling] = useState(false);
  const [searching, setSearching] = useState(false);
  const inflight = useRef<Promise<void> | null>(null);

  const refresh = useCallback((force: boolean) => {
    if (inflight.current) return inflight.current;
    const run = (async () => {
      setSearching(true);
      try {
        const res = await fetchLivePalettes({ data: { force } });
        if (res.palettes.length) {
          setLive(res.palettes, res.fetchedAt);
          if (res.fresh) toast(`${res.palettes.length} new posts`, { duration: 1400 });
        }
        if (force && res.error && !res.fresh) {
          toast("Couldn't search X — using saved palettes", { duration: 1800 });
        }
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

  useEffect(() => {
    const state = usePalette.getState();
    const stale = Date.now() - state.fetchedAt > STALE_MS;
    if (!stale && state.live.length) return;
    void refresh(false);
  }, [refresh]);

  const onShuffle = useCallback(() => {
    const ok = shuffle();
    if (!ok) {
      toast("Unlock a color to shuffle", { duration: 1400 });
      return;
    }
    setShuffling(true);
    window.setTimeout(() => setShuffling(false), 280);
    if (Date.now() - usePalette.getState().fetchedAt > STALE_MS) void refresh(false);
  }, [refresh, shuffle]);

  usePaletteHotkeys({
    openExport: () => setExportOpen(true),
    openFeed: () => setFeedOpen(true),
    openShortcuts: () => setHelpOpen(true),
    onShuffle,
  });

  const catalog: FeedPalette[] = [
    ...live,
    ...FEED.filter((p) => !live.some((item) => item.id === p.id)),
  ];
  const source = catalog.find((p) => p.id === meta.feedId);
  const sourceLabel = meta.handle ? `${meta.name} · @${meta.handle}` : meta.name;

  return (
    <TooltipProvider>
      <div className="flex h-dvh min-h-0 flex-col bg-background text-foreground">
        <Toolbar
          sourceLabel={sourceLabel}
          source={source}
          canUndo={history.length > 0}
          canRedo={future.length > 0}
          shuffling={shuffling}
          onShuffle={onShuffle}
          onUndo={undo}
          onRedo={redo}
          onExport={() => setExportOpen(true)}
          onFeed={() => setFeedOpen(true)}
          onShortcuts={() => setHelpOpen(true)}
        />

        <main className="grid min-h-0 flex-1 grid-rows-5 overflow-hidden md:grid-cols-5 md:grid-rows-1">
          {swatches.map((s, i) => (
            <SwatchColumn
              key={i}
              index={i}
              hex={s.hex}
              locked={s.locked}
              focused={focused === i}
              onLock={() => {
                setFocused(i);
                toggleLock(i);
              }}
              onFocus={() => setFocused(i)}
              onPick={(hex) => setHex(i, hex)}
            />
          ))}
        </main>

        <footer className="hidden h-10 shrink-0 items-center justify-between border-t border-border px-5 text-xs text-muted-foreground sm:flex">
          <p>Shuffle draws from a live batch of posts on X</p>
          <p className="font-mono tracking-tight">
            Space shuffle · 1–5 lock · click to copy · E export
          </p>
        </footer>
      </div>

      <ExportDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        hexes={swatches.map((s) => s.hex)}
        meta={meta}
      />
      <FeedDialog
        open={feedOpen}
        onOpenChange={setFeedOpen}
        palettes={catalog}
        activeId={meta.feedId}
        searching={searching}
        onRefresh={() => void refresh(true)}
        onPick={applyFeed}
      />
      <ShortcutsDialog open={helpOpen} onOpenChange={setHelpOpen} />
      <Toaster
        theme="light"
        position="top-center"
        offset={72}
        toastOptions={{
          classNames: {
            toast:
              "font-sans bg-card text-card-foreground border border-border shadow-[var(--shadow-border)]",
            title: "text-sm font-medium",
          },
        }}
      />
    </TooltipProvider>
  );
}
