import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ear, HeartPulse, Baby, Users2, Radio, Stethoscope } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroCarousel } from "@/components/site/HeroCarousel";

export const Route = createFileRoute("/")({
  component: Index,
});

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Clinical Audiology",
    to: "/services/clinical-audiology",
    desc: "Diagnostic evaluations, tinnitus management, balance testing.",
  },
  {
    icon: Ear,
    title: "Hearing Devices",
    to: "/services/hearing-devices",
    desc: "Hearing aids, cochlear implants, bone-conduction and assistive tech.",
  },
  {
    icon: Baby,
    title: "Paediatric Audiology",
    to: "/services/paediatric-audiology",
    desc: "Newborn screening, school screening, childhood management.",
  },
  {
    icon: Users2,
    title: "Rehabilitation & Counselling",
    to: "/services/rehabilitation",
    desc: "Auditory rehabilitation and family counselling.",
  },
  {
    icon: Radio,
    title: "Specialized Programs",
    to: "/services/specialized-programs",
    desc: "Tele-audiology, industrial conservation, custom molds.",
  },
  {
    icon: HeartPulse,
    title: "Tinnitus Care",
    to: "/services/clinical-audiology",
    desc: "Holistic evaluation and rehabilitation for tinnitus and hyperacusis.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <Navbar overlay />
      <HeroCarousel />

      {/* Values / intro */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-14 md:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-teal-mid">
              Our Values
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-teal leading-[1.05]">
              A dedicated team of professionals, guided by clinical precision.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-foreground/80">
            <p>
              At Caribbean Audiology Healthcare Ltd, we are committed to helping individuals
              reconnect with the sounds of life. Our centre provides expert hearing, tinnitus, and
              other associated health care across Trinidad &amp; Tobago and the wider Caribbean,
              combining advanced technology with compassionate service.
            </p>
            <p>
              We offer comprehensive hearing assessments, hearing aid solutions, tinnitus
              management, paediatric screening, cochlear implant support, rehabilitation programs
              and family counselling—all delivered with professionalism and personalized attention.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-mid"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-teal-mid">
              Services
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-teal leading-[1.05]">
              Complete audiology care under one roof.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group rounded-2xl bg-card p-8 border border-border/60 hover:border-teal/40 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-xl"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-cream transition-colors">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-teal">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-mid">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-teal text-cream p-10 sm:p-16">
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background: "radial-gradient(circle, var(--aqua) 0%, transparent 70%)",
                opacity: 0.35,
              }}
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
                Your journey to better hearing starts here.
              </h2>
              <p className="mt-5 text-cream/85 text-lg leading-relaxed">
                Book your appointment today and take the first step toward clearer communication and
                a richer quality of life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-teal hover:bg-cream transition-colors"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
