/*
===========================================
File Path      : src/Components/Gallery/RiceGallery.jsx
Component Name : RiceGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function RiceGallery({ items, renderCard }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50/40 p-4 rounded-xl border border-[#A3D13A]/20 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Showing Premium Paddy Fields, Processing Mills & Storage Facilities</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => renderCard(item))}
      </div>
    </div>
  );
}
