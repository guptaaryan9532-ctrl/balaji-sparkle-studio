import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioPosters from "@/assets/portfolio-posters.jpg";
import portfolioBanners from "@/assets/portfolio-banners.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioCards from "@/assets/portfolio-cards.jpg";
import {
  serviceCatalog,
  portfolioCatalog,
  type ServiceInfo,
  type PortfolioInfo,
} from "@/data/catalog";

export type { PricingPlan, Testimonial } from "@/data/catalog";
export { testimonials, PHONE, WHATSAPP_URL } from "@/data/catalog";

export interface Service extends ServiceInfo {
  image: string;
}

export interface PortfolioItem extends PortfolioInfo {
  image: string;
}

const serviceImages: Record<string, string> = {
  "logo-design": portfolioLogos,
  "poster-design": portfolioPosters,
  "banner-flex-design": portfolioBanners,
  "social-media-design": portfolioSocial,
  "wedding-card-design": portfolioWedding,
  "visiting-card-design": portfolioCards,
  "promotional-graphics": portfolioBanners,
};

const portfolioImages: Record<string, string> = {
  "1": portfolioLogos,
  "2": portfolioPosters,
  "3": portfolioBanners,
  "4": portfolioSocial,
  "5": portfolioWedding,
  "6": portfolioCards,
};

export const services: Service[] = serviceCatalog.map((service) => ({
  ...service,
  image: serviceImages[service.id] ?? portfolioLogos,
}));

export const portfolioItems: PortfolioItem[] = portfolioCatalog.map((item) => ({
  ...item,
  image: portfolioImages[item.id] ?? portfolioLogos,
}));
