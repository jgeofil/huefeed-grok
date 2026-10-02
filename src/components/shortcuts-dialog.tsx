import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const ROWS: { keys: string; action: string }[] = [
  { keys: "Space", action: "Shuffle unlocked colors" },
  { keys: "1 – 5", action: "Lock or unlock a swatch" },
  { keys: "← →", action: "Move focus between swatches" },
  { keys: "C", action: "Copy focused hex" },
  { keys: "R", action: "Copy focused RGB" },
  { keys: "H", action: "Copy focused HSL" },
  { keys: "Shift + C", action: "Copy all five hexes" },
  { keys: "E", action: "Export CSS variables" },
  { keys: "F", action: "Open the design feed" },
  { keys: "L", action: "Lock focused swatch" },
  { keys: "⌘ Z / Ctrl Z", action: "Undo" },
  { keys: "⌘ ⇧ Z / Ctrl Y", action: "Redo" },
  { keys: "?", action: "This list" },
];

type ShortcutsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ShortcutsDialog({ open, onOpenChange }: ShortcutsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard</DialogTitle>
          <DialogDescription>Built to feel like a design tool, not a form.</DialogDescription>
        </DialogHeader>
        <ul className="divide-y divide-border">
          {ROWS.map((row) => (
            <li key={row.keys} className="flex items-baseline justify-between gap-4 py-2.5">
              <span className="font-mono text-xs tracking-tight text-muted-foreground">{row.keys}</span>
              <span className="text-sm">{row.action}</span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
