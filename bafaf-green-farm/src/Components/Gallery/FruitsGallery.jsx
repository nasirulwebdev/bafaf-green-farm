/*
===========================================
File Path      : src/Components/Gallery/FruitsGallery.jsx
Component Name : FruitsGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function FruitsGallery({ items, renderCard }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-orange-50/40 p-4 rounded-xl border border-orange-100 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Showing Seasonal Tropical Fruit Orchards & Export Sorting Lines</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => renderCard(item))}
      </div>
    </div>
  );
}
