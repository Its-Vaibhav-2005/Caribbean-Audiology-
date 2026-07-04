import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services/paediatric-audiology")({
  head: () => ({
    meta: [
      { title: "Paediatric Audiology — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Newborn hearing screening, school hearing screening, and childhood hearing loss management for infants through adolescence.",
      },
      { property: "og:title", content: "Paediatric Audiology" },
      {
        property: "og:description",
        content: "State-of-the-art hearing care for infants, children and adolescents.",
      },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Services"
        title="Paediatric Audiology"
        subtitle="Comprehensive services for children with hearing loss, speech delays, or at risk for both."
      />
      <Prose>
        <p>
          Hearing loss affects the development of a child's brain, their ability to communicate, and
          everything from school performance to social relationships and emotional well-being. Our
          audiologists provide hearing evaluations for children from infancy to adolescence, using
          state-of-the-art testing customized to each child's ability and needs. We work closely
          with speech-language pathologists, paediatricians, and developmental specialists.
        </p>

        <h2>Newborn Hearing Screening</h2>
        <p>
          Significant permanent hearing loss is one of the most prevalent birth defects.
          Intensive-care babies have a greater chance of developing hearing loss than well-born
          babies. Speech and language development is most important during the first three years of
          life, and this is unlikely to happen without adequate hearing. A baby's hearing can be
          screened as early as six hours after birth. The procedure is non-invasive, and babies
          typically remain asleep during it.
        </p>

        <h2>School Hearing Screening</h2>
        <p>
          Hearing is essential for a child's learning, communication, and social development. Even
          mild or unnoticed hearing loss can affect classroom performance, speech clarity, and
          confidence. We provide on-site screenings by qualified audiologists using age-appropriate
          tests for preschool, primary, and secondary students. When needed, we guide families
          through referral pathways for further diagnostic testing and management.
        </p>

        <h2>Childhood Hearing Loss Management</h2>
        <p>
          Early detection and intervention are essential. Management options include hearing aids
          tailored to amplify sound, cochlear implants for severe to profound loss, and assistive
          listening devices such as classroom FM systems or Bluetooth streaming. Speech and language
          therapy supports communication skills, while family counseling helps parents create a
          language-rich environment at home.
        </p>
        <p>
          We design personalized treatment plans, collaborate with educators, paediatricians, and
          speech therapists, and monitor progress to adjust technology as your child grows.
        </p>
      </Prose>
      <Footer />
    </div>
  ),
});
