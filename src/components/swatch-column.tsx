import { Lock, LockOpen, Pipette } from "lucide-react";
import { contrastAgainst, formatHsl, formatRgb, inkOn, wcagLevel } from "@/lib/color";
import { cn } from "@/lib/utils";
import { CopyValue } from "./copy-value";

type SwatchColumnProps = {
  hex: string;
  locked: boolean;
  index: number;
  focused: boolean;
  onLock: () => void;
  onFocus: () => void;
  onPick: (hex: string) => void;
};

function ContrastRow({
  label,
  sample,
  ratio,
  ink,
}: {
  label: string;
  sample: string;
  ratio: number;
  ink: string;
}) {
  const body = wcagLevel(ratio, false);
  const large = wcagLevel(ratio, true);
  return (
    <div className="flex min-w-0 flex-1 items-center justify-between gap-1.5 text-xs leading-none sm:flex-none">
      <span className="flex items-center gap-1.5">
        <span
          className="flex size-6 items-center justify-center rounded-sm font-display text-xs font-medium"
          style={{ backgroundColor: sample, color: ink }}
          aria-hidden
        >
          Aa
        </span>
        <span className="hidden opacity-80 sm:inline">{label}</span>
      </span>
      <span className="flex items-center gap-1.5 font-mono tabular-nums">
        <span>{ratio.toFixed(1)}</span>
        <span className={cn("uppercase tracking-wide", body === "fail" ? "opacity-50" : "opacity-90")}>
          {body === "fail" ? (large === "fail" ? "—" : `L ${large}`) : body}
        </span>
      </span>
    </div>
  );
}

export function SwatchColumn({
  hex,
  locked,
  index,
  focused,
  onLock,
  onFocus,
  onPick,
}: SwatchColumnProps) {
  const ink = inkOn(hex);
  const whiteRatio = contrastAgainst(hex, "#FFFFFF");
  const blackRatio = contrastAgainst(hex, "#000000");
  const rgb = formatRgb(hex);
  const hsl = formatHsl(hex);
  const pickerId = `swatch-picker-${index}`;

  return (
    <section
      role="group"
      aria-label={`Swatch ${index + 1} ${hex}`}
      tabIndex={0}
      onFocus={onFocus}
      onClick={onFocus}
      className={cn(
        "relative flex min-h-0 min-w-0 flex-col justify-end overflow-hidden outline-none",
        "px-3 pt-12 pb-3 sm:px-5 sm:pt-14 sm:pb-8",
      )}
      style={{ backgroundColor: hex, color: ink }}
    >
      {focused ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-2 ring-inset"
          style={{ boxShadow: `inset 0 0 0 2px ${ink}` }}
        />
      ) : null}

      <div className="absolute top-3 right-3 flex items-center gap-1 sm:top-4 sm:right-4">
        <label
          htmlFor={pickerId}
          className="relative flex size-11 items-center justify-center rounded-md bg-transparent text-inherit opacity-80 transition-opacity hover:opacity-100"
          title="Pick color"
        >
          <Pipette className="size-4" strokeWidth={1.75} />
          <input
            id={pickerId}
            type="color"
            value={hex}
            onChange={(e) => onPick(e.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-label={`Pick color for swatch ${index + 1}`}
          />
        </label>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onLock();
          }}
          className="relative flex size-11 items-center justify-center rounded-md bg-transparent text-inherit opacity-80 transition-opacity hover:opacity-100"
          aria-pressed={locked}
          aria-label={locked ? `Unlock swatch ${index + 1}` : `Lock swatch ${index + 1}`}
          title={`${locked ? "Unlock" : "Lock"} · ${index + 1}`}
        >
          <span className="relative size-4">
            <Lock
              className={cn(
                "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200",
                locked ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
              strokeWidth={1.75}
            />
            <LockOpen
              className={cn(
                "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200",
                locked ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0",
              )}
              strokeWidth={1.75}
            />
          </span>
        </button>
      </div>

      <div className="flex min-h-0 flex-col gap-0.5 sm:gap-3">
        <CopyValue
          value={hex}
          label="Hex"
          delay={index * 40}
          textClassName="font-mono text-lg font-medium tracking-tight sm:text-2xl"
        />
        <CopyValue value={rgb} label="RGB" delay={index * 40 + 20} />
        <CopyValue value={hsl} label="HSL" delay={index * 40 + 40} />

        <div className="mt-1 flex items-center gap-3 opacity-90 sm:flex-col sm:items-stretch sm:gap-2">
          <ContrastRow label="White" sample="#FFFFFF" ratio={whiteRatio} ink="#000000" />
          <ContrastRow label="Black" sample="#000000" ratio={blackRatio} ink="#FFFFFF" />
        </div>
      </div>
    </section>
  );
}
