/*
===========================================
Component Name : AboutSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/AboutSection.jsx
===========================================
*/

import React from "react";
import HomeData from "../../Data/Home";

const AboutSection = () => {
  const { about } = HomeData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE TEXT & CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] tracking-tight">
                ABOUT <span className="text-[#0B7A3E]">BAFAF</span> GREEN FARM
              </h2>
              <div className="w-20 h-1 bg-[#A3D13A] mt-2 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {about.description}
            </p>

            {/* MISSION & VISION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#F8FAF6] p-6 rounded-2xl border border-[#0B7A3E]/10 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-base text-[#0B7A3E] uppercase mb-2">
                  OUR MISSION
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {about.mission}
                </p>
              </div>

              <div className="bg-[#F8FAF6] p-6 rounded-2xl border border-[#0B7A3E]/10 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-base text-[#0B7A3E] uppercase mb-2">
                  OUR VISION
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {about.vision}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE WITH HOVER EFFECT */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src={about.image}
                alt="About BAFAF Farm"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;