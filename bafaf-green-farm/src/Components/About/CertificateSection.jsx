import React from "react";
import AboutData from "../../Data/About";

const CertificateSection = () => {
  const { certificates } = AboutData;

  return (
    <section className="py-30 md:py-38 bg-[#F4F7F4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            OUR <span className="text-[#0B7A3E]">CERTIFICATIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-[#A3D13A]/20 text-[#064824] rounded-full uppercase">
                  Verified
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#404040]">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificateSection;