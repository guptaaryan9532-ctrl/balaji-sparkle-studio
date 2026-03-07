import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/PricingCard";
import { services, WHATSAPP_URL, PHONE } from "@/data/services";
import { Phone as PhoneIcon } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Button asChild><Link to="/services">Back to Services</Link></Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <Link to="/services" className="text-background/80 text-sm flex items-center gap-1 mb-3 hover:text-background">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-background">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container py-10">
        <p className="text-muted-foreground max-w-2xl text-lg">{service.description}</p>
      </section>

      {/* Pricing */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
          {service.pricing.map((plan) => (
            <PricingCard key={plan.name} plan={plan} serviceName={service.title} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-12">
        <div className="container text-center">
          <h3 className="text-xl font-bold text-primary-foreground mb-3">Need a Custom Package?</h3>
          <p className="text-primary-foreground/80 mb-6">Contact us for personalized pricing</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={`tel:+91${PHONE}`}><PhoneIcon className="w-4 h-4 mr-2" /> Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
