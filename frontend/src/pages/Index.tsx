import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Ear, Baby, Headphones, Activity, Shield, Heart,
  CheckCircle, HelpCircle, Lightbulb, ArrowRight, Users, Stethoscope, Star,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const services = [
  { icon: Ear, title: "Hearing Evaluations", desc: "Comprehensive diagnostic hearing assessments for all ages." },
  { icon: Headphones, title: "Hearing Aid Fitting", desc: "Custom fitting and programming of hearing aids." },
  { icon: Activity, title: "Tinnitus Treatment", desc: "Assessment and management of tinnitus symptoms." },
  { icon: Baby, title: "Pediatric Services", desc: "Specialized hearing care for infants and children." },
  { icon: Shield, title: "Industrial Screening", desc: "Occupational hearing conservation programs." },
  { icon: Heart, title: "Cochlear Implants", desc: "Evaluations, mapping, and rehabilitation support." },
];

const askYourself = [
  "Do you have difficulty hearing over the telephone?",
  "Do you have trouble following conversation when two or more people talk at the same time?",
  "Do people complain that you turn the TV volume up too high?",
  "Do you have to strain to understand conversation?",
  "Do you have trouble hearing in a noisy background?",
  "Do you find yourself asking people to repeat themselves?",
];

const didYouKnow = [
  "Hearing loss is the 3rd most common health problem globally.",
  "Over 5% of the world's population has disabling hearing loss.",
  "Noise-induced hearing loss is 100% preventable.",
  "Untreated hearing loss can lead to social isolation and depression.",
  "Most hearing loss can be effectively treated with hearing aids.",
];

const stats = [
  { icon: Users, target: 5200, label: "Happy Patients", suffix: "+" },
  { icon: Stethoscope, target: 12, label: "Expert Audiologists", suffix: "" },
  { icon: Star, target: 15, label: "Years of Service", suffix: "+" },
  { icon: Ear, target: 9800, label: "Hearing Tests Done", suffix: "+" },
];

const StatCounter = ({ icon: Icon, target, label, suffix }: { icon: any; target: number; label: string; suffix: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <Icon className="h-7 w-7 text-primary-foreground/80" />
      <span className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-primary-foreground/70">{label}</span>
    </div>
  );
};

const Index = () => (
  <Layout>
    {/* Hero with background image & teal blur overlay */}
    <section className="relative h-[calc(100dvh-4rem)] flex flex-col overflow-hidden">
      <img
        src={heroBg}
        alt="Audiology clinic"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Teal blur overlay using #267366 */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(38, 115, 102, 0.75)" }}
      />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 text-center max-w-3xl">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-4 animate-fade-in font-medium">
          Sense the Difference, Feel Alive
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
          Welcome to Caribbean Audiology Healthcare
        </h1>
        <p className="text-base text-white/85 mb-6 animate-fade-in drop-shadow" style={{ animationDelay: "0.1s" }}>
          A multidisciplinary approach to hearing healthcare — providing comprehensive audiological services for patients of all ages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/login" className="bg-slate-50 text-green-800">
            <Button size="lg" className="w-full sm:w-auto bg-white text-[#267366] hover:bg-white/90 font-semibold">
              Book Appointment
            </Button>
          </Link>
          <Link to="/services" className="bg-slate-50 text-green-800">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/50 text-green-800 hover:bg-white/10">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats bar pinned to bottom of hero viewport */}
      <div className="relative z-10 shrink-0 bg-primary/80 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((s, i) => (
              <StatCounter key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Ask Yourself */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <HelpCircle className="h-8 w-8 text-primary" />
          <h2 className="font-serif text-3xl font-bold text-foreground">Ask Yourself</h2>
        </div>
        <p className="text-center text-muted-foreground mb-6">
          If you answer "yes" to three or more of these questions, you may want to have your hearing evaluated.
        </p>
        <div className="space-y-3">
          {askYourself.map((q, i) => (
            <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground text-sm">{q}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/login">
            <Button>Schedule a Hearing Test</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <s.icon className="h-10 w-10 text-primary" />
                <h3 className="font-serif font-semibold text-lg text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Did You Know */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Lightbulb className="h-8 w-8" />
          <h2 className="font-serif text-3xl font-bold">Did You Know?</h2>
        </div>
        <div className="space-y-4">
          {didYouKnow.map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <span className="font-bold text-lg shrink-0">{i + 1}.</span>
              <span className="text-sm">{fact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Expert Team", desc: "Qualified audiologists with extensive clinical experience." },
            { title: "Modern Equipment", desc: "State-of-the-art diagnostic and treatment technology." },
            { title: "Patient-Centred", desc: "Individualized care plans tailored to your needs." },
          ].map((item, i) => (
            <div key={i} className="p-6">
              <h3 className="font-serif font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
