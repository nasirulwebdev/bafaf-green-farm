/*
===========================================
Component Name : Footer
Project        : BAFAF Green Farm
Framework      : React 19 + Vite + Tailwind CSS
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp,
  FaHeart,
  FaChevronRight
} from "react-icons/fa";

// আপনার প্রজেক্টের Logo কম্পোনেন্ট বা লোগো পাথ ইমপোর্ট করুন
import Logo from "../Navbar/Logo"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ★ Navbar-এর Quick Links (Menu)
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // ★ Navbar-এর Submenu / Our Services Links
  const serviceLinks = [
    { name: "Fish Farming", path: "/services/fish-farming" },
    { name: "Rice Production", path: "/services/rice-production" },
    { name: "Agro Products", path: "/services/agro-products" },
    { name: "Supply & Export", path: "/services/supply-export" },
  ];

  // ★ Social Links (Active External Links)
  const socialLinks = [
    { 
      name: "Facebook", 
      icon: <FaFacebookF />, 
      url: "https://facebook.com", 
      bgColor: "bg-[#1877F2] hover:bg-[#1154a7]" 
    },
    { 
      name: "YouTube", 
      icon: <FaYoutube />, 
      url: "https://youtube.com", 
      bgColor: "bg-[#FF0000] hover:bg-[#cc0000]" 
    },
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp />, 
      url: "https://wa.me/8801750909833", 
      bgColor: "bg-[#25D366] hover:bg-[#1da851]" 
    },
  ];

  return (
    <footer className="bg-[#041c0e] text-gray-300 font-sans border-t border-white/10 pt-12 pb-6">
      <div className="max-w-[1320px] mx-auto px-5 xl:px-0">
        
        {/* ==================== UPPER FOOTER CONTENT ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* COLUMN 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <div className="bg-transparent">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 italic">
              "Nurturing Nature, Growing Futures"
            </p>
          </div>

          {/* COLUMN 2: Quick Links / Main Menu (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#A3D13A] font-bold text-sm tracking-wider uppercase mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#A3D13A] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <FaChevronRight className="text-[8px] text-[#A3D13A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services / Submenu Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#A3D13A] font-bold text-sm tracking-wider uppercase mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="hover:text-[#A3D13A] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <FaChevronRight className="text-[8px] text-[#A3D13A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#A3D13A] font-bold text-sm tracking-wider uppercase mb-4">
              CONTACT INFO
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="tel:+8801750909833"
                  className="flex items-center gap-2.5 hover:text-[#A3D13A] transition-colors"
                >
                  <FaPhoneAlt className="text-[#A3D13A] text-sm shrink-0" />
                  <span>01750-909833</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bafaf.greenfarm@gmail.com"
                  className="flex items-center gap-2.5 hover:text-[#A3D13A] transition-colors break-all"
                >
                  <FaEnvelope className="text-[#A3D13A] text-sm shrink-0" />
                  <span>bafaf.greenfarm@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <FaMapMarkerAlt className="text-[#A3D13A] text-sm shrink-0" />
                  <span>Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: Follow Us / Social Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#A3D13A] font-bold text-sm tracking-wider uppercase mb-4">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-sm shadow-md transition-transform duration-200 hover:scale-110 ${social.bgColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ==================== LOWER FOOTER (COPYRIGHT) ==================== */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>
            © {currentYear} <span className="text-white font-medium">BAFAF Green Farm</span>. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed with <FaHeart className="text-red-500 text-xs animate-pulse" /> by{" "}
            <span className="text-[#A3D13A] font-semibold hover:underline cursor-pointer">
              Nasinul Web Dev
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;