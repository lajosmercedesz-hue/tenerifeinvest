import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "./nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open ? "bg-navy-deep/95 py-3 shadow-elegant backdrop-blur-md" : "bg-transparent py-6",
      )}
    >
      <div className="container-lux flex items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.2em] text-navy-foreground/85 transition-colors hover:text-navy-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-lux btn-ghost-light hidden !px-5 !py-3 lg:inline-flex">
          Book a Consultation
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-navy-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="container-lux animate-fade-up pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col divide-y divide-line-light border-t border-line-light">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl text-navy-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-lux btn-gold mt-6 w-full">
            Book a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
