/*
===============================================
File: src/Data/Home.js
Project: BAFAF GREEN FARM
Home Page Central Data Store
===============================================
*/

// ==============================
// 1. Hero Images & Icons
// ==============================
import HeroBg from "../assets/Images/Home/Hero/hero-bg.jpg";
import HeroLogo from "../assets/Images/Home/Hero/hero-logo.png";
import { FaAward, FaLeaf, FaShieldHalved, FaHandshake } from "react-icons/fa6";

// ==============================
// 2. About Images
// ==============================
import AboutFarmImg from "../assets/Images/Home/About/about-farm.jpg";

// ==============================
// 3. Services Images & Icons
// ==============================
import FishFarmingImg from "../assets/Images/Home/Services/fish-farming.jpg";
import RiceProductionImg from "../assets/Images/Home/Services/rice-production.jpg";
import AgroProductsImg from "../assets/Images/Home/Services/agro-products.jpg";
import SupplyExportImg from "../assets/Images/Home/Services/supply-export.jpg";
import { FaFish, FaSeedling, FaTruck } from "react-icons/fa6";

// ==============================
// 4. Products Images
// ==============================
import FreshFishImg from "../assets/Images/Home/Products/fresh-fish.jpg";
import RiceImg from "../assets/Images/Home/Products/rice.jpg";
import VegetablesImg from "../assets/Images/Home/Products/agro-products.jpg";
import WholesaleImg from "../assets/Images/Home/Products/wholesale-supply.jpg";

// ==============================
// 5. Statistics Icons
// ==============================
import { FaFaceSmile, FaUserCheck, FaBuilding } from "react-icons/fa6";

// ==============================
// 6. Gallery Images
// ==============================
import Gallery1 from "../assets/Images/Home/Gallery/gallery-01.jpg";
import Gallery2 from "../assets/Images/Home/Gallery/gallery-02.jpg";
import Gallery3 from "../assets/Images/Home/Gallery/gallery-03.jpg";
import Gallery4 from "../assets/Images/Home/Gallery/gallery-04.jpg";
import Gallery5 from "../assets/Images/Home/Gallery/gallery-05.jpg";

// ==============================
// 7. Testimonial Images
// ==============================
import Client1 from "../assets/Images/Home/Testimonials/client-01.jpg";
import Client2 from "../assets/Images/Home/Testimonials/client-02.jpg";
import Client3 from "../assets/Images/Home/Testimonials/client-03.jpg";

// ==============================
// 8. Contact Images & Icons
// ==============================
import OfficeImg from "../assets/Images/Home/Contact/office.jpg";
import MapImg from "../assets/Images/Home/Contact/map.jpg";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

// ==============================
// Main Home Data Object
// ==============================
const HomeData = {
  // 1. HERO SECTION DATA
  hero: {
    backgroundImage: HeroBg,
    logo: HeroLogo,
    title: "BAFAF GREEN FARM",
    subtitle: "Premium Fisheries, Agriculture & Organic Food Solutions for a Sustainable Future.",
    description: "We provide high-quality fish farming, rice production, agro products, cold storage, farm consultancy, and export services with modern technology and trusted management.",
    buttons: [
      {
        id: 1,
        text: "Explore Products",
        link: "/products",
        variant: "primary",
      },
      {
        id: 2,
        text: "Contact Us",
        link: "/contact",
        variant: "outline",
      },
    ],
    features: [
      {
        id: 1,
        icon: FaAward,
        title: "Premium Quality",
        description: "High-quality fisheries and agro products with international standards.",
      },
      {
        id: 2,
        icon: FaLeaf,
        title: "Eco Friendly",
        description: "Sustainable farming methods that protect nature and future generations.",
      },
      {
        id: 3,
        icon: FaShieldHalved,
        title: "100% Trusted",
        description: "Reliable production process with complete food safety and quality assurance.",
      },
      {
        id: 4,
        icon: FaHandshake,
        title: "Customer Satisfaction",
        description: "Building long-term partnerships through trust, quality, and excellent service.",
      },
    ],
  },

  // 2. ABOUT SECTION DATA
  about: {
    title: "ABOUT BAFAF GREEN FARM",
    subtitle: "Nurturing Nature, Growing Futures",
    description: "BAFAF Green Farm is a trusted name in fisheries and agro production in Bangladesh. We are committed to producing fresh, healthy and halal food through modern farming techniques and sustainable practices.",
    image: AboutFarmImg,
    mission: "To produce fresh, halal and quality agro-fisheries products and ensure customer satisfaction.",
    vision: "To be the most trusted and sustainable agro-fisheries brand in Bangladesh.",
  },

  // 3. SERVICES SECTION DATA
  services: [
    {
      id: 1,
      title: "FISH FARMING",
      icon: FaFish,
      image: FishFarmingImg,
      description: "We provide high quality fish farming with modern techniques and expert management.",
      link: "/services/fish-farming",
    },
    {
      id: 2,
      title: "RICE PRODUCTION",
      icon: FaSeedling,
      image: RiceProductionImg,
      description: "High quality rice production ensuring the best taste and nutrition.",
      link: "/services/rice-production",
    },
    {
      id: 3,
      title: "AGRO PRODUCTS",
      icon: FaLeaf,
      image: AgroProductsImg,
      description: "We produce a wide range of agro products for healthy and better living.",
      link: "/services/agro-products",
    },
    {
      id: 4,
      title: "SUPPLY & EXPORT",
      icon: FaTruck,
      image: SupplyExportImg,
      description: "We supply and export premium quality products across Bangladesh and abroad.",
      link: "/services/supply-export",
    },
  ],

 // 4. PRODUCTS SECTION DATA
  products: [
    {
      id: "fresh-fish", // URL-এর জন্য আইডি
      name: "FRESH FISH",
      image: FreshFishImg,
      description: "Healthy & fresh fish from our own farms.",
      longDescription: "Our fresh fishes are cultivated in high-standard, natural biofloc and pond environments. We ensure 100% chemical-free feed and regular health monitoring to deliver the best quality fish to your table.",
      price: "250 BDT / Kg",
      features: ["100% Organic & Fresh", "Chemical-Free Feed", "Harvested Daily"],
      link: "/products/fresh-fish",
    },
    {
      id: "rice",
      name: "RICE",
      image: RiceImg,
      description: "Premium quality rice for your healthy life.",
      longDescription: "Harvested from our fertile agricultural lands, our rice varieties are rich in nutrients, naturally aromatic, and processed with strict hygiene standards.",
      price: "80 BDT / Kg",
      features: ["Naturally Aged", "Unpolished & Pure", "High Nutritional Value"],
      link: "/products/rice",
    },
    {
      id: "agro-products",
      name: "AGRO PRODUCTS",
      image: VegetablesImg,
      description: "Fresh vegetables and agro products.",
      longDescription: "Grown in our modern eco-friendly greenhouses and local farms, our agro products offer supreme freshness and farm-to-table quality.",
      price: "Varies by item",
      features: ["Pesticide Free", "Locally Harvested", "Rich in Vitamins"],
      link: "/products/agro-products",
    },
    {
      id: "wholesale-supply",
      name: "WHOLESALE SUPPLY",
      image: WholesaleImg,
      description: "Wholesale & bulk supply for business.",
      longDescription: "We provide reliable bulk supply solutions for restaurants, local markets, and corporate partners with special wholesale pricing and prompt delivery.",
      price: "Custom Quote",
      features: ["Bulk Discount", "Scheduled Delivery", "Dedicated Support"],
      link: "/products/wholesale-supply",
    },
  ],

  // 5. STATISTICS SECTION DATA
statistics: [
  { id: 1, count: "5000+", label: "Satisfied Clients", icon: FaFaceSmile },
  { id: 2, count: "150+", label: "Expert Workers", icon: FaUserCheck },
  { id: 3, count: "12+", label: "Years Experience", icon: FaBuilding },
  { id: 4, count: "25+", label: "National Awards", icon: FaAward },
],

 
  // 6. GALLERY SECTION DATA
  gallery: [
    { 
      id: 1, 
      image: Gallery1, 
      title: "Fish Farm Project", 
      description: "Modern aquaculture and sustainable fish cultivation.",
      date: "15 Jan 2026" 
    },
    { 
      id: 2, 
      image: Gallery2, 
      title: "Rice Cultivation", 
      description: "High quality organic paddy field management.",
      date: "20 Feb 2026" 
    },
    { 
      id: 3, 
      image: Gallery3, 
      title: "Fresh Fish Harvesting", 
      description: "Safe and hygienic harvesting from local ponds.",
      date: "10 Mar 2026" 
    },
    { 
      id: 4, 
      image: Gallery4, 
      title: "Agro Greenhouse", 
      description: "Protected greenhouse farming for better yields.",
      date: "05 Apr 2026" 
    },
    { 
      id: 5, 
      image: Gallery5, 
      title: "Supply Processing", 
      description: "Quality checking and packaging for wholesale.",
      date: "12 May 2026" 
    },
  ],

  // 7. TESTIMONIALS SECTION DATA
  testimonials: [
    {
      id: 1,
      name: "Mahmudur Rahman",
      role: "Agro Distributor",
      image: Client1,
      quote: "BAFAF Green Farm provides top-notch organic products. Their fish and rice quality are always consistent and reliable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rafiqul Islam",
      role: "Wholesale Buyer",
      image: Client2,
      quote: "Extremely happy with their supply and export management. Prompt delivery with zero compromise on quality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anisur Rahman",
      role: "Farm Consultant",
      image: Client3,
      quote: "Modern techniques and eco-friendly farming practices make BAFAF Green Farm a pioneer in Bangladesh's agro sector.",
      rating: 5,
    },
  ],

  // 8. FAQ SECTION DATA
  faq: [
    {
      id: 1,
      question: "What types of fish do you farm?",
      answer: "We cultivate a wide range of fresh fish including Telapia, Rui, Katla, Pangas, and Indigenous Carp species using modern and sustainable aquaculture methods.",
    },
    {
      id: 2,
      question: "Are your agro products 100% organic?",
      answer: "Yes, we prioritize natural and eco-friendly farming practices without toxic chemicals to ensure clean, healthy, and high-quality produce.",
    },
    {
      id: 3,
      question: "Do you offer bulk supply and export options?",
      answer: "Yes, we handle large-scale wholesale supply across Bangladesh and export premium agro and fisheries products overseas.",
    },
    {
      id: 4,
      question: "How can I book a farm consultancy service?",
      answer: "You can reach out via our contact form, call our customer support line, or email us directly to schedule a consultation with our farm experts.",
    },
  ],

  // 9. CONTACT SECTION DATA
  contact: {
    officeImage: OfficeImg,
    mapImage: MapImg,
    info: [
      { id: 1, icon: FaLocationDot, title: "Location", detail: "Green Farm Complex, Dhaka, Bangladesh" },
      { id: 2, icon: FaPhone, title: "Phone", detail: "+880 1700-000000" },
      { id: 3, icon: FaEnvelope, title: "Email", detail: "info@bafagreenfarm.com" },
    ],
  },
};

export default HomeData;