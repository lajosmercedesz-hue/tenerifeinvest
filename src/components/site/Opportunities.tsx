import { ArrowUpRight } from "lucide-react";
import residential from "@/assets/residential.webp";
import commercial from "@/assets/commercial.webp";
import development from "@/assets/development.webp";
import business from "@/assets/business.webp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CATEGORIES = [
  {
    n: "01",
    title: "Residential Real Estate",
    text: "Contemporary villas, apartments and prime coastal homes with strong rental and capital growth potential.",
    img: residential,
    alt: "Modern villa with infinity pool overlooking the Atlantic",
  },
  {
    n: "02",
    title: "Commercial Properties",
    text: "Retail, office and mixed-use assets in established locations with dependable, year-round demand.",
    img: commercial,
    alt: "Modern commercial building on a palm-lined seafront",
  },
  {
    n: "03",
    title: "Development Projects",
    text: "Land and off-plan projects, from planning and design through construction, with trusted local partners.",
    img: development,
    alt: "Hillside residential development under construction with ocean views",
  },
  {
    n: "04",
    title: "Business Investment",
    text: "Established hospitality, tourism and service businesses ready for acquisition or strategic partnership.",
    img: business,
    alt: "Elegant restaurant terrace overlooking the ocean at dusk",
  },
];

export function Opportunities() {
  return (
    <section id="opportunities" className="bg-sand py-24 sm:py-32 lg:py-40">
      <div className="container-lux">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Investment Opportunities"
              title={
                <>
                  Curated opportunities
                  <br />
                  across <em className="text-gold">four sectors.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={150} className="max-w-md">
            <p className="leading-relaxed text-muted-foreground">
              Every opportunity we present is assessed on location, fundamentals and long-term potential — and
              introduced with the local insight you need to make an informed decision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.n} delay={i * 120}>
              <a
                href="#contact"
                className="group relative block aspect-[3/4.4] overflow-hidden bg-navy-deep shadow-elegant"
              >
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                />
                <div className="bg-card-overlay absolute inset-0" />
                <div className="bg-card-top absolute inset-x-0 top-0 h-28" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="font-display text-2xl text-gold-soft">{c.n}</span>
                  <span className="flex h-10 w-10 items-center justify-center border border-line-light text-navy-foreground transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="text-3xl leading-tight text-navy-foreground">{c.title}</h3>
                  <span className="mt-4 block h-px w-10 bg-gold transition-all duration-700 group-hover:w-full" />
                  <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80">{c.text}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
