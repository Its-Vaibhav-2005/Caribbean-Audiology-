import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";

export const Route = createFileRoute("/resources/faqs")({
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
      <Prose>
        <h2>What is hearing loss?</h2>
        <p>
          Hearing loss is when it becomes hard to hear sounds around you, whether it's soft, medium,
          or loud noises. It can happen slowly with age or suddenly due to injury, illness, or noise
          exposure.
        </p>

        <h2>How do I know if I have hearing loss?</h2>
        <p>
          You may have hearing loss if you often ask people to repeat themselves, find it hard to
          follow conversations in noisy places, turn up the TV or radio louder than others prefer,
          or notice ringing in your ears. If these sound familiar, it's time for a hearing check.
        </p>

        <h2>What causes hearing loss?</h2>
        <p>
          Hearing loss can happen for many reasons—aging, loud noise exposure, ear infections, fluid
          in the ear, too much earwax, certain medications, head injuries, or genetics. Sometimes
          it's temporary, but often it needs treatment.
        </p>

        <h2>What types of hearing loss are there?</h2>
        <p>
          There are three main types: conductive (problems in the outer or middle ear),
          sensorineural (damage to the inner ear or nerve), and mixed (a combination of both). An
          audiologist can determine which type you have.
        </p>

        <h2>What is tinnitus?</h2>
        <p>
          Tinnitus is the perception of sound—ringing, buzzing, humming, or hissing—when no external
          sound is present. It's often linked to hearing loss but can also be triggered by stress,
          medications, or ear injury.
        </p>

        <h2>What is hyperacusis?</h2>
        <p>
          Hyperacusis is a condition in which everyday sounds are experienced as excessively loud,
          painful, or distressing. People with hyperacusis may find normal noises such as coins
          jingling, water running, or pages turning intolerable. This sensitivity can cause ear
          pain, ringing in the ears, a sense of fullness or pressure, and emotional effects such as
          anxiety, irritability, or social withdrawal.
        </p>

        <h2>The takeaway</h2>
        <p>
          If you notice changes in your hearing, don't ignore them. Book a hearing test and talk to
          a professional about the best treatment for you. With the right support, you can enjoy
          conversations, music, and everyday sounds again.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
