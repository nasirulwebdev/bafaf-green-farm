/*
===========================================
File Path      : Src/Components/Home/ProductSection.jsx
Component Name : ProductSection (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaWhatsapp } from "react-icons/fa";
import HomeData from "../../Data/Home";
import { useApp } from "@/Context/AppContext";

const ProductSection = () => {
  const { products } = HomeData;
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();

  return (
    <section className="py-20 md:py-28 bg-[#051F10] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
            OUR <span className="text-[#A3D13A]">PRODUCTS</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>
        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isWishlisted = wishlist.some((w) => w.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#A3D13A]/50 transition-all duration-300 flex flex-col group shadow-lg"
              >
                {/* IMAGE WITH ZOOM EFFECT */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* CARD DETAILS */}
                <div className="p-6 text-center flex-grow flex flex-col items-center justify-between">
                  <div className="w-full">
                    <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* ACTION BUTTONS PANEL */}
                  <div className="w-full mt-6 space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      {/* Add to Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#A3D13A] text-[#064824] text-xs font-bold hover:bg-white hover:text-[#0B7A3E] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Add to Cart"
                      >
                        <FaShoppingCart />
                        <span>Add Cart</span>
                      </button>

                      {/* Wishlist Toggle */}
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                          isWishlisted 
                            ? "bg-red-500 border-red-500 text-white" 
                            : "border-white/20 hover:border-red-500 text-white hover:text-red-500"
                        }`}
                        title="Toggle Wishlist"
                      >
                        <FaHeart />
                      </button>

                      {/* Share / Wish to Friend */}
                      <button
                        onClick={() => wishToFriend(product, "whatsapp")}
                        className="p-2.5 rounded-xl border border-white/20 hover:border-green-500 text-white hover:text-green-500 transition-all duration-300 cursor-pointer"
                        title="Wish to Friend via WhatsApp"
                      >
                        <FaWhatsapp />
                      </button>
                    </div>

                    {/* View Details Link */}
                    <Link
                      to={product.link || `/products`}
                      className="block text-center text-xs font-semibold text-gray-400 hover:text-[#A3D13A] transition-colors pt-1"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
