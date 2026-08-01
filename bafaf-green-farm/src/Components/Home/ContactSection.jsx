/*
===========================================
Component Name : ContactSection
Project        : BAFAF Green Farm
File Path      : src/Components/Home/ContactSection.jsx
===========================================
*/

import React from "react";
import HomeData from "../../Data/Home";

const ContactSection = () => {
  const { contact } = HomeData;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4F7F4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404040] uppercase tracking-wide">
            CONTACT <span className="text-[#0B7A3E]">US</span>
          </h2>
          <div className="w-16 h-1 bg-[#A3D13A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTACT INFO & MAP (LEFT SIDE) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#0B7A3E] mb-2 uppercase">
                Get In Touch
              </h3>
              
              {contact.info.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center text-sm shrink-0">
                      <IconComp />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#404040]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GOOGLE MAP IMAGE CONTAINER */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-56 relative group">
              <img
                src={contact.mapImage}
                alt="Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="bg-[#0B7A3E] text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                  View Map Location
                </span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM (RIGHT SIDE) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#404040] mb-6 uppercase">
              Send Us A Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAF6] border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#0B7A3E]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAF6] border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#0B7A3E]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF6] border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#0B7A3E]"
              />

              <textarea
                rows="5"
                placeholder="Write Message..."
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF6] border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#0B7A3E] resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0B7A3E] to-[#A3D13A] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;