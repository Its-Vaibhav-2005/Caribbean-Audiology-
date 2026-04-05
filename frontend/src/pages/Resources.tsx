import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What are the signs of hearing loss?",
    a: "Common signs include difficulty hearing conversations (especially in noisy environments), frequently asking people to repeat themselves, turning up the TV volume, and feeling like people are mumbling.",
  },
  {
    q: "How often should I get my hearing tested?",
    a: "Adults should have their hearing tested at least once every 10 years until age 50, then every 3 years after. If you work in a noisy environment or notice changes in your hearing, get tested more frequently.",
  },
  {
    q: "What causes tinnitus?",
    a: "Tinnitus can be caused by noise exposure, age-related hearing loss, ear infections, earwax buildup, head/neck injuries, and certain medications. An audiological evaluation can help determine the underlying cause.",
  },
  {
    q: "When should my child's hearing be tested?",
    a: "All newborns should receive a hearing screening before leaving the hospital. If your child fails the initial screening, follow-up testing should occur within 3 months. Ongoing monitoring is recommended throughout childhood.",
  },
  {
    q: "How do hearing aids work?",
    a: "Hearing aids are electronic devices that amplify sound. They consist of a microphone, amplifier, and speaker. Modern digital hearing aids can be programmed to match your specific hearing loss pattern and adjusted for different listening environments.",
  },
  {
    q: "Does insurance cover hearing aids?",
    a: "Coverage varies by insurance plan and region. Contact your insurance provider to verify your benefits. Our team can assist with insurance inquiries and provide documentation for claims.",
  },
];

const Resources = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Resources</h1>
        <p className="text-lg text-muted-foreground">
          Helpful information about hearing health, hearing aids, and audiological care.
        </p>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <HelpCircle className="h-7 w-7 text-primary" />
          <h2 className="font-serif text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline text-left font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Hearing Loss Info */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <BookOpen className="h-7 w-7 text-primary" />
          <h2 className="font-serif text-2xl font-bold text-foreground">Understanding Hearing Loss</h2>
        </div>
        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <p>
            Hearing loss can range from mild to profound and may affect one or both ears. The three main types are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Conductive:</strong> Caused by problems in the outer or middle ear, often treatable medically or surgically.</li>
            <li><strong className="text-foreground">Sensorineural:</strong> Results from damage to the inner ear or auditory nerve, typically permanent but manageable with hearing aids or cochlear implants.</li>
            <li><strong className="text-foreground">Mixed:</strong> A combination of both conductive and sensorineural hearing loss.</li>
          </ul>
          <p>
            Early detection and treatment of hearing loss is crucial for maintaining communication abilities, cognitive health, and quality of life.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Resources;
