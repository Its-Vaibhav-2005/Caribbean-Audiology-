import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import CTABanner from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Factory, Baby, Stethoscope, UserCheck, Ear,
  Volume2, CircuitBoard, Bone, Shield
} from "lucide-react";
import { LucideIcon } from "lucide-react";

//Images . . .
import industryImage from "@/assets/Images/Industry.jpg"
import babyImage from "@/assets/Images/Child.jpg"
import evaluationImage from "@/assets/Images/Evaluation.png"
import paediatricImage from "@/assets/Images/Paediatric.jpg"
import tinnitusImage from "@/assets/Images/EarTest.jpg";
import earImage from "@/assets/Images/HearingAid.avif"

interface ServiceSection {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string[];
  image?: string;
}

const serviceSections: ServiceSection[] = [
  {
    id: "industrial-screening",
    icon: Factory,
    title: "Industrial Hearing Screening",
    description: [
      "Our industrial hearing screening program helps employers maintain a safe and healthy workplace. We provide on-site and in-clinic hearing assessments that comply with occupational health and safety standards.",
      "Regular screening helps identify noise-induced hearing loss early, allowing for timely intervention and workplace modifications to protect your employees' hearing health.",
    ],
    image: industryImage,
  },
  {
    id: "newborn-screening",
    icon: Baby,
    title: "Newborn Hearing Screening",
    description: [
      "Early identification of hearing loss is crucial for a child's speech, language, and cognitive development. Our newborn hearing screening program uses state-of-the-art technology to assess hearing in infants within the first few weeks of life.",
      "If a hearing loss is detected, we work with families to develop an early intervention plan to maximize the child's developmental potential.",
    ],
    image: babyImage,
  },
  {
    id: "evaluations",
    icon: Stethoscope,
    title: "Comprehensive Hearing Evaluations",
    description: [
      "Our diagnostic hearing evaluations provide a complete picture of your hearing health. Using advanced audiometric equipment, we assess the type, degree, and configuration of hearing loss.",
      "The evaluation includes pure tone audiometry, speech audiometry, tympanometry, and other specialized tests as needed to develop a personalized treatment plan.",
    ],
    image: evaluationImage,
  },
  {
    id: "paediatric",
    icon: UserCheck,
    title: "Paediatric Audiology",
    description: [
      "Children have unique hearing needs that require specialized expertise and a gentle approach. Our paediatric audiology services are designed to make hearing assessments comfortable and engaging for young patients.",
      "We use age-appropriate testing methods including visual reinforcement audiometry, play audiometry, and otoacoustic emissions to ensure accurate results for children of all ages.",
    ],
    image: paediatricImage
  },
  {
    id: "hearing-aid-fitting",
    icon: Ear,
    title: "Hearing Aid Fitting & Programming",
    description: [
      "Finding the right hearing aid is a personalized process. We work with you to select the best hearing aid style and technology level based on your hearing loss, lifestyle, and preferences.",
      "Our fitting process includes real-ear measurements, speech mapping, and fine-tuning to ensure your hearing aids provide optimal sound quality and comfort in every listening situation.",
    ],
    image: earImage
  },
  {
    id: "tinnitus-treatment",
    icon: Volume2,
    title: "Tinnitus Evaluation & Treatment",
    description: [
      "Tinnitus, or ringing in the ears, can significantly impact your quality of life. Our specialized tinnitus program includes a thorough evaluation to understand the nature and impact of your tinnitus.",
      "We offer a range of evidence-based treatment options including sound therapy, counseling, and hearing aids with tinnitus management features to help you find relief.",
    ],
    image: tinnitusImage
  },
  {
    id: "cochlear-implant",
    icon: CircuitBoard,
    title: "Cochlear Implant Services",
    description: [
      "For individuals with severe to profound hearing loss who do not benefit sufficiently from hearing aids, cochlear implants can be life-changing. We provide comprehensive cochlear implant services including candidacy evaluation, device programming, and rehabilitation.",
      "Our team works closely with ENT surgeons and speech-language pathologists to ensure the best possible outcomes for cochlear implant recipients.",
    ],
    image: null
  },
  {
    id: "bone-anchored",
    icon: Bone,
    title: "Bone Anchored Hearing Aids",
    description: [
      "Bone anchored hearing aids (BAHA) are an excellent solution for individuals with conductive hearing loss, mixed hearing loss, or single-sided deafness who cannot benefit from conventional hearing aids.",
      "We provide evaluation, fitting, and ongoing support for bone anchored hearing devices, working with surgical teams to ensure optimal outcomes.",
    ],
    image: null
  },
  {
    id: "ear-protection",
    icon: Shield,
    title: "Custom Ear Protection",
    description: [
      "Protecting your hearing is just as important as treating hearing loss. We offer custom-molded ear protection for musicians, industrial workers, swimmers, and anyone exposed to loud environments.",
      "Our custom earplugs provide superior comfort and protection compared to generic options, and can be designed for specific noise reduction requirements.",
    ],
    image: null
  },
];

const Services = () => {
  return (
    <Layout>
      <Hero
        centered
        title="Our Audiology"
        titleAccent="Services"
        description="We offer a comprehensive range of audiology services for patients of all ages, using the latest technology and evidence-based practices."
      />

      {serviceSections.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-20 ${index % 2 === 1 ? "bg-section-alt" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                {service.description.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                <Button asChild>
                  <Link to="/contact">Schedule This Service</Link>
                </Button>
              </div>
              <div className={`bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </Layout>
  );
};

export default Services;
