/*
===========================================
File Path      : src/Components/Gallery/FishFarmGallery.jsx
Component Name : FishFarmGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function FishFarmGallery({ items, renderCard }) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* ইনফো বার */}
      <div className="bg-emerald-50/40 p-4 rounded-xl border border-[#0B7A3E]/10 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Showing Commercial Aquaculture & Modern Hatchery Gallery Operations</span>
      </div>
      
      {/* ৪-কলাম রেসপন্সিভ গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => renderCard(item))}
      </div>
    </div>
  );
}
