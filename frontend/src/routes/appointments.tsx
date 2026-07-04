import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Video, CalendarDays, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { createAppointment } from "@/lib/appointments.functions";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Caribbean Audiology Healthcare Ltd." },
      {
        name: "description",
        content:
          "Online booking for hearing evaluations, tinnitus consultations, and tele-audiology sessions. Call +1-868-735-6666 or request an appointment online.",
      },
      { property: "og:title", content: "Book an Appointment" },
      {
        property: "og:description",
        content: "Schedule your visit online or by phone. In-person and tele-audiology available.",
      },
    ],
  }),
  component: Appointments,
});

function Appointments() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      date: formData.get("date") as string,
      notes: (formData.get("notes") as string) || "",
    };

    try {
      const res = await createAppointment(data);
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        kicker="Appointments"
        title="Book your visit."
        subtitle="Online booking, in-person consultations, and tele-audiology from anywhere in Trinidad & Tobago."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl bg-card border border-border p-8 sm:p-10 shadow-sm">
            <h2 className="font-display text-3xl text-teal">Request an appointment</h2>
            <p className="mt-2 text-muted-foreground">
              We'll get back to you within one business day to confirm.
            </p>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            {submitted ? (
              <div className="mt-8 rounded-xl border border-teal/30 bg-teal/5 p-6 text-teal">
                <div className="font-display text-xl">Thank you!</div>
                <p className="mt-1 text-teal/80 text-sm">
                  We've received your request and will confirm shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" required type="tel" />
                </div>
                <Field label="Email" name="email" required type="email" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Service"
                    name="service"
                    as="select"
                    options={[
                      "Diagnostic Hearing Evaluation",
                      "Tinnitus Consultation",
                      "Hearing Aid Fitting",
                      "Paediatric Screening",
                      "Tele-audiology",
                      "Other",
                    ]}
                  />
                  <Field label="Preferred date" name="date" type="date" />
                </div>
                <Field label="Notes (optional)" name="notes" as="textarea" />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-max items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-cream hover:bg-teal-mid transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Requesting..." : "Request appointment"}{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <InfoCard
              icon={CalendarDays}
              title="In-person visits"
              body="Comprehensive evaluations, fittings and follow-ups at our Trinidad clinic."
            />
            <InfoCard
              icon={Video}
              title="Online consultations"
              body="Tele-audiology consultations for reviewing results, counselling, and device support—wherever you are."
            />
            <InfoCard
              icon={Phone}
              title="Call us"
              body={
                <a href="tel:+18687356666" className="text-teal-mid hover:underline">
                  +1-868-735-6666
                </a>
              }
            />
            <InfoCard
              icon={Mail}
              title="Email"
              body={
                <a
                  href="mailto:caribbeanaudiologytt@gmail.com"
                  className="text-teal-mid hover:underline break-all"
                >
                  caribbeanaudiologytt@gmail.com
                </a>
              }
            />
            <InfoCard
              icon={MapPin}
              title="Location"
              body="Trinidad & Tobago. Full clinic address and Google Maps directions on our Contact page."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "select" | "textarea";
  options?: string[];
}) {
  const cls =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-mid";
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {as === "select" ? (
        <select name={name} className={cls} required={required}>
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} className={cls} rows={4} />
      ) : (
        <input type={type} name={name} className={cls} required={required} />
      )}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="font-display text-lg text-teal">{title}</div>
        <div className="text-sm text-muted-foreground mt-1">{body}</div>
      </div>
    </div>
  );
}
