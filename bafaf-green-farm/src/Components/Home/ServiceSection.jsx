/*
===========================================
File Path      : Src/Components/Home/ServiceSection.jsx
Component Name : ServiceSection (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingCart, FaHeart, FaWhatsapp } from "react-icons/fa";
import HomeData from "../../Data/Home";
import { useApp } from "@/Context/AppContext";

const ServiceSection = () => {
  const { services } = HomeData;
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();

  return (
    <section className="py-20 md:py-28 bg-[#F4F7F4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            OUR <span className="text-[#0B7A3E]">SERVICES</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        {/* SERVICES GRID CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComp = service.icon;
            const isWishlisted = wishlist.some((w) => w.id === service.id);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group border border-gray-100 justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  {/* ICON CIRCLE */}
                  <div className="w-20 h-20 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:bg-[#A3D13A] group-hover:text-[#064824] group-hover:scale-110 transition-all duration-300">
                    <IconComp />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-[#404040] mb-3 group-hover:text-[#0B7A3E] transition-colors line-clamp-1">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* ACTION INTERACTIVE BUTTONS PANEL */}
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    {/* Add to Cart / Book Service */}
                    <button
                      onClick={() => addToCart({ id: service.id, name: service.title, path: service.link })}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#0B7A3E] text-white text-xs font-bold hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      title="Book / Add Service to Cart"
                    >
                      <FaShoppingCart />
                      <span>Book Now</span>
                    </button>

                    {/* Toggle Wishlist */}
                    <button
                      onClick={() => toggleWishlist({ id: service.id, name: service.title, path: service.link })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                        isWishlisted 
                          ? "bg-red-500 border-red-500 text-white" 
                          : "border-gray-200 hover:border-red-500 text-gray-400 hover:text-red-500"
                      }`}
                      title="Toggle Wishlist"
                    >
                      <FaHeart />
                    </button>

                    {/* Wish to Friend via WhatsApp */}
                    <button
                      onClick={() => wishToFriend({ id: service.id, name: service.title, path: service.link }, "whatsapp")}
                      className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-green-500 hover:text-green-500 transition-all duration-300 cursor-pointer"
                      title="Wish Service to a Friend"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>

                  {/* LEARN MORE BUTTON */}
                  <Link
                    to={service.link || "/services"}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0B7A3E] hover:text-[#A3D13A] transition-colors group/btn pt-1"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
