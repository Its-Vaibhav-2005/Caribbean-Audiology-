import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS = [
  { to: "/services/clinical-audiology", label: "Clinical Audiology" },
  { to: "/services/hearing-devices", label: "Hearing Device" },
  { to: "/services/paediatric-audiology", label: "Paediatric Audiology" },
  { to: "/services/rehabilitation", label: "Rehabilitation & Counselling" },
  { to: "/services/specialized-programs", label: "Specialized Programs" },
] as const;

const RESOURCE_LINKS = [
  { to: "/resources/faqs", label: "Frequently Asked Questions" },
  { to: "/resources/hearing-aids-guide", label: "Hearing Aids Guide" },
  { to: "/resources/first-appointment", label: "First Appointment" },
  { to: "/resources/article", label: "Article" },
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
      <header className="fixed top-4 inset-x-4 md:inset-x-8 z-40 transition-all duration-300 bg-cream/70 backdrop-blur border border-border shadow-md rounded-2xl max-w-7xl mx-auto">
        <div className="w-full pl-0.5 pr-4 sm:pl-2 sm:pr-6 md:pl-4 md:pr-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Logo variant="dark" />

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => {
                if (n.to === "/services") {
                  return (
                    <div key={n.to} className="relative group py-2">
                      <Link
                        to="/services"
                        className={`text-sm font-medium transition-colors flex items-center gap-1 ${linkColor}`}
                        activeProps={{ className: "text-teal-mid" }}
                      >
                        {n.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </Link>

                      <div className="absolute top-full left-0 mt-1 w-64 bg-cream border border-border shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {SERVICE_LINKS.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="block px-4 py-2 text-sm text-teal hover:bg-teal/5 hover:text-teal-mid transition-colors font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (n.to === "/resources") {
                  return (
                    <div key={n.to} className="relative group py-2">
                      <Link
                        to="/resources"
                        className={`text-sm font-medium transition-colors flex items-center gap-1 ${linkColor}`}
                        activeProps={{ className: "text-teal-mid" }}
                      >
                        {n.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </Link>

                      <div className="absolute top-full left-0 mt-1 w-64 bg-cream border border-border shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {RESOURCE_LINKS.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="block px-4 py-2 text-sm text-teal hover:bg-teal/5 hover:text-teal-mid transition-colors font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`text-sm font-medium transition-colors ${linkColor}`}
                    activeProps={{ className: "text-teal-mid" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                );
              })}
              <Link
                to="/appointments"
                hash="appointment-form"
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
          <nav className="flex flex-col gap-1 px-5 sm:px-8 mt-6 overflow-y-auto max-h-[calc(100vh-280px)]">
            {NAV.map((n) => {
              if (n.to === "/services") {
                return (
                  <div key={n.to} className="flex flex-col">
                    <Link
                      to="/services"
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl text-cream py-3 border-b border-cream/10 flex items-center justify-between"
                    >
                      {n.label}
                    </Link>
                    <div className="flex flex-col gap-1 pl-4 mt-2 mb-4 border-l border-cream/20">
                      {SERVICE_LINKS.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="text-lg text-cream/80 py-2 hover:text-cream transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (n.to === "/resources") {
                return (
                  <div key={n.to} className="flex flex-col">
                    <Link
                      to="/resources"
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl text-cream py-3 border-b border-cream/10 flex items-center justify-between"
                    >
                      {n.label}
                    </Link>
                    <div className="flex flex-col gap-1 pl-4 mt-2 mb-4 border-l border-cream/20">
                      {RESOURCE_LINKS.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="text-lg text-cream/80 py-2 hover:text-cream transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-cream py-3 border-b border-cream/10"
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto p-5 sm:p-8 space-y-4">
            <Link
              to="/appointments"
              hash="appointment-form"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-aqua px-6 py-4 text-center font-semibold text-teal"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+18687356666"
              className="flex items-center justify-center gap-2 text-cream/80 text-sm"
            >
              <Phone className="h-4 w-4" /> +1-868-735-6666
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
