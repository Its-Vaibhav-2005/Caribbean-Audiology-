import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { Music, Activity, BrainCircuit, Dna, Sprout, ExternalLink } from "lucide-react";
import { delay } from "@/lib/utils";
import { ResourceDetailSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/resources/article")({
  loader: () => delay(450),
  pendingComponent: ResourceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "Research Articles — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Explore research publications, audiological studies, and genetic research from Dr. Sidheshwar Pandey.",
      },
      { property: "og:title", content: "Research & Insights" },
      {
        property: "og:description",
        content: "Advancing hearing care through science, genomics, and clinical research.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="Research Articles" title="Advancing Hearing Care Through Science" />

      <div className="py-16">
        {/* Intro Section */}
        <section className="mx-auto max-w-4xl px-5 sm:px-8 mb-16">
          <blockquote className="border-l-4 border-teal pl-4 italic my-6 font-semibold text-xl text-teal leading-relaxed">
            "Advancing hearing care through science and compassion."
          </blockquote>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">
            At our clinic, we believe that advancing hearing health means combining compassionate
            patient care with cutting-edge research. Dr. Sidheshwar Pandey’s work bridges science
            and practice—exploring new therapies for tinnitus, pioneering genetic approaches to
            hearing loss, and highlighting holistic methods that empower patients in their daily
            lives. By sharing these insights, we aim to keep our community informed, inspired, and
            confident that the future of hearing care is full of possibility.
          </p>
        </section>

        {/* Dynamic Left-to-Right Scrolling Marquee Section */}
        <section className="w-full overflow-hidden bg-teal/5 py-12 mb-16 border-y border-teal/10 relative">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-6">
            <h3 className="font-display text-2xl text-teal font-semibold">
              Publications & Studies
            </h3>
            <p className="text-sm text-muted-foreground">Hover over any card to pause scrolling</p>
          </div>

          <div className="relative flex w-full overflow-x-hidden">
            <div className="flex w-max gap-6 animate-marquee-reverse">
              {/* Render Cards set 1 */}
              {CARDS.map((card, idx) => (
                <CardItem key={`card-1-${idx}`} card={card} />
              ))}
              {/* Duplicate Cards set 2 for seamless loop */}
              {CARDS.map((card, idx) => (
                <CardItem key={`card-2-${idx}`} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Concluding Quote Section */}
        <section className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-3xl -z-10" />
            <blockquote className="italic text-lg text-foreground/90 leading-relaxed font-medium">
              "Dr. Pandey’s work in genomics extends beyond agriculture into hearing health. By
              applying next-generation sequencing techniques, his research helps identify genetic
              causes of hearing loss and opens the door to personalized treatments. This approach
              not only improves diagnosis today but also lays the foundation for future therapies
              such as gene therapy and stem cell regeneration."
            </blockquote>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  ),
});

interface Card {
  icon: React.ComponentType<any>;
  title: string;
  source: string;
  link: string;
  summary: string;
  keyPoint: string;
}

const CARDS: Card[] = [
  {
    icon: Music,
    title: "Role of Self-Induced Sound Therapy: Bhramari Pranayama in Tinnitus",
    source: "Hearing, Balance and Communication (Vol. 8, Issue 3, pp. 137-141, October 2010)",
    link: "https://journals.lww.com/hbcm/abstract/2010/08030/role_of_self_induced_sound_therapy__bhramari.5.aspx",
    summary:
      "This study explores how Bhramari Pranayama, a gentle humming breathing exercise from yoga, can be used as a form of self-induced sound therapy for tinnitus. By producing a calming internal sound, patients may experience reduced stress and distraction from the ringing in their ears. The technique is simple, safe, and can be practiced daily alongside medical care.",
    keyPoint:
      "Self-guided sound therapy empowers patients to take an active role in managing tinnitus, offering relief and a sense of control over their condition.",
  },
  {
    icon: Activity,
    title: "Audiometric Profile in Patients with Chronic Renal Failure",
    source:
      "Journal of Otolaryngology – Head & Neck Surgery (Vol. 40, Issue 2, pp. 131-136, April 2011)",
    link: "https://pubmed.ncbi.nlm.nih.gov/21453648/",
    summary:
      "This study looked at how chronic kidney disease can affect hearing. Patients with long-term renal failure often showed changes in their hearing test results, suggesting that kidney health and ear health are closely connected. The findings highlight the importance of regular hearing check-ups for people living with chronic renal conditions, as early detection can help prevent further complications.",
    keyPoint:
      "Chronic kidney disease may increase the risk of hearing problems, making audiological monitoring an important part of overall patient care.",
  },
  {
    icon: BrainCircuit,
    title: "Bhramari Pranayama and Alternative Treatments of Tinnitus: In Pursuit of the Cure",
    source: "IntechOpen (Book Chapter: Up to Date on Tinnitus)",
    link: "https://www.intechopen.com/chapters/25112",
    summary:
      "This chapter explores Bhramari Pranayama (a yogic breathing technique) as a complementary therapy for tinnitus. Dr. Pandey emphasizes the importance of holistic approaches alongside conventional audiological care. The work discusses how controlled breathing and mindfulness can reduce stress, improve neural regulation, and potentially alleviate tinnitus symptoms.",
    keyPoint:
      "The chapter advocates for integrating alternative therapies with clinical management to enhance patient outcomes, especially in cases where traditional treatments provide limited relief.",
  },
  {
    icon: Dna,
    title: "Advances in Genetic Diagnosis and Treatment of Hearing Loss — A Thirst for Revolution",
    source: "IntechOpen (Book Chapter: Update on Hearing Loss)",
    link: "https://www.intechopen.com/chapters/49042",
    summary:
      "This chapter reviews genetic causes of hearing loss and emerging diagnostic tools. It highlights the role of clinical exome sequencing in identifying mutations in genes such as GJB2, MYO7A, CDH23, OTOF, SLC26A4, and TMC1. Dr. Pandey discusses the promise of gene therapy and stem cell treatments for cochlear hair cell regeneration, while noting that these therapies are still in early stages.",
    keyPoint:
      "The article underscores the importance of preventive measures and genetic testing as immediate strategies, while positioning regenerative medicine as the future of hearing restoration.",
  },
  {
    icon: Sprout,
    title: "Next Generation Sequencing: A Revolutionary Tool for Plant Variety Improvement",
    source: "American Journal of Social Issues and Humanities (Special Issue, 2014)",
    link: "https://www.academia.edu/23948846/Next_Generation_Sequencing_A_Revolutionary_Tool_For_Plant_Variety_Improvement",
    summary:
      "This article explains how next-generation sequencing (NGS) is transforming plant breeding. By decoding plant genomes with high precision, scientists can identify genes linked to important traits such as disease resistance, drought tolerance, and nutritional value. The study highlights fenugreek (Trigonella foenum-graecum) as a model plant, where NGS helped uncover genes involved in producing diosgenin, a compound with pharmaceutical uses in hormone therapy and diabetes management.",
    keyPoint:
      "NGS allows breeders to improve crops faster and more accurately, paving the way for better food security and new plant-based medicines.",
  },
];

function CardItem({ card }: { card: Card }) {
  const IconComponent = card.icon;
  return (
    <div className="w-[360px] sm:w-[440px] bg-card border border-border/60 hover:border-teal/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between shrink-0">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
            <IconComponent className="h-5 w-5" />
          </span>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
          >
            Citation <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <h4 className="font-sans text-base font-bold text-teal leading-snug mb-3">{card.title}</h4>
        <p className="text-xs text-muted-foreground mb-4">
          <strong className="text-foreground">Source:</strong> {card.source}
        </p>

        <div className="space-y-3">
          <p className="text-xs text-foreground/80 leading-relaxed">
            <strong className="text-foreground text-[11px] block uppercase tracking-wider mb-0.5">
              Summary
            </strong>
            {card.summary}
          </p>
          <p className="text-xs text-foreground/80 border-t border-border/40 pt-2 leading-relaxed">
            <strong className="text-foreground text-[11px] block uppercase tracking-wider mb-0.5">
              Key Point / Insight
            </strong>
            {card.keyPoint}
          </p>
        </div>
      </div>
    </div>
  );
}
