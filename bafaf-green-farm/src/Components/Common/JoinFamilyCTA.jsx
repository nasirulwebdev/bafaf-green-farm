/*
===========================================
File Path      : src/Components/Common/JoinFamilyCTA.jsx
Component Name : JoinFamilyCTA
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

// ট্র্যাক্টরের ব্যাকগ্রাউন্ড ইমেজ ইমপোর্ট (আপনার এসেট পাথ অনুযায়ী)
import ctaTractorBg from '../../assets/Images/FAQ/cta-tractor-bg.jpg';

export default function JoinFamilyCTA() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 🚀 মেইন কন্টেইনার: "Our Premium Services" এর অবিকল হোভার রিফ্লেক্স এবং বর্ডার ইলাস্টিসিটি সমৃদ্ধ */}
      <div className="w-full bg-gradient-to-br from-[#0B7A3E] to-[#043319] text-white rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center min-h-[160px] md:h-[130px] border border-transparent transition-all duration-300 group hover:border-[#A3D13A] hover:scale-102 hover:shadow-2xl">
        
        {/* ডার্ক লাক্সারি ব্যাকগ্রাউন্ড ওভারলে গ্রিড মাস্ক */}
        <div className="absolute inset-0 bg-black/10 z-0 select-none pointer-events-none" />

        {/* 🔹 বামপাশের অংশ: জয়েন টেক্সট এবং সাবটাইটেল লেআউট (Z-Index ১৯) */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 z-10 text-center md:text-left">
          {/* বৃত্তাকার আইকন বাবল */}
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-sm border border-white/10 shrink-0 select-none">
            🤝
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3D13A] inline-block animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-[#A3D13A]">Join With Us</p>
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-wide leading-tight group-hover:text-[#A3D13A] transition-colors duration-300">
              Join Bafaf Green Farm Family
            </h2>
            <p className="text-[11px] text-emerald-100/70 font-semibold mt-0.5 leading-relaxed">
              Be part of our mission to build a sustainable future with quality products and trusted services.
            </p>
          </div>
        </div>
                {/* 🔹 ডানপাশের অংশ: ডাইনামিক বাটন এবং ট্র্যাক্টরের ব্যাকড্রপ কন্টেইনার */}
        <div className="w-full md:w-2/5 h-[150px] md:h-full relative flex items-center justify-center md:justify-end pr-0 md:pr-12 p-6 md:p-0 z-10 shrink-0">
          
          {/* অ্যাকশন বাটন: হোভার করলে কালার রিকালার হবে এবং আইকন ট্রান্সফর্ম শো করবে */}
          <button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#A3D13A] text-gray-900 px-6 py-2.5 rounded-full font-black text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-md tracking-wider uppercase border-none cursor-pointer relative z-20 group/btn"
          >
            <FaUserPlus className="text-xs transform group-hover/btn:rotate-12 transition-transform" /> 
            <span>Partner With Us</span> 
            <span className="transform group-hover/btn:translate-x-1 transition-transform">➔</span>
          </button>

          {/* ট্র্যাক্টর ব্যাকগ্রাউন্ড মাস্ক ইমেজ: কন্টেইনার হোভার করলে স্মুথ জুম-ইন (`scale-105`) হবে */}

          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[85%] h-full opacity-75 md:opacity-85 pointer-events-none select-none overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none z-0">
            {/* ডার্ক গ্রেডিয়েন্ট কমিয়ে লাইট করা হলো */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B7A3E] via-[#0B7A3E]/40 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B7A3E] via-transparent to-transparent z-10 block md:hidden" />
            
            <img 
              src={ctaTractorBg} 
              alt="BAFAF Tractor Operations" 
              className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700 origin-right" 
            />
          </div>


        </div>

      </div>
    </div>
  );
}
