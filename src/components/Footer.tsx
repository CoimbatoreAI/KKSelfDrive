import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ready to <span className="text-gradient-gold">Drive?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Book your self-drive car today and explore Coimbatore at your own pace.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="rounded-lg bg-gold px-8 py-3 font-semibold text-accent-foreground transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Book Now
            </Link>
            <a
              href="tel:9994557462"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="KK Self Drive" className="w-[12rem] h-auto mb-4" />
            <p className="mt-4 text-sm text-primary-foreground/60">
              Premium self-drive car rental service in Coimbatore. Drive your freedom with our well-maintained fleet.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/share/1Dm5Hyvsrv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold hover:border-gold hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/kk_selfdrivecars"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold hover:border-gold hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919994557462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gold hover:border-gold hover:text-accent-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Our Fleet</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Car Categories</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/cars" className="hover:text-gold transition-colors">7 Seater / MPV</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Van (12-22 Seater)</Link></li>
              <li><Link to="/cars" className="hover:text-gold transition-colors">Bus (52 Seater)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                81 Subbian Street, Ganeshapuram, Coimbatore, Tamil Nadu 641045
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:9994557462" className="hover:text-gold transition-colors">99945 57462</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:creativebuddies66@gmail.com" className="hover:text-gold transition-colors">creativebuddies66@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} KK Self Driving Cars. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
