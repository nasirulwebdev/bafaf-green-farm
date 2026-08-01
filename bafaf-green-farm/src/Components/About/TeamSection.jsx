import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import AboutData from "../../Data/About";

const TeamSection = () => {
  const { team } = AboutData;

  return (
    <section className="py-30 md:py-38 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            OUR EXPERT <span className="text-[#0B7A3E]">TEAM</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#F8FAF6] rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 text-center pb-8"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                  <a href={member.social.fb} className="w-9 h-9 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center hover:bg-[#A3D13A] hover:text-[#064824] transition-colors">
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a href={member.social.tw} className="w-9 h-9 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center hover:bg-[#A3D13A] hover:text-[#064824] transition-colors">
                    <FaTwitter className="text-xs" />
                  </a>
                  <a href={member.social.in} className="w-9 h-9 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center hover:bg-[#A3D13A] hover:text-[#064824] transition-colors">
                    <FaLinkedinIn className="text-xs" />
                  </a>
                </div>
              </div>

              <div className="pt-6 px-4">
                <h3 className="text-base font-bold text-[#404040] group-hover:text-[#0B7A3E] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;