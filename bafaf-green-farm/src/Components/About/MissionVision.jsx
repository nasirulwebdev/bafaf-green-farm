import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa6";

const MissionVision = () => {
  return (
    <section className="py-26 bg-[#F8FAF6] border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#0B7A3E] text-white flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <FaBullseye />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#404040] mb-2 uppercase">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To produce fresh, halal and quality agro-fisheries products and ensure utmost customer satisfaction through continuous innovation and sustainable green practices.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#A3D13A] text-[#064824] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <FaEye />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#404040] mb-2 uppercase">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To be the most trusted, leading and sustainable agro-fisheries brand across Bangladesh, empowering local farmers and elevating national food standards.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;