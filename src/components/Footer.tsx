import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "@/data/services";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-3">Balaji Graphics</h3>
        <p className="text-sm opacity-80">Professional Graphic Design Services for businesses of all sizes. Quality designs at affordable prices.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <div className="space-y-2 text-sm opacity-80">
          <Link to="/" className="block hover:opacity-100">Home</Link>
          <Link to="/services" className="block hover:opacity-100">Services</Link>
          <Link to="/portfolio" className="block hover:opacity-100">Portfolio</Link>
          <Link to="/about" className="block hover:opacity-100">About</Link>
          <Link to="/contact" className="block hover:opacity-100">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact Us</h4>
        <div className="space-y-2 text-sm opacity-80">
          <a href={`tel:+91${PHONE}`} className="flex items-center gap-2 hover:opacity-100">
            <Phone className="w-4 h-4" /> +91 {PHONE}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a href="mailto:sbjprintingpress32@gmail.com" className="flex items-center gap-2 hover:opacity-100">
            <Mail className="w-4 h-4" /> sbjprintingpress32@gmail.com
          </a>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" /> Main Market, India
          </p>
        </div>
      </div>
    </div>
    <div className="border-t border-background/20 py-4 text-center text-xs opacity-60">
      © {new Date().getFullYear()} Balaji Graphics. All rights reserved.
    </div>
  </footer>
);

export default Footer;
