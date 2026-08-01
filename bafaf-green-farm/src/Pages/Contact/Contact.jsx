/*
===========================================
File Path      : src/Pages/Contact/Contact.jsx
Component Name : Contact (International Premium Edition)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useEffect, useState } from 'react';

// প্রফেশনাল ৩টি কোর চাইল্ড মডিউল কম্পোনেন্ট ইম্পোর্ট
import ContactInfo from '../../Components/Contact/ContactInfo';
import ContactForm from '../../Components/Contact/ContactForm';
import ContactMap from '../../Components/Contact/ContactMap';

// হিরো ব্যানারের সুন্দর সবুজাভ ব্যাকগ্রাউন্ড ছবি ইমপোর্ট (আপনার এসেট পাথ অনুযায়ী)
import contactHeroBg from "../../assets/Images/Contact/contact-hero-bg.jpg";

export default function Contact() {
  // আন্তর্জাতিক কর্পোরেট স্ট্যান্ডার্ড অনুযায়ী পেজ ভিউ ট্র্যাকার এবং স্ক্রিন টপ-রিসেট হুক
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // গ্লোবাল অপারেশনাল উইং সিলেকশন স্টেট (ইন্টারন্যাশনাল ইউজারদের সুবিধার্থে)
  const [activeWing, setActiveWing] = useState('hq'); // hq = Headquarters, export = Global Trade Desk

  return (
    /* 🚀 সমাধান: pt-[80px] md:pt-[100px] আপনার ফিক্সড নেববারের নিচের ভিজ্যুয়াল ক্ল্যাশ শতভাগ দূর করবে */
    <div className="bg-[#FAFDFB] min-h-screen pb-20 pt-[80px] md:pt-[100px] font-sans antialiased text-gray-800 selection:bg-[#0B7A3E] selection:text-white">
      
      {/* 🟢 ১. আন্তর্জাতিক স্ট্যান্ডার্ডের প্রিমিয়াম হিরো ব্যানার (ডার্ক ওভারলে ও সিনেমাটিক মোশন গ্লাস ইফেক্ট) */}
      <section 
        className="relative h-[280px] md:h-[380px] bg-cover bg-center flex items-center justify-center border-b-4 border-[#0B7A3E] overflow-hidden group/hero"
        style={{ backgroundImage: `linear-gradient(rgba(4, 26, 16, 0.88), rgba(11, 60, 37, 0.78)), url(${contactHeroBg})` }}
      >
        {/* ব্যাকগ্রাউন্ড মাস্ক রিফ্লেক্স ওভারলে */}
        <div className="absolute inset-0 bg-black/10 z-0 select-none pointer-events-none transition-opacity duration-500 group-hover/hero:opacity-20" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto transform transition-all duration-700 hover:scale-101">
          {/* গ্লোবাল ব্যাজ */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-black tracking-widest text-[#A3D13A] uppercase mb-4 border border-white/15 shadow-sm select-none">
            🌐 Global Relations & Commerce Desk
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md leading-none">
            Connect With Us
          </h1>
          
          {/* ইন্টারন্যাশনালাইজড ব্রেডক্রাম্ব নেভিগেশন */}
          <div className="flex items-center justify-center gap-2 text-[11px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
            <span className="hover:text-[#A3D13A] transition-colors cursor-pointer">Home</span>
            <span className="text-[#A3D13A] font-black">➔</span>
            <span className="text-white">Contact Centre</span>
          </div>
        </div>

        {/* ডেকোরেটিভ গ্লোবাল ওয়াটারমার্ক লুপ */}
        <div className="absolute -right-16 -bottom-16 text-[12rem] font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter hidden md:block">
          BAFAF
        </div>
      </section>

      {/* 🟢 ২. উইং সিলেকশন প্যানেল (আন্তর্জাতিক ক্লায়েন্টদের জন্য প্রিমিয়াম সেগমেন্ট বাটন বার) */}
      <section className="max-w-7xl mx-auto px-4 mt-12 mb-4 text-center">
        <div className="inline-flex p-1.5 bg-gray-100/80 rounded-2xl border border-gray-200/50 backdrop-blur-sm shadow-inner">
          <button 
            onClick={() => setActiveWing('hq')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeWing === 'hq' 
                ? 'bg-[#0B7A3E] text-white shadow-md scale-102' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            🏢 Local Headquarters
          </button>
          <button 
            onClick={() => setActiveWing('export')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeWing === 'export' 
                ? 'bg-[#0B7A3E] text-white shadow-md scale-102' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            🚢 International Trade Wing
          </button>
        </div>
      </section>
                  {/* 🟢 ৩. মূল কন্টেন্ট গ্রিড লেআউট (৩-কলাম প্রিমিয়াম গ্লোবাল ম্যাট্রিক্স) */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        {activeWing === 'hq' ? (
          /* 🏢 লোকাল হেডকোয়ার্টার লেআউট ভিউ */
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-fade-in">
            <ContactInfo />
            <ContactForm />
            <ContactMap />
          </div>
        ) : (
          /* 🚢 ইন্টারন্যাশনাল এক্সপোর্ট/ট্রেড ডেস্ক ভিউ (ডাইনামিক মোশন ওভারভিউ সহ) */
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-fade-in">
            <ContactInfo />
            <ContactForm />
            
            {/* ম্যাপের স্থানে আন্তর্জাতিক বায়ারদের জন্য কুইক ইমপোর্ট কমপ্লায়েন্স গাইড কার্ড উইজেট */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-left h-full group hover:border-[#0B7A3E] transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-gray-900 text-base uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2 mb-4 transition-colors duration-300 group-hover:text-[#0B7A3E]">
                  🌍 Export Compliance
                </h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-4">
                  BAFAF Green Farm matches all global phytosanitary regulations and international standard supply chain constraints. Our processing units maintain strict cold chain setups from deep water commercial hatcheries directly to container loading portals.
                </p>
                <ul className="flex flex-col gap-2 text-[11px] text-gray-600 font-bold">
                  <li className="flex items-center gap-2 p-2 bg-emerald-50/40 rounded-lg border border-emerald-100/30">
                    ✅ SGS Quality Verified Certifications
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-emerald-50/40 rounded-lg border border-emerald-100/30">
                    ✅ Customs Clearance Priority Processing
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-emerald-50/40 rounded-lg border border-emerald-100/30">
                    ✅ Temperature Controlled Cold Logistics
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Authorized by Ministry of Agriculture, BD
              </div>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
