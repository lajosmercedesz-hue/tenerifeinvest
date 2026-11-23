import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PILLARS = [
  {
    n: "01",
    title: "In-depth local knowledge",
    text: "Fourteen years on the island give us a clear view of every municipality, market cycle and regulation that shapes a sound investment.",
  },
  {
    n: "02",
    title: "An established network",
    text: "Long-standing relationships with architects, lawyers, translators and property specialists — professionals we work with and trust.",
  },
  {
    n: "03",
    title: "Guidance at every step",
    text: "From the first conversation to completion and beyond, we act as your single, dependable point of contact on the ground.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="container-lux grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Us"
            title={
              <>
                Local Expertise.
                <br />
                <em className="text-gold">Global Opportunities.</em>
              </>
            }
          />
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Tenerife Investment is an experienced local investment partner with more than fourteen years of
              presence on the island. We identify and present carefully selected opportunities across Tenerife —
              and give international investors the clarity, connections and confidence to act on them.
            </p>
            <p>
              Our mission is simple: to connect investors with promising opportunities, and to provide the local
              knowledge, professional network and personal guidance that turn an interesting prospect into a
              well-executed investment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="relative h-full border border-border bg-sand p-10 sm:p-12">
            <span className="absolute -top-px left-10 h-px w-24 bg-gold" />
            <p className="font-display text-[7rem] leading-none text-navy sm:text-[9rem]">
              14<span className="text-gold">+</span>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-navy">
              Years of experience in Tenerife
            </p>
            <p className="mt-8 font-display text-2xl italic leading-snug text-navy/80">
              “We don't just find opportunities — we know the people, places and processes that make them work.”
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container-lux mt-20 sm:mt-28">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={i * 120} className="bg-background p-10 lg:p-12">
            <p className="font-display text-xl text-gold">{p.n}</p>
            <h3 className="mt-6 text-3xl text-navy">{p.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  );
}
