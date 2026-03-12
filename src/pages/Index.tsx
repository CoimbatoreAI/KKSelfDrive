import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Clock, Car, CreditCard, Star, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import CarCard from "@/components/CarCard";
import ScrollReveal from "@/components/ScrollReveal";
import { cars } from "@/data/cars";

const features = [
  { icon: CreditCard, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges" },
  { icon: Shield, title: "Well Maintained Cars", desc: "Regularly serviced & sanitized vehicles" },
  { icon: Clock, title: "24/7 Support", desc: "Round the clock customer assistance" },
  { icon: Car, title: "Easy Booking", desc: "Book in minutes, drive in no time" },
];

const testimonials = [
  { name: "Rajesh K.", text: "Amazing service! The car was in perfect condition. Will definitely rent again.", rating: 5 },
  { name: "Priya S.", text: "Very affordable and reliable. Best self-drive rental in Coimbatore!", rating: 5 },
  { name: "Arun M.", text: "Smooth booking process and excellent vehicle quality. Highly recommend KK Self Drive.", rating: 5 },
];

const Index = () => {
  const featuredCars = cars.slice(0, 3);

  // Add structured data for SEO
  useEffect(() => {
    // Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KK Self Drive",
      "url": "https://selfdriverentalcarscoimbatore.com",
      "logo": "https://selfdriverentalcarscoimbatore.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919994557462",
        "contactType": "customer service",
        "areaServed": "IN"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "81 Subbian Street, Ganeshapuram",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641045",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/share/1Dm5Hyvsrv/",
        "https://www.instagram.com/kk_selfdrivecars"
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What documents are required to rent a self-drive car in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need a valid driver's license (minimum 1 year), Aadhaar card or passport for ID proof, and a credit/debit card for security deposit."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum age to rent a car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum age is 21 years for most cars. For premium SUVs and luxury vehicles, the minimum age is 23 years."
          }
        },
        {
          "@type": "Question",
          "name": "Can I rent a car for outstation travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer outstation car rental services. You can drive to any city in Tamil Nadu and other states. We also provide one-way drop services."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer cars with driver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have a wide range of cars with professional drivers available. You can choose from our 7-seater MPVs, vans, and buses for family trips, weddings, or corporate travel."
          }
        }
      ]
    };

    // Add Organization Schema
    let orgScript = document.getElementById('org-schema') as HTMLScriptElement | null;
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.id = 'org-schema';
      orgScript.type = 'application/ld+json';
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(orgSchema);

    // Add FAQ Schema
    let faqScript = document.getElementById('faq-schema') as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    // Review Schema for testimonials
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "KK Self Drive"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "10000",
      "reviewCount": "10000",
      "description": "Based on 10,000+ customer reviews for self-drive car rental services in Coimbatore"
    };

    // Add Review Schema
    let reviewScript = document.getElementById('review-schema') as HTMLScriptElement | null;
    if (!reviewScript) {
      reviewScript = document.createElement('script');
      reviewScript.id = 'review-schema';
      reviewScript.type = 'application/ld+json';
      document.head.appendChild(reviewScript);
    }
    reviewScript.textContent = JSON.stringify(reviewSchema);

    // Individual Review Schemas
    const individualReviews = testimonials.map((t) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "KK Self Drive"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString()
      },
      "name": `Customer Review by ${t.name}`,
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.text,
      "datePublished": "2026-01-15"
    }));

    // Add individual reviews
    individualReviews.forEach((review, index) => {
      let script = document.getElementById(`individual-review-schema-${index}`) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = `individual-review-schema-${index}`;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(review);
    });

    return () => {
      if (orgScript) orgScript.remove();
      if (faqScript) faqScript.remove();
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>KK Self Drive - Best Self Drive Car Rental in Coimbatore | Affordable Car Hire Services</title>
        <meta name="description" content="#1 Self Drive Car Rental Coimbatore. Rent hatchbacks, sedans, SUVs, MPVs, Innova, Swift, Thar & more. Starting ₹1500/day. Free delivery, 24/7 support, well-maintained vehicles. Book online now!" />
        <meta name="keywords" content="self drive car rental coimbatore, car hire coimbatore, rent a car coimbatore, affordable car rental coimbatore, best car rental coimbatore, cheap car hire, Innova rental coimbatore, SUV rental coimbatore, 7 seater car rental coimbatore, Thar rental coimbatore, Swift rental, Ertiga rental, outstation car rental coimbatore, wedding car rental coimbatore, tour car booking, free car delivery coimbatore, self drive near me, car rental booking online" />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/" />
        <meta property="og:title" content="KK Self Drive - Best Self Drive Car Rental in Coimbatore | Hatchback, SUV, Innova Rentals" />
        <meta property="og:description" content="Rent cars in Coimbatore from ₹1500/day. Choose from Swift, Baleno, Alto, WagonR, Dzire, Ignis, Ertiga, Innova, Creta, Thar, XUV & more. Free delivery, 24/7 support, best rates guaranteed." />
        <meta property="og:url" content="https://selfdriverentalcarscoimbatore.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="KK Self Drive - Best Self Drive Car Rental in Coimbatore | Affordable Car Hire" />
        <meta name="twitter:description" content="Rent cars in Coimbatore from ₹1500/day. Swift, Baleno, Ertiga, Innova, Thar & more. Free delivery, 24/7 support. Book now!" />
      </Helmet>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury car" 
            className="h-full w-full object-cover" 
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                #1 Self Drive Car Rental in Coimbatore
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
                Premium <span className="text-gradient-gold">Self Drive Car Rental</span> in Coimbatore
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70">
                Rent a car in Coimbatore at the best prices! Choose from <strong>Swift, Baleno, Alto, WagonR, Dzire, Ertiga, Innova, Creta, Thar, XUV</strong> and more. Free delivery, 24/7 roadside assistance, well-maintained vehicles for your travel needs. Starting just <strong>₹1,500/day</strong>!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/booking"
                  className="rounded-lg bg-gold px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-gold-light hover:shadow-lg"
                  aria-label="Book your self-drive car now"
                >
                  Book Now
                </Link>
                <Link
                  to="/cars"
                  className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-white/10"
                  aria-label="View our car fleet"
                >
                  View Fleet <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/60">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gold" />
                  <span>Insured Vehicles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>24/7 Roadside Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>Free Door Delivery</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick booking form */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 max-w-4xl">
              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">Quick Booking</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Pick-up Date</label>
                    <input type="date" className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Drop-off Date</label>
                    <input type="date" className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Car Type</label>
                    <select className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground">
                      <option>Any Type</option>
                      <option>7 Seater / MPV</option>
                      <option>Van (12-22 Seater)</option>
                      <option>Bus (52 Seater)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Link
                      to="/cars"
                      className="w-full rounded-lg bg-primary px-6 py-2.5 text-center font-semibold text-primary-foreground transition-all hover:bg-navy-light"
                    >
                      Search Cars
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Our Fleet</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Featured Cars
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Choose from our range of well-maintained self-drive cars.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredCars.map((car, index) => (
              <ScrollReveal key={car.id} delay={index * 0.1} className="h-full">
                <CarCard car={car} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 text-center">
              <Link
                to="/cars"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-gold"
              >
                View All Cars <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Why Us</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Why Choose KK Self Drive?
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, index) => (
              <ScrollReveal key={f.title} delay={index * 0.1} direction="up">
                <div className="group h-full rounded-2xl bg-card p-8 text-center shadow-sm transition-all hover:shadow-premium hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Testimonials</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                What Our Customers Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.name} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-premium">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground">"{t.text}"</p>
                  <p className="mt-4 font-heading font-semibold text-foreground">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimized */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to <span className="text-gradient-gold">Hit the Road?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Book your first rental today and get 10% off! Use code FIRST10 at checkout.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/booking"
                className="rounded-lg bg-gold px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-gold-light hover:shadow-lg"
              >
                Book Now & Save 10%
              </Link>
              <a
                href="tel:9994557462"
                className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/50">
              Free cancellation up to 24 hours before pickup • No hidden charges
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
