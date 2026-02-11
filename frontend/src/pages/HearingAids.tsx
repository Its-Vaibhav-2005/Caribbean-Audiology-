import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu, Bluetooth, Smartphone, Music, Settings, Eye,
  Ear, Check, Search, Headphones, Wrench, CalendarCheck
} from "lucide-react";

const features = [
  { icon: Cpu, title: "AI-Powered Processing", description: "Advanced AI algorithms automatically optimize sound quality in any environment." },
  { icon: Bluetooth, title: "Bluetooth Connectivity", description: "Stream phone calls, music, and media directly to your hearing aids wirelessly." },
  { icon: Smartphone, title: "Smartphone Control", description: "Adjust settings, volume, and programs from your smartphone app." },
  { icon: Music, title: "Music Streaming", description: "Enjoy high-quality music streaming directly through your hearing aids." },
  { icon: Settings, title: "Custom Programming", description: "Personalized programming tailored to your unique hearing profile and lifestyle." },
  { icon: Eye, title: "Discreet Design", description: "Modern hearing aids are smaller and more stylish than ever before." },
];

const journey = [
  { step: 1, icon: Search, title: "Consultation", description: "We discuss your hearing concerns, lifestyle needs, and expectations to understand your unique situation." },
  { step: 2, icon: Ear, title: "Hearing Evaluation", description: "A comprehensive hearing assessment determines the type and degree of your hearing loss." },
  { step: 3, icon: Headphones, title: "Device Selection", description: "We help you choose the best hearing aid style and technology based on your needs and budget." },
  { step: 4, icon: Wrench, title: "Custom Fitting", description: "Your hearing aids are precisely programmed and fitted for optimal comfort and sound quality." },
  { step: 5, icon: CalendarCheck, title: "Follow-up Care", description: "Regular follow-up appointments ensure your hearing aids continue to perform at their best." },
];

const checklist = [
  "Difficulty hearing in noisy environments",
  "Frequently asking people to repeat themselves",
  "Turning up the TV or radio volume",
  "Feeling that people mumble when they speak",
  "Difficulty hearing on the telephone",
  "Withdrawing from social situations",
];

const HearingAids = () => {
  return (
    <Layout>
      <Hero
        badge="Hearing Aids"
        title="Modern Hearing Aids for"
        titleAccent="Modern Life"
        description="Today's hearing aids are sophisticated, discreet, and packed with features that make hearing easier and more natural than ever before."
        primaryCTA={{ label: "Schedule a Fitting", href: "/contact" }}
        secondaryCTA={{ label: "Learn More", href: "#features" }}
      >
        <div>
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Do you experience:</h3>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Hero>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Technology"
            title="Modern Hearing Aid Features"
            description="Today's hearing aids offer incredible technology that adapts to your lifestyle."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <ServiceCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="The Process"
            title="Your Hearing Aid Journey"
            description="From consultation to follow-up, we guide you through every step."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {journey.map((j) => (
              <Card key={j.step} className="border-border">
                <CardContent className="p-6 flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {j.step}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{j.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{j.description}</p>
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

export default HearingAids;
