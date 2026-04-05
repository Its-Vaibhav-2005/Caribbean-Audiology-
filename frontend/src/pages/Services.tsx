import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Ear, Baby, Headphones, Activity, Shield, Heart,
  Wrench, AudioLines, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Industrial Hearing Screening",
    desc: "Occupational hearing conservation programs including baseline and annual audiometric testing, noise surveys, and worker education.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Baby,
    title: "Newborn Hearing Screening",
    desc: "Early identification of hearing loss in newborns using OAE and ABR testing for better speech and language outcomes.",
    color: "from-accent/60 to-accent/20",
  },
  {
    icon: Ear,
    title: "Comprehensive Hearing Evaluations",
    desc: "Full diagnostic assessments including pure-tone audiometry, speech audiometry, tympanometry, and otoacoustic emissions.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Baby,
    title: "Paediatric Audiology Services",
    desc: "Specialized hearing evaluations and management for children of all ages, including visual reinforcement and conditioned play audiometry.",
    color: "from-accent/60 to-accent/20",
  },
  {
    icon: Headphones,
    title: "Hearing Aid Fitting & Programming",
    desc: "Selection, fitting, and programming of hearing aids based on individual hearing loss, lifestyle needs, and preferences.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Activity,
    title: "Tinnitus Assessment & Treatment",
    desc: "Comprehensive tinnitus evaluation and individualized management plans including sound therapy, counselling, and TRT.",
    color: "from-accent/60 to-accent/20",
  },
  {
    icon: Heart,
    title: "Cochlear Implant Evaluations & Mapping",
    desc: "Candidacy assessments for cochlear implants and ongoing programming for implant recipients with surgical team collaboration.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: AudioLines,
    title: "Bone Anchored Hearing Systems",
    desc: "Evaluation and fitting of BAHA for patients with conductive hearing loss, single-sided deafness, or mixed hearing loss.",
    color: "from-accent/60 to-accent/20",
  },
  {
    icon: Wrench,
    title: "Custom Ear Molds & Hearing Protection",
    desc: "Custom-made earmolds for hearing aids, swim plugs, and noise-attenuating earplugs for musicians, hunters, and industrial workers.",
    color: "from-primary/20 to-primary/5",
  },
];

const Services = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4 text-center max-w-3xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium mb-6">
          What We Offer
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          We offer a full range of audiological services to diagnose, treat, and manage hearing and balance disorders for patients of all ages.
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Take the First Step?
        </h2>
        <p className="text-muted-foreground mb-8">
          Book an appointment today and let our expert audiologists help you on your journey to better hearing.
        </p>
        <Link to="/login">
          <Button size="lg" className="font-semibold">
            Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
