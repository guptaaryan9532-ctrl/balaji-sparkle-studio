import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, PHONE } from "@/data/services";
import { Phone, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "3481+" },
  { icon: Award, label: "Designs Delivered", value: "2000+" },
  { icon: Clock, label: "Years Experience", value: "12+" },
];

import SEO from "@/components/SEO";

const About = () => (
  <div>
    <SEO
      title="About Balaji Graphics – Printing & Design Studio in Kanpur"
      description="Balaji Graphics is a trusted printing and graphic design studio based in Barra, Kanpur. We deliver professional branding, printing, and design solutions for businesses of all sizes."
      path="/about"
    />
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">About Balaji Graphics</h1>
        <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
          Your trusted printing and graphic design partner in Barra, Kanpur
        </p>
      </div>
    </section>

    <section className="container py-12">
      <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Balaji Graphics</strong> is a trusted printing and graphic design studio based in Barra, Kanpur, dedicated to helping businesses, startups, and individuals create a strong visual identity. We combine creative design expertise with premium-quality printing to deliver professional branding solutions that leave a lasting impression.
        </p>
        <p>
          We specialize in logo design, visiting cards, bill books, pamphlets, brochures, flex banners, stickers, ID cards, wedding invitation cards & videos, social media creatives, packaging designs, and customized promotional materials. Whether you need commercial printing, business branding, or personalized designs, Balaji Graphics provides complete end-to-end solutions under one roof.
        </p>
        <p>
          Our experienced team follows the latest design trends and uses high-quality printing technology to ensure every product reflects professionalism, creativity, and attention to detail. From a single visiting card to complete business branding, we deliver outstanding quality with affordable pricing, fast turnaround times, and dependable customer support.
        </p>
        <p>
          At Balaji Graphics, our mission is to provide world-class design and printing services that help businesses grow, strengthen their brand identity, and make a lasting impact. With a commitment to creativity, precision, and customer satisfaction, we have become a preferred choice for clients across Kanpur seeking reliable, high-quality graphic design and printing solutions.
        </p>
      </div>
    </section>

    <section className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-card p-6 rounded-lg shadow-card">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="gradient-primary border-0 text-primary-foreground">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`tel:+91${PHONE}`}><Phone className="w-4 h-4 mr-2" /> Call {PHONE}</a>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
