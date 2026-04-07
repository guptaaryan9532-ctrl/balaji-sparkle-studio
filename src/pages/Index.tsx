import { Link } from "react-router-dom";
import { ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services, portfolioItems, testimonials, PHONE, WHATSAPP_URL } from "@/data/services";
import heroBanner from "@/assets/hero-banner.jpg";

const floatingLabels = [
  { text: "LOGO", top: "18%", left: "5%", delay: "0s" },
  { text: "BANNER", top: "55%", left: "3%", delay: "0.3s" },
  { text: "FLYER", top: "12%", left: "22%", delay: "0.1s" },
  { text: "ANIMATION", top: "28%", left: "14%", delay: "0.5s" },
  { text: "BRANDING", top: "22%", left: "42%", delay: "0.2s" },
  { text: "WEBSITE", top: "68%", left: "38%", delay: "0.4s" },
  { text: "BROCHURE", top: "78%", left: "22%", delay: "0.6s" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px]">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Graphic Design Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Floating service labels */}
      {floatingLabels.map((label) => (
        <span
          key={label.text}
          className="absolute hidden md:block text-xs font-semibold tracking-widest text-background/50 animate-fade-in-up"
          style={{ top: label.top, left: label.left, animationDelay: label.delay }}
        >
          {label.text}
        </span>
      ))}

      <div className="relative container py-24 md:py-36 flex flex-col items-end text-right">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-background mb-2 animate-fade-in-up leading-tight">
          CREATIVITY
        </h1>
        <div className="flex gap-3 mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <span className="text-3xl md:text-5xl lg:text-6xl font-black text-gold border-2 border-dashed border-gold px-3 py-1">
            POWERED
          </span>
          <span className="text-3xl md:text-5xl lg:text-6xl font-black text-gold border-2 border-dashed border-gold px-3 py-1">
            GROWTH
          </span>
        </div>
        <p className="text-base md:text-lg text-background/80 mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Balaji Graphics — Professional Design Services for Logos, Posters, Banners, Wedding Cards & More
        </p>
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button asChild size="lg" className="gradient-primary border-0 text-primary-foreground text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get Free Quote on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background/40 text-background hover:bg-background/10">
            <a href={`tel:+91${PHONE}`}>
              <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Services</h2>
        <p className="text-muted-foreground mt-2">Quality design solutions for every need</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>

    {/* Portfolio Preview */}
    <section className="bg-muted py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Our Work</h2>
          <p className="text-muted-foreground mt-2">Browse our latest designs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative aspect-square rounded-lg overflow-hidden shadow-card">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                <div className="text-background text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm opacity-80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-card p-6 rounded-lg shadow-card">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
            <p className="font-semibold text-card-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.business}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
          Get professional designs at affordable prices. Contact us today for a free quote!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={`tel:+91${PHONE}`}><Phone className="w-4 h-4 mr-2" /> Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
