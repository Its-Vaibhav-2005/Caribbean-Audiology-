import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-teal text-cream/80 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Dedicated to sound health and clinical precision. Restoring sound, enriching island life
            across Trinidad &amp; Tobago and the wider Caribbean.
          </p>
        </div>
        <div>
          <h4 className="font-display text-cream text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-aqua">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-aqua">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-aqua">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/appointments" hash="appointment-form" className="hover:text-aqua">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-cream text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-aqua shrink-0" />
              <a href="tel:+18687356666" className="hover:text-aqua transition-colors">
                +1-868-735-6666
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-aqua shrink-0" />
              <a
                href="mailto:caribbeanaudiologytt@gmail.com"
                className="break-all hover:text-aqua transition-colors"
              >
                caribbeanaudiologytt@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-aqua shrink-0" />
              Trinidad &amp; Tobago
            </li>
          </ul>

          <div className="flex items-center justify-center gap-6 border-t border-cream/10 pt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-aqua transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-[21px] w-[21px]" strokeWidth={2.5} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-aqua transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-[21px] w-[21px]" strokeWidth={2.5} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-aqua transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg
                className="h-[21px] w-[21px] fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-cream/60 flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Caribbean Audiology Healthcare Ltd. All rights reserved.
          </span>
          <span>Restoring sound, enriching island life.</span>
        </div>
      </div>
    </footer>
  );
}
