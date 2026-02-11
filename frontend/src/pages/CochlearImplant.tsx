import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  CircuitBoard, Check, Stethoscope, Ear, MessageSquare,
  GraduationCap, Users, Search, Wrench, CalendarCheck, BarChart
} from "lucide-react";

const candidacy = [
  "Severe to profound sensorineural hearing loss in both ears",
  "Limited benefit from properly fitted hearing aids",
  "Adults and children (as young as 12 months)",
  "Motivation and realistic expectations for outcomes",
  "No medical contraindications to surgery",
  "Access to rehabilitation and follow-up services",
];

const team = [
  { icon: Stethoscope, title: "ENT Surgeon", description: "Performs the surgical implantation and provides medical oversight." },
  { icon: Ear, title: "Audiologist", description: "Conducts evaluations, programs the implant, and provides ongoing support." },
  { icon: MessageSquare, title: "Speech-Language Pathologist", description: "Provides therapy to develop listening and speaking skills post-implant." },
  { icon: GraduationCap, title: "Educator of the Deaf", description: "Supports educational needs for children with cochlear implants." },
  { icon: Users, title: "Social Worker", description: "Provides emotional support and connects families with resources." },
];

const steps = [
  { step: 1, icon: Search, title: "Candidacy Evaluation", description: "A comprehensive assessment to determine if a cochlear implant is the best option for you." },
  { step: 2, icon: Stethoscope, title: "Surgical Consultation", description: "Meeting with the ENT surgeon to discuss the procedure, risks, and expected outcomes." },
  { step: 3, icon: Wrench, title: "Implant Surgery", description: "The cochlear implant is surgically placed, typically as an outpatient procedure." },
  { step: 4, icon: CalendarCheck, title: "Activation & Programming", description: "About 2-4 weeks after surgery, the external processor is activated and programmed." },
  { step: 5, icon: BarChart, title: "Rehabilitation & Follow-up", description: "Ongoing therapy and adjustments to maximize your hearing potential with the implant." },
];

const CochlearImplant = () => {
  return (
    <Layout>
      <Hero
        badge="Cochlear Implants"
        title="Cochlear Implant"
        titleAccent="Services"
        description="For individuals with severe to profound hearing loss who don't benefit from hearing aids, cochlear implants can open the door to a world of sound."
        primaryCTA={{ label: "Am I a Candidate?", href: "/contact" }}
        secondaryCTA={{ label: "Learn More", href: "#candidacy" }}
      >
        <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
          <CircuitBoard className="h-24 w-24 text-primary/40" />
        </div>
      </Hero>

      {/* Candidacy */}
      <section id="candidacy" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
                Candidacy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Who Can Benefit?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cochlear implants are suitable for both adults and children who meet certain criteria. A thorough evaluation determines candidacy.
              </p>
              <ul className="space-y-3">
                {candidacy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <CircuitBoard className="h-20 w-20 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Team"
            title="The Cochlear Implant Team"
            description="A multidisciplinary team works together to ensure the best outcomes for cochlear implant recipients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((t) => (
              <Card key={t.title} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <t.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="The Process"
            title="The Cochlear Implant Journey"
            description="From evaluation to rehabilitation, here's what to expect."
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

export default CochlearImplant;
