import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Car, Phone, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | KK Self Drive</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our premium self-drive car rental services in Coimbatore. Choose from hatchbacks, sedans, SUVs, MPVs, vans & buses." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="404 - Page Not Found | KK Self Drive" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Browse our car rental services in Coimbatore." />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
          
          {/* Helpful navigation links */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link 
              to="/cars" 
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
            >
              <Car className="h-4 w-4" />
              View Fleet
            </Link>
            <a 
              href="tel:9994557462" 
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>

          {/* Quick links section */}
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-6 text-left">
            <h2 className="mb-4 text-lg font-semibold">Popular Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/cars" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <ArrowRight className="h-4 w-4" /> Self-drive car rental in Coimbatore
                </Link>
              </li>
              <li>
                <Link to="/booking" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <ArrowRight className="h-4 w-4" /> Book a car online
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <ArrowRight className="h-4 w-4" /> About KK Self Drive
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <ArrowRight className="h-4 w-4" /> Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
