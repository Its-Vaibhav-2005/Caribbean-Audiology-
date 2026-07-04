import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ResourceDetailSkeleton } from "@/components/site/Skeletons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    title: "Hearing Loss",
    items: [
      {
        id: "hl-1",
        question: "What are the signs of hearing loss?",
        answer:
          "You may have hearing loss if you often ask people to repeat themselves, find it hard to follow conversations in noisy places, turn up the TV or radio louder than others prefer, or notice ringing in your ears. If these sound familiar, it’s time for a hearing check.",
      },
      {
        id: "hl-2",
        question: "What causes hearing loss?",
        answer:
          "Hearing loss can happen for many reasons. It may be related to aging, loud noise exposure, ear infections, fluid in the ear, too much earwax, certain medications, head injuries, or even genetics. Sometimes it’s temporary, but often it needs treatment.",
      },
      {
        id: "hl-3",
        question: "What types of hearing loss are there?",
        answer:
          "Sensorineural hearing loss happens when the inner ear or hearing nerve is damaged. Conductive hearing loss occurs when something blocks sound from reaching the inner ear, such as wax or fluid. Mixed hearing loss is a combination of both. Auditory neuropathy is a rare condition where sound doesn’t travel properly to the brain.",
      },
      {
        id: "hl-4",
        question: "How is hearing loss diagnosed?",
        answer:
          "An audiologist will check your ears for wax or infection, run simple listening tests, and may use special equipment to measure how well you hear different sounds. These tests are quick and painless.",
      },
      {
        id: "hl-5",
        question: "What treatments of hearing loss are available?",
        answer:
          "Simple solutions like removing earwax or treating infections can restore hearing. Surgery may help with fluid buildup or repairing the eardrum. Hearing aids are small devices that make sounds clearer and easier to understand. Cochlear implants are used for severe hearing loss, helping people hear by sending signals directly to the hearing nerve.",
      },
      {
        id: "hl-6",
        question: "Why is hearing loss treatment important?",
        answer:
          "Untreated hearing loss can lead to loneliness, frustration, and even memory problems. Protecting your ears from loud noise and getting help early will keep you healthier and more connected.",
      },
    ],
  },
  {
    title: "Tinnitus",
    items: [
      {
        id: "tin-1",
        question: "What does tinnitus feel like?",
        answer:
          "People describe tinnitus as ringing, buzzing, hissing, clicking, or roaring in one or both ears. It may be constant or come and go. For some, it’s only noticeable in quiet settings; for others, it interferes with sleep, concentration, or daily life.",
      },
      {
        id: "tin-2",
        question: "What Tinnitus Treatments are Available?",
        answer:
          "There is no single cure for tinnitus, but many treatments can reduce its impact. Removing earwax, treating infections, or adjusting medications may help if these are the cause. Hearing aids can amplify external sounds, making tinnitus less noticeable. Sound therapy, such as background noise or white noise machines, can mask tinnitus. Counseling and cognitive behavioral therapy can reduce stress and improve coping. Tinnitus retraining therapy combines counseling with sound therapy to retrain how the brain responds to tinnitus. Lifestyle changes such as stress management, good sleep habits, and limiting caffeine or alcohol can also make a difference.",
      },
      {
        id: "tin-3",
        question: "Why Is Tinnitus Treatment Important?",
        answer:
          "Persistent tinnitus can affect sleep, mood, and concentration. It may also signal hearing loss or another health condition. Seeking assessment ensures that underlying issues are addressed and that you receive support to manage symptoms effectively.",
      },
    ],
  },
  {
    title: "Hyperacusis",
    items: [
      {
        id: "hyp-1",
        question: "What is hyperacusis?",
        answer:
          "Hyperacusis is a condition in which everyday sounds are experienced as excessively loud, painful, or distressing. People with hyperacusis may find normal noises such as coins jingling, water running, or pages turning intolerable. This sensitivity can cause ear pain, ringing in the ears, a sense of fullness or pressure, and emotional effects such as anxiety, irritability, or social withdrawal.",
      },
      {
        id: "hyp-2",
        question: "What are different types of hyperacusis?",
        answer:
          "There are different types of hyperacusis: loudness hyperacusis, where sounds seem excessively loud; annoyance hyperacusis, where specific sounds trigger anger or irritation; fear hyperacusis, where sounds provoke anxiety; and pain hyperacusis, where sounds cause physical discomfort.",
      },
      {
        id: "hyp-3",
        question: "What are the causes and risk factors of hyperacusis?",
        answer:
          "The condition can arise from several causes, including tinnitus, migraines, Ménière’s disease, head injury, facial nerve damage, or prolonged exposure to loud noise. It is sometimes linked to neurological or developmental conditions such as autism or Williams syndrome.",
      },
      {
        id: "hyp-4",
        question: "What is the treatment of hyperacusis?",
        answer:
          "Although there is no permanent cure, many people improve with therapy over time. Treatment focuses on retraining the brain’s response to sound. Sound therapy often increases tolerance within six to twelve months, and if the condition is linked to a temporary cause such as medication or surgery, symptoms may resolve once the underlying issue improves.\n\nThe most important advice is to seek audiologist help if everyday sounds feel unbearable, don’t ignore it. Avoid isolating yourself or relying on constant earplug use is not a good option. With the right care, hyperacusis can be managed so you can feel more comfortable and confident in daily life.",
      },
    ],
  },
  {
    title: "Dizziness & Balance",
    items: [
      {
        id: "bal-1",
        question: "Why am I feeling dizzy or off balance?",
        answer:
          "Dizziness and balance problems can have many causes. In audiology, they are often linked to the inner ear, which plays a key role in keeping you steady. Other factors such as medications, blood pressure, or vision issues may also contribute.",
      },
      {
        id: "bal-2",
        question: "How does the ear affect balance?",
        answer:
          "Your inner ear contains the vestibular system, which senses movement and position. If this system is disrupted by infection, fluid changes, or other conditions, you may feel dizzy, lightheaded, or unsteady.",
      },
      {
        id: "bal-3",
        question: "What tests will I need?",
        answer:
          "To understand the cause, your audiologist or ENT specialist may recommend hearing tests, balance assessments such as videonystagmography, a medical review of your health and medications, or imaging and lab tests if needed.",
      },
      {
        id: "bal-4",
        question: "What treatments are available?",
        answer:
          "Treatment depends on the underlying problem. Options may include vestibular rehabilitation therapy, which uses exercises to retrain balance; adjustments to medications if side effects are involved; lifestyle changes such as staying hydrated, managing stress, and limiting caffeine or alcohol; hearing aids or devices if hearing loss is part of the issue; or medical and surgical care for specific inner ear conditions.",
      },
    ],
  },
];

export const Route = createFileRoute("/resources/faqs")({
  loader: () => delay(450),
  pendingComponent: ResourceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "FAQs — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Answers to common questions about hearing loss, tinnitus, hyperacusis, and hearing tests.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Common questions about hearing loss, tinnitus and hyperacusis, answered.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="Resources" title="Frequently Asked Questions" />

      <main className="mx-auto max-w-4xl px-5 sm:px-8 py-16">
        <div className="space-y-12">
          {FAQ_DATA.map((category) => (
            <div key={category.title} className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl text-teal border-b pb-2 mb-6">
                {category.title}
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-border rounded-lg bg-card px-4 sm:px-6 shadow-sm hover:border-teal-mid/50 transition-colors"
                  >
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-teal hover:text-teal-mid hover:no-underline py-4 text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm sm:text-base leading-relaxed whitespace-pre-line pb-4 pt-1">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  ),
});
