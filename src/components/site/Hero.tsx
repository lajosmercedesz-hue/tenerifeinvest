import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-coast.webp";

const STATS = [
  { value: "14+", label: "Years on the island" },
  { value: "4", label: "Investment sectors" },
  { value: "1", label: "Trusted point of contact" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="The cliffs of Los Gigantes on Tenerife's coastline at golden hour"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="bg-hero-bottom absolute inset-0" />

      <div className="container-lux relative z-10 flex flex-1 flex-col justify-center pb-16 pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up flex items-center gap-4">
            <span className="gold-rule" />
            Tenerife · Canary Islands · Spain
          </p>
          <h1
            className="animate-fade-up mt-8 text-6xl leading-[0.95] text-navy-foreground sm:text-7xl lg:text-[7.5rem]"
            style={{ animationDelay: "150ms" }}
          >
            Discover.
            <br />
            Invest. <em className="text-gold-soft">Grow.</em>
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-xl text-lg font-light leading-relaxed text-navy-foreground/85 sm:text-xl"
            style={{ animationDelay: "300ms" }}
          >
            Your local partner for investment opportunities in Tenerife.
          </p>
          <div
            className="animate-fade-up mt-12 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "450ms" }}
          >
            <a href="#opportunities" className="btn-lux btn-gold group">
              Explore Opportunities
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-lux btn-ghost-light">
              Speak to an Advisor
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-line-light">
        <div className="container-lux grid grid-cols-3 divide-x divide-line-light">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-6 first:pl-0 sm:px-8 sm:py-8">
              <p className="font-display text-3xl text-gold-soft sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-navy-foreground/70 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-32 right-10 z-10 hidden flex-col items-center gap-3 text-navy-foreground/60 transition-colors hover:text-gold-soft lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] [writing-mode:vertical-rl]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
