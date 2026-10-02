import { paletteStill, type FeedPalette } from "@/lib/feed";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type FeedDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  palettes: FeedPalette[];
  activeId?: string;
  searching: boolean;
  onRefresh: () => void;
  onPick: (id: string) => void;
};

export function FeedDialog({
  open,
  onOpenChange,
  palettes,
  activeId,
  searching,
  onRefresh,
  onPick,
}: FeedDialogProps) {
  const live = palettes.filter((p) => p.live);
  const saved = palettes.filter((p) => !p.live);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(36rem,85dvh)] overflow-hidden p-0">
        <div className="p-6 pb-3">
          <DialogHeader>
            <DialogTitle>From the feed</DialogTitle>
            <DialogDescription>
              {searching
                ? "Searching recent posts on X…"
                : "Shuffle stays instant. Search looks across design, art, fashion, and interiors, and the next pass skips posts already listed."}
            </DialogDescription>
          </DialogHeader>
          <Button variant="outline" size="sm" onClick={onRefresh} disabled={searching}>
            {searching ? "Searching" : "Search again"}
          </Button>
        </div>
        <ul className="max-h-[min(24rem,55dvh)] overflow-auto px-3 pb-4">
          {live.length > 0 ? <Section label="New posts" /> : null}
          {live.map((pal) => (
            <Row
              key={pal.id}
              pal={pal}
              active={pal.id === activeId}
              onPick={() => {
                onPick(pal.id);
                onOpenChange(false);
              }}
            />
          ))}
          <Section label="Saved" />
          {saved.map((pal) => (
            <Row
              key={pal.id}
              pal={pal}
              active={pal.id === activeId}
              onPick={() => {
                onPick(pal.id);
                onOpenChange(false);
              }}
            />
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

function Section({ label }: { label: string }) {
  return (
    <li className="px-3 pt-2 pb-1 text-[11px] tracking-wide text-muted-foreground uppercase">
      {label}
    </li>
  );
}

function Row({
  pal,
  active,
  onPick,
}: {
  pal: FeedPalette;
  active: boolean;
  onPick: () => void;
}) {
  const still = paletteStill(pal);
  return (
    <li>
      <button
        type="button"
        onClick={onPick}
        className={`flex w-full flex-col gap-2 rounded-lg px-3 py-3 text-left transition-colors ${
          active ? "bg-accent" : "hover:bg-muted"
        }`}
      >
        <span className="flex items-center gap-2">
          {still ? (
            <img
              src={still}
              alt=""
              referrerPolicy="no-referrer"
              className="h-10 w-14 shrink-0 rounded-md object-cover shadow-[var(--shadow-border)]"
            />
          ) : null}
          <span className="flex h-8 min-w-0 flex-1 overflow-hidden rounded-md">
            {pal.hexes.map((hex) => (
              <span key={hex} className="h-full flex-1" style={{ backgroundColor: hex }} />
            ))}
          </span>
        </span>
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-sm font-medium">{pal.name}</span>
          <span className="font-mono text-xs text-muted-foreground">@{pal.handle}</span>
        </span>
        <span className="text-xs leading-snug text-muted-foreground">{pal.origin}</span>
      </button>
    </li>
  );
}
