/*
===========================================
File Path      : src/Components/FAQ/FaqSidebar.jsx
Component Name : FaqSidebar
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaChevronRight } from 'react-icons/fa';

export default function FaqSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-[100px] h-fit text-left">
      
      {/* 🟢 উইজেট ১: Still Have Questions Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-2xl mb-4 border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110">
          <FaHeadset />
        </div>
        <h3 className="font-extrabold text-gray-900 text-sm mb-1 transition-colors duration-300 group-hover:text-[#0B7A3E]">Still Have Questions?</h3>
        <p className="text-xs text-gray-400 max-w-[210px] mb-4 leading-relaxed font-semibold">Can't find the answer you're looking for? Our support team is here to help.</p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0B7A3E] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#A3D13A] hover:text-gray-900 transition-all duration-300 shadow-md border-none cursor-pointer">
          Contact Support <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
        </Link>
      </div>

      {/* 🟢 উইজেট ২: Quick Links Card (আইটেম হোভার সিঙ্ক) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 group hover:border-[#0B7A3E] transition-all duration-300">
        <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 text-[14px]">Quick Links</h4>
        {[
          { label: 'About Us', path: '/about' },
          { label: 'Our Services', path: '/services' },
          { label: 'Our Products', path: '/products' },
          { label: 'Gallery', path: '/gallery' },
          { label: 'Contact Us', path: '/contact' }
        ].map((link, idx) => (
          <Link key={idx} to={link.path} className="flex items-center justify-between text-xs font-bold text-gray-600 hover:text-[#0B7A3E] py-2 border-b border-gray-50/30 last:border-none transition-all duration-300 group/item pl-1 hover:pl-2">
            <span className="flex items-center gap-2">🌾 {link.label}</span>
            <FaChevronRight className="text-gray-300 text-[10px] transform group-hover/item:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>

      {/* 🟢 উইজেট ৩: Need Help Now Desk (কল সেন্টার বাটন এনিমেশন সহ) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2 group hover:border-[#0B7A3E] transition-all duration-300">
        <h4 className="font-bold text-gray-900 text-[14px]">Need Help Now?</h4>
        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">Call our support team for immediate assistance.</p>
        <a href="tel:+8801750909833" className="text-base font-black text-[#0B7A3E] tracking-tight hover:text-[#A3D13A] transition-colors flex items-center gap-2 mt-1">
          <FaPhoneAlt className="text-xs animate-bounce text-[#0B7A3E]" /> +880 1750-909833
        </a>
        <p className="text-[10px] text-gray-400 font-bold flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" /> Available 24/7
        </p>
      </div>

    </div>
  );
}
