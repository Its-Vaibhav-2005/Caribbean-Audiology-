import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Industrial Screening", href: "/services#industrial-screening" },
  { label: "Newborn Screening", href: "/services#newborn-screening" },
  { label: "Evaluations", href: "/services#evaluations" },
  { label: "Paediatric Audiology", href: "/services#paediatric" },
  { label: "Hearing Aid Fitting", href: "/services#hearing-aid-fitting" },
  { label: "Tinnitus Treatment", href: "/services#tinnitus-treatment" },
  { label: "Cochlear Implant", href: "/services#cochlear-implant" },
  { label: "Bone Anchored Hearing", href: "/services#bone-anchored" },
  { label: "Custom Ear Protection", href: "/services#ear-protection" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Tinnitus", href: "/tinnitus" },
  { label: "Hearing Aids", href: "/hearing-aids" },
  { label: "Cochlear Implant", href: "/cochlear-implant" },
  { label: "Resources", href: "/resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
            CA
          </div>
          <span className="font-serif font-semibold text-foreground text-sm md:text-base leading-tight hidden sm:block">
            Caribbean Audiology<br className="hidden lg:block" /> Healthcare Ltd.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                    {services.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm rounded-md ${
                  isActive(link.href)
                    ? "text-primary bg-accent font-medium"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
