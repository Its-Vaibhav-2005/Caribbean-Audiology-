import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { delay } from "@/lib/utils";
import { ServiceDetailSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/services/hearing-devices")({
  loader: () => delay(450),
  pendingComponent: ServiceDetailSkeleton,
  head: () => ({
    meta: [
      { title: "Hearing Devices — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Hearing aid fitting & programming, cochlear implant evaluations & mapping, bone-anchored hearing systems, and assistive listening technology.",
      },
      { property: "og:title", content: "Hearing Devices" },
      {
        property: "og:description",
        content: "Custom-fit hearing aids, cochlear implants and assistive listening technology.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Hearing Devices"
        subtitle="Precision-fit hearing solutions, expertly programmed and personally supported."
      />
      <Prose>
        <h2>Hearing Aid Fitting &amp; Programming</h2>
        <p>
          A hearing aid is a prescription device. Fitting your hearing aids correctly and adjusting
          the settings carefully are the two most important steps to get the finest listening
          experience out of your hearing aids. Each individual's ear canal differs in shape, size,
          and acoustic resonance, which impacts the sound delivered to the ear canal. Custom fit and
          manual programming are essential to provide the precise level of amplification needed at
          every frequency.
        </p>
        <p>
          Hearing aids are programmed based on the results of the hearing evaluation and your
          preferences. We offer manual programming while you're there—more accurate than automatic
          programming, and very effective for real-world requirements.
        </p>

        <h2>Cochlear Implant Evaluations &amp; Mapping</h2>
        <p>
          Cochlear implants provide direct electrical stimulation to the auditory nerve by placing
          electrodes adjacent to the nerve, providing hearing in eligible hearing-impaired children
          and adults. Patients with single-sided deafness, hearing loss in both ears, and ski-slope
          high-frequency hearing loss could benefit.
        </p>
        <p>
          After surgical placement in a hospital or clinic, the device is activated and programmed
          (mapped) by the audiologist a few weeks later, with further rehabilitation to train the
          brain to recognize speech. Our team provides comprehensive evaluations, device
          programming, ongoing monitoring, troubleshooting, and educational recommendations.
        </p>

        <h2>Bone Anchored Hearing Systems / Bone Conduction Devices</h2>
        <p>
          A bone-anchored hearing system can be implanted surgically or used non-surgically as a
          soft band or headband. It transmits sound via vibrations through the bones of the skull to
          the cochlea, bypassing the middle ear. Suitable for people with conductive or mixed
          hearing loss with chronic ear infections, congenital ear malformations, or single-sided
          deafness.
        </p>

        <h2>Assistive Listening Technology</h2>
        <p>
          Assistive listening technology makes conversations clearer and more enjoyable in busy
          environments. FM systems use wireless microphones for lectures and classrooms; infrared
          systems deliver clear audio in theatres; induction loop systems transmit sound through
          magnetic fields to telecoil-equipped hearing aids in churches and auditoriums. Bluetooth
          and wireless streaming connect to phones, TVs, and laptops. Personal amplifiers enhance
          one-on-one conversations.
        </p>
        <p>
          Our clinic provides personalized assessments to match the right technology to each
          lifestyle, with demonstrations and ongoing support.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
