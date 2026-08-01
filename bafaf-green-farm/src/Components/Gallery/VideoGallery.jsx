/*
===========================================
File Path      : src/Components/Gallery/VideoGallery.jsx
Component Name : VideoGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

export default function VideoGallery({ items, onVideoClick }) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* ভিডিও ইনফো বার */}
      <div className="bg-emerald-50/40 p-4 rounded-xl border border-[#0B7A3E]/10 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Click Any Video Card To Play Live Farm Documentary Footage</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <div 
            key={item.id}
            onClick={() => onVideoClick(item.videoUrl)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4 group cursor-pointer hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* ভিডিও থাম্বনেইল কন্টেইনার এবং আইকন হোভার সিঙ্ক */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4 bg-gray-900">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                
                {/* মিডল প্লে বাটন এনিমেশন */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">
                  <FaPlayCircle className="text-[#A3D13A] transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-start gap-2 mb-1">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-emerald-50 text-gray-800 text-sm flex items-center justify-center transition-all duration-300 transform group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shadow-sm border border-emerald-100/50">
                    {item.icon || '🎥'}
                  </span>
                  <h3 className="font-extrabold text-[14px] text-gray-900 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#0B7A3E] pt-0.5 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] font-medium text-gray-500 leading-relaxed pl-9">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
