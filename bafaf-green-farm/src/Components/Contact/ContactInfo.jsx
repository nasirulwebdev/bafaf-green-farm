/*
===========================================
File Path      : src/Components/Contact/ContactInfo.jsx
Component Name : ContactInfo
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import { contactInfoData } from '../../Data/Contact';

export default function ContactInfo() {
  const { phone, email, location, workingHours } = contactInfoData;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-6 text-left h-full group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300 animate-fade-in">
      {/* কার্ড হেডার টাইটেল */}
      <h3 className="font-black text-gray-900 text-base uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0B7A3E]">
        <FaHeadset className="text-xs shrink-0" /> Get In Touch
      </h3>

      <div className="flex flex-col gap-5 mt-2">
        {/* ফোন নম্বর বাবল */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-sm border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shrink-0 select-none">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">{phone.label}</p>
            <a href={phone.link} className="text-xs md:text-sm font-extrabold text-gray-800 hover:text-[#0B7A3E] transition-colors">{phone.value}</a>
          </div>
        </div>

        {/* ইমেইল বাবল */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-sm border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shrink-0 select-none">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">{email.label}</p>
            <a href={email.link} className="text-xs md:text-sm font-extrabold text-gray-800 hover:text-[#0B7A3E] transition-colors break-all">{email.value}</a>
          </div>
        </div>

        {/* লোকেশন বাবল */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-sm border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shrink-0 select-none">
            <FaMapMarkerAlt />
          </div>
          <div className="w-full">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">{location.label}</p>
            <a href={location.mapQueryLink} target="_blank" rel="noreferrer" className="text-xs md:text-sm font-extrabold text-gray-800 hover:text-[#0B7A3E] transition-colors block">{location.value}</a>
            <span className="text-[9px] text-gray-400 font-bold block mt-0.5 uppercase tracking-wide">{location.note}</span>
          </div>
        </div>

        {/* কর্মঘণ্টা বাবল */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-sm border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shrink-0 select-none">
            <FaClock />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">{workingHours.label}</p>
            <p className="text-xs md:text-sm font-extrabold text-gray-800">{workingHours.days}</p>
            <p className="text-[11px] text-gray-500 font-black mt-0.5">{workingHours.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
