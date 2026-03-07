import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, PHONE } from "@/data/services";
import { Phone, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Designs Delivered", value: "2000+" },
  { icon: Clock, label: "Years Experience", value: "5+" },
];

const About = () => (
  <div>
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">About Balaji Graphics</h1>
        <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
          Your trusted partner for professional graphic design services
        </p>
      </div>
    </section>

    <section className="container py-12">
      <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
        <p>
          <strong className="text-foreground">Balaji Graphics</strong> is a professional graphic design studio dedicated to
          helping businesses stand out with stunning visual designs. Based in India, we specialize in creating logos,
          posters, banners, wedding cards, visiting cards, social media designs, and all types of promotional graphics.
        </p>
        <p>
          We understand the needs of small and medium businesses. Our goal is to provide world-class design quality at
          prices that every business can afford. Whether you need a simple visiting card or a complete branding package,
          we deliver exceptional results every time.
        </p>
        <p>
          Our team combines creativity with the latest design trends to create visuals that not only look great but also
          drive results for your business. Fast turnaround, unlimited revisions on premium packages, and dedicated customer
          support make us the preferred choice for hundreds of satisfied clients.
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
