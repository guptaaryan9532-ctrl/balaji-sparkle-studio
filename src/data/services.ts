import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioPosters from "@/assets/portfolio-posters.jpg";
import portfolioBanners from "@/assets/portfolio-banners.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioCards from "@/assets/portfolio-cards.jpg";

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  pricing: PricingPlan[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  text: string;
  rating: number;
}

export const PHONE = "9696583222";
export const WHATSAPP_URL = `https://wa.me/91${PHONE}`;

export const services: Service[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    shortDescription: "Unique, memorable logos for your brand identity",
    description: "Get a professional, unique logo that represents your brand perfectly. Our designers create memorable logos that make lasting impressions on your customers.",
    icon: "Palette",
    image: portfolioLogos,
    pricing: [
      { name: "Basic", price: "₹999", features: ["2 Logo Concepts", "2 Revisions", "JPG & PNG Files", "Delivery in 3 Days"] },
      { name: "Standard", price: "₹2,499", features: ["5 Logo Concepts", "Unlimited Revisions", "All File Formats", "Source File", "Delivery in 2 Days"], popular: true },
      { name: "Premium", price: "₹4,999", features: ["8 Logo Concepts", "Unlimited Revisions", "All File Formats", "Brand Guidelines", "Social Media Kit", "Priority Delivery"] },
    ],
  },
  {
    id: "poster-design",
    title: "Poster Design",
    shortDescription: "Eye-catching posters for events and promotions",
    description: "Stunning poster designs for events, promotions, festivals, and more. We create vibrant, attention-grabbing posters that communicate your message effectively.",
    icon: "Image",
    image: portfolioPosters,
    pricing: [
      { name: "Basic", price: "₹499", features: ["1 Poster Design", "2 Revisions", "Print-Ready File", "Delivery in 2 Days"] },
      { name: "Standard", price: "₹1,499", features: ["3 Poster Designs", "5 Revisions", "Print-Ready + Digital", "Source File"], popular: true },
      { name: "Premium", price: "₹2,999", features: ["5 Poster Designs", "Unlimited Revisions", "All Formats", "Multiple Sizes", "Rush Delivery"] },
    ],
  },
  {
    id: "banner-flex-design",
    title: "Banner / Flex Design",
    shortDescription: "Large format banners and flex for maximum visibility",
    description: "Professional banner and flex designs for shops, events, and outdoor advertising. High-impact designs that grab attention from a distance.",
    icon: "Monitor",
    image: portfolioBanners,
    pricing: [
      { name: "Basic", price: "₹699", features: ["1 Banner Design", "2 Revisions", "Print-Ready File", "Standard Size"] },
      { name: "Standard", price: "₹1,999", features: ["3 Banner Designs", "5 Revisions", "Multiple Sizes", "Source File"], popular: true },
      { name: "Premium", price: "₹3,999", features: ["5 Banner Designs", "Unlimited Revisions", "All Sizes", "Printing Coordination", "Installation Guide"] },
    ],
  },
  {
    id: "social-media-design",
    title: "Social Media Post Design",
    shortDescription: "Engaging social media content that drives results",
    description: "Professional social media post designs for Instagram, Facebook, WhatsApp, and more. Boost your online presence with stunning visuals.",
    icon: "Share2",
    image: portfolioSocial,
    pricing: [
      { name: "Basic", price: "₹299", features: ["5 Post Designs", "2 Revisions Each", "Instagram & Facebook", "Delivery in 3 Days"] },
      { name: "Standard", price: "₹999", features: ["15 Post Designs", "5 Revisions Each", "All Platforms", "Content Calendar"], popular: true },
      { name: "Premium", price: "₹2,499", features: ["30 Post Designs", "Unlimited Revisions", "All Platforms", "Story Designs", "Monthly Package"] },
    ],
  },
  {
    id: "wedding-card-design",
    title: "Wedding Card Design",
    shortDescription: "Beautiful wedding invitations that set the tone",
    description: "Elegant and traditional wedding card designs that perfectly capture the joy of your special occasion. Both modern and traditional Indian styles available.",
    icon: "Heart",
    image: portfolioWedding,
    pricing: [
      { name: "Basic", price: "₹1,499", features: ["1 Card Design", "2 Revisions", "Print-Ready PDF", "Standard Template"] },
      { name: "Standard", price: "₹3,499", features: ["Custom Design", "5 Revisions", "Print + Digital Version", "Matching Envelope"], popular: true },
      { name: "Premium", price: "₹6,999", features: ["Fully Custom Design", "Unlimited Revisions", "Complete Set", "RSVP Card", "Thank You Card", "Digital Invite Video"] },
    ],
  },
  {
    id: "visiting-card-design",
    title: "Visiting Card Design",
    shortDescription: "Professional business cards that make an impression",
    description: "Make a great first impression with professionally designed visiting cards. Modern, clean, and memorable designs for your business.",
    icon: "CreditCard",
    image: portfolioCards,
    pricing: [
      { name: "Basic", price: "₹399", features: ["1 Card Design", "Front Side Only", "2 Revisions", "Print-Ready File"] },
      { name: "Standard", price: "₹799", features: ["2 Design Options", "Front & Back", "5 Revisions", "Source File"], popular: true },
      { name: "Premium", price: "₹1,499", features: ["4 Design Options", "Front & Back", "Unlimited Revisions", "Letterhead Design", "Printing Coordination"] },
    ],
  },
  {
    id: "promotional-graphics",
    title: "Promotional Graphics",
    shortDescription: "Marketing materials that drive sales",
    description: "Complete promotional graphics package including flyers, brochures, standees, and marketing collateral designed to boost your business.",
    icon: "Megaphone",
    image: portfolioBanners,
    pricing: [
      { name: "Basic", price: "₹799", features: ["1 Design", "2 Revisions", "Print-Ready File", "Single Format"] },
      { name: "Standard", price: "₹2,499", features: ["3 Designs", "5 Revisions", "Multiple Formats", "Source Files"], popular: true },
      { name: "Premium", price: "₹4,999", features: ["Complete Package", "Unlimited Revisions", "All Formats", "Print Coordination", "Digital Versions"] },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "1", title: "Restaurant Logo", category: "Logo Design", image: portfolioLogos },
  { id: "2", title: "Festival Poster", category: "Poster Design", image: portfolioPosters },
  { id: "3", title: "Shop Banner", category: "Banner Design", image: portfolioBanners },
  { id: "4", title: "Instagram Posts", category: "Social Media", image: portfolioSocial },
  { id: "5", title: "Wedding Invitation", category: "Wedding Card", image: portfolioWedding },
  { id: "6", title: "Business Cards", category: "Visiting Card", image: portfolioCards },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Rajesh Sharma", business: "Sharma Electronics", text: "Balaji Graphics designed our shop banner and visiting cards. Excellent quality and very affordable prices. Highly recommended!", rating: 5 },
  { id: "2", name: "Priya Patel", business: "Patel Sarees", text: "Beautiful social media designs for our saree shop. Our Instagram followers doubled in just 2 months! Thank you Balaji Graphics.", rating: 5 },
  { id: "3", name: "Amit Verma", business: "Verma Sweets", text: "They designed our wedding cards and they were absolutely stunning. Everyone complimented the design. Will definitely order again.", rating: 5 },
  { id: "4", name: "Sunita Agarwal", business: "Agarwal Traders", text: "Professional logo design at a very reasonable price. The team is responsive and delivers on time. Very happy with the service.", rating: 4 },
];
