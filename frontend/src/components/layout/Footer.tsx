import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Hearing Evaluations", href: "/services#evaluations" },
  { label: "Hearing Aids", href: "/hearing-aids" },
  { label: "Tinnitus Treatment", href: "/tinnitus" },
  { label: "Cochlear Implants", href: "/cochlear-implant" },
  { label: "Paediatric Audiology", href: "/services#paediatric" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                CA
              </div>
              <span className="font-serif font-semibold text-lg">
                Caribbean Audiology
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Providing comprehensive audiology services with compassion and excellence throughout the Caribbean.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="opacity-70">(868) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="opacity-70">info@caribbeanaudiology.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="opacity-70">123 Health Avenue, Port of Spain, Trinidad & Tobago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Caribbean Audiology Healthcare Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
