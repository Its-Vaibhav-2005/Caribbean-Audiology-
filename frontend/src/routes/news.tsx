import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Blog — Caribbean Audiology Healthcare Ltd." },
      { name: "description", content: "Articles on hearing health, research highlights, patient stories, and clinic announcements." },
      { property: "og:title", content: "News & Blog" },
      { property: "og:description", content: "Insights on tinnitus, genetics of hearing loss, and holistic hearing care." },
    ],
  }),
  component: News,
});

const POSTS = [
  {
    title: "Role of Self-Induced Sound Therapy: Bhramari Pranayama in Tinnitus",
    tag: "Research",
    excerpt: "Exploring integrating alternative therapies with clinical management to enhance patient outcomes—especially where traditional treatments provide limited relief.",
    href: "#",
  },
  {
    title: "Advances in Genetic Diagnosis and Treatment of Hearing Loss",
    tag: "Research",
    excerpt: "Applying next-generation sequencing to identify genetic causes of hearing loss and open the door to personalized treatments including gene therapy and stem-cell regeneration.",
    href: "https://www.intechopen.com/chapters/49042",
  },
  {
    title: "Patient story: Rediscovering conversation",
    tag: "Testimonial",
    excerpt: "A Trinidad patient shares how personalized hearing aid programming brought back family dinners, music, and confidence at work.",
    href: "#",
  },
  {
    title: "Community workshop: Hearing health in schools",
    tag: "Announcement",
    excerpt: "We're partnering with primary schools across Trinidad for on-site hearing screenings this term. Register your school today.",
    href: "#",
  },
];

function News() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="News & Blog" title="Insights, research, and community." subtitle="Advancing hearing health by combining compassionate patient care with cutting-edge research." />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <a key={p.title} href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group rounded-2xl bg-card border border-border/60 hover:border-teal/40 p-8 shadow-sm hover:shadow-xl transition-all">
              <span className="inline-block rounded-full bg-aqua/40 text-teal text-[11px] font-semibold tracking-wider uppercase px-3 py-1">{p.tag}</span>
              <h2 className="mt-4 font-display text-2xl text-teal group-hover:text-teal-mid transition-colors">{p.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
