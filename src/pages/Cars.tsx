import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CarCard from "@/components/CarCard";
import ScrollReveal from "@/components/ScrollReveal";
import { cars } from "@/data/cars";

const categories = ["All", "7 Seater", "With Driver"] as const;

const CarsPage = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? cars : cars.filter((c) => c.category === filter);

  // Add page-specific structured data
  useEffect(() => {
    const carListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Car Fleet - KK Self Drive",
      "description": "Browse our collection of self-drive cars for rent in Coimbatore. We offer hatchbacks, sedans, SUVs, MPVs, vans and buses at affordable prices.",
      "url": "https://selfdriverentalcarscoimbatore.com/cars",
      "numberOfItems": cars.length,
      "itemListElement": cars.slice(0, 6).map((car, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": car.name,
          "description": `${car.type} - ${car.category}. ${car.seats} seater car available for self-drive rental.`,
          "brand": {
            "@type": "Brand",
            "name": car.name.split(' ')[0]
          },
          "offers": {
            "@type": "Offer",
            "price": car.pricePerDay > 0 ? car.pricePerDay : car.pricePerKm,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    };

    let script = document.getElementById('car-list-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'car-list-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(carListSchema);

    return () => {
      if (script) script.remove();
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>Car Fleet | KK Self Drive - Rent a Car in Coimbatore | Hatchback, SUV, MPV, Van, Bus</title>
        <meta name="description" content="Browse our car fleet in Coimbatore. Self-drive rentals - Swift, Baleno, Alto, WagonR, Dzire, Ertiga, Innova, Creta, Thar, XUV, Van & Buses. Best prices starting ₹1500/day. Book online now!" />
        <meta name="keywords" content="car rental coimbatore, rent a car coimbatore, self drive cars fleet, hatchback rental coimbatore, sedan rental, suv rental coimbatore, 7 seater car rental coimbatore, mpv rental, van rental coimbatore, bus rental coimbatore, Innova rental, Thar rental, Ertiga rental, Creta rental, Swift rental, self drive near me, car fleet coimbatore, car hire online" />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/cars" />
        <meta property="og:title" content="Car Fleet | KK Self Drive - Rent a Car in Coimbatore | All Car Types" />
        <meta property="og:description" content="Browse Swift, Baleno, Alto, WagonR, Ertiga, Innova, Creta, Thar, XUV, Van & Buses. Best prices in Coimbatore. Self-drive rentals starting ₹1500/day." />
        <meta property="og:url" content="https://selfdriverentalcarscoimbatore.com/cars" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Car Fleet | KK Self Drive - Rent a Car in Coimbatore" />
        <meta name="twitter:description" content="Browse Swift, Baleno, Ertiga, Innova, Thar & more. Best car rental rates in Coimbatore." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Our <span className="text-gradient-gold">Fleet</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
              Browse our collection of premium <strong>self-drive cars</strong> and <strong>driver services</strong> in Coimbatore. From budget-friendly <strong>hatchbacks</strong> like Swift, Baleno, Alto to luxury <strong>SUVs</strong> like Thar, Innova, Creta, XUV - we have it all. Also available: <strong>7-seater MPVs</strong>, <strong>12-22 seater vans</strong>, and <strong>52-seater buses</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((car, index) => (
              <ScrollReveal key={car.id} delay={index * 0.05} className="h-full">
                <CarCard car={car} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarsPage;
