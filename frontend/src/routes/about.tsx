import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader, Prose } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Caribbean Audiology Healthcare Ltd." },
      { name: "description", content: "Our values, mission, and multidisciplinary team of audiologists, ENT specialists and support staff serving Trinidad & Tobago and the wider Caribbean." },
      { property: "og:title", content: "About — Caribbean Audiology Healthcare Ltd." },
      { property: "og:description", content: "Compassionate, professional audiology and hearing healthcare across the Caribbean." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader kicker="About Us" title="Sound health, clinical precision, island soul." subtitle="A multidisciplinary team dedicated to hearing, tinnitus and associated healthcare across Trinidad & Tobago and the wider Caribbean." />
      <Prose>
        <h2>Our Values</h2>
        <p>At Caribbean Audiology Healthcare Ltd, we are committed to helping individuals reconnect with the sounds of life. Our centre provides expert hearing, tinnitus, and other associated health care across Trinidad &amp; Tobago and the wider Caribbean, combining advanced technology with compassionate service.</p>
        <p>We offer comprehensive hearing assessments, hearing aid solutions, tinnitus management, paediatric screening, cochlear implant support, rehabilitation programs and family counselling—all delivered with professionalism and personalized attention. In addition, our multidisciplinary team provides paediatric care, ENT services, and internal medicine—working closely with patients, families, and healthcare partners to deliver care that is both clinically sound and genuinely supportive.</p>
        <h2>Our Mission</h2>
        <p>To provide accessible, professional, life-changing healthcare services that empower individuals, strengthen families, and enhance quality of life across Trinidad &amp; Tobago and the wider Caribbean region.</p>
        <h2>Our Team</h2>
        <p>Our team brings together audiologists, ENT specialists, paediatricians, and support staff—each committed to personalized, evidence-based care. Detailed profiles coming soon.</p>
      </Prose>
      <Footer />
    </div>
  );
}
