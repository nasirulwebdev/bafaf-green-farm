/*
===========================================
File Path      : Src/Pages/Products/Products.jsx
Component Name : ProductsPage
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { productsData } from '../../Data/Products';
import ProductsComponent from '../../Components/Products/Products';

export default function ProductsPage() {
  const { hero } = productsData;

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 🟢 ১. প্রিমিয়াম হিরো ব্যানার সেকশন */}
      <div 
        className="relative h-[250px] md:h-[350px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(6, 72, 36, 0.85), rgba(11, 122, 62, 0.75)), url(${hero.bgImage})` }}
      >
        <div className="z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            {hero.title}
          </h1>
          <p className="text-emerald-100 text-sm md:text-lg font-medium max-w-xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* 🟢 ২. ইন্টারেক্টিভ ৩-ক্যাটাগরি ট্যাব এবং ২৪টি প্রোডাক্ট ডিসপ্লে গ্রিড */}
      <ProductsComponent />

      {/* 🟢 ৩. কাস্টমার সাপোর্ট ও এনকোয়ারি কল-টু-অ্যাকশন (CTA) ব্যানার */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-[#064824] to-[#0B7A3E] text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl border border-white/10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">
              Bulk Ordering & Custom Packing Available
            </h2>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl leading-relaxed">
              Are you looking for commercial supply or wholesale organic products? Connect directly with our farm logistics management for customized quotes.
            </p>
          </div>
          <button className="bg-[#A3D13A] text-[#064824] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-white transition-all duration-300 whitespace-nowrap shadow-md hover:scale-105 active:scale-95">
            Contact Wholesale Cell
          </button>
        </div>
      </div>

    </div>
  );
}
