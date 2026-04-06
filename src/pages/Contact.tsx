import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "@/data/services";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    const msg = encodeURIComponent(`Hi, I'm ${result.data.name}.\nPhone: ${result.data.phone}\n\n${result.data.message}`);
    window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
    toast({ title: "Message sent!", description: "We'll get back to you soon on WhatsApp." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/80 mt-3">We'd love to hear from you</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" rows={4} />
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground">
              Send via WhatsApp
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href={`tel:+91${PHONE}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                  <Phone className="w-5 h-5 text-primary" /> +91 {PHONE}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                  <MessageCircle className="w-5 h-5 text-whatsapp" /> WhatsApp
                </a>
                <a href="mailto:sbjprintingpresa32@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                  <Mail className="w-5 h-5 text-primary" /> sbjprintingpresa32@gmail.com
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0" /> Main Market, India
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Map Placeholder</p>
                <p className="text-xs">Add Google Maps embed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
