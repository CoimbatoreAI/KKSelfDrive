import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-premium py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="KK Self Drive" className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-gold ${location.pathname === link.path
                ? "text-gold"
                : "text-primary-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:9994557462"
            className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            99945 57462
          </a>
          <Link to="/booking">
            <Button variant="default" className="bg-gold text-accent-foreground hover:bg-gold-light font-semibold">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="glass-dark border-t border-white/10 md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors ${location.pathname === link.path
                  ? "text-gold"
                  : "text-primary-foreground/80"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking">
              <Button className="w-full bg-gold text-accent-foreground hover:bg-gold-light font-semibold">
                Book Now
              </Button>
            </Link>
            <a
              href="tel:9994557462"
              className="flex items-center gap-2 text-primary-foreground/80"
            >
              <Phone className="h-4 w-4" />
              99945 57462
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
