/*
===========================================
File Path      : src/Components/FAQ/FaqAccordion.jsx
Component Name : FaqAccordion
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useState } from 'react';
import { faqCategories, faqData } from '../../Data/Faq';

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(0); // ডিফল্টভাবে প্রথম প্রশ্নটি ওপেন থাকবে

  // ডাইনামিক ফিল্টারিং লজিক
  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="flex flex-col gap-6 text-left animate-fade-in">
      
      {/* 🔹 ক্যাটাগরি সিলেকশন প্যানেল গ্রিড (প্রিমিয়াম হোভার ইফেক্ট সহ) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
        {faqCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <div 
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(0); }}
              className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                isSelected 
                  ? 'border-[#0B7A3E] bg-emerald-50/20 shadow-md scale-102 font-black text-[#0B7A3E]' 
                  : 'border-gray-100 bg-white text-gray-700 hover:border-[#0B7A3E] hover:bg-emerald-50/10 hover:shadow-md hover:scale-101'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* আইকন বাবল হোভার সিঙ্ক */}
                <span className={`w-8 h-8 rounded-full text-sm flex items-center justify-center border shadow-sm transition-all duration-300 ${
                  isSelected 
                    ? 'bg-[#0B7A3E] text-white border-[#0B7A3E] scale-110' 
                    : 'bg-emerald-50 text-gray-800 border-emerald-100/50 group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:scale-110'
                }`}>
                  {cat.icon}
                </span>
                <span className="text-xs md:text-sm font-bold tracking-wide uppercase">{cat.label}</span>
              </div>
              <span className={`text-xs font-bold transition-all duration-300 ${
                isSelected ? 'translate-x-1 text-[#0B7A3E]' : 'text-gray-300 group-hover:text-[#0B7A3E] group-hover:translate-x-1'
              }`}>➔</span>
            </div>
          );
        })}
      </div>

      {/* 🔹 এক্টিভ ক্যাটাগরির অ্যাকর্ডিয়ন ড্রপডাউন লিস্ট (ব্ল্যাক শ্যাডো ট্রানজিশন সহ) */}
      <div className="bg-white rounded-3xl p-5 md:p-7 shadow-sm border border-gray-100 flex flex-col gap-4 mt-2">
        <h3 className="text-xs font-black uppercase text-gray-900 tracking-wider mb-2 border-b border-gray-100 pb-3 flex items-center gap-2">
          🌱 Active Category Details
        </h3>
        
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={faq.id} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 group/acc ${
                isOpen ? 'border-[#0B7A3E]/40 shadow-sm' : 'border-gray-100 bg-gray-50/20 hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-[13px] md:text-[14px] text-gray-800 hover:bg-gray-50/80 transition-all duration-300 cursor-pointer border-none bg-transparent"
              >
                <span className={`transition-colors duration-300 flex items-center gap-2.5 ${isOpen ? 'text-[#0B7A3E]' : 'group-hover/acc:text-[#0B7A3E]'}`}>
                  <span className="text-xs opacity-70">{faq.icon || '❓'}</span> {faq.question}
                </span>
                <span className={`text-sm font-black transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0B7A3E]' : 'text-gray-400 group-hover/acc:text-[#0B7A3E]'}`}>
                  {isOpen ? "▲" : "+"}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[250px] border-t border-gray-100 bg-white' : 'max-h-0'}`}>
                <p className="p-5 text-xs md:text-sm text-gray-600 leading-relaxed font-semibold">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
