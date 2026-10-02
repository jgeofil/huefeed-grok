import { useEffect } from "react";
import { toast } from "sonner";
import { formatHsl, formatRgb } from "@/lib/color";
import { usePalette } from "@/lib/store";
import { copyText } from "@/lib/utils";

function isTypingTarget(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  return el.isContentEditable;
}

type HotkeyOpts = {
  openExport: () => void;
  openFeed: () => void;
  openShortcuts: () => void;
  onShuffle: () => void;
};

export function usePaletteHotkeys({
  openExport,
  openFeed,
  openShortcuts,
  onShuffle,
}: HotkeyOpts) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;
      if (document.querySelector('[role="dialog"]')) return;
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

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
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
          const all = swatches.map((s) => s.hex).join(", ");
          void copyText(all);
          toast.success("Palette copied", { duration: 1100 });
        } else if (hex) {
          void copyText(hex);
          toast.success("Hex copied", { duration: 1100 });
        }
        return;
      }

      if (e.key.toLowerCase() === "r" && !meta && hex) {
        e.preventDefault();
        void copyText(formatRgb(hex));
        toast.success("RGB copied", { duration: 1100 });
        return;
      }

      if (e.key.toLowerCase() === "h" && !meta && hex) {
        e.preventDefault();
        void copyText(formatHsl(hex));
        toast.success("HSL copied", { duration: 1100 });
      }
    };

    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [openExport, openFeed, openShortcuts, onShuffle]);
}
