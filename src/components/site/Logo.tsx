import { cn } from "@/lib/utils";

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <a href="#top" aria-label="Tenerife Investment — back to top" className={cn("group flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="var(--gold)" strokeWidth="1" />
        <path d="M8 29 L20 11 L32 29" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
        <path d="M15.5 22.5 L20 17 L24.5 22.5" fill="none" stroke="var(--gold)" strokeWidth="1" />
        <line x1="6" y1="32" x2="34" y2="32" stroke="var(--gold)" strokeWidth="1" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl tracking-[0.22em]",
            tone === "light" ? "text-navy-foreground" : "text-navy",
          )}
        >
          TENERIFE
        </span>
        <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.5em] text-gold">INVESTMENT</span>
      </span>
    </a>
  );
}
