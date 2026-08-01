/*
===========================================
File Path      : Src/Components/Navbar/Navbar.jsx
Component Name : Navbar (Part 01 - Active Wishlist Fixed)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter,
  FaYoutube,
  FaWhatsapp, 
  FaInstagram, 
  FaLinkedinIn, 
  FaSearch,
  FaShoppingCart 
} from "react-icons/fa";

import { useApp } from "../../Context/AppContext";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import CTAButton from "./CTAButton";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

// Navbar Dropdowns, Wishlist & Search Modal
import CurrencyDropdown from "./CurrencyDropdown";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import WishlistButton from "./WishlistButton";
import SearchModal from "./SearchModal";

function Navbar() {
  const { cart, wishlist } = useApp();
  const navigate = useNavigate(); 
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Social Links Data
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://whatsapp.com" }
  ];

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // 🟢 উইশলিস্ট আইকন ক্লিকে উইশলিস্ট ডিটেইলস পেইজে নিয়ে যাওয়ার লজিক যুক্ত করা হলো
  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleCartClick = () => {
    navigate("/cart"); 
  };


  return (
    <>
      <header className="sticky top-0 left-0 w-full z-[999] transition-all duration-300">
        
        {/* ==================== 1. TOP BAR ==================== */}
        <div className="bg-[#064824] text-white text-xs py-2 border-b border-white/10 hidden md:block">
          <div className="max-w-[1320px] mx-auto px-5 xl:px-0 flex items-center justify-between">
            
            {/* Top Bar Left: Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:info@bafafgreenfarm.com" 
                className="flex items-center gap-2 hover:text-[#A3D13A] transition-colors"
              >
                <FaEnvelope className="text-[#A3D13A]" />
                <span>info@bafafgreenfarm.com</span>
              </a>
              <a 
                href="tel:+8801750909833" 
                className="flex items-center gap-2 hover:text-[#A3D13A] transition-colors"
              >
                <FaPhoneAlt className="text-[#A3D13A]" />
                <span>+880 1750909833</span>
              </a>
            </div>

            {/* Top Bar Right: Currency, Socials, Wishlist & Profile */}
            <div className="flex items-center gap-5">
              <CurrencyDropdown />

              <div className="flex items-center gap-3 border-l border-r border-white/10 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A3D13A] hover:scale-110 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <WishlistButton count={wishlist.length} onClick={handleWishlistClick} />
                <NotificationDropdown />
                <ProfileDropdown />
              </div>
            </div>

          </div>
        </div>

        {/* ==================== 2. MAIN NAVBAR ==================== */}
        <div
          className={`
            w-full
            transition-all
            duration-300
            ${isSticky ? "bg-[#0B7A3E]/95 backdrop-blur-xl shadow-2xl" : "bg-[#0B7A3E]"}
          `}
        >
          <div className="max-w-[1320px] mx-auto px-5 xl:px-0">
            <div className={`flex items-center justify-between transition-all duration-300 ${isSticky ? "h-[75px]" : "h-[85px]"}`}>
              
              {/* Logo */}
              <Logo />

              {/* Desktop Menu */}
              <div className="hidden lg:flex flex-1 justify-center">
                <DesktopMenu />
              </div>

              {/* Desktop CTA, Search & Shopping Cart */}
              <div className="hidden lg:flex items-center gap-4">
                
                {/* 🛒 SEARCH BAR-এর ঠিক সামনে শপিং কার্ট বাটন যুক্ত করা হলো */}
                <button
                  type="button"
                  onClick={handleCartClick}
                  className="relative p-2.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer group"
                  aria-label="Cart"
                >
                  <FaShoppingCart className="text-base group-hover:scale-110 transition-transform" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#A3D13A] text-[#064824] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <FaSearch className="text-base" />
                </button>

                <CTAButton />
              </div>

              {/* Mobile Actions & Hamburger */}
              <div className="flex items-center gap-3 lg:hidden">
                
                {/* Mobile Shopping Cart */}
                <button
                  type="button"
                  onClick={handleCartClick}
                  className="relative p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Cart"
                >
                  <FaShoppingCart className="text-lg" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#A3D13A] text-[#064824] text-[9px] font-extrabold w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-md">
                      {cart.length}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <FaSearch className="text-lg" />
                </button>

                {/* Mobile Active Wishlist */}
                <WishlistButton count={wishlist.length} onClick={handleWishlistClick} />

                <HamburgerButton
                  isOpen={mobileMenuOpen}
                  setIsOpen={setMobileMenuOpen}
                />
              </div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="h-[3px] bg-gradient-to-r from-[#A3D13A] via-[#C6E86C] to-[#A3D13A]" />
        </div>

      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
