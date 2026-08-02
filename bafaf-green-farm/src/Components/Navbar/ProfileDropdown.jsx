/*
===========================================
File Path      : Src/Components/Navbar/ProfileDropdown.jsx
Component Name : ProfileDropdown (Live Firebase Sync)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaShoppingBag, 
  FaHeart, 
  FaCog, 
  FaSignOutAlt, 
  FaChevronDown 
} from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext"; // 🟢 গলোবাল অথ হুক কল করা হলো

function ProfileDropdown() {
  const { user, logout } = useAuth(); // 🟢 লাইভ ফায়ারবেস অবজেক্ট ডিক্লেয়ার করা হলো
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Outside ক্লিকের মাধ্যমে ড্রপডাউন অফ করার মেথড
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

  // 🟢 ফায়ারবেস সাইন আউট ফাংশন
  const handleLogout = async () => {
    setIsOpen(false);
    await logout();
    navigate("/"); // লগআউটের পর রিডাইরেক্ট করে হোম পেজে নিয়ে যাবে
  };

  // ইউজার অবজেক্ট ব্যাকআপ প্রোটেকশন
  if (!user) return null;

  // ইউজারের নামের প্রথম দুই অক্ষরের আদ্যক্ষর (Initials) বের করার লজিক
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white"
      >
        <div className="w-8 h-8 rounded-full bg-[#A3D13A] border border-white/20 flex items-center justify-center text-[#064824] font-black text-xs shadow-sm uppercase">
          {getInitials(user.name)}
        </div>
        <div className="hidden lg:flex flex-col text-left">
          <span className="text-[11px] font-black leading-none uppercase tracking-wide text-white">
            {user.name}
          </span>
          <span className="text-[9px] text-[#A3D13A] font-bold uppercase tracking-wider mt-0.5">
            Verified User
          </span>
        </div>
        <FaChevronDown
          className={`text-white text-[9px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-fadeIn text-gray-800">
          
          {/* Header User Info */}
          <div className="px-4 pb-3 mb-2 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0B7A3E] text-white font-black flex items-center justify-center text-sm uppercase">
              {getInitials(user.name)}
            </div>
            <div className="truncate text-left">
              <h4 className="text-xs font-black text-gray-900 leading-snug truncate uppercase tracking-wide">
                {user.name}
              </h4>
              <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                {user.email}
              </p>
            </div>
          </div>

          {/* Dynamic Links Panel */}
          <div className="flex flex-col px-2 space-y-0.5">
            {profileMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all duration-200 uppercase tracking-wide text-left"
              >
                <span className="text-[#0B7A3E] text-sm shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Secure Logout Action Button */}
          <div className="mt-2 pt-2 border-t border-gray-100 px-2">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-all duration-200 cursor-pointer uppercase tracking-wide text-left"
            >
              <FaSignOutAlt className="text-sm shrink-0" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;