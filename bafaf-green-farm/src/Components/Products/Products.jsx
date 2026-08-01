/*
===========================================
File Path      : Src/Components/Products/Products.jsx
Component Name : Products
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FishFarming from './FishFarming';
import AgroProducts from './AgroProducts';
import RiceProduction from './RiceProduction';

export default function Products() {
  // টাইপ এরর ফিক্স করতে সরাসরি রিয়্যাক্ট রাউটারের স্ট্যান্ডার্ড ডিডিলেয়ারিং ব্যবহার করা হলো
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('fisheries');

  // মেইন মেনু ড্রপডাউন থেকে আসা কুয়েরি প্যারামিটার (?tab=...) রিড করার জন্য useEffect
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['fisheries', 'agro', 'rice'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // ক্লিকে বা হোভারে ইউআরএল প্যারামিটার সহ স্টেট আপডেট লজিক
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSearchParams({ tab: tabName });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* আপনার মেগা মেনুর স্ক্রিনশট অনুযায়ী ৩টি মূল ক্যাটাগরির ট্যাব বাটন */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => handleTabChange('fisheries')}
          onMouseEnter={() => handleTabChange('fisheries')}
          className={`px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer ${
            activeTab === 'fisheries' ? 'bg-[#0b3c25] text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🐟 Fish Culture & Fisheries
        </button>

        <button
          onClick={() => handleTabChange('agro')}
          onMouseEnter={() => handleTabChange('agro')}
          className={`px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer ${
            activeTab === 'agro' ? 'bg-[#0b3c25] text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🌾 Agro & Bio Products
        </button>

        <button
          onClick={() => handleTabChange('rice')}
          onMouseEnter={() => handleTabChange('rice')}
          className={`px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer ${
            activeTab === 'rice' ? 'bg-[#0b3c25] text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🌾 Crops & Grains
        </button>
      </div>

      {/* কন্ডিশনাল রেন্ডারিং - সিলেক্টেড প্রোডাক্ট কম্পোনেন্ট লোড হবে */}
      <div className="transition-all duration-500 min-h-[400px]">
        {activeTab === 'fisheries' && <FishFarming />}
        {activeTab === 'agro' && <AgroProducts />}
        {activeTab === 'rice' && <RiceProduction />}
      </div>
    </div>
  );
}
