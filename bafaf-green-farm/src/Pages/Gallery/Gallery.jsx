/*
===========================================
File Path      : src/Pages/Gallery/Gallery.jsx
Component Name : Gallery Page Wrapper
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from 'react';
import GalleryComponent from '../../Components/Gallery/Gallery';

// যদি আপনার প্রজেক্টে গ্লোবাল হেডার এবং ফুটার কম্পোনেন্ট থাকে, তবে এখানে ইম্পোর্ট করতে পারেন:import Header from '../../Components/Navbar/Navbar';


export default function GalleryPage() {
  return (
    <div className="gallery-page-wrapper min-h-screen bg-white">
   

      {/* ২. ডাইনামিক ফিল্টারিং, প্রিমিয়াম হোভার এবং পেজিনেশন সমৃদ্ধ মেইন গ্যালারি বডি */}
      <main className="relative z-10 animate-fade-in">
        <GalleryComponent />
      </main>



    </div>
  );
}
