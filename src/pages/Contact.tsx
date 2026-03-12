import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  // Add structured data for Contact page
  useEffect(() => {
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact KK Self Drive",
      "description": "Contact KK Self Drive for car rental bookings and inquiries in Coimbatore. Phone, WhatsApp, and email available.",
      "url": "https://selfdriverentalcarscoimbatore.com/contact",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "KK Self Drive",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "81 Subbian Street, Ganeshapuram",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641045",
          "addressCountry": "IN"
        },
        "telephone": "+919994557462",
        "email": "creativebuddies66@gmail.com"
      }
    };

    let script = document.getElementById('contact-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'contact-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(contactSchema);

    return () => {
      if (script) script.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `*New Contact Inquiry*
    
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Message: ${form.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919994557462?text=${encodedMessage}`;

    // Open in new tab
    window.open(whatsappUrl, "_blank");

    toast({ title: "Message Prepared!", description: "Opening WhatsApp to send your message." });
  };

  return (
    <main>
      <Helmet>
        <title>Contact Us | KK Self Drive - Car Rental Booking in Coimbatore</title>
        <meta name="description" content="Contact KK Self Drive for car rental bookings in Coimbatore. Call 99945 57462, WhatsApp us, or email. Open 7AM - 10PM daily. Get instant booking for Swift, Baleno, Ertiga, Innova, Thar & more." />
        <meta name="keywords" content="contact car rental coimbatore, phone number car hire coimbatore, whatsapp car booking coimbatore, customer support car rental, kk self drive contact, car rental inquiry coimbatore, book car now contact, 24/7 car rental support" />
        <link rel="canonical" href="https://selfdriverentalcarscoimbatore.com/contact" />
        <meta property="og:title" content="Contact Us | KK Self Drive - Car Rental in Coimbatore" />
        <meta property="og:description" content="Contact us for car rental bookings in Coimbatore. Call, WhatsApp, or email for instant booking." />
        <meta property="og:url" content="https://selfdriverentalcarscoimbatore.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Us | KK Self Drive - Car Rental in Coimbatore" />
        <meta name="twitter:description" content="Contact KK Self Drive for car rental bookings in Coimbatore." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Get in touch with us for bookings, queries, or support. We're available <strong>24/7</strong> to assist you with your car rental needs in Coimbatore. Call us at <strong>99945 57462</strong> or WhatsApp for instant response!
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <Button type="submit" className="w-full bg-gold text-accent-foreground hover:bg-gold-light font-semibold py-3">
                  Send Message
                </Button>
              </form>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:9994557462"
                  className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/919994557462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#128C7E]"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-current" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Info + Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Office</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">81 Subbian Street, Ganeshapuram, Coimbatore, Tamil Nadu 641045</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:9994557462" className="text-sm text-muted-foreground hover:text-gold">99945 57462</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">creativebuddies66@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Sun: 7:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4523!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KK Self Drive Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
