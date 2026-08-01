/*
===========================================
Component Name : StatisticsSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/StatisticsSection.jsx
===========================================
*/

import React from "react";
import HomeData from "../../Data/Home";

const StatisticsSection = () => {
  const { statistics } = HomeData;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#0B7A3E] via-[#085a2e] to-[#053b1e] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A3D13A]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#A3D13A] text-[#064824] flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  <IconComp />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#A3D13A] mb-1">
                  {stat.count}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;