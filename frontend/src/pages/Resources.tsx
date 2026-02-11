import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  HelpCircle, MessageSquare, BookOpen, Ear, Headphones, Video, Star
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  { icon: HelpCircle, title: "FAQs", description: "Answers to commonly asked questions about hearing health.", href: "#faqs" },
  { icon: MessageSquare, title: "Testimonials", description: "Read what our patients have to say about their experience.", href: "#testimonials" },
  { icon: BookOpen, title: "Articles", description: "Educational articles about hearing health and audiology.", href: "#articles" },
  { icon: Ear, title: "Hearing Loss Guide", description: "A comprehensive guide to understanding hearing loss.", href: "#articles" },
  { icon: Headphones, title: "Hearing Aids Guide", description: "Everything you need to know about hearing aids.", href: "#articles" },
  { icon: Video, title: "Videos & Blog", description: "Watch videos and read blog posts about hearing health.", href: "#articles" },
];

const faqs = [
  { q: "How do I know if I have hearing loss?", a: "Common signs include difficulty understanding speech in noisy environments, frequently asking people to repeat themselves, turning up the TV volume, and feeling that others are mumbling. A professional hearing evaluation is the best way to determine if you have hearing loss." },
  { q: "At what age should children have their hearing tested?", a: "Newborns should be screened before leaving the hospital. Follow-up screenings are recommended at ages 4, 5, 6, 8, and 10, and during adolescence. However, if you notice any concerns about your child's hearing at any age, schedule an evaluation immediately." },
  { q: "How long do hearing aids last?", a: "Most hearing aids last 5–7 years with proper care. However, advances in technology may warrant an upgrade sooner. Regular maintenance and cleaning extend the life of your devices." },
  { q: "Are hearing aids covered by insurance?", a: "Coverage varies by insurance plan. We recommend contacting your insurance provider to understand your benefits. Our team can also help you navigate financing options to make hearing aids more affordable." },
  { q: "What is tinnitus and can it be treated?", a: "Tinnitus is the perception of sound (such as ringing, buzzing, or humming) when no external sound is present. While there is no cure, effective management strategies including sound therapy, counseling, and hearing aids can significantly reduce the impact on your quality of life." },
  { q: "How often should I have my hearing checked?", a: "Adults should have their hearing tested at least once every 3 years after age 50, or sooner if you notice any changes. If you work in a noisy environment or have risk factors for hearing loss, more frequent testing is recommended." },
];

const testimonials = [
  { name: "Sarah M.", text: "The team at Caribbean Audiology changed my life. After years of struggling, I finally feel connected to the world again.", rating: 5 },
  { name: "James R.", text: "Professional, caring, and thorough. The hearing aids they recommended are perfect for my lifestyle.", rating: 5 },
  { name: "Maria L.", text: "My son's newborn screening was handled with such care. We caught his hearing loss early thanks to their team.", rating: 5 },
];

const articles = [
  { title: "Understanding Different Types of Hearing Loss", description: "Learn about the three main types of hearing loss and how they affect your ability to hear.", category: "Education" },
  { title: "10 Tips for Caring for Your Hearing Aids", description: "Practical advice to keep your hearing aids in top condition and extend their lifespan.", category: "Hearing Aids" },
  { title: "The Connection Between Hearing Loss and Cognitive Decline", description: "Research shows a strong link between untreated hearing loss and cognitive decline. Here's what you need to know.", category: "Research" },
  { title: "Noise-Induced Hearing Loss: Prevention and Protection", description: "How to protect your hearing in noisy environments at work and in everyday life.", category: "Prevention" },
  { title: "How to Support a Loved One with Hearing Loss", description: "Communication strategies and tips for family members and friends of people with hearing loss.", category: "Support" },
  { title: "The Latest Advances in Hearing Aid Technology", description: "Explore the cutting-edge features available in today's modern hearing aids.", category: "Technology" },
];

const Resources = () => {
  return (
    <Layout>
      <Hero
        centered
        title="Patient"
        titleAccent="Resources"
        description="Explore our collection of educational resources, frequently asked questions, patient testimonials, and helpful articles about hearing health."
      />

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <a key={c.title} href={c.href}>
                <Card className="border-border hover:shadow-md transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <c.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader label="FAQs" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-serif">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader label="Testimonials" title="What Our Patients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="font-semibold text-foreground text-sm">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader label="Educational" title="Articles & Guides" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Card key={a.title} className="border-border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary bg-accent px-2 py-1 rounded mb-3">
                    {a.category}
                  </span>
                  <h3 className="font-serif font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.description}</p>
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

export default Resources;
