/*
===========================================
File Path      : Src/Pages/Wishlist/WishlistDetails.jsx
Component Name : WishlistDetails (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaHeart, 
  FaTrashAlt, 
  FaArrowLeft, 
  FaShoppingCart, 
  FaWhatsapp, 
  FaFacebook, 
  FaShareAlt,
  FaRegSadTear
} from "react-icons/fa";
import { useApp } from "@/Context/AppContext";

export default function WishlistDetails() {
  const { wishlist, toggleWishlist, addToCart, wishToFriend } = useApp();
  const navigate = useNavigate();

  // ১. উইশলিস্ট থেকে আইটেম রিমুভ করার হ্যান্ডলার
  const handleRemoveItem = (item) => {
    toggleWishlist(item);
  };

  // ২. উইশলিস্ট থেকে সরাসরি আইটেম কার্টে নিয়ে যাওয়ার প্রিমিয়াম মেথড
  const handleMoveToCart = (item) => {
    addToCart(item);
    // ঐচ্ছিক: কার্টে নেওয়ার পর উইশলিস্ট থেকে আইটেমটি সরাতে চাইলে নিচের লাইনটি আনকমেন্ট করতে পারেন
    // toggleWishlist(item);
  };

  // ১. উইশলিস্ট সম্পূর্ণ খালি থাকলে যে প্রিমিয়াম স্ক্রিনটি শো করবে
  if (wishlist.length === 0) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <FaRegSadTear className="text-4xl" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-950 mb-3 tracking-wide uppercase">Your Wishlist is Empty</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm md:text-base leading-relaxed">
          You haven't saved any agro or fisheries items yet. Explore our farm fresh collections and save your favorites!
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B7A3E] text-white font-black text-sm hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 shadow-md hover:scale-105 uppercase tracking-wider"
        >
          <FaArrowLeft className="text-xs" /> Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/50 min-h-screen py-12 md:py-16 text-gray-800 font-sans antialiased">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200/60 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wide flex items-center gap-3">
              My Favorites & <span className="text-[#0B7A3E]">Wishlist</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
              Manage your saved farm items or share them with friends to wish together.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B7A3E] hover:text-[#A3D13A] transition-colors self-start md:self-auto group"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* WISHLIST MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => {
            const defaultImg = "https://unsplash.com";
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* REMOVE OVERLAY BUTTON */}
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-xl bg-white/90 text-gray-400 hover:text-red-500 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <FaTrashAlt className="text-xs" />
                </button>

                {/* PRODUCT IMAGE SECTION */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 bg-gray-50">
                  <img 
                    src={item.image || defaultImg} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div className="mb-5">
                    <span className="text-[10px] font-extrabold text-[#0B7A3E] bg-[#0B7A3E]/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Farm Favorite
                    </span>
                    <h3 className="font-extrabold text-sm text-gray-900 mt-2 hover:text-[#0B7A3E] transition-colors line-clamp-2 uppercase tracking-wide min-h-[40px]">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-semibold mt-1">Premium Organic Standard</p>
                  </div>

                  {/* INTERACTIVE ACTION PANEL */}
                  <div className="space-y-3 pt-2 border-t border-gray-100/70">
                    
                    {/* Move to Shopping Cart Action */}
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="w-full h-10 rounded-xl bg-[#0B7A3E] text-white text-xs font-black hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                      title="Move item to shopping cart"
                    >
                      <FaShoppingCart className="text-xs" />
                      <span>Add to Cart</span>
                    </button>

                    {/* WISH TO FRIEND (SHARE) INTEGRATED PANEL */}
                    <div className="flex items-center gap-2">
                      <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest flex items-center gap-1 shrink-0">
                        <FaShareAlt className="text-[9px]" /> <span>Wish Friend:</span>
                      </div>
                      
                      {/* Share via WhatsApp */}
                      <button
                        onClick={() => wishToFriend(item, "whatsapp")}
                        className="p-2 bg-green-50 hover:bg-green-500 text-green-600 hover:text-white rounded-xl transition-all duration-200 flex-1 flex items-center justify-center cursor-pointer shadow-xs"
                        title="Wish to Friend via WhatsApp"
                      >
                        <FaWhatsapp className="text-xs" />
                      </button>

                      {/* Share via Facebook */}
                      <button
                        onClick={() => wishToFriend(item, "facebook")}
                        className="p-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl transition-all duration-200 flex-1 flex items-center justify-center cursor-pointer shadow-xs"
                        title="Wish to Friend via Facebook"
                      >
                        <FaFacebook className="text-xs" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
