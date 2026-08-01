/*
===========================================
Component Name : HeroSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/HeroSection.jsx
===========================================
*/

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import HomeData from "../../Data/Home";

const HeroSection = () => {
  const { hero } = HomeData;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE WITH DARK OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
      </div>

      {/* 2. MAIN HERO CONTENT (Centered) */}
      <div className="relative z-20 max-w-[1320px] mx-auto px-5 xl:px-0 pt-36 md:pt-40 pb-16 flex-grow flex flex-col items-center justify-center text-center">
        
        {/* Floating Animation Container */}
        <div className="animate-fade-in flex flex-col items-center">
          
          {/* Logo with Soft Glow */}
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#A3D13A] to-[#0B7A3E] blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src={hero.logo} 
              alt="BAFAF Green Farm Logo" 
              className="relative w-28 h-28 md:w-36 md:h-36 object-contain rounded-full border-2 border-[#A3D13A]/50 bg-black/40 p-1 shadow-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">
            <span className="text-[#FFF176] block sm:inline">BAFAF </span>
            <span className="text-[#A3D13A]">GREEN FARM</span>
          </h1>

          {/* Subtitle Line with Leaf Accent */}
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#A3D13A] tracking-widest uppercase mb-4 max-w-2xl">
            — {hero.subtitle} —
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl mb-8 leading-relaxed font-normal">
            {hero.description}
          </p>

          {/* Buttons Group (Active with Hover & Floating Animations) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            {hero.buttons.map((button) => (
              <Link
                key={button.id}
                to={button.link}
                className={`
                  w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg transform hover:-translate-y-1 active:translate-y-0
                  ${
                    button.variant === "primary"
                      ? "bg-gradient-to-r from-[#0B7A3E] to-[#A3D13A] text-white hover:shadow-[#A3D13A]/30 hover:scale-105"
                      : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-[#064824] hover:scale-105"
                  }
                `}
              >
                {button.variant === "primary" ? (
                  <FaShoppingBag className="text-base" />
                ) : (
                  <FaPhoneAlt className="text-sm" />
                )}
                <span>{button.text}</span>
              </Link>
            ))}
          </div>

        </div>

      </div>

      {/* 3. BOTTOM FEATURE CARDS (4 Columns) */}
      <div className="relative z-20 w-full bg-black/50 backdrop-blur-md border-t border-white/10 py-6">
        <div className="max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hero.features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#A3D13A]/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0B7A3E]/80 border border-[#A3D13A]/40 flex items-center justify-center text-[#A3D13A] shrink-0 group-hover:scale-110 group-hover:bg-[#A3D13A] group-hover:text-[#064824] transition-all duration-300">
                    <IconComponent className="text-xl font-bold" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#A3D13A] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-300 line-clamp-2 mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;