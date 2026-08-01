/*
===========================================
Component Name : TestimonialSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/TestimonialSection.jsx
===========================================
*/

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS Import
import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import HomeData from "../../Data/Home";

const TestimonialSection = () => {
  const { testimonials } = HomeData;

  return (
    <section className="py-20 md:py-28 bg-[#F4F7F4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            CLIENT <span className="text-[#0B7A3E]">TESTIMONIALS</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        {/* SWIPER CAROUSEL */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
                <div>
                  {/* QUOTE ICON & RATING */}
                  <div className="flex items-center justify-between mb-4">
                    <FaQuoteLeft className="text-3xl text-[#A3D13A]" />
                    <div className="flex text-amber-400 text-xs gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {/* QUOTE TEXT */}
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* USER PROFILE */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0B7A3E]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#404040]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSection;