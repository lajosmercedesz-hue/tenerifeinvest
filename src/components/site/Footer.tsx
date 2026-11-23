import { Facebook, Instagram, Linkedin } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, emailUrl, whatsappUrl } from "@/lib/contact";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "./nav";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container-lux grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm leading-relaxed text-navy-muted">
            Your local partner for investment opportunities in Tenerife, Canary Islands, Spain.
          </p>
          <div className="mt-8 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center border border-line-light text-navy-foreground/80 transition-all duration-500 hover:border-gold hover:text-gold-soft"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline text-navy-foreground/80 hover:text-navy-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-6 space-y-3 text-navy-foreground/80">
            <li>
              <a href={emailUrl()} className="link-underline hover:text-navy-foreground">{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-navy-foreground">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>Tenerife, Canary Islands, Spain</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line-light">
        <div className="container-lux flex flex-col gap-3 py-6 text-xs text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tenerife Investment. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Discover · Invest · Grow</p>
        </div>
      </div>
    </footer>
  );
}
