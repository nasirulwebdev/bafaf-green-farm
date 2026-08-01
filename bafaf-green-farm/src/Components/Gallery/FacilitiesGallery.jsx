/*
===========================================
File Path      : src/Components/Gallery/FacilitiesGallery.jsx
Component Name : FacilitiesGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function FacilitiesGallery({ items, renderCard }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Showing Deep Cold Storage Rooms, Automated Silos & R&D Laboratories</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => renderCard(item))}
      </div>
    </div>
  );
}
