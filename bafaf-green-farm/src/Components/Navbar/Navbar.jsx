/*
===========================================
Component Name : Navbar
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

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
  FaSearch 
} from "react-icons/fa";

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
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ★ Wishlist Count State (প্রয়োজনে আপনি পরে Context API/Redux দিয়ে যুক্ত করতে পারবেন)
  const [wishlistCount, setWishlistCount] = useState(3);

  // ★ Social Links Data (এখানে আপনার পেজ/প্রোফাইলের আসল ইউআরএল বসিয়ে দিন)
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/mdnasirulislam.nahid.1" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://www.twitter.com/yourprofile" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/md_nasirul_islam_/" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/md-nasirul-islam-nahid-8a1b49287" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@GreenWorld-gy9dkFavoriite/featured" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://web.whatsapp.com/" }
  ];

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  // Wishlist এ ক্লিক করলে যা হবে
  const handleWishlistClick = () => {
    console.log("Wishlist Clicked!");
    // উদাহরণস্বরূপ: উইশলিস্ট পেজে রিডাইরেক্ট করতে পারেন
    // window.location.href = "/wishlist";
  };

  return (
    <>
      {/* fixed top-0 সরিয়ে sticky top-0 করে দিন */}
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
                href="tel:+8801700000000" 
                className="flex items-center gap-2 hover:text-[#A3D13A] transition-colors"
              >
                <FaPhoneAlt className="text-[#A3D13A]" />
                <span>+880 1750909833</span>
              </a>
            </div>

            {/* Top Bar Right: Currency, Active Socials, Active Wishlist, Profile */}
            <div className="flex items-center gap-5">
              {/* Currency Dropdown */}
              <CurrencyDropdown />

              {/* ★ Active Social Links */}
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

              {/* ★ Active Wishlist, Notifications & Profile */}
              <div className="flex items-center gap-3">
                <WishlistButton count={wishlistCount} onClick={handleWishlistClick} />
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
            ${
              isSticky
                ? "bg-[#0B7A3E]/95 backdrop-blur-xl shadow-2xl"
                : "bg-[#0B7A3E]"
            }
          `}
        >
          <div className="max-w-[1320px] mx-auto px-5 xl:px-0">
            <div
              className={`
                flex
                items-center
                justify-between
                transition-all
                duration-300
                ${isSticky ? "h-[75px]" : "h-[85px]"}
              `}
            >
              {/* Logo */}
              <Logo />

              {/* Desktop Menu */}
              <div className="hidden lg:flex flex-1 justify-center">
                <DesktopMenu />
              </div>

              {/* Desktop CTA & Search */}
              <div className="hidden lg:flex items-center gap-4">
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
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <FaSearch className="text-lg" />
                </button>

                {/* Mobile Active Wishlist */}
                <WishlistButton count={wishlistCount} onClick={handleWishlistClick} />

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