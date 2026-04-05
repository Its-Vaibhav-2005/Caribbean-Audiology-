import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to schedule an appointment? Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(868) 000-0000" />
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" rows={4} />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" /> (868) 000-0000
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" /> info@caribbeanaudiology.com
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" /> Trinidad & Tobago
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground">Monday – Friday: 8:00 AM – 4:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday – Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
