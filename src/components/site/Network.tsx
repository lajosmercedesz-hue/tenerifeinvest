import { Building2, Compass, Languages, Scale, Landmark } from "lucide-react";
import networkImg from "@/assets/network.webp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PROFESSIONALS = [
  { icon: Compass, title: "Architects", text: "Design, planning feasibility and renovation expertise." },
  { icon: Scale, title: "Lawyers", text: "Due diligence, contracts, structuring and residency matters." },
  { icon: Languages, title: "Translators", text: "Clear communication in your language at every stage." },
  { icon: Building2, title: "Property Experts", text: "Valuation, market analysis and property management." },
  { icon: Landmark, title: "Other Specialists", text: "Tax advisors, notaries, banks and construction partners." },
];

const STEPS = [
  { n: "01", title: "Consultation", text: "We understand your goals, budget and timeline." },
  { n: "02", title: "Selection", text: "We identify and present opportunities that fit." },
  { n: "03", title: "Due Diligence", text: "Our network verifies every legal and technical detail." },
  { n: "04", title: "Completion & Beyond", text: "We guide the acquisition and support you after." },
];

export function Network() {
  return (
    <section id="network" className="relative overflow-hidden bg-navy py-24 text-navy-foreground sm:py-32 lg:py-40">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={networkImg}
              alt="Architectural plans and a villa model on a desk overlooking the ocean"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 border border-gold bg-navy-deep p-6 sm:-right-8 sm:p-8">
            <p className="font-display text-4xl text-gold-soft sm:text-5xl">One</p>
            <p className="mt-1 max-w-[12rem] text-xs uppercase tracking-[0.2em] text-navy-muted">
              Point of contact for your entire team
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Our Network"
              title={
                <>
                  A trusted team of
                  <br />
                  <em className="text-gold-soft">local professionals.</em>
                </>
              }
              intro="Investing abroad is only as secure as the people around you. We connect every client with a hand-picked network of professionals we have worked alongside for years — coordinated by us, aligned with your interests."
            />
          </Reveal>
          <ul className="mt-12 divide-y divide-line-light border-y border-line-light">
            {PROFESSIONALS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="group flex items-start gap-5 py-5">
                  <p.icon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="whitespace-nowrap text-2xl transition-colors group-hover:text-gold-soft">{p.title}</h3>
                    <p className="text-sm text-navy-muted sm:text-right">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-lux mt-24 lg:mt-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-4">
            <span className="gold-rule" />
            How we work
          </p>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="lg:border-l lg:border-line-light lg:px-8 lg:first:border-l-0 lg:first:pl-0">
              <p className="font-display text-5xl text-gold/70">{s.n}</p>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
