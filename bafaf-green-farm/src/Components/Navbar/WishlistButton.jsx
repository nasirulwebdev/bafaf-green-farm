import React from "react";
import { FaHeart } from "react-icons/fa";

/**
 * WishlistButton Component
 * @param {number} count - উইশলিস্টে থাকা আইটেম সংখ্যা
 * @param {function} onClick - বাটন ক্লিকে কলব্যাক ফংশন
 */
const WishlistButton = ({ count = 0, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative p-2 text-white hover:text-[#A3D13A] transition-all duration-200 cursor-pointer flex items-center justify-center group"
      aria-label="View Wishlist"
      title="Wishlist"
    >
      {/* উইশলিস্ট আইকন (হোভারে সামান্য জুম বা স্কেল হবে) */}
      <FaHeart className="text-base group-hover:scale-110 transition-transform duration-200" />

      {/* যদি count ০-এর বেশি থাকে, তবেই কাউন্টার ব্যাজটি শো করবে */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#A3D13A] text-[#064824] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
};

export default WishlistButton;