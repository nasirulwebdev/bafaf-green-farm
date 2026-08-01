/*
===========================================
Component Name : FaqSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/FaqSection.jsx
===========================================
*/

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import HomeData from "../../Data/Home";

const FaqSection = () => {
  const { faq } = HomeData;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            FREQUENTLY ASKED <span className="text-[#0B7A3E]">QUESTIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-5 text-left font-bold text-sm sm:text-base flex justify-between items-center transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#0B7A3E] text-white"
                      : "bg-[#F8FAF6] text-[#404040] hover:bg-gray-100"
                  }`}
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 text-xs shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#A3D13A]" : "text-gray-500"
                    }`}
                  />
                </button>

                {/* ANIMATED RESPONSE BODY */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-48 p-5 bg-white" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;