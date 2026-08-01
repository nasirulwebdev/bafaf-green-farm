/*
===========================================
File Path      : Src/Components/Navbar/ProfileDropdown.jsx
Component Name : ProfileDropdown
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaUser, 
  FaShoppingBag, 
  FaHeart, 
  FaCog, 
  FaSignOutAlt, 
  FaChevronDown 
} from "react-icons/fa";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const profileMenuItems = [
    { label: "My Profile", path: "/profile", icon: <FaUser /> },
    { label: "My Orders", path: "/orders", icon: <FaShoppingBag /> },
    { label: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
    { label: "Account Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-[#A3D13A] border-2 border-white flex items-center justify-center text-[#0B7A3E] font-bold text-sm shadow-md">
          JD
        </div>
        <div className="hidden lg:flex flex-col text-left">
          <span className="text-xs font-bold text-white leading-none">John Doe</span>
          <span className="text-[10px] text-white/70">Customer</span>
        </div>
        <FaChevronDown
          className={`text-white text-[10px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-fadeIn text-gray-800">
          {/* Header User Info */}
          <div className="px-4 pb-3 mb-2 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0B7A3E] text-white font-bold flex items-center justify-center text-base">
              JD
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 leading-snug">John Doe</h4>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col px-2">
            {profileMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-colors"
              >
                <span className="text-[#0B7A3E] text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-2 pt-2 border-t border-gray-100 px-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                alert("Logging out...");
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <FaSignOutAlt className="text-sm" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;