import { useEffect } from "react";
import { Shield, Users, Award, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Counter from "@/components/Counter";

const stats = [
  { label: "Happy Customers", value: 10000, suffix: "+" },
  { label: "Cars in Fleet", value: 25, suffix: "+" },
  { label: "Years of Service", value: 14, suffix: "+" },
  { label: "Cities Covered", value: "Coimbatore" },
];

const AboutPage = () => {
  // Add structured data for About page
  useEffect(() => {
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About KK Self Drive",
      "description": "Learn about KK Self Driving Cars - Trusted self-drive car rental service in Coimbatore since 2012. We provide well-maintained vehicles at affordable prices with 24/7 customer support.",
      "url": "https://selfdriverentalcarscoimbatore.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "KK Self Drive",
        "url": "https://selfdriverentalcarscoimbatore.com",
        " foundingDate": "2012",
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        },
        "serviceType": ["Self Drive Car Rental", "Car Hire with Driver", "Wedding Car Rental", "Outstation Travel"]
      }
    };

    let script = document.getElementById('about-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'about-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(aboutSchema);

    return () => {
      if (script) script.remove();
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>About Us | KK Self Drive - Trusted Car Rental in Coimbatore Since 2012</title>
        <meta name="description" content="Learn about KK Self Drive - Coimbatore's trusted self-drive car rental company since 2012. We have 25+ well-maintained vehicles including Swift, Baleno, Ertiga, Innova, Thar. 10,000+ happy customers, 24/7 support. Book your rental today!" />
        <meta name="keywords" content="about car rental coimbatore, self drive car company coimbatore, kk self drive history, car rental business coimbatore, trusted car hire coimbatore, about self drive rental, car rental about us coimbatore, vehicle rental company tamil nadu" />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/about" />
        <meta property="og:title" content="About Us | KK Self Drive - Trusted Car Rental Coimbatore Since 2012" />
        <meta property="og:description" content="Learn about Coimbatore's #1 self-drive car rental company. 25+ cars, 10,000+ customers, 14+ years of experience." />
        <meta property="og:url" content="https://selfdriverentalcarscoimbatore.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Us | KK Self Drive - Trusted Car Rental Coimbatore Since 2012" />
        <meta name="twitter:description" content="Learn about Coimbatore's trusted self-drive car rental company since 2012." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            About <span className="text-gradient-gold">KK Self Drive</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Trusted self-drive car rental service in Coimbatore since 2012. We provide well-maintained vehicles at affordable prices with 24/7 customer support.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">Our Story</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Driving Freedom Since Day One
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              KK Self Driving Cars was founded with a simple mission: to make self-drive car rentals accessible,
              affordable, and hassle-free in Coimbatore. We believe everyone deserves the freedom to explore
              at their own pace, without the constraints of traditional car rentals.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our fleet consists of well-maintained, sanitized vehicles ranging from compact hatchbacks to
              premium SUVs. Every car undergoes rigorous safety checks before each rental to ensure your
              journey is smooth and safe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-gradient-gold">
                  {typeof s.value === "number" ? (
                    <Counter value={s.value} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-2 text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-premium">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To provide the most convenient, safe, and affordable self-drive car rental experience
                in Coimbatore, empowering our customers with the freedom to travel on their own terms.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-premium">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To become the most trusted and preferred self-drive car rental brand across Tamil Nadu,
                known for quality vehicles, transparent pricing, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why KK */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Choose <span className="text-gradient-gold">KK Self Drive?</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Verified & Insured Cars", desc: "All vehicles are fully insured and verified for your safety." },
              { icon: Users, title: "Customer First", desc: "24/7 roadside assistance and dedicated support team." },
              { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of Coimbatore routes and travel tips." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-8 text-center shadow-sm transition-all hover:shadow-premium hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
