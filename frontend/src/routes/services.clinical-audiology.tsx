import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services/clinical-audiology")({
  head: () => ({
    meta: [
      { title: "Clinical Audiology — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Diagnostic hearing evaluations, tinnitus management, and balance & vestibular testing led by experienced audiologists.",
      },
      { property: "og:title", content: "Clinical Audiology" },
      {
        property: "og:description",
        content: "Diagnostic evaluations, tinnitus care and vestibular testing.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Clinical Audiology"
        subtitle="Comprehensive diagnostic care for hearing, tinnitus and balance."
      />
      <Prose>
        <h2>Diagnostic Hearing Evaluations</h2>
        <p>
          Hearing loss usually develops gradually over time, and not all cases can be identified
          early enough to prevent serious damage. A comprehensive hearing evaluation provides
          diagnostic information on the severity of your hearing loss, plus crucial information for
          determining whether medical or surgical intervention is possible or whether hearing aids
          would be beneficial. Strategies for enhancing communication and preventing hearing loss
          may also be discussed.
        </p>
        <p>
          A comprehensive hearing evaluation is a series of non-invasive tests carried out by an
          audiologist. These include otoscopy, pure tone audiometry, speech audiometry,
          tympanometry, acoustic reflex threshold, otoacoustic emissions, auditory brainstem
          response and others. The appropriate methods depend on the objective of the test, the age
          of the person, and the work environment.
        </p>
        <p>
          The first step in addressing hearing loss is to schedule a comprehensive
          assessment—especially if you feel you may be experiencing signs of hearing loss, or your
          family and friends have encouraged you to check your hearing.
        </p>

        <h2>Tinnitus Evaluation &amp; Management</h2>
        <p>
          Tinnitus is the conscious perception of sound in the absence of an external sound source.
          An individual with tinnitus may hear a ringing, buzzing, humming, roaring, pulsating
          noise, or crickets chirping. Tinnitus is frequently associated with auditory conditions
          such as hearing loss and hyperacusis; it may also be associated with non-auditory
          conditions such as stress, anxiety, depression, and insomnia.
        </p>
        <p>
          If you are experiencing tinnitus, we offer a comprehensive tinnitus evaluation to
          determine the severity and nature of the condition. Our clinic offers tinnitus
          rehabilitation therapy as one of its treatment options. Many people with tinnitus also
          suffer from hearing loss; treating the underlying hearing loss can provide relief or
          reduce the severity of tinnitus symptoms. A sound therapy program may be useful for some
          hyperacusis patients to help desensitize their reactions to loud noise.
        </p>

        <h2>
          Balance &amp; Vestibular Testing{" "}
          <span className="ml-2 align-middle text-xs font-semibold rounded-full bg-aqua/50 text-teal px-2.5 py-1">
            Upcoming Service
          </span>
        </h2>
        <p>
          Balance is something most of us take for granted until dizziness or unsteadiness
          interferes with daily life. Walking across a room, climbing stairs, or turning your head
          all depend on a stable sense of balance—essential for safety, independence, and
          confidence.
        </p>
        <p>
          Your inner ear does more than help you hear; it also houses the vestibular system, which
          works with your eyes and muscles to keep you oriented and stable. When this system isn't
          functioning properly, you may experience dizziness, vertigo, blurred vision, or
          unsteadiness.
        </p>
        <p>
          Our clinic anticipates providing eye movement recording (VNG/ENG), head impulse testing
          (vHIT), rotary chair testing, vestibular evoked responses (VEMP), and electrocochleography
          (ECOG). Each test is explained clearly before it begins, and our team ensures you feel
          comfortable throughout the process. Results guide a personalized care plan.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
