import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Reach Caribbean Audiology Healthcare Ltd. by phone +1-868-735-6666 or email caribbeanaudiologytt@gmail.com. Clinic hours and directions.",
      },
      { property: "og:title", content: "Contact Caribbean Audiology" },
      { property: "og:description", content: "Phone, email, address and clinic hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Contact Us"
        title="We'd love to hear from you."
        subtitle="Speak with our team about appointments, referrals, workshops, or industrial hearing programs."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-8 space-y-6">
            <Row
              icon={Phone}
              label="Phone"
              value={
                <a href="tel:+18687356666" className="text-teal-mid hover:underline">
                  +1-868-735-6666
                </a>
              }
            />
            <Row
              icon={Mail}
              label="Email"
              value={
                <a
                  href="mailto:caribbeanaudiologytt@gmail.com"
                  className="text-teal-mid hover:underline break-all"
                >
                  caribbeanaudiologytt@gmail.com
                </a>
              }
            />
            <Row
              icon={MapPin}
              label="Address"
              value="Trinidad & Tobago (full clinic address available on request)"
            />
            <Row
              icon={Clock}
              label="Opening hours"
              value={
                <div className="space-y-0.5">
                  <div>Mon – Fri: 9:00 AM – 5:00 PM</div>
                  <div>Sat: 9:00 AM – 1:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              }
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[380px]">
            <iframe
              title="Clinic location — Trinidad & Tobago"
              src="https://www.google.com/maps?q=Port%20of%20Spain%2C%20Trinidad%20and%20Tobago&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-teal-mid">
          {label}
        </div>
        <div className="mt-1 text-foreground">{value}</div>
      </div>
    </div>
  );
}
