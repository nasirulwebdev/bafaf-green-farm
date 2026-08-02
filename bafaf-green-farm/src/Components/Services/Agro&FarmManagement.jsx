/*
===========================================
File Path      : Src/Components/Services/AgroFarmManagement.jsx
Component Name : AgroFarmManagement (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { servicesData } from '../../Data/Services';
import { useApp } from '../../Context/AppContext';

export default function AgroFarmManagement() {
  const data = servicesData?.agro || [];
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();


  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto py-6 animate-fadeIn">
      {data.map((service) => {
        const isWishlisted = wishlist.some((w) => w.id === service.id);
        return (
          <div key={service.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300">
            {/* Column 1: Service Image */}
            <div className="w-full md:w-1/4 h-36 rounded-xl overflow-hidden shrink-0 relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Column 2: Content & Actions (Fixed with service.image) */}
            <div className="w-full md:w-2/5 flex flex-col items-start text-left justify-between h-full">
              <div>
                <h3 className="font-extrabold text-base text-gray-900 mb-2 uppercase tracking-wide flex items-center gap-2 group-hover:text-[#0B7A3E] transition-colors">
                  <span className="transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</span> {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
              </div>

              {/* ACTION PANELS */}
              <div className="flex flex-wrap items-center gap-2 w-full mt-2">
                <button 
                  onClick={() => addToCart({ id: service.id, name: service.title, path: `/services/${service.slug}`, image: service.image })}
                  className="bg-[#0B7A3E] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A3D13A] hover:text-gray-900 transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer"
                  title="Book Service / Add to Cart"
                >
                  <FaShoppingCart />
                  <span>Book Now</span>
                </button>

                <button 
                  onClick={() => toggleWishlist({ id: service.id, name: service.title, path: `/services/${service.slug}`, image: service.image })}
                  className={`p-2.5 rounded-lg border text-xs font-bold transition-all duration-300 cursor-pointer ${isWishlisted ? "bg-red-500 border-red-500 text-white" : "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500"}`}
                  title="Toggle Wishlist"
                >
                  <FaHeart />
                </button>

                <button 
                  onClick={() => wishToFriend({ id: service.id, name: service.title, path: `/services/${service.slug}` }, "whatsapp")}
                  className="p-2.5 rounded-lg border border-gray-200 text-gray-400 hover:text-green-500 hover:border-green-500 transition-all duration-300 cursor-pointer"
                  title="Wish to Friend via WhatsApp"
                >
                  <FaWhatsapp />
                </button>

                <button onClick={() => navigate(`/services/${service.slug}`)} className="text-xs font-bold text-gray-400 hover:text-[#0B7A3E] transition-colors ml-auto py-2 px-1">Details</button>
              </div>
            </div>

            {/* Column 3: Bullet Trust Framework */}
            <div className="w-full md:w-1/3 flex flex-col gap-2 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:py-1 text-left">
              {["High Quality Agro Support", "On-Site Fertility Inspection", "Meticulous Crop Audits", "Smart Irrigation Frameworks", "Post-Consultation Priority Desk"].map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-600 font-semibold group-hover:text-gray-900 transition-colors">
                  <FaCheckCircle className="text-[#0B7A3E] shrink-0 text-sm" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
