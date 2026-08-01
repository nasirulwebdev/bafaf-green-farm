/*
===========================================
File Path      : src/Pages/FAQ/FAQ.jsx
Component Name : FAQ Page Master Wrapper
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useEffect } from 'react';
import FaqComponent from '../../Components/FAQ/FaqComponent';
import JoinFamilyCTA from '../../Components/Common/JoinFamilyCTA';

// হিরো ব্যানারের ব্যাকগ্রাউন্ড ছবি ইমপোর্ট (আপনার এসেট পাথ অনুযায়ী)
import faqHeroBg from '../../assets/Images/FAQ/faq-hero-bg.jpg';

// যদি আপনার প্রজেক্টে গ্লোবাল হেডার এবং ফুটার কম্পোনেন্ট থাকে, তবে এখানে ইম্পোর্ট করতে পারেন:
// import Header from '../../Components/Navbar/Navbar';
// import Footer from '../../Components/Footer/Footer';

export default function FAQ() {
  // পেজ ওপেন হওয়ার সাথে সাথে স্ক্রিন যেন একদম উপরে চলে যায় (Scroll to Top)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    /* 🚀 সমাধান: pt-[75px] md:pt-[90px] আপনার ফিক্সড নেববারের নিচের ক্ল্যাশ শতভাগ দূর করবে */
    <div className="faq-master-wrapper min-h-screen bg-gray-50/50 pb-8 pt-[75px] md:pt-[90px]">
      
      {/* ১. হেডার সেকশন (প্রয়োজন হলে আন-কমেন্ট করে নিবেন) */}
      {/* <Header /> */}

      {/* 🟢 ২. স্ক্রিনশটের অবিকল প্রিমিয়াম হিরো ব্যানার (ডার্ক ওভারলে, হাই-এন্ড রিফ্লেক্স এবং গ্লাস ইফেক্ট) */}
      <section 
        className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center overflow-hidden border-b-4 border-[#0B7A3E]"
        style={{ backgroundImage: `linear-gradient(rgba(6, 40, 24, 0.88), rgba(11, 60, 37, 0.78)), url(${faqHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/10 z-0 select-none pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-left">
          
          {/* বামপাশের টাইটেল ও সাবটাইটেল লেআউট */}
          <div className="max-w-2xl transform transition-all duration-500 hover:scale-101">
            {/* ব্রেডক্রাম্ব নেভিগেশন */}
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-300 uppercase tracking-widest mb-3">
              <span className="hover:text-[#A3D13A] transition-colors cursor-pointer">Home</span>
              <span className="text-[#A3D13A]">➔</span>
              <span className="text-white">FAQ</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-wide mb-3 uppercase drop-shadow-sm">
              Frequently Asked <br /> Questions
            </h1>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed font-semibold opacity-90 max-w-xl">
              Find answers to common questions about Bafaf Green Farm, our premium agricultural infrastructure, sustainable fisheries services, products, and operational compliance policies.
            </p>
          </div>

          {/* ডানপাশের কাস্টম CSS FAQ বাবল ইলাস্ট্রেশন (কোনো ছবির প্রয়োজন নেই) */}
          <div className="hidden md:flex relative w-40 h-40 items-center justify-center select-none pointer-events-none transform transition-transform duration-700 hover:rotate-3">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#A3D13A]/30 to-emerald-500/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center shadow-xl animate-pulse-slow">
              <span className="text-3xl font-black text-[#A3D13A] tracking-tighter drop-shadow-md">FAQ</span>
              <div className="flex gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-white opacity-40 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-white opacity-60" />
                <span className="w-2 h-2 rounded-full bg-white opacity-80" />
              </div>
            </div>
          </div>

        </div>
      </section>
              {/* 🟢 ৩. মেইন বডি কন্টেন্ট সেকশন: ফিল্টারিং ড্রপডাউন এবং স্টিকি সাইডবার উইজেট */}
      <main className="relative z-10 animate-fade-in">
        <FaqComponent />
      </main>

      {/* 🟢 ৪. স্ক্রিনশটের অবিকল ফুটারের ঠিক উপরের গ্রিন কন্টেইনার "Join Bafaf Family" CTA ব্যানার */}
      <section className="relative z-10 mt-6 border-b border-gray-100/50">
        <JoinFamilyCTA />
      </section>

      {/* ৫. ফুটার সেকশন (প্রয়োজন হলে আন-কমেন্ট করে নিবেন) */}
      {/* <Footer /> */}

    </div>
  );
}
