/*
===========================================
File Path      : Src/Pages/Gallery/GalleryDetails.jsx
Component Name : GalleryDetails
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galleryData } from '../../Data/Gallery';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaUserShield,
  FaFilePdf 
} from 'react-icons/fa';

export default function GalleryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // পেজ লোড হওয়ার সাথে সাথে স্ক্রিন যেন একদম উপরে চলে যায় (Scroll to Top)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // আইডি ম্যাচ করে মাস্টার গ্যালারি ডাটা সেট থেকে নির্দিষ্ট ডাটাটি খুঁজে বের করা হচ্ছে
  // 🔄 এটি আপনার ফাইলের পুরনো find লাইনটির জায়গায় প্রতিস্থাপন করুন:
  const item = galleryData.find((pic) => String(pic.id) === String(id));


  // যদি কোনো কারণে ইউজার ভুল বা কাল্পনিক ইউআরএল-এ আসে, তবে নট ফাউন্ড স্ক্রিন দেখাবে
  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-[100px] animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Gallery Asset Not Found</h2>
        <p className="text-gray-600 mb-6">The gallery item you are looking for does not exist or has been moved.</p>
        <button onClick={() => navigate('/gallery')} className="bg-[#0b3c25] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2 cursor-pointer">
          <FaArrowLeft size={14} /> Back to Gallery
        </button>
      </div>
    );
  }

  return (
    /* 🚀 সমাধান: pt-[75px] md:pt-[90px] আপনার ফিক্সড নেববারের নিচের ক্ল্যাশ শতভাগ দূর করবে */
    <div className="bg-gray-50 min-h-screen pb-16 pt-[75px] md:pt-[90px]">
      
      {/* 🟢 ১. স্ক্রিনশটের অবিকল প্রিমিয়াম হিরো ব্যানার (ডার্ক ওভারলে ও গ্লাস ইফেক্ট) */}
      <div 
        className="relative h-[300px] md:h-[450px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(6, 40, 24, 0.85), rgba(11, 60, 37, 0.75)), url(${item.image})` }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 mt-8">
          {/* ব্যাক বাটন */}
          <button 
            onClick={() => navigate('/gallery')} 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#ec2d07] font-semibold text-sm mb-6 transition-colors group cursor-pointer bg-transparent border-none"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Previous
          </button>
          
          {/* শিরোনাম ও ব্যাজ লেআউট */}
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[12px] font-bold text-[#A3D13A] mb-4 border border-white/10">
              <span className="text-sm">{item.icon}</span> Official BAFAF Service Media
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-wide mb-4 uppercase">
              {item.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium opacity-90">
              {item.desc}
            </p>
          </div>
        </div>
      </div>

      {/* 🟢 ২. স্ক্রিনশটের অবিকল দুই কলাম আর্কিটেকচার লেআউট */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 🔹 বাঁদিকের কলাম: মূল ইমেজ এবং ফিচার গ্রিড (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* বড় ইমেজ ও পরিচিতি কার্ড */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl mb-6 shadow-sm bg-gray-50">
              {item.type === 'video' ? (
                <video src={item.videoUrl} controls autoPlay muted className="w-full h-full object-cover" />
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl" 
                />
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              BAFAF Green Farm provides state-of-the-art professional support tailored to your specific farming infrastructure. Our certified experts ensure adherence to global standards, enhancing productivity while preserving modern environmental health.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Whether you are managing a high-density aquaculture setup or implementing smart automated irrigation systems, our end-to-end consultancy guarantees sustainable progress and minimized asset mortality.
            </p>
          </div>
                        {/* ইনফোগ্রাফিক স্টাইল ফিচার গ্রিড */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Key Benefits & Project Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% Customized Scientific Technical Reports",
                "On-Site Field Inspection by Certified Agro Experts",
                "Advanced Diagnostics & Biological Risk Mitigation",
                "Cost-Effective Operational Layout Formulations",
                "Post-Consultation Priority Troubleshooting Support",
                "Compliance with International Export & Eco Standards"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50/40 rounded-xl border border-emerald-100/50">
                  <FaCheckCircle className="text-[#0B7A3E] mt-0.5 shrink-0 text-base" />
                  <span className="text-sm font-semibold text-gray-700 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 ডানদিকের কলাম: স্টিকি সাইডবার অ্যাকশন উইজেটস (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-[100px] h-fit text-left">
          
          {/* উইজেট ১: কুইক বুকিং ফর্ম / অ্যাকশন কার্ড */}
          <div className="bg-gradient-to-br from-[#0b3c25] to-emerald-950 text-white rounded-3xl p-6 shadow-xl border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 tracking-wide uppercase">Schedule This Service</h3>
              <p className="text-xs text-emerald-100/80 mb-6 leading-relaxed">Book a personalized, one-on-one digital or physical consultation session with our senior experts today.</p>
              
              <div className="flex flex-col gap-3">
                <a href="tel:+8801700000000" className="w-full flex items-center justify-center gap-2 bg-[#A3D13A] text-[#0b3c25] py-3 rounded-xl font-bold text-sm hover:bg-white transition-all duration-300 shadow-md">
                  <FaPhoneAlt size={12} /> Call Now For Inquiry
                </a>
                <a href="mailto:info@bafafgreenfarm.com" className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <FaEnvelope size={12} /> Send Email Booking
                </a>
              </div>
            </div>
            
            {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক ডেকোরেশন */}
            <div className="absolute -right-10 -bottom-10 text-9xl text-white/5 font-extrabold select-none pointer-events-none">BAFAF</div>
          </div>

          {/* উইজেট ২: কুইক মেটা ইনফরমেশন কার্ড (Service Guarantee) */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 text-[15px]">Service Guarantee</h4>
            
            {/* Response Time */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0"><FaClock size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">Response Time</p>
                <p className="text-xs font-bold text-gray-800">Within 24-48 Business Hours</p>
              </div>
            </div>

            {/* Expert Team */}
            <div className="flex items-start gap-3 border-t border-gray-50 pt-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><FaUserShield size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">Expert Team</p>
                <p className="text-xs font-bold text-gray-800">Certified Agriculture Specialists</p>
              </div>
            </div>
          </div>

          {/* উইজেট ৩: সার্ভিস রিসোর্সেস ডাউনলোড অপশন */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900 text-[15px] mb-1">Service Resources</h4>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('Brochure download starting...'); }}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/30 hover:border-[#0B7A3E]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-500 text-lg group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-800 leading-tight">Download Brochure</p>
                  <p className="text-[10px] text-gray-400 font-medium">PDF Format</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#0B7A3E] transition-colors">2.4 MB</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
