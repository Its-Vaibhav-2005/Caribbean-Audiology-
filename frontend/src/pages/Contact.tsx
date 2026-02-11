import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Phone", detail: "(868) 123-4567", sub: "Mon-Fri, 8am-5pm" },
  { icon: Mail, title: "Email", detail: "info@caribbeanaudiology.com", sub: "We reply within 24 hours" },
  { icon: MapPin, title: "Location", detail: "123 Health Avenue", sub: "Port of Spain, Trinidad & Tobago" },
  { icon: Clock, title: "Hours", detail: "Mon-Fri: 8am-5pm", sub: "Sat: 9am-1pm | Sun: Closed" },
];

const expectations = [
  "Confirmation call within 24 hours",
  "Detailed intake form via email",
  "Insurance verification assistance",
  "Comfortable private consultation rooms",
  "Comprehensive evaluation lasting 60-90 minutes",
  "Clear explanation of findings and options",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", e.target);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request Submitted!",
        description: "Thank you for your appointment request. We'll contact you within 24 hours to confirm.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <Hero
        centered
        title="Get in"
        titleAccent="Touch"
        description="Ready to take the first step toward better hearing? Contact us today to schedule your appointment or ask a question."
      />

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((c) => (
              <Card key={c.title} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-foreground font-medium">{c.detail}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Request an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required className="mt-1.5" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" required className="mt-1.5" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Patient Type</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New Patient</SelectItem>
                        <SelectItem value="returning">Returning Patient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Service Needed</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="evaluation">Hearing Evaluation</SelectItem>
                        <SelectItem value="hearing-aid">Hearing Aid Fitting</SelectItem>
                        <SelectItem value="tinnitus">Tinnitus Treatment</SelectItem>
                        <SelectItem value="cochlear">Cochlear Implant</SelectItem>
                        <SelectItem value="paediatric">Paediatric Audiology</SelectItem>
                        <SelectItem value="screening">Industrial Screening</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Preferred Time</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm-3pm)</SelectItem>
                        <SelectItem value="late">Late Afternoon (3pm-5pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="referral">Doctor Referral</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="search">Online Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="info">Additional Information</Label>
                  <Textarea id="info" rows={4} className="mt-1.5" placeholder="Tell us about your hearing concerns..." />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="border-border sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {expectations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
