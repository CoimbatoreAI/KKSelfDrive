import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Shield, Clock, Phone, Star, Calendar, Car } from "lucide-react";

const BookingPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    car: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Auto-fill car if passed via navigation state
    if (location.state && (location.state as any).carId) {
      setForm(prev => ({ ...prev, car: (location.state as any).carId }));
    }

    // Add structured data for Booking page
    const bookingSchema = {
      "@context": "https://schema.org",
      "@type": "ReservationPage",
      "name": "Book a Car - KK Self Drive",
      "description": "Book your self-drive car rental in Coimbatore. Quick confirmation, no hidden fees, best prices guaranteed.",
      "url": "https://selfdriverentalcarscoimbatore.com/booking",
      "mainEntity": {
        "@type": "OrderAction",
        "name": "Order",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://selfdriverentalcarscoimbatore.com/booking"
        }
      }
    };

    // HowTo Schema for booking process
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Book a Self-Drive Car in Coimbatore",
      "description": "Step-by-step guide to booking your rental car with KK Self Drive",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose Your Car",
          "text": "Browse our fleet of hatchbacks, sedans, SUVs, MPVs, vans and buses. Select the car that best fits your travel needs.",
          "url": "https://selfdriverentalcarscoimbatore.com/cars"
        },
        {
          "@type": "HowToStep",
          "name": "Select Dates",
          "text": "Choose your pickup and drop-off dates and times. We offer flexible rental periods to suit your schedule."
        },
        {
          "@type": "HowToStep",
          "name": "Provide Details",
          "text": "Enter your contact information including name, phone number, and email for booking confirmation."
        },
        {
          "@type": "HowToStep",
          "name": "Confirm Booking",
          "text": "Submit your booking request. Our team will contact you within minutes to confirm your reservation."
        }
      ]
    };

    let script = document.getElementById('booking-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'booking-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(bookingSchema);

    // Add HowTo Schema
    let howToScript = document.getElementById('howto-schema') as HTMLScriptElement | null;
    if (!howToScript) {
      howToScript = document.createElement('script');
      howToScript.id = 'howto-schema';
      howToScript.type = 'application/ld+json';
      document.head.appendChild(howToScript);
    }
    howToScript.textContent = JSON.stringify(howToSchema);

    return () => {
      if (script) script.remove();
      const howToScript = document.getElementById('howto-schema');
      if (howToScript) howToScript.remove();
    };
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Find car name
    const selectedCar = cars.find(c => c.id === form.car)?.name || "Not selected";

    // Format WhatsApp message
    const message = `*New Booking Request*
    
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Car: ${selectedCar}
Pickup: ${form.pickupDate} at ${form.pickupTime}
Dropoff: ${form.dropoffDate} at ${form.dropoffTime}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919994557462?text=${encodedMessage}`;

    // Open in new tab
    window.open(whatsappUrl, "_blank");

    toast({ title: "Booking Request Sent!", description: "We will check availability and confirm shortly." });
  };

  if (submitted) {
    return (
      <main>
        <section className="bg-primary pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
              Booking <span className="text-gradient-gold">Confirmed</span>
            </h1>
          </div>
        </section>
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">Thank You!</h2>
            <p className="mt-4 text-muted-foreground">
              Your booking request has been received. Our team will contact you at <strong>{form.phone}</strong> to confirm your reservation.
            </p>
          </div>
        </section>
      </main>
    );
  }

  // Pre-process cars into categories for a cleaner dropdown
  const categories = Array.from(new Set(cars.map(c => c.category)));

  return (
    <main>
      <Helmet>
        <title>Book a Car | KK Self Drive - Car Rental Booking in Coimbatore | Quick Online Booking</title>
        <meta name="description" content="Book your self-drive car rental in Coimbatore online. Quick booking, instant confirmation, best prices. Choose from Swift, Baleno, Ertiga, Innova, Thar, Creta & more. Free delivery, 24/7 support." />
        <meta name="keywords" content="book car rental coimbatore, online car booking coimbatore, reserve self drive car, car rental reservation, booking form car hire coimbatore, book car now, instant car booking coimbatore, self drive booking online, car hire reservation coimbatore, book innova thar ertiga" />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/booking" />
        <meta property="og:title" content="Book a Car | KK Self Drive - Car Rental Booking Coimbatore" />
        <meta property="og:description" content="Book your self-drive car rental in Coimbatore online. Quick booking, instant confirmation, best prices." />
        <meta property="og:url" content="https://selfdriverentalcarscoimbatore.com/booking" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Book a Car | KK Self Drive - Car Rental Booking Coimbatore" />
        <meta name="twitter:description" content="Book your self-drive car rental in Coimbatore. Quick booking, instant confirmation." />
      </Helmet>

      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Book Your <span className="text-gradient-gold">Ride</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Reserve your self-drive car in minutes. Quick confirmation, no hidden fees, best prices in Coimbatore. Book <strong>Swift, Baleno, Ertiga, Innova, Thar, Creta</strong> and more!
          </p>
          
          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-gold" />
              <span>100% Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-8">
            {/* Car selection */}
            <div>
              <label className="text-sm font-medium text-foreground">Select Car</label>
              <select
                required
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
              >
                <option value="">Choose a car</option>
                {categories.map(cat => (
                  <optgroup key={cat} label={cat}>
                    {cars.filter(c => c.category === cat).map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} – {c.pricePerDay > 0 ? `₹${c.pricePerDay}/day` : c.pricePerKm} ({c.type})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Pick-up Date</label>
                <input
                  type="date"
                  required
                  value={form.pickupDate}
                  onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Pick-up Time</label>
                <input
                  type="time"
                  required
                  value={form.pickupTime}
                  onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Drop-off Date</label>
                <input
                  type="date"
                  required
                  value={form.dropoffDate}
                  onChange={(e) => setForm({ ...form, dropoffDate: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Drop-off Time</label>
                <input
                  type="time"
                  required
                  value={form.dropoffTime}
                  onChange={(e) => setForm({ ...form, dropoffTime: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
            </div>

            {/* Personal info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your phone"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Email (Optional)</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="your@email.com"
              />
            </div>



            <Button type="submit" className="w-full bg-gold text-accent-foreground hover:bg-gold-light font-semibold py-3 text-base">
              Confirm Booking
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
