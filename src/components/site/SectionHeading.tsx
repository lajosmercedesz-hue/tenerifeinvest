import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p className={cn("eyebrow flex items-center gap-4", align === "center" && "justify-center")}>
        <span className="gold-rule" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-navy" : "text-navy-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-navy-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
