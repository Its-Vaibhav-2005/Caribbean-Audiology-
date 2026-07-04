import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkColor = "text-teal hover:text-teal-mid";

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-cream/70 backdrop-blur border-b border-border shadow-sm"
      >
        <div className="w-full px-6 md:px-12">
          <div className="flex h-20 items-center justify-between gap-4">
            <Logo variant="dark" />

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm font-medium transition-colors ${linkColor}`}
                  activeProps={{ className: "text-teal-mid" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/appointments"
                className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-teal-mid hover:shadow-lg"
              >
                Book Appointment
              </Link>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-teal/30 text-teal transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-teal/95 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative flex flex-col h-full transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <Logo variant="light" />
            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 sm:px-8 mt-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream py-3 border-b border-cream/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-5 sm:p-8 space-y-4">
            <Link
              to="/appointments"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-aqua px-6 py-4 text-center font-semibold text-teal"
            >
              Book Appointment
            </Link>
            <a href="tel:+18687356666" className="flex items-center justify-center gap-2 text-cream/80 text-sm">
              <Phone className="h-4 w-4" /> +1-868-735-6666
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
