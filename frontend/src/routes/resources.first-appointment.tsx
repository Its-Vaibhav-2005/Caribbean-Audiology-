import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ResourceDetailSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/resources/first-appointment")({
  loader: () => delay(450),
  pendingComponent: ResourceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "What to Expect at Your First Appointment — Caribbean Audiology" },
      {
        name: "description",
        content:
          "A step-by-step guide for adults, seniors, and paediatric first audiological appointments.",
      },
      { property: "og:title", content: "What to Expect at Your First Appointment" },
      {
        property: "og:description",
        content: "Prepare for your first visit—what happens, what to bring, and next steps.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Resources"
        title="What to Expect at Your First Appointment"
        subtitle="For adults, seniors, parents, and caregivers."
      />
      <Prose>
        <h2>Before the appointment</h2>
        <ul>
          <li>
            <strong>Personal history:</strong> You'll be asked about medical background,
            medications, noise exposure, and any hearing or balance concerns.
          </li>
          <li>Bring a list of current medications and any previous hearing test results.</li>
          <li>If possible, bring a family member or friend who can join the discussion.</li>
        </ul>

        <h2>During the appointment</h2>
        <ul>
          <li>
            <strong>Ear examination (otoscopy):</strong> A gentle look inside the ear to check for
            wax or blockages.
          </li>
          <li>
            <strong>Hearing tests:</strong> Pure tone audiometry, speech testing, tympanometry, and
            other non-invasive tests as needed.
          </li>
          <li>
            <strong>Discussion of results:</strong> Your audiologist explains the findings clearly
            and answers questions.
          </li>
        </ul>

        <h2>After the appointment</h2>
        <ul>
          <li>
            <strong>Recommendations:</strong> Hearing aids, medical follow-up, or ongoing monitoring
            depending on results.
          </li>
          <li>
            <strong>Support &amp; resources:</strong> Guidance on communication strategies and next
            steps.
          </li>
        </ul>

        <h2>Paediatric first appointment</h2>
        <p>
          For infants and children, the audiologist uses age-appropriate testing techniques—play
          audiometry, otoacoustic emissions, or auditory brainstem response—performed while your
          child is calm or asleep. Parents receive guidance on communication strategies, school
          support, and follow-up care.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
