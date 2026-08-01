/*
===========================================
File Path      : src/Components/Contact/ContactMap.jsx
Component Name : ContactMap
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import { contactMapConfig } from '../../Data/Contact';

export default function ContactMap() {
  const { title, embedUrl, iframeSettings } = contactMapConfig;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-left h-full group hover:border-[#0B7A3E] transition-all duration-300 animate-fade-in">
      {/* ম্যাপ হেডার টাইটেল */}
      <h3 className="font-black text-gray-900 text-base uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2 mb-6 transition-colors duration-300 group-hover:text-[#0B7A3E]">
        📍 Our Location
      </h3>

      {/* গুগল ম্যাপ আইফ্রেম কন্টেইনার (স্ক্রিনশটের মতো নিঁখুত রাউন্ডেড এবং ডাইনামিক ইনার শ্যাডো সহ) */}
      <div className="w-full h-[260px] md:h-[295px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative group-hover:shadow-md transition-shadow duration-300 bg-gray-100">
        <iframe 
          title={title}
          src={embedUrl} 
          width="100%" 
          height="100%" 
          style={iframeSettings.style} 
          allowFullScreen="" 
          loading={iframeSettings.loading} 
          referrerPolicy={iframeSettings.referrerPolicy}
          className="w-full h-full grayscale-[5%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
