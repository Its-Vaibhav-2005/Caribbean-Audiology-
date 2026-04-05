import Layout from "@/components/Layout";
import { Target, Eye, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Caribbean Audiology Healthcare Ltd employs a multidisciplinary approach to hearing healthcare,
          providing comprehensive audiological services for patients of all ages.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-7 w-7 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide comprehensive audiological services within the Caribbean, utilizing evidence-based practice to ensure the highest quality of care for our patients. We aim to make hearing healthcare accessible and effective for everyone.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-7 w-7 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Our Goal</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading audiology practice in the Caribbean, recognized for excellence in patient care, innovation, and community education about hearing health and communication disorders.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Users className="h-7 w-7 text-primary" />
          <h2 className="font-serif text-2xl font-bold text-foreground">Our Approach</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          We believe in a patient-centred, multidisciplinary approach. Our team works closely with ENT specialists,
          speech-language pathologists, and other healthcare professionals to provide holistic hearing care.
          From newborn hearing screening to geriatric audiology, we serve patients across the full lifespan.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
