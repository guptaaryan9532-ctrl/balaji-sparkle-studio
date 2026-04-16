import { Link } from "react-router-dom";
import { ArrowRight, Star, Phone, Users, Paintbrush, Clock, Award, ShieldCheck, Zap, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesShowcase from "@/components/ServicesShowcase";
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

const marqueeItems = [
  "Logo Design", "Poster Design", "Banner & Flex", "Wedding Cards", "Visiting Cards",
  "Social Media Posts", "Brochure Design", "Flyer Design", "Branding", "Packaging Design",
  "Menu Card Design", "Invitation Cards",
];

const stats = [
  { icon: Users, value: 3481, suffix: "+", label: "Happy Clients" },
  { icon: Paintbrush, value: 2000, suffix: "+", label: "Designs Delivered" },
  { icon: Clock, value: 12, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 50, suffix: "+", label: "Business Partners" },
];

const trustBadges = [
  { icon: ShieldCheck, text: "100% Satisfaction Guarantee" },
  { icon: Zap, text: "Fast Turnaround" },
  { icon: ThumbsUp, text: "Affordable Prices" },
  { icon: Award, text: "Premium Quality" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px]">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Graphic Design Services" className="w-full h-full object-cover object-[30%_center]" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {floatingLabels.map((label) => (
        <span
          key={label.text}
          className="absolute hidden md:block text-xs font-semibold tracking-widest text-background/50 animate-fade-in-up"
          style={{ top: label.top, left: label.left, animationDelay: label.delay }}
        >
          {label.text}
        </span>
      ))}

      <div className="relative container py-24 md:py-36 flex flex-col items-end text-right pr-4 md:pr-16 lg:pr-24">
        <h1 className="text-4xl md:text-6xl font-black text-background mb-2 animate-fade-in-up leading-tight lg:text-9xl">
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
          <Button asChild size="lg" className="border-background/40 text-background hover:bg-background/10 bg-transparent border">
            <a href={`tel:+91${PHONE}`}>
              <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Marquee Ticker */}
    <section className="gradient-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold text-primary-foreground flex items-center gap-2">
            <Star className="w-3 h-3 fill-current" /> {item}
          </span>
        ))}
      </div>
    </section>

    {/* Stats / Counters */}
    <section className="bg-foreground py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-full gradient-primary mb-1">
              <stat.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-3xl md:text-4xl font-black text-background">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm text-background/70 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Trust Badges */}
    <section className="container py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustBadges.map((badge) => (
          <div key={badge.text} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted text-center hover:shadow-card transition-shadow">
            <badge.icon className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold text-foreground">{badge.text}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <WhyChooseUs />

    {/* Services Showcase */}
    <ServicesShowcase />

    {/* Services */}
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-foreground md:text-4xl">Our Services</h2>
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
          <h2 className="text-2xl font-bold md:text-4xl">Our Work</h2>
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
        <h2 className="text-2xl font-bold md:text-4xl">What Our Clients Say</h2>
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
        <h2 className="text-2xl font-bold text-primary-foreground mb-4 md:text-5xl">Ready to Get Started?</h2>
        <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
          Get professional designs at affordable prices. Contact us today for a free quote!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-black">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground/10 text-black">
            <a href={`tel:+91${PHONE}`}><Phone className="w-4 h-4 mr-2" /> Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
