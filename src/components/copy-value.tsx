import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn, copyText } from "@/lib/utils";

type CopyValueProps = {
  value: string;
  display?: string;
  label: string;
  className?: string;
  textClassName?: string;
  delay?: number;
};

export function CopyValue({
  value,
  display,
  label,
  className,
  textClassName,
  delay = 0,
}: CopyValueProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  const onCopy = () => {
    setCopied(true);
    toast.success(`${label} copied`, { duration: 1100 });
    void copyText(value);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 900);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      title={`Copy ${label}`}
      className={cn(
        "group relative flex h-8 w-full items-center justify-between gap-2 rounded-md bg-transparent px-1 text-left text-inherit transition-opacity duration-150 hover:opacity-80 active:scale-[0.98] sm:h-11",
        className,
      )}
    >
      <span
        key={`${value}-${copied ? "c" : "n"}`}
        className={cn(
          "min-w-0 truncate font-mono text-sm tracking-tight tabular-nums animate-value-in",
          textClassName,
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {display ?? value}
      </span>
      <span className="relative size-4 shrink-0 opacity-70">
        <Check
          className={cn(
            "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200",
            copied ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]",
          )}
          strokeWidth={2}
        />
        <Copy
          className={cn(
            "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200",
            copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0",
          )}
          strokeWidth={2}
        />
      </span>
    </button>
  );
}
