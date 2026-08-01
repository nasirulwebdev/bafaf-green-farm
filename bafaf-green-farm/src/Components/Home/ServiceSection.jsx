/*
===========================================
Component Name : ServiceSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/ServiceSection.jsx
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HomeData from "../../Data/Home";

const ServiceSection = () => {
  const { services } = HomeData;

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
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group border border-gray-100"
              >
                {/* ICON CIRCLE */}
                <div className="w-20 h-20 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:bg-[#A3D13A] group-hover:text-[#064824] group-hover:scale-110 transition-all duration-300">
                  <IconComp />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#404040] mb-3 group-hover:text-[#0B7A3E] transition-colors">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* LEARN MORE BUTTON */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B7A3E] hover:text-[#A3D13A] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;