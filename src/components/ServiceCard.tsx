import { Link } from "react-router-dom";
import { ArrowRight, Palette, Image, Monitor, Share2, Heart, CreditCard, Megaphone } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Palette, Image, Monitor, Share2, Heart, CreditCard, Megaphone,
};

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = iconMap[service.icon] || Palette;
  return (
    <Link
      to={`/services/${service.id}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-md gradient-primary">
            <Icon className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-card-foreground">{service.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{service.shortDescription}</p>
        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
          View Packages <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
