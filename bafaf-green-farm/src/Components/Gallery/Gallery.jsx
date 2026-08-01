/*
===========================================
File Path      : src/Components/Gallery/Gallery.jsx
Component Name : Gallery Component
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // 🚀 ডাইনামিক রাউটিং এর জন্য useNavigate যুক্ত করা হলো
import { galleryData } from '../../Data/Gallery';

// সাব-ক্যাপসুল গ্যালারি কম্পোনেন্টগুলোর ইম্পোর্ট
import FishFarmGallery from './FishFarmGallery';
import RiceGallery from './RiceGallery';
import VegetableGallery from './VegetableGallery';
import FruitsGallery from './FruitsGallery';
import FacilitiesGallery from './FacilitiesGallery';
import EventGallery from './EventGallery';
import VideoGallery from './VideoGallery';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); // 🚀 নেভিগেশন হুক ইনিশিয়ালাইজ করা হলো
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // প্রতি পেজে ৮টি করে কার্ড রেন্ডার হবে

  // লাইটবক্স এবং ভিডিও প্লেয়ার স্টেট কন্ট্রোল
  const [modalMedia, setModalMedia] = useState(null);

  // 🧪 ট্যাব প্যারামিটার ম্যানেজমেন্ট ইউটিলিটি
  useEffect(() => {
    const tabParam = searchParams.get('category');
    if (tabParam) {
      setActiveTab(tabParam);
    } else {
      setActiveTab('all');
    }
    setCurrentPage(1); // ট্যাব চেঞ্জ হলে পেজিনেশন ১ এ রিসেট হবে
  }, [searchParams]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: tabName });
    }
  };

  // ৭টি ডাইনামিক ক্যাটাগরি ফিল্টারিং সিস্টেম লজিক
  const filteredData = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  // পেজিনেশন ম্যাথমেটিক্যাল ক্যালকুলেশন
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  // 🟢 "Our Premium Services" এর অবিকল হোভার এফেক্ট জেনারেটর কার্ড রেণ্ডারার ফাংশন (আপডেটেড ডাইনামিক পেজ রাউট)
  const renderImageCard = (item) => (
    <div 
      key={item.id}
      onClick={() => navigate(`/gallery/${item.id}`)} // 🚀 পুরো কার্ডে ক্লিক করলে সরাসরি স্ক্রিনশটের মতো ডিটেইলস পেজে নিয়ে যাবে
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4 group cursor-pointer hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* ইমেজ কন্টেইনার এবং হোভার 'View Details' বোতাম */}
        <div className="relative h-44 w-full overflow-hidden rounded-xl mb-4 bg-gray-100">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          
          {/* হোভার করলে স্মুথ ওভারলে এবং একটিভ 'View Details' বাটন শো হবে */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // প্যারেন্ট ডিভের ডাবল ট্রিপল ট্রিগার রোধ করার জন্য
                navigate(`/gallery/${item.id}`); // 🚀 লাইটবক্স মডাল বন্ধ করে সরাসরি ডাইনামিক আইডি ভিত্তিক ভিউ পেজে রিডাইরেক্ট করবে
              }}
              className="bg-[#0B7A3E] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A3D13A] hover:text-gray-900 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md cursor-pointer border-none"
            >
              View Details
            </button>
          </div>
        </div>

        {/* টেক্সট এবং ডাইনামিক হোভার সিঙ্ক আইকন লেআউট */}
        <div className="text-left">
          <div className="flex items-start gap-2 mb-1">
            {/* আইকন বাবল: কার্ড হোভার হলে এটি বড় হবে এবং ব্যাকগ্রাউন্ড গ্রিন হবে */}
            <span className="w-7 h-7 shrink-0 rounded-full bg-emerald-50 text-gray-800 text-sm flex items-center justify-center transition-all duration-300 transform group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110 shadow-sm border border-emerald-100/50">
              {item.icon}
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
  );

  // ডাইনামিক সাব-কম্পোনেন্ট রাউটার লজিক ম্যাপিং
  const renderGalleryContent = () => {
    if (activeTab === 'fisheries') return <FishFarmGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'rice') return <RiceGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'vegetables') return <VegetableGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'fruits') return <FruitsGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'facilities') return <FacilitiesGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'events') return <EventGallery items={currentItems} renderCard={renderImageCard} />;
    if (activeTab === 'videos') return <VideoGallery items={currentItems} onVideoClick={(url) => setModalMedia({ type: 'video', url })} />;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map(item => renderImageCard(item))}
      </div>
    );
  };
    // 🚀 समाधान: pt-[75px] md:pt-[90px] যোগ করার কারণে মূল গ্যালারি পেজের ব্যানার আর ফিক্সড নেববারের নিচে চাপা পড়বে না
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-800 pt-[75px] md:pt-[90px]">
      
      {/* 🟢 গ্যালারি হিরো ব্যানার: মডার্ন ইমেজ ওভারলে এবং রেসপন্সিভ হাই-এন্ড রিফ্লেক্স বর্ডার সহ */}
      <section className="relative h-[280px] md:h-[340px] bg-gray-900 flex items-center justify-center text-white overflow-hidden border-b-4 border-[#0B7A3E]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img 
          src={galleryData[0]?.image || ""} 
          alt="BAFAF Gallery Banner" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
        />
        <div className="relative z-20 text-center px-4 transform transition-all duration-500 hover:scale-102">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-2 drop-shadow-md">
            Our Gallery
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-gray-300">
            <span className="hover:text-[#A3D13A] transition-colors cursor-pointer">Home</span>
            <span className="text-[#A3D13A]">➔</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* 🟢 ফিল্টারিং ক্যাটগরি ট্যাব বার সেকশন */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'fisheries', label: 'Fish Farming' },
            { id: 'rice', label: 'Rice Fields' },
            { id: 'vegetables', label: 'Vegetables' },
            { id: 'fruits', label: 'Fruits' },
            { id: 'facilities', label: 'Facilities' },
            { id: 'events', label: 'Events' },
            { id: 'videos', label: 'Video Gallery' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id 
                  ? 'bg-[#0B7A3E] text-white border-[#0B7A3E] shadow-md scale-105' 
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🟢 ডাইনামিক গ্যালারি কার্ড রেন্ডারিং এরিয়া */}
        <div className="min-h-[400px]">
          {renderGalleryContent()}
        </div>

        {/* 🟢 প্রফেশনাল রেসপন্সিভ পেজিনেশন বার (ফুটারের ঠিক উপরে ব্যবহারের জন্য রেডি) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16 pb-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              ◀ Prev
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  currentPage === i + 1
                    ? 'bg-[#0B7A3E] text-white shadow-sm'
                    : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next ▶
            </button>
          </div>
        )}
      </section>

      {/* 🟢 গ্যালারি লাইটবক্স / ভিডিও প্লেয়ার মডাল পপআপ */}
      {modalMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalMedia(null)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalMedia(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-30 transition-colors cursor-pointer border-none"
            >
              ✕
            </button>
            
            {modalMedia.type === 'image' ? (
              <div>
                <div className="h-[320px] md:h-[450px] w-full bg-gray-100 rounded-xl overflow-hidden">
                  <img src={modalMedia.url} alt={modalMedia.title || "BAFAF"} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-left">
                  <h4 className="text-base font-black text-gray-900 uppercase">{modalMedia.title}</h4>
                </div>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                <video src={modalMedia.url} controls autoPlay className="w-full h-full" />
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
