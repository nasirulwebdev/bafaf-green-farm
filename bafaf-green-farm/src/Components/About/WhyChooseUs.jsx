import React from "react";
import AboutData from "../../Data/About";

const WhyChooseUs = () => {
  const { statistics } = AboutData;

  return (
    <section className="py-30 bg-gradient-to-r from-[#051F10] via-[#083d20] to-[#051F10] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {statistics.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A3D13A]/60 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0B7A3E] text-[#A3D13A] flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 group-hover:bg-[#A3D13A] group-hover:text-[#064824] transition-all duration-300">
                  <IconComp />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#A3D13A] mb-1">
                  {stat.count}
                </h3>
                <p className="text-xs text-gray-300 font-medium">
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

export default WhyChooseUs;