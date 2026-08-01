/*
===========================================
File Path      : src/Components/Gallery/EventGallery.jsx
Component Name : EventGallery
Project        : BAFAF Green Farm
===========================================
*/
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function EventGallery({ items, renderCard }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100 text-left text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-sm">
        <FaCheckCircle className="text-[#0B7A3E] text-sm shrink-0" />
        <span>Showing Farmers Training Programs, CSR Activities & Expo Summits</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => renderCard(item))}
      </div>
    </div>
  );
}
