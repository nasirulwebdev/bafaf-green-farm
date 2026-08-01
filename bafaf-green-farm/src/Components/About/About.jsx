import React from "react";
import CompanyProfile from "./CompanyProfile";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./TeamSection";
import CertificateSection from "./CertificateSection";
import AboutData from "../../Data/About";

const About = () => {
  const { hero } = AboutData;

  return (
    <div className="bg-white min-h-screen py-30 md:py-38">
        {/* HERO BANNER - Enlarged & Enhanced to match screenshot */}
      <div 
        className="relative w-full min-h-screen flex flex-col bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider mb-2">
            {hero.title}
          </h1>
          <p className="text-xs sm:text-sm font-medium text-[#A3D13A]">
            {hero.breadcrumb}
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      <CompanyProfile />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <CertificateSection />
    </div>
  );
};

export default About;