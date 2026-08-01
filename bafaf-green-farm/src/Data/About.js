/*
===============================================
File: src/Data/About.js
Project: BAFAF GREEN FARM
About Page Central Data Store
===============================================
*/

import HeroBg from "../assets/Images/Home/About/about-farm.jpg";
import CompanyImg from "../assets/Images/Home/About/company-farm.jpg";

import Team1 from "../assets/Images/Home/Testimonials/client-01.jpg";
import Team2 from "../assets/Images/Home/Testimonials/client-02.jpg";
import Team3 from "../assets/Images/Home/Testimonials/client-03.jpg";

import Cert1 from "../assets/Images/Home/Gallery/gallery-01.jpg";
import Cert2 from "../assets/Images/Home/Gallery/gallery-02.jpg";

import { 
  FaBullseye, FaEye, FaHandHoldingHeart, FaAward, 
  FaFaceSmile, FaFish, FaSeedling, FaLocationDot, 
  FaLinkedin, FaFacebook, FaTwitter 
} from "react-icons/fa6";

const AboutData = {
  // HERO SECTION
  hero: {
    title: "ABOUT US",
    breadcrumb: "Home > About Us",
    backgroundImage: HeroBg,
  },

  // COMPANY PROFILE
  companyProfile: {
    tag: "WHO WE ARE",
    title: "BAFAF Green Farm",
    description1: "BAFAF Green Farm is a trusted name in fisheries and agro production in Bangladesh. We are committed to producing fresh, healthy and halal food through modern farming techniques and sustainable practices.",
    description2: "Our goal is to ensure food security, create employment and contribute to the nation's economy.",
    image: CompanyImg,
    features: [
      { id: 1, icon: FaBullseye, title: "Our Mission", desc: "To produce fresh, halal and quality agro-fisheries products and ensure customer satisfaction." },
      { id: 2, icon: FaEye, title: "Our Vision", desc: "To be the most trusted and sustainable agro-fisheries brand in Bangladesh." },
      { id: 3, icon: FaHandHoldingHeart, title: "Our Values", desc: "We believe in quality, integrity, sustainability and customer first approach." },
      { id: 4, icon: FaAward, title: "Why Choose Us", desc: "Modern farming, expert team, quality products and dedicated customer support." },
    ]
  },

  // WHY CHOOSE US / STATISTICS
  statistics: [
  { id: 1, count: "10+", label: "Years of Experience", icon: FaAward },
  { id: 2, count: "500+", label: "Happy Clients", icon: FaFaceSmile }, // এখানে FaSmile এর বদলে FaFaceSmile দিন
  { id: 3, count: "200+", label: "Fish Farms", icon: FaFish },
  { id: 4, count: "1000+", label: "Tons Production", icon: FaSeedling },
  { id: 5, count: "64", label: "District Coverage", icon: FaLocationDot },
],

  // TEAM SECTION
  team: [
    { id: 1, name: "Dr. Al Mamun", role: "Managing Director", image: Team1, social: { fb: "#", tw: "#", in: "#" } },
    { id: 2, name: "Engr. Nazmul Hasan", role: "Chief Agronomist", image: Team2, social: { fb: "#", tw: "#", in: "#" } },
    { id: 3, name: "Sohrab Hossain", role: "Fisheries Expert", image: Team3, social: { fb: "#", tw: "#", in: "#" } },
  ],

  // CERTIFICATES SECTION
  certificates: [
    { id: 1, title: "ISO 9001:2015 Certified", image: Cert1, desc: "Quality Management System standard implementation." },
    { id: 2, title: "Organic Agro Standard", image: Cert2, desc: "Certified pure eco-friendly farming procedures." },
  ]
};

export default AboutData;