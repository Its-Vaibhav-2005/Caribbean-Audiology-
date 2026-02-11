import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bell, Zap, Music, HeartPulse, Wind, Waves,
  Brain, Moon, AlertTriangle, Ear, Volume2
} from "lucide-react";

const sounds = [
  { icon: Bell, title: "Ringing", description: "A high-pitched continuous ringing sound in one or both ears." },
  { icon: Zap, title: "Buzzing", description: "A buzzing or electrical humming sensation in the ears." },
  { icon: Music, title: "Humming", description: "A low-pitched, constant humming noise." },
  { icon: HeartPulse, title: "Pulsating", description: "A rhythmic sound that often matches your heartbeat." },
  { icon: Wind, title: "Hissing", description: "A soft, continuous hissing or steam-like sound." },
  { icon: Waves, title: "Roaring", description: "A low, rumbling sound similar to ocean waves." },
];

const impacts = [
  { icon: Brain, title: "Difficulty Focusing", description: "Tinnitus can make it hard to concentrate on work, reading, or conversation." },
  { icon: Moon, title: "Sleep Disruption", description: "Many tinnitus sufferers struggle with falling asleep or staying asleep." },
  { icon: AlertTriangle, title: "Anxiety & Stress", description: "The constant presence of tinnitus can lead to increased anxiety and emotional distress." },
  { icon: Ear, title: "Hyperacusis", description: "Increased sensitivity to everyday sounds, often associated with tinnitus." },
];

const steps = [
  { step: 1, title: "Comprehensive Assessment", description: "We begin with a thorough evaluation of your hearing and tinnitus, including detailed questionnaires about how tinnitus affects your daily life." },
  { step: 2, title: "Diagnosis & Education", description: "We explain our findings and help you understand the underlying mechanisms of tinnitus, which is an important step toward managing it effectively." },
  { step: 3, title: "Personalized Treatment Plan", description: "Based on your assessment, we develop a customized management plan that may include sound therapy, counseling, hearing aids, or a combination of approaches." },
  { step: 4, title: "Ongoing Support & Monitoring", description: "We provide regular follow-up appointments to monitor your progress, adjust your treatment plan, and ensure you're achieving the best possible outcomes." },
];

const Tinnitus = () => {
  return (
    <Layout>
      <Hero
        badge="Tinnitus Care"
        title="Understanding &"
        titleAccent="Managing Tinnitus"
        description="Tinnitus affects millions of people worldwide. Our specialized tinnitus management program combines the latest therapeutic approaches to help you find relief and regain quality of life."
        primaryCTA={{ label: "Get Help Today", href: "/contact" }}
        secondaryCTA={{ label: "Learn More", href: "#sounds" }}
      >
        <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
          <Volume2 className="h-24 w-24 text-primary/40" />
        </div>
      </Hero>

      {/* Common Sounds */}
      <section id="sounds" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Common Symptoms"
            title="Common Tinnitus Sounds"
            description="Tinnitus can manifest in many different ways. Here are the most commonly reported sounds."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sounds.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Understanding the Impact"
            title="How Tinnitus Affects Your Life"
            description="Tinnitus goes beyond just hearing a sound — it can affect many aspects of your daily life."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {impacts.map((i) => (
              <ServiceCard key={i.title} icon={i.icon} title={i.title} description={i.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Approach"
            title="Evaluation & Treatment"
            description="Our step-by-step approach ensures comprehensive tinnitus management."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((s) => (
              <Card key={s.step} className="border-border">
                <CardContent className="p-6 flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Tinnitus;
