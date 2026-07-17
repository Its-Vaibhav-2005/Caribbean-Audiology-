import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, X, Calendar, Phone, Mail, Building, ArrowLeft, Send } from "lucide-react";

interface LocationDetails {
  title: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
}

const LOCATIONS: Record<string, LocationDetails> = {
  "Central Trinidad": {
    title: "Central Trinidad",
    address: "Chaguanas (full clinic address available on request)",
    phone: "+1-868-735-6666",
    hours: "Mon – Fri: 9:00 AM – 5:00 PM, Sat: 9:00 AM – 1:00 PM",
    description:
      "Our Central Trinidad branch offers full diagnostic audiology and hearing aid services.",
  },
  "East Trinidad": {
    title: "East Trinidad",
    address: "Arima / East Area (full clinic address available on request)",
    phone: "+1-868-735-6666",
    hours: "By Appointment only",
    description:
      "Providing hearing care solutions, testing and consultations for East Trinidad residents.",
  },
  "Northwest Trinidad": {
    title: "Northwest Trinidad",
    address: "Port of Spain (full clinic address available on request)",
    phone: "+1-868-735-6666",
    hours: "Mon – Fri: 9:00 AM – 5:00 PM",
    description:
      "Conveniently located in Port of Spain for comprehensive audiology services and ENT referrals.",
  },
  "North Trinidad": {
    title: "North Trinidad",
    address: "St. Augustine / North Area (full clinic address available on request)",
    phone: "+1-868-735-6666",
    hours: "By Appointment only",
    description:
      "Serving North Trinidad with newborn hearing screening, consultations, and device management.",
  },
};

export function FindUsHere() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLoc, setSelectedLoc] = useState<string | null>(null);
  const [hasNotified, setHasNotified] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Notify user with dot after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNotified(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNotified(false);
    }
  };

  const handleBookLocation = (locName: string) => {
    navigate({
      to: "/appointments",
      search: { location: locName } as any,
      hash: "appointment-form",
    });
    setIsOpen(false);
  };

  return (
    <div className="font-sans">
      {/* Floating Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-8 w-auto sm:w-96 max-h-[calc(100vh-120px)] sm:max-h-[520px] flex flex-col rounded-2xl bg-card border border-border shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 z-50"
        >
          {/* Header */}
          <div className="bg-teal p-4 text-cream flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Building className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-teal" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold leading-tight text-cream">
                  Caribbean Audiology
                </h4>
                <p className="text-[10px] text-cream/70 font-semibold tracking-wider uppercase">
                  Our Clinics
                </p>
              </div>
            </div>
            <button
              onClick={togglePanel}
              className="h-8 w-8 rounded-full flex items-center justify-center text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors cursor-pointer"
              aria-label="Close locations"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[380px] min-h-[280px] bg-sand/10">
            {!selectedLoc ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex gap-2.5 items-start">
                  <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-teal/10 text-teal mt-1">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl px-4 py-2.5 text-sm bg-card text-foreground border border-border/60 rounded-tl-none shadow-sm leading-relaxed">
                    Welcome! We offer healthcare clinics across Trinidad & Tobago. Please select a
                    region to find us:
                  </div>
                </div>

                <div className="flex flex-col gap-2 pl-9 pr-2">
                  {Object.keys(LOCATIONS).map((locKey) => (
                    <button
                      key={locKey}
                      onClick={() => setSelectedLoc(locKey)}
                      className="flex items-center justify-between w-full px-4 py-3 text-xs font-semibold text-teal bg-card border border-teal/20 hover:border-teal hover:bg-teal/5 rounded-xl transition-all duration-300 text-left hover:translate-x-1 cursor-pointer group shadow-sm"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-teal/60 group-hover:text-teal transition-colors" />
                        {locKey}
                      </span>
                      <Send className="h-3 w-3 text-teal/40 group-hover:text-teal transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-250">
                <button
                  onClick={() => setSelectedLoc(null)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-teal-mid mb-1 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" /> Back to Regions
                </button>

                <div className="bg-card rounded-2xl border border-border/65 p-4 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                    <MapPin className="h-4 w-4 text-teal" />
                    <h5 className="font-display font-bold text-teal text-base">
                      {LOCATIONS[selectedLoc].title} Clinic
                    </h5>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {LOCATIONS[selectedLoc].description}
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="flex gap-2">
                      <Building className="h-4 w-4 text-teal-mid shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground/80">Address</div>
                        <div className="text-muted-foreground">
                          {LOCATIONS[selectedLoc].address}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Phone className="h-4 w-4 text-teal-mid shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground/80">Contact Phone</div>
                        <a
                          href={`tel:${LOCATIONS[selectedLoc].phone.replace(/[^0-9+]/g, "")}`}
                          className="text-teal hover:underline font-medium"
                        >
                          {LOCATIONS[selectedLoc].phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Calendar className="h-4 w-4 text-teal-mid shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground/80">Clinic Hours</div>
                        <div className="text-muted-foreground">{LOCATIONS[selectedLoc].hours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-1 pr-1 pt-1">
                  <button
                    onClick={() => handleBookLocation(selectedLoc)}
                    className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-cream bg-teal hover:bg-teal-mid rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Book Appointment for {selectedLoc}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Contact Info */}
          <div className="border-t border-border p-3.5 bg-card flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> +1-868-735-6666
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> caribbeanaudiologytt@gmail.com
            </span>
          </div>
        </div>
      )}

      {/* Floating Button Container */}
      <div className="fixed bottom-1 right-1 sm:bottom-3 sm:right-3 flex items-center justify-center h-24 w-24 z-50">
        {/* Rotating Circular Text */}
        {!isOpen && (
          <svg
            className="absolute w-full h-full animate-[spin_15s_linear_infinite] select-none pointer-events-none"
            viewBox="0 0 100 100"
          >
            <path
              id="findTextPath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="none"
            />
            <text className="fill-teal-mid dark:fill-aqua text-[11px] font-black tracking-[0.16em] uppercase">
              <textPath href="#findTextPath" startOffset="0%">
                • Find Us Here • Find Us Here
              </textPath>
            </text>
          </svg>
        )}

        {/* Floating button */}
        <button
          onClick={togglePanel}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-teal text-cream shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/30 transition-all duration-300 hover:bg-teal-mid hover:scale-110 active:scale-95 cursor-pointer z-50"
          aria-label="Toggle Clinic Locations"
        >
          <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-20 -z-10" />
          {isOpen ? <X className="h-6 w-6" /> : <MapPin className="h-6 w-6" />}
          {hasNotified && !isOpen && (
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-aqua"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
