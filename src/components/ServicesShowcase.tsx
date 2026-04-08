import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";

const showcaseServices = [
  {
    id: "logo-design",
    title: "Logo",
    description: "A logo is a graphic mark, symbol, or design that represents a company, brand identity...",
  },
  {
    id: "visiting-card-design",
    title: "Corporate Identity",
    description: "Providing a variety of corporate stationery items to our clients is our priority.",
  },
  {
    id: "poster-design",
    title: "Poster & Flyers",
    description: "Primarily used for local advertising, such as promoting a new business, a sale, or an event.",
  },
  {
    id: "promotional-graphics",
    title: "Brochures & Catalogues",
    description: "Brochure design matters a lot because you must make a desirable impact on clients.",
  },
  {
    id: "banner-flex-design",
    title: "Hoarding & Banner",
    description: "To capture attention, build brand recognition, announce products, and create impactful visuals.",
  },
  {
    id: "promotional-graphics",
    title: "Packaging & Label",
    description: "We'll take you through the process of creating stellar product packaging for your product.",
  },
  {
    id: "social-media-design",
    title: "Social Media Post",
    description: "They are used for personal communication, entertainment, brand promotion, and distributing news.",
  },
  {
    id: "wedding-card-design",
    title: "Wedding & Invitation",
    description: "Beautiful invitation designs that perfectly capture the joy of your special occasion.",
  },
];

const ServicesShowcase = () => (
  <section className="relative py-16 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={servicesBackground} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/85" />
    </div>

    <div className="relative container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-background mb-3">
          We Offer a Wide Variety of Graphic Services
        </h2>
        <p className="text-background/70 max-w-2xl mx-auto text-sm md:text-base">
          We create and design professionally unique and highly versatile design services that suit exact needs. We take pride in giving our clients the very best possible solution for their designing needs that fits any budget.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {showcaseServices.map((service, index) => (
          <div key={index} className="group flex flex-col">
            <div className="bg-foreground/60 backdrop-blur-sm border border-background/10 rounded-lg p-6 flex-1 flex flex-col hover:bg-foreground/70 transition-colors">
              <h3 className="text-lg font-bold text-background mb-3">{service.title}</h3>
              <p className="text-background/60 text-sm leading-relaxed flex-1">{service.description}</p>
            </div>
            <div className="mt-3">
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-foreground hover:scale-110 transition-transform"
                aria-label={`View ${service.title}`}
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesShowcase;
