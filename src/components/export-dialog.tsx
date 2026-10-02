import { useMemo, useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { paletteCss, paletteTheme } from "@/lib/export-css";
import type { CastMeta } from "@/lib/generate";
import { copyText } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type ExportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hexes: string[];
  meta: CastMeta;
};

export function ExportDialog({ open, onOpenChange, hexes, meta }: ExportDialogProps) {
  const [tab, setTab] = useState<"css" | "theme">("css");
  const [copied, setCopied] = useState(false);
  const css = useMemo(() => paletteCss(hexes, meta), [hexes, meta]);
  const theme = useMemo(() => paletteTheme(hexes), [hexes]);
  const body = tab === "css" ? css : theme;

  const copy = () => {
    setCopied(true);
    toast.success("CSS copied", { duration: 1100 });
    void copyText(body);
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export CSS variables</DialogTitle>
          <DialogDescription>
            Drop into a stylesheet or a Tailwind v4 <code className="font-mono">@theme</code> block.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-3 flex gap-1 rounded-lg bg-muted p-1">
          <button
            type="button"
            onClick={() => setTab("css")}
            className={`h-9 flex-1 rounded-md text-sm font-medium transition-colors ${
              tab === "css" ? "bg-card text-foreground" : "text-muted-foreground"
            }`}
          >
            :root
          </button>
          <button
            type="button"
            onClick={() => setTab("theme")}
            className={`h-9 flex-1 rounded-md text-sm font-medium transition-colors ${
              tab === "theme" ? "bg-card text-foreground" : "text-muted-foreground"
            }`}
          >
            @theme
          </button>
        </div>

        <pre className="max-h-72 overflow-auto rounded-lg bg-foreground p-4 font-mono text-xs leading-relaxed text-background">
          {body}
        </pre>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={copy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            Copy
          </Button>
          <Button variant="secondary" onClick={download}>
            <Download className="size-4" />
            Download .css
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
