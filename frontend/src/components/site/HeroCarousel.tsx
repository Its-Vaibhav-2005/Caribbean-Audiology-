import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroClinical from "@/assets/hero-clinical.jpg";
import heroDevices from "@/assets/hero-devices.jpg";
import heroPaediatric from "@/assets/hero-paediatric.jpg";
import heroRehab from "@/assets/hero-rehab.jpg";
import heroSpecialized from "@/assets/hero-specialized.jpg";
import { VisitorCounter } from "./VisitorCounter";

type Slide = {
  image: string;
  kicker: string;
  title: string;
  subtitle: string;
  to: string;
};

const SLIDES: Slide[] = [
  {
    image: heroClinical,
    kicker: "Clinical Audiology",
    title: "Restoring sound,\nenriching island life.",
    subtitle:
      "Comprehensive hearing, tinnitus and balance care across Trinidad & Tobago and the wider Caribbean.",
    to: "/services/clinical-audiology",
  },
  {
    image: heroDevices,
    kicker: "Hearing Devices",
    title: "Precision-fit hearing,\ncrafted for your day.",
    subtitle:
      "The latest hearing aids, cochlear implants and bone-conduction devices—manually programmed, personally supported.",
    to: "/services/hearing-devices",
  },
  {
    image: heroPaediatric,
    kicker: "Paediatric Audiology",
    title: "Every child\ndeserves to be heard.",
    subtitle:
      "From newborn screening to childhood management—state-of-the-art testing tailored to each child.",
    to: "/services/paediatric-audiology",
  },
  {
    image: heroRehab,
    kicker: "Rehabilitation & Counselling",
    title: "Confidence in\nevery conversation.",
    subtitle:
      "Auditory rehabilitation and family counselling that rebuild communication and everyday connection.",
    to: "/services/rehabilitation",
  },
  {
    image: heroSpecialized,
    kicker: "Specialized Programs",
    title: "Expert care,\nwherever you are.",
    subtitle:
      "Tele-audiology, industrial hearing conservation and custom molds—accessible, effective, on-site or online.",
    to: "/services/specialized-programs",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setI((v) => (v + 1) % SLIDES.length), []);
  const prev = useCallback(() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <section
        className="relative h-[calc(100vh-10rem)] min-h-[540px] sm:min-h-[500px] w-full overflow-hidden bg-teal rounded-3xl shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        {SLIDES.map((s, idx) => {
          const state = idx === i ? "active" : idx < i ? "past" : "future";
          return (
            <div
              key={s.image}
              className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{
                transform:
                  state === "active"
                    ? "translateX(0)"
                    : state === "past"
                      ? "translateX(-100%)"
                      : "translateX(100%)",
                zIndex: state === "active" ? 2 : 1,
              }}
              aria-hidden={state !== "active"}
            >
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1280}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, color-mix(in oklab, var(--teal) 78%, transparent) 0%, color-mix(in oklab, var(--teal) 45%, transparent) 55%, color-mix(in oklab, var(--teal) 30%, transparent) 100%)",
                }}
              />
            </div>
          );
        })}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex-1 flex items-end sm:items-center pt-8 pb-20 sm:pb-28">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <div className="max-w-xl sm:max-w-2xl">
                <div
                  key={`k-${i}`}
                  className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-aqua animate-in fade-in slide-in-from-left-4 duration-700"
                >
                  {SLIDES[i].kicker}
                </div>
                <h1
                  key={`t-${i}`}
                  className="mt-3 sm:mt-5 font-display font-semibold text-cream text-3xl sm:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.02] whitespace-pre-line animate-in fade-in slide-in-from-left-6 duration-700"
                >
                  {SLIDES[i].title}
                </h1>
                <p
                  key={`s-${i}`}
                  className="mt-2 sm:mt-6 max-w-xl text-sm sm:text-lg text-cream/80 leading-relaxed animate-in fade-in slide-in-from-left-8 duration-700"
                >
                  {SLIDES[i].subtitle}
                </p>
                <div className="mt-4 sm:mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/appointments"
                    hash="appointment-form"
                    className="inline-flex items-center gap-2 rounded-full bg-teal-mid px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-cream transition-all hover:bg-aqua hover:text-teal hover:shadow-2xl"
                  >
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to={SLIDES[i].to}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-cream transition-all hover:bg-cream/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 px-5 sm:px-8">
            <div className="mx-auto flex max-w-7xl items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="ml-3 flex items-center gap-2">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === i ? "w-10 bg-aqua" : "w-5 bg-cream/40 hover:bg-cream/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden sm:block">
                <VisitorCounter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
