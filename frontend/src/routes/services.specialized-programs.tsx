import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services/specialized-programs")({
  head: () => ({
    meta: [
      { title: "Specialized Programs — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Tele-audiology, industrial hearing conservation and screening, and custom molds for hearing protection and swim plugs.",
      },
      { property: "og:title", content: "Specialized Programs" },
      {
        property: "og:description",
        content: "Tele-audiology, industrial hearing conservation and custom molds.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Specialized Programs"
        subtitle="Remote consultations, workplace hearing conservation, and custom-molded protection."
      />
      <Prose>
        <h2>Tele-audiology</h2>
        <p>
          Tele-audiology brings expert hearing care directly to patients through secure online
          platforms. Patients can connect with their audiologist from home, reducing travel time and
          ensuring timely access to professional guidance. Sessions are ideal for discussing hearing
          concerns, reviewing test results, and receiving counselling or communication strategies
          without an in-person visit.
        </p>
        <p>
          Follow-up care is also simplified through tele-audiology. Patients can schedule quick
          check-ins to monitor progress, troubleshoot devices, or ask questions about rehabilitation
          programs. Family members or caregivers can join the session to stay informed.
        </p>

        <h2>Industrial Hearing Conservation</h2>
        <p>
          Industrial hearing conservation programs protect workers from noise-induced hearing loss.
          Employers monitor workplace noise levels, provide hearing protection, conduct annual
          hearing tests, and train employees on safe practices. When noise exposure exceeds 85 dBA,
          action must be taken. In Trinidad &amp; Tobago, industries such as manufacturing,
          construction, and petrochemicals are expected to follow OSHA standards and regional
          regulations.
        </p>

        <h2>Industrial Hearing Screening</h2>
        <p>
          Long-term exposure to noise levels of 85 dB or greater can cause permanent hearing damage.
          OSHA has made it mandatory for all employees who frequently work in environments with
          noise levels greater than 85 dB to undergo annual hearing tests. Any size company can take
          advantage of our complete hearing conservation programs, which include hearing screening,
          management training, and employee education.
        </p>

        <h2>Custom Molds for Hearing Protection / Swim Plugs</h2>
        <p>
          Custom-molded ear plugs are a practical solution for firefighters, musicians, hunters,
          industrial workers, motorcyclists, skydivers, and anyone exposed to loud sounds—effective
          where conventional plugs fail to block enough noise, fall out, or cause pain. Custom
          swimming ear plugs protect ears from chlorinated water, saltwater, and bacteria with
          superior fit, durability, and sealing.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
