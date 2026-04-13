import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { PHONE } from "@/data/services";
import balajiLogo from "@/assets/Balaji Logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-border/40"
        : "bg-transparent backdrop-blur-sm border-b border-transparent"
        }`}
    >
      {/* Top accent gradient line */}
      <div className="h-[3px] w-full" style={{ background: "var(--gradient-primary)" }} />

      <div className="container flex items-center justify-between h-22 px-4 md:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={balajiLogo}
            alt="Balaji Graphics"
            className="h-20 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 group ${isActive
                  ? "text-primary"
                  : "text-foreground/65 hover:text-foreground hover:bg-muted"
                  }`}
              >
                {l.label}
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-40"
                    }`}
                  style={{ background: "var(--gradient-primary)" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Call Button */}
          <a
            href={`tel:+91${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className="transition-all duration-300"
              style={{ display: "grid", placeItems: "center" }}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-t border-border/40 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${isActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
              >
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}

          {/* Mobile Call CTA */}
          <div className="pt-2">
            <a
              href={`tel:+91${PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-200 active:scale-95"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
