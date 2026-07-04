import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ResourceDetailSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/resources/hearing-aids-guide")({
  loader: () => delay(450),
  pendingComponent: ResourceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "Hearing Aids Guide — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content: "Your guide to hearing aids: how they work, styles, care tips, and common myths.",
      },
      { property: "og:title", content: "Your Guide to Hearing Aids" },
      {
        property: "og:description",
        content: "How hearing aids work, styles, care and success tips.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="Resources" title="Your Guide to Hearing Aids" />
      <Prose>
        <h2>How they work</h2>
        <p>
          Modern hearing aids are small, comfortable, and technologically advanced. They amplify the
          sounds you need to hear, filter background noise, and can even connect to your phone, TV,
          and tablet via Bluetooth. Your audiologist will program the device to match your hearing
          loss and lifestyle.
        </p>

        <h2>Choosing the right hearing aid</h2>
        <p>Your audiologist will:</p>
        <ul>
          <li>Help you choose the right style</li>
          <li>Program the device to match your hearing loss</li>
          <li>Guide you through follow-up visits and adjustments</li>
        </ul>

        <h2>Tips for success</h2>
        <ul>
          <li>Wear them daily to get used to the sound</li>
          <li>Keep them clean and dry</li>
          <li>Change batteries or charge regularly</li>
          <li>Visit your audiologist for adjustments</li>
        </ul>

        <h2>Common myths</h2>
        <ul>
          <li>
            <strong>"Hearing aids make everything too loud."</strong> Modern devices balance sounds
            naturally.
          </li>
          <li>
            <strong>"Only older people need them."</strong> Hearing loss can affect anyone, at any
            age.
          </li>
        </ul>
      </Prose>
      <Footer />
    </div>
  ),
});
