import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ServicesIndexSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/services/")({
  loader: () => delay(450),
  pendingComponent: ServicesIndexSkeleton,
  head: () => ({
    meta: [
      { title: "Services — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Clinical audiology, hearing devices, paediatric audiology, rehabilitation, and specialized programs including tele-audiology and industrial hearing conservation.",
      },
      { property: "og:title", content: "Our Services — Caribbean Audiology Healthcare Ltd." },
      {
        property: "og:description",
        content: "Complete audiology care across Trinidad & Tobago and the wider Caribbean.",
      },
    ],
  }),
  component: ServicesIndex,
});

const CATS = [
  {
    to: "/services/clinical-audiology",
    title: "Clinical Audiology",
    items: [
      "Diagnostic hearing evaluations",
      "Tinnitus evaluation & management",
      "Balance & vestibular testing",
    ],
  },
  {
    to: "/services/hearing-devices",
    title: "Hearing Devices",
    items: [
      "Hearing aid fitting & programming",
      "Cochlear implant evaluations & mapping",
      "Bone-anchored / bone-conduction devices",
      "Assistive listening technology",
    ],
  },
  {
    to: "/services/paediatric-audiology",
    title: "Paediatric Audiology",
    items: [
      "Newborn hearing screening",
      "School hearing screening",
      "Childhood hearing loss management",
    ],
  },
  {
    to: "/services/rehabilitation",
    title: "Rehabilitation & Counselling",
    items: ["Auditory rehabilitation", "Family counselling"],
  },
  {
    to: "/services/specialized-programs",
    title: "Specialized Programs",
    items: [
      "Tele-audiology services",
      "Industrial hearing conservation",
      "Industrial hearing screening",
      "Custom molds / swim plugs",
    ],
  },
];

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Complete audiology care under one roof."
        subtitle="From newborn screening to cochlear implant mapping and industrial hearing conservation—every service tailored to you."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 md:grid-cols-2">
          {CATS.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl bg-card border border-border/60 hover:border-teal/40 p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <h2 className="font-display text-2xl sm:text-3xl text-teal">{c.title}</h2>
              <ul className="mt-5 space-y-2 text-foreground/80">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-teal-mid">›</span>
                    {i}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-mid">
                Explore{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
