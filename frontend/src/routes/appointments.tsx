import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Video, CalendarDays, ArrowRight, Info, X, Baby, Users, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { createAppointment } from "@/lib/appointments.functions";
import { FloatingTrustButton } from "@/components/site/FloatingTrustButton";
import { delay } from "@/lib/utils";
import { AppointmentsSkeleton } from "@/components/site/Skeletons";

export const Route = createFileRoute("/appointments")({
  loader: () => delay(450),
  pendingComponent: AppointmentsSkeleton,
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
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"kids" | "adults" | null>(null);

  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const infoBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hasHash =
      location.hash === "appointment-form" ||
      location.hash === "#appointment-form" ||
      window.location.hash === "#appointment-form";
    if (hasHash) {
      const element = formRef.current;
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          if (infoBtnRef.current) {
            infoBtnRef.current.focus();
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

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
              <form ref={formRef} id="appointment-form" onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="flex justify-start">
                  <button
                    ref={infoBtnRef}
                    type="button"
                    onClick={() => setIsInfoOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all cursor-pointer animate-text-glow"
                  >
                    <Info className="h-4 w-4 text-teal-mid" /> What to Expect at Your Visit
                  </button>
                </div>
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

      <Testimonials />

      <Footer />

      {isInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-[80vw] h-[80vh] max-w-5xl bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-teal/5">
              <div className="flex items-center gap-2">
                {selectedOption && (
                  <button
                    onClick={() => setSelectedOption(null)}
                    className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-teal/10 hover:text-teal transition-colors cursor-pointer"
                    title="Back to options"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <h3 className="font-display text-xl sm:text-2xl text-teal font-bold">
                  {selectedOption === "kids"
                    ? "Child's First Hearing Evaluation"
                    : selectedOption === "adults"
                      ? "First Audiological Appointment"
                      : "What to Expect at Your Visit"}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsInfoOpen(false);
                  setSelectedOption(null);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-teal/10 hover:text-teal transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {!selectedOption ? (
                <div className="h-full flex flex-col justify-center max-w-4xl mx-auto py-8">
                  <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto text-base">
                    Select one of the options below to learn more about how to prepare and what happens during your appointment.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <button
                      onClick={() => setSelectedOption("kids")}
                      className="group flex flex-col items-center text-center p-8 bg-background border border-border/80 hover:border-teal/40 hover:bg-teal/5 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                        <Baby className="h-8 w-8" />
                      </span>
                      <h4 className="mt-6 font-display text-xl text-teal font-semibold">
                        What to Expect at Your Child’s First Hearing Evaluation (Kids)
                      </h4>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        A child-friendly, play-based screening and diagnostic evaluation designed to feel like a game.
                      </p>
                    </button>

                    <button
                      onClick={() => setSelectedOption("adults")}
                      className="group flex flex-col items-center text-center p-8 bg-background border border-border/80 hover:border-teal/40 hover:bg-teal/5 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                        <Users className="h-8 w-8" />
                      </span>
                      <h4 className="mt-6 font-display text-xl text-teal font-semibold">
                        What to Expect at Your First Audiological Appointment (Adults & Seniors)
                      </h4>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        A comprehensive clinical assessment including personal history, otoscopy, and diagnostic hearing tests.
                      </p>
                    </button>
                  </div>
                </div>
              ) : selectedOption === "kids" ? (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>🌟</span> Before the Appointment
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>History & concerns:</strong> You’ll be asked about your child’s medical history, speech and language development, and any concerns you’ve noticed (e.g., not responding to sounds, frequent ear infections).
                        </li>
                        <li className="leading-relaxed">
                          <strong>Comfort first:</strong> Parents can stay with their child throughout the process to help them feel secure.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>🔍</span> During the Evaluation
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>Ear check:</strong> The audiologist will look inside your child’s ears to check for wax, infection, or structural issues.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Play based hearing tests:</strong> For younger children, sounds are presented through speakers or headphones, and responses are observed through play (like turning toward a toy or game).
                        </li>
                        <li className="leading-relaxed">
                          <strong>Age appropriate methods:</strong>
                          <ul className="pl-4 mt-1.5 space-y-1 list-disc">
                            <li><em>Infants:</em> May use gentle sounds and observe reflexes.</li>
                            <li><em>Toddlers:</em> Visual reinforcement audiometry (sounds paired with lights or toys).</li>
                            <li><em>Older children:</em> Standard listening tests with headphones, pressing a button or raising a hand when they hear a sound.</li>
                          </ul>
                        </li>
                        <li className="leading-relaxed">
                          <strong>Additional checks:</strong> Speech recognition, middle ear function (tympanometry), or otoacoustic emissions may be done to gather more detail.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>💡</span> After the Tests
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>Results explained clearly:</strong> The audiologist will share whether your child’s hearing is within normal limits or if there are any concerns.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Next steps:</strong> If hearing loss is detected, recommendations may include medical follow up, hearing aids, or monitoring.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Support & resources:</strong> Parents receive guidance on communication strategies, school support, and follow up care.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>🌟</span> Before the Appointment
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>Personal history:</strong> You’ll be asked about medical background, medications, noise exposure, and any hearing or balance concerns.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Daily impact:</strong> The audiologist may ask how hearing difficulties affect your work, social life, or family interactions.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Support welcome:</strong> Family members are encouraged to attend, especially if they can share observations or assist with communication.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>🔍</span> During the Evaluation
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>Ear examination:</strong> A gentle check with an otoscope to look for wax, infection, or other ear canal/ear drum issues.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Hearing tests:</strong>
                          <ul className="pl-4 mt-1.5 space-y-1 list-disc">
                            <li><em>Pure tone audiometry:</em> Listening to tones through headphones and indicating when you hear them.</li>
                            <li><em>Speech testing:</em> Repeating words or sentences to measure clarity and understanding.</li>
                          </ul>
                        </li>
                        <li className="leading-relaxed">
                          <strong>Middle ear function:</strong> Tympanometry may be used to assess eardrum movement and middle ear health.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Additional checks:</strong> Otoacoustic emissions or balance assessments may be included if relevant.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal/5 border border-teal/10 rounded-xl p-5 flex flex-col">
                      <div className="font-display font-semibold text-teal mb-3 flex items-center gap-1.5 text-base sm:text-lg">
                        <span>💡</span> After the Tests
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-3 flex-1">
                        <li className="leading-relaxed">
                          <strong>Results explained clearly:</strong> You’ll receive a detailed but easy to understand summary of your hearing profile.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Recommendations:</strong> If hearing loss is present, options may include hearing aids, assistive listening devices, medical referral, or communication strategies.
                        </li>
                        <li className="leading-relaxed">
                          <strong>Next steps:</strong> The audiologist will discuss follow up care, adjustment periods, and support services.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <FloatingTrustButton />
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
