import { Globe2, Sun, Plane, Palmtree, LineChart } from "lucide-react";
import teide from "@/assets/teide.webp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const REASONS = [
  {
    icon: Globe2,
    title: "International appeal",
    text: "A European destination with global reach, welcoming residents, buyers and businesses from around the world.",
  },
  {
    icon: Sun,
    title: "Year-round climate",
    text: "Known as the island of eternal spring, with mild temperatures that sustain demand in every season.",
  },
  {
    icon: Plane,
    title: "Thriving tourism",
    text: "Millions of visitors each year, two international airports and a mature hospitality sector.",
  },
  {
    icon: Palmtree,
    title: "Exceptional lifestyle",
    text: "Atlantic coastline, Mount Teide, gastronomy, safety and an outdoor way of life that attracts long-term residents.",
  },
  {
    icon: LineChart,
    title: "Diverse landscape",
    text: "Residential, commercial, development and business opportunities across a varied and resilient market.",
  },
];

export function WhyTenerife() {
  return (
    <section id="why-tenerife" className="relative overflow-hidden bg-navy-deep text-navy-foreground">
      <img
        src={teide}
        alt="Mount Teide rising above the clouds at sunrise"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-band-overlay absolute inset-0" />

      <div className="container-lux relative py-24 sm:py-32 lg:py-40">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Why Tenerife?"
            title={
              <>
                An island built for
                <br />
                <em className="text-gold-soft">long-term value.</em>
              </>
            }
            intro="Tenerife combines the stability of Spain and the European Union with a climate, lifestyle and visitor economy few places can match."
          />
        </Reveal>

        <div className="mt-16 grid gap-px bg-line-light sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 100} className="bg-navy-deep/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-navy-deep/90">
              <r.icon className="h-6 w-6 text-gold" strokeWidth={1.3} />
              <h3 className="mt-8 text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
