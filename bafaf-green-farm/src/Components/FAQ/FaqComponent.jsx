/*
===========================================
File Path      : src/Components/FAQ/FaqComponent.jsx
Component Name : FaqComponent
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import FaqAccordion from './FaqAccordion';
import FaqSidebar from './FaqSidebar';

export default function FaqComponent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* স্ক্রিনশটের নিখুঁত রেসপন্সিভ ১২-কলাম লেআউট স্ট্রাকচার */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* বামপাশের কলাম: ক্যাটাগরি ও অ্যাকর্ডিয়ন স্লাইডার (col-span-8) */}
        <div className="lg:col-span-8 w-full">
          <FaqAccordion />
        </div>

        {/* ডানপাশের কলাম: স্টিকি মেটা সাইডবার অ্যাকশন উইজেটস (col-span-4) */}
        <div className="lg:col-span-4 w-full">
          <FaqSidebar />
        </div>

      </div>
    </div>
  );
}
