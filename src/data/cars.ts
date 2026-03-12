import alto from "@/assets/alto.avif";
import baleno from "@/assets/baleno.avif";
import bus52 from "@/assets/bus(52).jpg";
import carens from "@/assets/carens.jpeg";
import creta from "@/assets/creta.avif";
import eon from "@/assets/eon.avif";
import ertiga from "@/assets/ertiga.avif";
import fb from "@/assets/fb.png";
import i10 from "@/assets/i10.avif";
import i20 from "@/assets/i20.avif";
import innovaAuto from "@/assets/innova(automatic).jpeg";
import innovaManual from "@/assets/innova(manual).avif";
import innovaMid from "@/assets/ti(mid).avif";
import innovaOld from "@/assets/innova(old).avif";
import jazz from "@/assets/jazz.avif";
import kiger from "@/assets/kiger.avif";
import kwid from "@/assets/kwid.jpeg";
import marazzo from "@/assets/marazzo.avif";
import mssc from "@/assets/mssc.avif";
import neo from "@/assets/neo.avif";
import scorpio from "@/assets/scorpio.jpeg";
import sedan from "@/assets/sedan.jpeg";
import seltos from "@/assets/seltos.avif";
import swift from "@/assets/swift.jpeg";
import thar from "@/assets/thar.avif";
import triber from "@/assets/triber.avif";
import tt14 from "@/assets/tt(14).webp";
import urbania17 from "@/assets/urbania(17).jpg";
import van22 from "@/assets/van(22).avif";
import venue from "@/assets/venue.avif";
import xuv from "@/assets/xuv.jpg";
import swiftAuto from "@/assets/front-left-side-47.jpg";
import polo from "@/assets/polo-sr.jpg";

export type Car = {
  id: string;
  name: string;
  category: "SUV" | "Sedan" | "Hatchback" | "7 Seater" | "With Driver";
  type: string;
  pricePerDay: number;
  fuelType: string;
  transmission: string;
  seats: number;
  image: string;
  pricePerKm?: string;
};

export const cars: Car[] = [
  // Hatchbacks
  {
    id: "alto",
    name: "Maruti Alto",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 1500,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: alto,
  },
  {
    id: "eon",
    name: "Hyundai Eon",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 1600,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: eon,
  },
  {
    id: "i10",
    name: "Hyundai i10",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 1600,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: i10,
  },
  {
    id: "kwid",
    name: "Renault Kwid",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 1700,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: kwid,
  },
  {
    id: "swift",
    name: "Maruti Swift",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 2200,
    fuelType: "Petrol/Diesel",
    transmission: "Manual",
    seats: 5,
    image: swift,
  },
  {
    id: "swift-automatic",
    name: "Maruti Swift (Automatic)",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 3000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image: swiftAuto,
  },
  {
    id: "polo",
    name: "VW Polo",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 2300,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: polo,
  },
  {
    id: "baleno",
    name: "Maruti Baleno",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 2200,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image: baleno,
  },
  {
    id: "jazz",
    name: "Honda Jazz",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 2200,
    fuelType: "Petrol/Diesel",
    transmission: "Manual",
    seats: 5,
    image: jazz,
  },
  {
    id: "i20",
    name: "Hyundai i20",
    category: "Hatchback",
    type: "Hatchback",
    pricePerDay: 2200,
    fuelType: "Petrol/Diesel",
    transmission: "Manual",
    seats: 5,
    image: i20,
  },
  // Sedans & Compact SUVs
  {
    id: "maruti-suzuki",
    name: "Swift Dzire",
    category: "Sedan",
    type: "Sedan",
    pricePerDay: 2500,
    fuelType: "Petrol/Diesel",
    transmission: "Manual",
    seats: 5,
    image: sedan,
  },
  {
    id: "venue",
    name: "Hyundai Venue",
    category: "SUV",
    type: "SUV",
    pricePerDay: 2500,
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
    seats: 5,
    image: venue,
  },
  {
    id: "scouts",
    name: "Mahindra Scorpio (Scouts)",
    category: "SUV",
    type: "SUV",
    pricePerDay: 5000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: scorpio,
  },
  {
    id: "s-cross",
    name: "Maruti Suzuki S-Cross",
    category: "SUV",
    type: "SUV",
    pricePerDay: 3000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 5,
    image: mssc,
  },
  {
    id: "kiger",
    name: "Renault Kiger",
    category: "SUV",
    type: "SUV",
    pricePerDay: 3000,
    fuelType: "Petrol",
    transmission: "Manual/Auto",
    seats: 5,
    image: kiger,
  },
  {
    id: "creta",
    name: "Hyundai Creta",
    category: "SUV",
    type: "SUV",
    pricePerDay: 4000,
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
    seats: 5,
    image: creta,
  },
  {
    id: "seltos",
    name: "Kia Seltos",
    category: "SUV",
    type: "SUV",
    pricePerDay: 4000,
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
    seats: 5,
    image: seltos,
  },
  {
    id: "thar-3door",
    name: "Mahindra Thar (3 Door)",
    category: "SUV",
    type: "SUV",
    pricePerDay: 5000,
    fuelType: "Diesel",
    transmission: "Manual/Auto",
    seats: 4,
    image: thar,
  },
  // 7 Seaters
  {
    id: "triber",
    name: "Renault Triber",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 3000,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 7,
    image: triber,
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 3500,
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
    seats: 7,
    image: ertiga,
  },
  {
    id: "innova-old",
    name: "Toyota Innova (Old)",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 3000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: innovaOld,
  },
  {
    id: "innova-midrange",
    name: "Toyota Innova (Midrange)",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 3500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: innovaMid,
  },
  {
    id: "xuv500",
    name: "Mahindra XUV 500",
    category: "7 Seater",
    type: "SUV",
    pricePerDay: 3500,
    fuelType: "Diesel",
    transmission: "Manual/Auto",
    seats: 7,
    image: xuv,
  },
  {
    id: "bolero-neo",
    name: "Mahindra Bolero Neo",
    category: "7 Seater",
    type: "SUV",
    pricePerDay: 3500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: neo,
  },
  {
    id: "marazzo",
    name: "Mahindra Marazzo",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 3500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: marazzo,
  },
  {
    id: "carens",
    name: "Kia Carens",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 4000,
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
    seats: 7,
    image: carens,
  },
  {
    id: "crysta-manual",
    name: "Innova Crysta (Manual)",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 5000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 7,
    image: innovaManual,
  },
  {
    id: "crysta-auto",
    name: "Innova Crysta (Automatic)",
    category: "7 Seater",
    type: "MPV",
    pricePerDay: 5500,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 7,
    image: innovaAuto,
  },
  // With Driver
  {
    id: "tempo-14",
    name: "Tempo Traveller (14 Seater)",
    category: "With Driver",
    type: "Van",
    pricePerDay: 3500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 14,
    image: tt14,
  },
  {
    id: "force-benz",
    name: "Force & Benz (5 & 7 Seater)",
    category: "With Driver",
    type: "Van",
    pricePerDay: 0,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 12,
    image: fb,
    pricePerKm: "₹12-16 per km",
  },
  {
    id: "coach-22",
    name: "Coach Mini Van (22 Seater)",
    category: "With Driver",
    type: "Van",
    pricePerDay: 4500,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 22,
    image: van22,
    pricePerKm: "₹23/km (Non-AC)",
  },
  {
    id: "urbania-17",
    name: "Force Urbania (17 Seater)",
    category: "With Driver",
    type: "Van",
    pricePerDay: 9000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 17,
    image: urbania17,
    pricePerKm: "₹38/km",
  },
  {
    id: "marcopolo-52",
    name: "Marcopolo Bus (52 Seater)",
    category: "With Driver",
    type: "Bus",
    pricePerDay: 20000,
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 52,
    image: bus52,
    pricePerKm: "₹40/km",
  },
];
