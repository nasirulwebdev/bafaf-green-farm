/*
===========================================
File Path      : Src/Components/Services/Services.jsx
Component Name : Services
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../Data/Services';
import { 
  FaUserTie, FaAward, FaTruck, FaHeadset,
  FaComments, FaCogs, FaSeedling, FaClipboardCheck, FaShippingFast,
  FaCheckCircle
} from 'react-icons/fa';

// ইমেজগুলো আপনার পূর্বের সফল পাথ অনুযায়ী সঠিকভাবে ইমপোর্ট করা হলো
import fishFarmingImg from '../../assets/Images/Services/fish-farming.jpg';
import riceProductionImg from '../../assets/Images/Services/rice-production.jpg';
import agroProductsImg from '../../assets/Images/Services/water-testing.jpg'; 
import supplyExportImg from '../../assets/Images/Services/farm-machinery.jpg'; 

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // আপনার আগের তৈরি করা ডাইনামিক ট্যাব স্টেট (ডিফল্ট 'fisheries' অ্যাক্টিভ থাকবে)
  const [activeTab, setActiveTab] = useState('fisheries');
  
  // অ্যাকর্ডিয়ন ওপেন/ক্লোজ কন্ট্রোল স্টেট
  const [openFaq, setOpenFaq] = useState(0); 

  // মেইন মেনু ড্রপডাউন থেকে আসা কুয়েরি প্যারামিটার (?tab=...) রিড করার জন্য useEffect
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['fisheries', 'agro', 'training'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // ট্যাবে ক্লিক বা হোভার করলে স্টেট এবং URL দুটোই আপডেট হবে (আপনার আগের সচল লজিক)
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSearchParams({ tab: tabName });
  };

  // স্ক্রিনশটের ৪-কলাম টপ প্রিমিয়াম সার্ভিসের লেআউট অনুযায়ী ৩টি প্রধান ক্যাটাগরি ট্যাব অবজেক্ট
  const topServices = [
    { key: 'fisheries', title: "FISH FARMING", sub: "Modern Fish Cultivation", image: fishFarmingImg, icon: "🐟", points: ["Pond Management", "Fingerling Supply", "Fish Feed Support", "Water Quality Monitoring"] },
    { key: 'agro', title: "RICE PRODUCTION", sub: "Premium Rice Cultivation", image: riceProductionImg, icon: "🌾", points: ["Hybrid Seeds", "Modern Cultivation", "Harvesting", "Processing"] },
    { key: 'agro', title: "AGRO PRODUCTS", sub: "Fresh Agricultural Products", image: agroProductsImg, icon: "🥦", points: ["Vegetables", "Fruits", "Organic Products", "Packaging"] },
    { key: 'training', title: "SUPPLY & EXPORT", sub: "Nationwide Supply", image: supplyExportImg, icon: "🚢", points: ["Wholesale Supply", "Export Support", "Logistics", "Distribution"] }
  ];

  // স্ট্যাটস কাউন্টার ডেটা (আপনার স্ক্রিনশটের একদম নিচের ডিজাইন অনুযায়ী)
  const stats = [
    { number: "500+", text: "Happy Clients" },
    { number: "200+", text: "Fish Farms" },
    { number: "1000+", text: "Tons Production" },
    { number: "64", text: "District Coverage" }
  ];

  // স্ক্রিনশটের টেক্সট অনুযায়ী অবিকল ৪টি FAQ ডাটা অবজেক্ট
  const faqData = [
    { question: "Do you provide fish seeds?", answer: "Yes, we provide high quality fish seeds and fingerlings sourced from certified commercial broods." },
    { question: "Do you deliver products across Bangladesh?", answer: "Yes, we have temperature-controlled dedicated vehicles to safely deliver all agro and aquaculture items nationwide." },
    { question: "Do you export your products?", answer: "Absolutely. Our frozen seafood, premium rice, and processed organic items meet strict global compliance for direct international exports." },
    { question: "How can I place an order?", answer: "You can instantly tap the 'Call For Inquiry' or wholesale cell desk button to place bulk bookings or customized packing sizes directly." }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans antialiased">
            {/* 🟢 সেকশন ১: WHAT WE OFFER - Our Premium Services (৪-কলাম ডাইনামিক হোভার/ক্লিক ট্যাব গ্রিড) */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">What We Offer</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">Our Premium Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {topServices.map((cat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => handleTabChange(cat.key)} // মাউস হোভার করলে ডাটা ও ইউআরএল চেঞ্জ হবে
              onClick={() => handleTabChange(cat.key)}       // মাউস ক্লিক করলেও ডাটা ও ইউআরএল চেঞ্জ হবে
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 flex flex-col justify-between p-4 group cursor-pointer ${
                activeTab === cat.key ? 'border-[#0B7A3E] bg-emerald-50/20 shadow-md scale-102' : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              <div>
                {/* ইমেজ ও বৃত্তাকার আইকন ওভারলে */}
                <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-full text-white flex items-center justify-center text-lg shadow-md border transition-all duration-300 ${
                    activeTab === cat.key ? 'bg-[#A3D13A] text-gray-900 scale-110' : 'bg-[#0B7A3E] border-white/20'
                  }`}>{cat.icon}</div>
                </div>

                <h3 className="font-extrabold text-[14px] text-gray-900 tracking-wide uppercase mb-0.5">{cat.title}</h3>
                <p className="text-[11px] font-medium text-gray-400 mb-4">{cat.sub}</p>
                
                {/* বুলেটেড পয়েন্ট তালিকা */}
                <ul className="flex flex-col gap-1.5 text-xs text-gray-500 font-medium mb-6">
                  {cat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A3E]" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="text-xs font-bold text-[#0B7A3E] group-hover:text-[#A3D13A] transition-colors mt-auto flex items-center gap-1">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 সেকশন ২: OUR SERVICES IN DETAIL (প্রিমিয়াম হোভার এফেক্ট সহ ২৪টি ডাটা থেকে ৮টি করে সচল অনুভূমিক রো লেআউট) */}
      <section className="bg-gray-50/50 py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-1">Our Services</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase tracking-wide">Our Services In Detail</h2>
            <div className="w-10 h-[3px] bg-[#A3D13A] mx-auto mt-2 rounded-full" />
          </div>

          {/* ইমেজের ডিজাইন এবং প্রিমিয়াম হোভার সিঙ্ক অনুযায়ী ডাইনামিক ফিল্টারড ডাটা লুপ */}
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {servicesData[activeTab].map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-lg transition-all duration-300"
              >
                
                {/* কলাম ১: ছবি (প্রিমিয়াম হোভার এফেক্ট সহ জুম স্কেল ট্রানজিশন) */}
                <div className="w-full md:w-1/4 h-36 rounded-xl overflow-hidden shrink-0 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* কলাম ২: বিবরণ ও বাটন (প্রিমিয়াম হোভার এফেক্ট সিঙ্ক) */}
                <div className="w-full md:w-2/5 flex flex-col items-start text-left">
                  <h3 className="font-extrabold text-base text-gray-900 mb-2 uppercase tracking-wide flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0B7A3E]">
                    <span className="transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</span> {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
                  <button 
                    onClick={() => navigate(`/services/${service.slug}`)} // ডিটেইলস পেজে যাওয়ার বাটন সচল
                    className="bg-[#0B7A3E] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A3D13A] hover:text-gray-900 transition-colors duration-300 shadow-sm cursor-pointer"
                  >
                    View Details
                  </button>
                </div>

                {/* কলাম ৩: গ্রিন টিক মার্ক সহ রাইট সাইড পয়েন্ট তালিকা */}
                <div className="w-full md:w-1/3 flex flex-col gap-2 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:py-1 text-left w-full">
                  {[
                    "High Quality Industry Standard Support",
                    "On-Site Inspection & Risk Mitigation",
                    "Meticulous Testing & Safety Audits",
                    "Cost-Effective Operational Frameworks",
                    "Post-Consultation Priority Assistance"
                  ].map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                      <FaCheckCircle className="text-[#0B7A3E] group-hover:text-[#A3D13A] shrink-0 text-sm transition-colors duration-300" />
                      <span className="group-hover:text-gray-900 transition-colors duration-300">{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
                  {/* 🟢 সেকশন ৩: WHY CHOOSE OUR SERVICES (ইনফোগ্রাফিক গ্রিড - প্রিমিয়াম হোভার মডিফাইড) */}
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
            <div 
              key={index} 
              className="flex flex-col items-center p-5 rounded-2xl border border-transparent transition-all duration-300 group hover:border-[#0B7A3E] hover:bg-emerald-50/20 hover:scale-102 hover:shadow-md cursor-pointer"
            >
              {/* আইকন বাবল হোভার মডিফিকেশন */}
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#0B7A3E] flex items-center justify-center text-xl mb-4 border border-emerald-100/50 shadow-sm transition-all duration-300 group-hover:bg-[#0B7A3E] group-hover:text-[#A3D13A] group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-sm text-gray-900 mb-1.5 transition-colors duration-300 group-hover:text-[#0B7A3E]">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 সেকশন ৪: OUR WORK PROCESS (ডার্ক গ্রিন প্রসেস থিম - প্রিমিয়াম হোভার মডিফাইড) */}
      <section className="bg-gradient-to-br from-[#041a10] to-[#0a3521] text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2">Our Work Process</h2>
          <div className="w-10 h-[3px] bg-[#A3D13A] mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "Consultation", desc: "We understand your needs and requirements.", icon: <FaComments /> },
              { step: "Planning", desc: "We create a perfect plan for best results.", icon: <FaCogs /> },
              { step: "Production", desc: "We start production with modern techniques.", icon: <FaSeedling /> },
              { step: "Quality Check", desc: "Quality is checked meticulously at every step.", icon: <FaClipboardCheck /> },
              { step: "Delivery", desc: "Safe and on-time delivery right to your place.", icon: <FaShippingFast /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center px-2 py-4 rounded-xl border border-transparent transition-all duration-300 group hover:border-[#0B7A3E]/40 hover:bg-white/5 hover:scale-102 cursor-pointer"
              >
                {/* প্রসেস আইকন হোভার মডিফিকেশন */}
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md text-[#A3D13A] flex items-center justify-center text-lg mb-4 border border-white/5 shadow-sm transition-all duration-300 group-hover:bg-[#A3D13A] group-hover:text-gray-900 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-white mb-1 tracking-wide transition-colors duration-300 group-hover:text-[#A3D13A]">{item.step}</h4>
                <p className="text-[11px] text-gray-300/80 leading-relaxed max-w-[160px] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 সেকশন ৫: কাউন্টার বা স্ট্যাটস সেকশন (ইমেজের মতো ক্লিন এবং ডার্ক মিনিমালিস্ট) */}
      <section className="bg-[#04120a] border-t border-white/10 py-12 text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center border-r last:border-r-0 border-white/10 px-2">
              <h3 className="text-3xl md:text-4xl font-black text-[#A3D13A] tracking-tight mb-1">{stat.number}</h3>
              <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wider">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 সেকশন ৬: FAQ এবং CTA ব্যানার (প্রিমিয়াম হোভার মডিফাইড গ্রিন ব্যানার) */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-lg font-black text-gray-900 tracking-wide uppercase mb-1">Frequently Asked Questions</h2>
            <div className="flex items-center gap-1 mb-6">
              <div className="w-6 h-[2px] bg-[#0B7A3E]" />
              <span className="text-[10px] text-[#0B7A3E]">🌱</span>
              <div className="w-12 h-[2px] bg-gray-200" />
            </div>
            <div className="flex flex-col gap-3">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                    <button onClick={() => setOpenFaq(isOpen ? null : index)} className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-[14px] text-gray-800 hover:bg-gray-50/80 transition-colors cursor-pointer">
                      <span>{faq.question}</span>
                      <span className={`text-base font-medium transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0B7A3E]' : 'text-gray-400'}`}>{isOpen ? "▲" : "+"}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 bg-gray-50/30 ${isOpen ? 'max-h-[150px] border-t border-gray-100' : 'max-h-0'}`}>
                      <p className="p-5 text-xs md:text-sm text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Green Custom CTA Banner (প্রিমিয়াম হোভার ইন্টিগ্রেটেড লেআউট) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-gradient-to-br from-[#0B7A3E] to-[#043319] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 min-h-[320px] text-left border border-transparent transition-all duration-300 group hover:border-[#A3D13A] hover:scale-102 hover:shadow-2xl">
              <div className="w-full md:w-3/5 flex flex-col justify-between h-full z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight tracking-wide transition-colors duration-300 group-hover:text-[#A3D13A]">Ready to Work <br /> With Us?</h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed font-medium mb-8">Get the best fisheries and agro solutions for your business. Contact us today!</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a href="tel:+8801700000000" className="bg-white text-[#0B7A3E] px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#A3D13A] hover:text-gray-900 transition-colors duration-300 shadow-sm tracking-wide uppercase">Contact Now</a>
                  <button className="bg-transparent border border-white/30 text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-white/10 transition-colors tracking-wide uppercase cursor-pointer">Get Free Quote</button>
                </div>
              </div>
              <div className="w-full md:w-2/5 h-[220px] md:h-full rounded-2xl md:rounded-r-3xl md:rounded-l-none overflow-hidden relative shrink-0 border-4 border-white/10 md:border-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B7A3E]/30 to-transparent z-10 mix-blend-overlay" />
                <img src={fishFarmingImg} alt="BAFAF Farm" className="w-full h-full object-cover md:scale-105 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
