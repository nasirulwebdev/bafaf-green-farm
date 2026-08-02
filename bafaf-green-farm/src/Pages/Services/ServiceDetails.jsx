// File Path: Src/Pages/Services/ServiceDetails.jsx
// PART 01: Imports, Fixed Dynamic Group-Image Lookup & Premium Banner Setup

import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../../Data/Services';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFilePdf, 
  FaClock, 
  FaUserShield 
} from 'react-icons/fa';

export default function ServiceDetails() {
  const { slug } = useParams(); // URL থেকে ডাইনামিক slug রিড করার জন্য
  const navigate = useNavigate();

  // ৩টি ক্যাটাগরির ডাটা একত্র করে নির্দিষ্ট slug-এর ডাটা খুঁজে বের করা হচ্ছে
  const allServices = [
    ...(servicesData?.fisheries || []),
    ...(servicesData?.agro || []),
    ...(servicesData?.training || [])
  ];
  
  let service = allServices.find((item) => item.slug === slug);

  // 🟢 FIXED AUTOMATIC LOOKUP: ডাটা ফাইলে সাব-ক্যাটাগরি কন্টেন্ট মিসিং থাকলে প্যারেন্ট গ্রুপের ইমেজ রেন্ডার করবে
  if (!service) {
    const fallbackTitle = slug
      ?.split("-")
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      ?.join(" ") || "Premium Agro Service";

    // ডিফল্ট নিরাপদ ব্যাকআপ ইমেজ
    let groupImage = "https://unsplash.com"; 
    
    // 🛠️ নিখুঁত কিওয়ার্ড ম্যাট্রিক্স যাতে ৪টি নির্দিষ্ট স্লাগও গ্রুপ ইমেজ পেয়ে যায়
    const isFisheriesGroup = 
      slug.includes("pond") || 
      slug.includes("fish") || 
      slug.includes("hatchery") || 
      slug.includes("aquaculture") || 
      slug.includes("feed") || 
      slug.includes("water") || 
      slug.includes("shrimp") || 
      slug.includes("prawn");

    const isAgroGroup = 
      slug.includes("soil") || 
      slug.includes("crop") || 
      slug.includes("farm") || 
      slug.includes("irrigation") || 
      slug.includes("rice") || 
      slug.includes("greenhouse") || 
      slug.includes("harvest") || 
      slug.includes("supply") || 
      slug.includes("export");

    const isTrainingGroup = 
      slug.includes("training") || 
      slug.includes("biofloc") || 
      slug.includes("project") || 
      slug.includes("iot") || 
      slug.includes("pest");

    if (isFisheriesGroup) {
      groupImage = servicesData?.fisheries?.[0]?.image || groupImage;
    } else if (isAgroGroup) {
      groupImage = servicesData?.agro?.[0]?.image || groupImage;
    } else if (isTrainingGroup) {
      groupImage = servicesData?.training?.[0]?.image || groupImage;
    }

    service = {
      slug: slug,
      title: fallbackTitle,
      desc: `We provide specialized, high-efficiency commercial support and professional solution pipeline for ${fallbackTitle}. Our systems combine sustainable ecological framework with advanced agricultural technology.`,
      icon: "🌱",
      image: groupImage, // 🟢 ডাটা ফাইলের ক্যাটাগরিতে যে ইমেজ ছিল এখন সেটাই সফলভাবে শো করবে
      features: [
        "Expert On-Site Consultation",
        "Advanced Technology Integration",
        "Eco-Friendly & Sustainable Management",
        "Comprehensive Property Assessment"
      ]
    };
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* 🟢 ১. প্রিমিয়াম হিরো ব্যানার (ডার্ক ওভারলে ও গ্লাস ইফেক্ট) */}
      <div 
        className="relative h-[300px] md:h-[450px] bg-cover bg-center flex items-center select-none"
        style={{ backgroundImage: `linear-gradient(rgba(6, 40, 24, 0.85), rgba(11, 60, 37, 0.75)), url(${service.image})` }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 mt-8">
          {/* ব্যাক বাটন */}
          <button 
            type="button"
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#A3D13A] font-semibold text-sm mb-6 transition-colors group cursor-pointer"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Previous
          </button>
          
          {/* শিরোনাম ও ব্যাজ */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[12px] font-bold text-[#A3D13A] mb-4 border border-white/10">
              <span className="text-sm">{service.icon}</span> Official BAFAF Service
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-wide mb-4">
              {service.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium opacity-90">
              {service.desc}
            </p>
          </div>
        </div>
      </div>

      {/* 🟢 ২. মেইন কন্টেন্ট লেআউট (দুই কলাম আর্কিটেকচার) */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 🔹 বাঁদিকের কলাম: মূল বিবরণ ও ফিচার গ্রিড (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* বড় ইমেজ ও পরিচিতি */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 select-none">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl mb-6 shadow-sm" 
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              BAFAF Green Farm provides state-of-the-art professional support tailored to your specific farming infrastructure. Our certified experts ensure adherence to global standards, enhancing productivity while preserving modern environmental health.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Whether you are managing a high-density aquaculture setup or implementing smart automated irrigation systems, our end-to-end consultancy guarantees sustainable progress and minimized asset mortality.
            </p>
          </div>

          {/* প্রফেশনাল ইনফোগ্রাফিক স্টাইল ফিচার গ্রিড */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 select-none">
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
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-[100px] h-fit select-none">
          
          {/* উইজেট ১: কুইক বুকিং ফর্ম / অ্যাকশন কার্ড */}
          <div className="bg-gradient-to-br from-[#0b3c25] to-emerald-950 text-white rounded-3xl p-6 shadow-xl border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 tracking-wide uppercase">Schedule This Service</h3>
              <p className="text-xs text-emerald-100/80 mb-6 leading-relaxed">Book a personalized, one-on-one digital or physical consultation session with our senior experts today.</p>
              
              <div className="flex flex-col gap-3">
                <a href="tel:+8801750909833" className="w-full flex items-center justify-center gap-2 bg-[#A3D13A] text-[#0b3c25] py-3 rounded-xl font-bold text-sm hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md">
                  <FaPhoneAlt size={12} /> Call Now For Inquiry
                </a>
                <a href="mailto:info@bafafgreenfarm.com" className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white py-3 rounded-xl font-bold text-sm hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-white/10">
                  <FaEnvelope size={12} /> Send Email Booking
                </a>
              </div>
            </div>
            
            {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক ডেকোরেশন */}
            <div className="absolute -right-10 -bottom-10 text-9xl text-white/5 font-extrabold select-none pointer-events-none">BAFAF</div>
          </div>

          {/* উইজেট ২: কুইক মেটা ইনফরমেশন কার্ড */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 text-[15px]">Service Guarantee</h4>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600"><FaClock size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Response Time</p>
                <p className="text-sm font-bold text-gray-700">Within 24-48 Business Hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><FaUserShield size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Expert Team</p>
                <p className="text-sm font-bold text-gray-700">Certified Agriculture Specialists</p>
              </div>
            </div>
          </div>

          {/* উইজেট ৩: ডকুমেন্টেশন বা ব্রোশার ডাউনলোড */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 text-[15px]">Service Resources</h4>
            <button type="button" className="w-full flex items-center justify-between p-3.5 bg-gray-50 hover:bg-emerald-50 rounded-xl group border border-gray-100 hover:border-emerald-200 transition-all cursor-pointer">
              <span className="flex items-center gap-3">
                <FaFilePdf className="text-red-500 text-lg" />
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#0B7A3E] transition-colors">Download Brochure .PDF</span>
              </span>
              <span className="text-[10px] bg-gray-200 group-hover:bg-[#0B7A3E] group-hover:text-white font-bold px-2 py-0.5 rounded-md transition-colors">2.4 MB</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
