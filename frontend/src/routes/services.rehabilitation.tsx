import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ServiceDetailSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/services/rehabilitation")({
  loader: () => delay(450),
  pendingComponent: ServiceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "Rehabilitation & Counselling — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Auditory rehabilitation and family counselling to rebuild confidence in communication and everyday connection.",
      },
      { property: "og:title", content: "Rehabilitation & Counselling" },
      {
        property: "og:description",
        content:
          "Speechreading, communication strategies and family counselling from experienced audiologists.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Rehabilitation & Counselling"
        subtitle="Rebuild confidence in communication—at home, at work, and with the people you love."
      />
      <Prose>
        <h2>Auditory Rehabilitation</h2>
        <p>
          Auditory rehabilitation helps people with hearing loss rebuild confidence in communication
          by teaching practical tools that make conversations easier. One important skill is
          speechreading (lipreading), which uses visual cues such as lip movements, facial
          expressions, and gestures to support listening. Combined with hearing aids or assistive
          devices, speechreading can greatly improve understanding in noisy environments.
        </p>
        <p>
          Our programs focus on communication strategies for everyday life: facing the speaker
          directly in good lighting, reducing background noise, choosing quieter spaces, asking for
          repetition or rephrasing when needed. Family members and friends are guided to speak
          clearly at a natural pace and confirm understanding.
        </p>
        <p>
          Every patient's needs are unique, so our audiologist provides individualized sessions
          combining speechreading practice, listening exercises, and counselling.
        </p>

        <h2>Family Counselling</h2>
        <p>
          Family counselling in audiology provides guidance and support for caregivers and relatives
          who play an important role in helping loved ones manage hearing loss. Counselling sessions
          help relatives understand the impact of hearing loss, learn practical communication
          strategies, and build confidence in supporting daily interactions.
        </p>
        <p>
          Our audiologist provides personalized counselling that addresses emotional concerns,
          offers practical tools, and fosters teamwork between patients and their families. If you
          are caring for someone with hearing loss, contact us to schedule a family counselling
          session.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
