/*
===========================================
Component Name : ProductSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/ProductSection.jsx
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import HomeData from "../../Data/Home";

const ProductSection = () => {
  const { products } = HomeData;

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
          {products.map((product) => (
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
                <div>
                  <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* VIEW DETAILS BUTTON */}
                <Link
                  to={product.link}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#A3D13A] text-[#064824] text-xs font-bold hover:bg-white hover:text-[#0B7A3E] transition-all duration-300 shadow-md hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;