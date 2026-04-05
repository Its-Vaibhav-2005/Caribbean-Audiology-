import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-teal-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Caribbean Audiology Healthcare Ltd" className="h-12 w-auto brightness-0 invert" />
        </div>
        <p className="text-sm opacity-80">
          Comprehensive hearing care services for patients of all ages across the Caribbean.
        </p>
      </div>

      <div>
        <h4 className="font-serif font-semibold mb-3">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
          <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/resources" className="hover:opacity-100 transition-opacity">Resources</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>
      </div>

      <div>
        <h4 className="font-serif font-semibold mb-3">Services</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <span>Hearing Evaluations</span>
          <span>Hearing Aid Fitting</span>
          <span>Tinnitus Treatment</span>
          <span>Pediatric Audiology</span>
        </div>
      </div>

      <div>
        <h4 className="font-serif font-semibold mb-3">Contact</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (868) 000-0000</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@caribbeanaudiology.com</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Trinidad & Tobago</div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 text-center py-4 text-sm opacity-60">
      © {new Date().getFullYear()} Caribbean Audiology Healthcare Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
