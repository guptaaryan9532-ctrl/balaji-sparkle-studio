import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import { services } from "@/data/services";

const Services = () => (
  <div className="container py-12">
    <SEO
      title="Graphic Design Services – Logos, Posters, Cards | Balaji Graphics"
      description="Explore our full range of graphic design services: logo, poster, banner, wedding card, visiting card and social media designs at affordable prices."
      path="/services"
    />
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-muted-foreground mt-2">Professional design solutions for every business need</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} />
      ))}
    </div>
  </div>
);

export default Services;
