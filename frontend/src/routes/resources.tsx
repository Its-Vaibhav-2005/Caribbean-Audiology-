import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, BookOpen, FileText, ClipboardCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Caribbean Audiology Healthcare Ltd." },
      { name: "description", content: "FAQs, hearing aids guide, first appointment guide, research articles, and downloadable forms." },
      { property: "og:title", content: "Resources" },
      { property: "og:description", content: "Guides and answers to help you understand your hearing health." },
    ],
  }),
  component: Resources,
});

const CARDS = [
  { icon: HelpCircle, to: "/resources/faqs", title: "Frequently Asked Questions", desc: "Answers to common questions about hearing loss, tinnitus, and hyperacusis." },
  { icon: BookOpen, to: "/resources/hearing-aids-guide", title: "Hearing Aids Guide", desc: "How hearing aids work, styles, care tips, and common myths." },
  { icon: ClipboardCheck, to: "/resources/first-appointment", title: "What to Expect at Your First Appointment", desc: "A step-by-step guide for adults, seniors, and paediatric visits." },
  { icon: FileText, to: "/news", title: "Research Articles & Blog", desc: "Insights on tinnitus, genetics of hearing loss, and holistic approaches." },
];

function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="Resources" title="Guides, answers, and insights." subtitle="Everything you need to feel prepared, informed, and supported on your hearing health journey." />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c) => (
            <Link key={c.to} to={c.to} className="group rounded-2xl bg-card border border-border/60 hover:border-teal/40 p-8 shadow-sm hover:shadow-xl transition-all">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-cream transition-colors">
                <c.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl text-teal">{c.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-mid">Open <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
