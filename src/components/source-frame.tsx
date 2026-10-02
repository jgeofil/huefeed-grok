import { useState } from "react";
import { paletteStill, type FeedPalette } from "@/lib/feed";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type SourceFrameProps = {
  palette?: FeedPalette;
};

export function SourceFrame({ palette }: SourceFrameProps) {
  const [open, setOpen] = useState(false);
  if (!palette) return null;
  const src = paletteStill(palette);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-11 w-16 shrink-0 overflow-hidden rounded-md bg-secondary shadow-[var(--shadow-border)]"
        aria-label={`Source post for ${palette.name}`}
        title={palette.origin}
      >
        {src ? (
          <img
            key={src}
            src={src}
            alt=""
            className="animate-value-in h-full w-full object-contain outline outline-1 -outline-offset-1 outline-foreground/15"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="flex h-full w-full">
            {palette.hexes.map((hex) => (
              <span key={hex} className="h-full flex-1" style={{ backgroundColor: hex }} />
            ))}
          </span>
        )}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[min(100%-2rem,28rem)] p-4">
          <div className="overflow-hidden rounded-lg bg-secondary shadow-[var(--shadow-border)]">
            {src ? (
              <img
                src={src}
                alt={`Post that inspired ${palette.name}`}
                className="max-h-[60dvh] w-full object-contain outline outline-1 -outline-offset-1 outline-foreground/10"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="flex h-40 w-full">
                {palette.hexes.map((hex) => (
                  <span key={hex} className="h-full flex-1" style={{ backgroundColor: hex }} />
                ))}
              </span>
            )}
          </div>
          <DialogHeader className="mt-4 mb-0">
            <DialogTitle>{palette.name}</DialogTitle>
            <DialogDescription>
              @{palette.handle} · {palette.origin}
            </DialogDescription>
            {palette.postUrl ? (
              <a
                href={palette.postUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm underline underline-offset-4"
              >
                Open post
              </a>
            ) : null}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
