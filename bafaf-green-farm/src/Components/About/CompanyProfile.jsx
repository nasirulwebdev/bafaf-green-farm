import React from "react";
import AboutData from "../../Data/About";

const CompanyProfile = () => {
  const { companyProfile } = AboutData;

  return (
    <section className="py-30 md:py-38 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#0B7A3E] uppercase tracking-widest">
                {companyProfile.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] mt-1">
                {companyProfile.title}
              </h2>
              <div className="w-16 h-1 bg-[#A3D13A] mt-2 rounded-full"></div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {companyProfile.description1}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {companyProfile.description2}
            </p>

            {/* 4 FEATURE BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {companyProfile.features.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#0B7A3E]/10 text-[#0B7A3E] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#0B7A3E] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#404040] group-hover:text-[#0B7A3E] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0B7A3E]/10 group">
              <img
                src={companyProfile.image}
                alt="BAFAF Green Farm"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;