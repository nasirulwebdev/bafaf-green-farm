/*
===========================================
Component Name : GallerySection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/GallerySection.jsx
===========================================
*/

import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import HomeData from "../../Data/Home";

const GallerySection = () => {
  const { gallery } = HomeData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            OUR <span className="text-[#0B7A3E]">GALLERY</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE CONTAINER WITH ZOOM */}
              <div className="relative h-48 sm:h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT AREA (TITLE, DESCRIPTION, DATE) */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-[#404040] group-hover:text-[#0B7A3E] transition-colors uppercase line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* DATE */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-medium">
                  <FaRegCalendarAlt className="text-[#0B7A3E]" />
                  <span>{item.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;