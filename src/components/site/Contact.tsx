import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  buildEnquiryMailto,
  emailUrl,
  enquirySchema,
  whatsappUrl,
  type Enquiry,
} from "@/lib/contact";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Errors = Partial<Record<keyof Enquiry, string>>;

const EMPTY: Enquiry = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<Enquiry>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Enquiry) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Enquiry;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    window.location.href = buildEnquiryMailto(result.data);
    setSent(true);
  };

  return (
    <section id="contact" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="container-lux grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let's Explore Your
                  <br />
                  <em className="text-gold">Next Investment.</em>
                </>
              }
              intro="Tell us what you are looking for. We'll respond personally with an initial view of the opportunities that match your goals."
            />
          </Reveal>

          <Reveal delay={150} className="mt-12 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={whatsappUrl("Hello Tenerife Investment, I'd like to discuss an investment opportunity.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux btn-navy"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={emailUrl("Investment enquiry")} className="btn-lux btn-outline-navy">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </Reveal>

          <Reveal delay={250}>
            <dl className="mt-12 space-y-6 border-t border-border pt-10">
              <div className="flex gap-4">
                <Mail className="mt-1 h-4 w-4 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
                  <dd className="mt-1">
                    <a href={emailUrl()} className="link-underline text-navy">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="mt-1 h-4 w-4 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</dt>
                  <dd className="mt-1">
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-underline text-navy">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-4 w-4 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Based in</dt>
                  <dd className="mt-1 text-navy">Tenerife, Canary Islands, Spain</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative border border-border bg-card p-8 shadow-elegant sm:p-12"
            aria-label="Investment enquiry form"
          >
            <span className="absolute -top-px left-12 h-px w-24 bg-gold" />
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              <Field label="Full name" error={errors.name} htmlFor="name">
                <input id="name" name="name" autoComplete="name" maxLength={100} value={values.name} onChange={update("name")} placeholder="Your name" className="field-lux" />
              </Field>
              <Field label="Email" error={errors.email} htmlFor="email">
                <input id="email" name="email" type="email" autoComplete="email" maxLength={255} value={values.email} onChange={update("email")} placeholder="you@company.com" className="field-lux" />
              </Field>
              <Field label="Telephone" error={errors.phone} htmlFor="phone" className="sm:col-span-2">
                <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} value={values.phone} onChange={update("phone")} placeholder="+44 20 0000 0000" className="field-lux" />
              </Field>
              <Field label="Message" error={errors.message} htmlFor="message" className="sm:col-span-2">
                <textarea id="message" name="message" rows={5} maxLength={2000} value={values.message} onChange={update("message")} placeholder="Your investment goals, budget and timeline" className="field-lux resize-none" />
              </Field>
            </div>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                Sending opens your email app with your enquiry ready to send to {CONTACT_EMAIL}.
              </p>
              <button type="submit" className="btn-lux btn-gold group">
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
            {sent && (
              <p role="status" className="mt-6 border-l-2 border-gold pl-4 text-sm text-navy">
                Thank you. Your email app should now be open — just press send. If nothing opened, write to us at{" "}
                <a href={emailUrl()} className="underline">{CONTACT_EMAIL}</a>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
