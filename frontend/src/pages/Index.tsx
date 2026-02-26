import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  Factory, Baby, Stethoscope, UserCheck, Ear, Volume2,
  CircuitBoard, Bone, Shield, Award, Cpu, Heart,
  Users, LifeBuoy, BookOpen, Star, ChevronRight, Check
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Images . . .
import earImage from "@/assets/Images/EarTest.jpg"
import careImage from "@/assets/Images/Care.jpg"
import healpingImage from "@/assets/Images/Helping.jpg"

const services = [
  { icon: Factory, title: "Industrial Screening", description: "Comprehensive hearing screenings for workplace safety and occupational health compliance." },
  { icon: Baby, title: "Newborn Screening", description: "Early detection of hearing loss in newborns for timely intervention and development." },
  { icon: Stethoscope, title: "Hearing Evaluations", description: "Thorough diagnostic assessments to determine the type and degree of hearing loss." },
  { icon: UserCheck, title: "Paediatric Audiology", description: "Specialized hearing services tailored for infants, children, and adolescents." },
  { icon: Ear, title: "Hearing Aid Fitting", description: "Expert selection, fitting, and programming of hearing aids for optimal performance." },
  { icon: Volume2, title: "Tinnitus Treatment", description: "Evidence-based management and relief strategies for ringing in the ears." },
  { icon: CircuitBoard, title: "Cochlear Implant", description: "Assessment and rehabilitation for cochlear implant candidates and recipients." },
  { icon: Bone, title: "Bone Anchored Hearing", description: "Advanced bone conduction hearing solutions for specific types of hearing loss." },
  { icon: Shield, title: "Custom Ear Protection", description: "Custom-molded hearing protection for musicians, industrial workers, and swimmers." },
];

const benefits = [
  { icon: Award, title: "Expert Audiologists", description: "Our team holds advanced degrees and international certifications." },
  { icon: Cpu, title: "Cutting-Edge Technology", description: "State-of-the-art equipment for accurate diagnosis and treatment." },
  { icon: Heart, title: "Patient-Centered Care", description: "Personalized treatment plans designed around your unique needs." },
  { icon: Users, title: "Multidisciplinary Approach", description: "Collaboration with ENT specialists, speech therapists, and more." },
  { icon: LifeBuoy, title: "Lifetime Support", description: "Ongoing follow-up care and adjustments for lasting results." },
  { icon: BookOpen, title: "Research-Driven Practice", description: "Treatment protocols based on the latest scientific evidence." },
];

const testimonials = [
  { name: "Sarah M.", text: "The team at Caribbean Audiology changed my life. After years of struggling with hearing loss, I finally feel connected to the world again.", rating: 5 },
  { name: "James R.", text: "Professional, caring, and thorough. The hearing evaluation was comprehensive and the hearing aids they recommended are perfect.", rating: 5 },
  { name: "Maria L.", text: "My son's newborn screening was handled with such care and expertise. We caught his hearing loss early thanks to their team.", rating: 5 },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Served" },
  { value: "98%", label: "Satisfaction Rate" },
];

const patientFirst = [
  "Comprehensive initial consultation and assessment",
  "Personalized treatment plans for every patient",
  "Ongoing monitoring and follow-up care",
  "Education and counseling for patients and families",
  "Access to the latest hearing technology",
  "Comfortable and welcoming clinic environment",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        badge="Now Accepting New Patients"
        title="Your Hearing Health,"
        titleAccent="Our Priority"
        description="At Caribbean Audiology Healthcare, we provide comprehensive audiology services with compassion, expertise, and the latest technology to help you hear the world more clearly."
        primaryCTA={{ label: "Book Appointment", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
      >
        <div className="relative">
          <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <img
              src={earImage}
              alt="Ear test"
              className="h-full w-full object-cover" 
            />
          </div>
          <Card className="absolute -bottom-4 -left-4 shadow-lg animate-fade-in">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Trusted by Families</p>
                <p className="text-xs text-muted-foreground">Throughout the Caribbean</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Hero>

      {/* Stats Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-xs md:text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="What We Offer"
            title="Our Services"
            description="Comprehensive audiology services for patients of all ages, from screening to rehabilitation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Why Choose Us"
            title="Dedicated to Your Hearing Health"
            description="We combine clinical expertise with genuine care to deliver outstanding hearing healthcare."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <ServiceCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Patient First */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <img 
                src={healpingImage}
                alt="Helping patient"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
                Our Approach
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Putting Patients First, Always
              </h2>
              <ul className="space-y-3 mb-6">
                {patientFirst.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn About Our Approach <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tinnitus Care */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
                Specialized Care
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Living With Tinnitus? We Can Help.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tinnitus affects millions of people worldwide. Our specialized tinnitus management program combines the latest therapeutic approaches to help you find relief and regain control of your life.
              </p>
              <Button asChild>
                <Link to="/tinnitus">Learn About Tinnitus Care</Link>
              </Button>
            </div>
            <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <Volume2 className="h-20 w-20 text-primary/40" />
              <img
                src={careImage}
                alt="Specialized Care"
                className="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Testimonials"
            title="What Our Patients Say"
            description="Real stories from people whose lives have been transformed by better hearing."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <p className="font-semibold text-foreground text-sm">— {t.name}</p>
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

export default Index;
