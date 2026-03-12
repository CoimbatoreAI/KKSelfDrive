import { Link } from "react-router-dom";
import { Fuel, Settings, Users } from "lucide-react";
import type { Car } from "@/data/cars";

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-car hover:-translate-y-2">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50 flex items-center justify-center p-4">
        <img
          src={car.image}
          alt={`${car.name} - ${car.type} - ${car.seats} seater ${car.fuelType} car for rent in Coimbatore`}
          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={400}
          height={250}
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {car.category === "With Driver" ? (
            <span className="w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
              With Driver
            </span>
          ) : car.category === "7 Seater" ? (
            <span className="w-fit rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
              7 Seater
            </span>
          ) : (
            <span className="w-fit rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
              Self Drive
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 h-full">
        {/* Title Section - Fixed Height */}
        <div className="h-7 mb-2">
          <h3 className="font-heading text-lg font-bold text-foreground line-clamp-1">{car.name}</h3>
        </div>

        {/* Tags Section - Fixed Height (fits 2 lines if needed) */}
        <div className="flex flex-wrap items-center gap-2 h-14 overflow-hidden content-start">
          <span className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground whitespace-nowrap">
            <Fuel className="h-3 w-3" /> {car.fuelType}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground whitespace-nowrap">
            <Settings className="h-3 w-3" /> {car.transmission}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground whitespace-nowrap">
            <Users className="h-3 w-3" /> {car.seats} Seats
          </span>
        </div>

        {/* Price & Action Section - Fixed Height */}
        <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between h-20">
          <div className="flex flex-col justify-center gap-0.5">
            {car.pricePerDay > 0 ? (
              <div className="flex flex-col leading-tight">
                <div>
                  <span className="text-2xl font-bold text-foreground">₹{car.pricePerDay.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground ml-1">/day</span>
                </div>
                {car.pricePerKm && (
                  <span className="text-[10px] text-muted-foreground italic truncate max-w-[120px]">{car.pricePerKm}</span>
                )}
              </div>
            ) : (
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-foreground leading-none">{car.pricePerKm}</span>
                <span className="text-[10px] text-muted-foreground mt-1">Daily rate: Contact us</span>
              </div>
            )}
          </div>
          <Link
            to="/booking"
            state={{ carId: car.id }}
            className="rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-all hover:bg-navy-light shrink-0 uppercase tracking-tight"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
