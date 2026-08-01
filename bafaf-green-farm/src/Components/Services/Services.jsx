/*
===========================================
File Path      : Src/Components/Services/Services.jsx
Component Name : Services
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../../Context/AppContext';
import { FaUserTie, FaAward, FaTruck, FaHeadset } from 'react-icons/fa';

// 🟢 ইমপোর্ট পাথ ১০০% প্রফেশনাল ও স্ট্যান্ডার্ড করতে সরাসরি সঠিক রিলেটিভ পাথ ব্যবহার করা হলো
import FisheriesConsultancy from './FisheresConsultancy.jsx';
import AgroFarmManagement from './Agro&FarmManagement.jsx';
import TrainingTechSupport from './Training&techSupport.jsx';

import fishFarmingImg from '../../assets/Images/Services/fish-farming.jpg';
import riceProductionImg from '../../assets/Images/Services/rice-production.jpg';
import agroProductsImg from '../../assets/Images/Services/water-testing.jpg'; 
import supplyExportImg from '../../assets/Images/Services/farm-machinery.jpg'; 

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('fisheries');
  const { wishlist } = useApp();
  
  // মেইন মেনু ড্রপডাউন থেকে আসা কুয়েরি প্যারামিটার (?tab=...) রিড করার জন্য useEffect
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['fisheries', 'agro', 'training'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // ট্যাবে ক্লিক বা হোভার করলে স্টেট এবং URL দুটোই আপডেট হবে
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSearchParams({ tab: tabName });
  };

  const topServices = [
    { key: 'fisheries', title: "FISH FARMING", sub: "Modern Fish Cultivation", image: fishFarmingImg, icon: "🐟", points: ["Pond Management", "Fingerling Supply", "Fish Feed Support", "Water Quality Monitoring"] },
    { key: 'agro', title: "RICE PRODUCTION", sub: "Premium Rice Cultivation", image: riceProductionImg, icon: "🌾", points: ["Hybrid Seeds", "Modern Cultivation", "Harvesting", "Processing"] },
    { key: 'agro', title: "AGRO PRODUCTS", sub: "Fresh Agricultural Products", image: agroProductsImg, icon: "🥦", points: ["Vegetables", "Fruits", "Organic Products", "Packaging"] },
    { key: 'training', title: "SUPPLY & EXPORT", sub: "Nationwide Supply", image: supplyExportImg, icon: "🚢", points: ["Wholesale Supply", "Export Support", "Logistics", "Distribution"] }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans antialiased">
      {/* 🟢 সেকশন ১: WHAT WE OFFER - Our Premium Services */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">What We Offer</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">Our Premium Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {topServices.map((cat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => handleTabChange(cat.key)} 
              onClick={() => handleTabChange(cat.key)}       
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 flex flex-col justify-between p-4 group cursor-pointer ${
                activeTab === cat.key ? 'border-[#0B7A3E] bg-emerald-50/20 shadow-md scale-102' : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-full text-white flex items-center justify-center text-lg shadow-md border transition-all duration-300 ${
                    activeTab === cat.key ? 'bg-[#A3D13A] text-gray-900 scale-110' : 'bg-[#0B7A3E] border-white/20'
                  }`}>{cat.icon}</div>
                </div>
                <h3 className="font-extrabold text-[14px] text-gray-900 tracking-wide uppercase mb-0.5">{cat.title}</h3>
                <p className="text-[11px] font-medium text-gray-400 mb-4">{cat.sub}</p>
                <ul className="flex flex-col gap-1.5 text-xs text-gray-500 font-medium mb-6">
                  {cat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0B7A3E]" /> {pt}</li>
                  ))}
                </ul>
              </div>
              <span className="text-xs font-bold text-[#0B7A3E] group-hover:text-[#A3D13A] transition-colors mt-auto flex items-center gap-1">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 সেকশন ২: OUR SERVICES IN DETAIL (কন্ডিশনাল সাব-কম্পোনেন্ট রেন্ডারিং) */}
      <section className="bg-gray-50/50 py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-1">Our Services</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase tracking-wide">Our Services In Detail</h2>
            <div className="w-10 h-[3px] bg-[#A3D13A] mx-auto mt-2 rounded-full" />
          </div>

          <div className="transition-all duration-500 min-h-[400px]">
            {activeTab === 'fisheries' && <FisheriesConsultancy />}
            {activeTab === 'agro' && <AgroFarmManagement />}
            {activeTab === 'training' && <TrainingTechSupport />}
          </div>
        </div>
      </section>

      {/* 🟢 সেকশন ৩: WHY CHOOSE OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase mb-2 tracking-wide">Why Choose Our Services</h2>
        <div className="w-10 h-[3px] bg-[#A3D13A] mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Experienced Team", desc: "Our expert team ensures project management and quality production.", icon: <FaUserTie /> },
            { title: "Premium Quality", desc: "We maintain the highest quality in every single product and service.", icon: <FaAward /> },
            { title: "Nationwide Delivery", desc: "We deliver products all across Bangladesh on guaranteed strict time.", icon: <FaTruck /> },
            { title: "Customer Satisfaction", desc: "Customer satisfaction is our top priority with dedicated better support.", icon: <FaHeadset /> }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-5 rounded-2xl border border-transparent transition-all duration-300 group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-xl mb-4 border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-[#A3D13A] group-hover:scale-110">{item.icon}</div>
              <h4 className="font-extrabold text-sm text-gray-900 mb-1.5 transition-colors duration-300 group-hover:text-[#0B7A3E]">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
