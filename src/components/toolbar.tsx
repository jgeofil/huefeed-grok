import { Download, Keyboard, Redo2, Shuffle, Undo2, Rss } from "lucide-react";
import type { FeedPalette } from "@/lib/feed";
import { SourceFrame } from "./source-frame";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ToolbarProps = {
  sourceLabel: string;
  source?: FeedPalette;
  canUndo: boolean;
  canRedo: boolean;
  shuffling: boolean;
  onShuffle: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onExport: () => void;
  onFeed: () => void;
  onShortcuts: () => void;
};

function Mark() {
  return (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden>
      <rect x="1" y="3" width="2.4" height="14" rx="0.6" fill="currentColor" opacity="0.28" />
      <rect x="5.15" y="3" width="2.4" height="14" rx="0.6" fill="currentColor" opacity="0.48" />
      <rect x="9.3" y="3" width="2.4" height="14" rx="0.6" fill="currentColor" />
      <rect x="13.45" y="3" width="2.4" height="14" rx="0.6" fill="currentColor" opacity="0.62" />
      <rect x="17.6" y="3" width="1.4" height="14" rx="0.6" fill="currentColor" opacity="0.38" />
    </svg>
  );
}

export function Toolbar({
  sourceLabel,
  source,
  canUndo,
  canRedo,
  shuffling,
  onShuffle,
  onUndo,
  onRedo,
  onExport,
  onFeed,
  onShortcuts,
}: ToolbarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background px-3 sm:h-16 sm:px-5">
      <div className="flex min-w-0 items-center gap-2.5">
        <Mark />
        <SourceFrame palette={source} />
        <div className="min-w-0">
          <p className="font-display text-lg leading-none font-medium tracking-tight italic sm:text-xl">
            Huecast
          </p>
          <p className="mt-0.5 hidden truncate text-xs text-muted-foreground sm:block">{sourceLabel}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" onClick={onUndo} disabled={!canUndo} aria-label="Undo">
              <Undo2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Undo</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" onClick={onRedo} disabled={!canRedo} aria-label="Redo">
              <Redo2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Redo</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" onClick={onFeed} aria-label="Open feed">
              <Rss />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Feed</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" onClick={onShortcuts} aria-label="Keyboard shortcuts">
              <Keyboard />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Shortcuts</TooltipContent>
        </Tooltip>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={onExport}
          className="sm:hidden"
          aria-label="Export CSS"
        >
          <Download />
        </Button>
        <Button variant="outline" size="sm" onClick={onExport} className="hidden sm:inline-flex">
          Export
        </Button>
        <Button onClick={onShuffle} size="sm" className="sm:min-w-24" aria-label="Shuffle palette">
          <Shuffle className={shuffling ? "animate-spin" : undefined} />
          <span className="hidden sm:inline">Shuffle</span>
        </Button>
      </div>
    </header>
  );
}
