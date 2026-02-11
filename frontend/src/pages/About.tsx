import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart, Award, Users, BookOpen, Accessibility, Lightbulb,
  Target, Eye
} from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", description: "We treat every patient with empathy, kindness, and genuine care." },
  { icon: Award, title: "Excellence", description: "We pursue the highest standards in clinical practice and patient outcomes." },
  { icon: Users, title: "Collaboration", description: "We work closely with other healthcare professionals for comprehensive care." },
  { icon: BookOpen, title: "Education", description: "We empower patients with knowledge about their hearing health." },
  { icon: Accessibility, title: "Accessibility", description: "We strive to make quality hearing care available to everyone." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and evidence-based approaches." },
];

const team = [
  { name: "Dr. Aisha Campbell", role: "Lead Audiologist", bio: "Over 15 years of experience in diagnostic and rehabilitative audiology." },
  { name: "Dr. Marcus Johnson", role: "Paediatric Audiologist", bio: "Specializing in hearing assessments and interventions for children." },
  { name: "Dr. Lisa Chen", role: "Tinnitus Specialist", bio: "Expert in tinnitus evaluation and evidence-based management strategies." },
  { name: "Dr. David Singh", role: "Cochlear Implant Audiologist", bio: "Experienced in cochlear implant candidacy assessment and rehabilitation." },
];

const About = () => {
  return (
    <Layout>
      <Hero
        badge="About Us"
        title="A Team Dedicated to"
        titleAccent="Better Hearing"
        description="Caribbean Audiology Healthcare Ltd. has been serving the hearing health needs of the Caribbean community for over 15 years, providing world-class audiology services with compassion and expertise."
        primaryCTA={{ label: "Meet Our Team", href: "#team" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive, compassionate, and accessible audiology services that improve the quality of life for individuals and families affected by hearing loss and related conditions throughout the Caribbean.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading audiology practice in the Caribbean, recognized for clinical excellence, innovative technology, and a patient-centered approach that sets the standard for hearing healthcare in the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Values"
            title="What Guides Us Every Day"
            description="Our core values shape every interaction and decision we make."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <ServiceCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Team"
            title="Meet Our Audiologists"
            description="Our experienced team is committed to providing you with the highest quality hearing care."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <Card key={t.name} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{t.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
                  <p className="text-muted-foreground text-sm">{t.bio}</p>
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

export default About;
