/*
===========================================
File Path      : Src/Pages/Products/ProductsDetails.jsx
Component Name : ProductsDetails
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../../Data/Products';
import { 
  FaArrowLeft, 
  FaCheck, 
  FaPhoneAlt, 
  FaShoppingBag, 
  FaShieldAlt, 
  FaLeaf, 
  FaTruck 
} from 'react-icons/fa';

export default function ProductsDetails() {
  const { productId } = useParams(); // AppRoutes-এর :productId ম্যাচ করার জন্য
  const navigate = useNavigate();

  // ৩টি ক্যাটাগরির ডাটা একত্র করে নির্দিষ্ট slug/productId-এর ডাটা খুঁজে বের করা হচ্ছে
  const allProducts = [
    ...productsData.fisheries,
    ...productsData.crops,
    ...productsData.agroProducts
  ];
  
  const product = allProducts.find((item) => item.slug === productId);

  // প্রোডাক্ট খুঁজে না পাওয়া গেলে একটি সুন্দর এরর স্ক্রিন দেখাবে
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you are looking for is currently unavailable or out of stock.</p>
        <button onClick={() => navigate('/products')} className="bg-[#0b3c25] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2 cursor-pointer">
          <FaArrowLeft size={14} /> Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* 🟢 ১. প্রিমিয়াম হিরো ব্যানার (১০০% আপনার স্ক্রিনশটের ডিজাইনের মতো) */}
      <div 
        className="relative h-[300px] md:h-[450px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(6, 40, 24, 0.85), rgba(11, 60, 37, 0.75)), url(${product.image})` }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 mt-8">
          {/* ব্যাক বাটন */}
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#A3D13A] font-semibold text-sm mb-6 transition-colors group group-hover:-translate-x-1 cursor-pointer"
          >
            <FaArrowLeft className="transition-transform" /> Back to Previous
          </button>
          
          {/* শিরোনাম ও গোল্ডেন/সবুজ ব্যাজ */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[12px] font-bold text-[#A3D13A] mb-4 border border-white/10">
              <span className="text-sm">{product.icon}</span> Official BAFAF Product
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-wide mb-4">
              {product.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium opacity-90">
              {product.desc}
            </p>
          </div>
        </div>
      </div>

      {/* 🟢 ২. মেইন কন্টেন্ট লেআউট (দুই কলাম আর্কিটেকচার) */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 🔹 বাঁদিকের কলাম: মূল বিবরণ ও ফিচার গ্রিড (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* বড় ইমেজ ও প্রোডাক্ট পরিচিতি */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl mb-6 shadow-sm" 
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Product Overview</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              BAFAF Green Farm ensures top-tier quality for this agricultural commodity/product. Sourced directly from our strictly monitored ecosystem, we apply bio-safe packaging standardizations to preserve nutritional freshness and standard commercial longevity.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every single batch undergoes rigid organic compliance evaluation. This makes it ideal for bulk agri-business distribution networks, large-scale processing companies, and individual premium retail consumers.
            </p>
          </div>

          {/* প্রফেশনাল ইনফোগ্রাফিক স্টাইল ফিচার গ্রিড */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Quality Assurance & Trust Markers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% Organic, Chemical & Preservative Free",
                "Direct Commercial Supply from Verified Harvests",
                "High Germination & Optimal Nutritional Content",
                "Eco-Friendly and Secure Food-Grade Packaging",
                "Full Traceability Log from Farmstead to Dispatch",
                "Approved by Certified Biological Safety Laboratories"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50/40 rounded-xl border border-emerald-100/50">
                  <FaCheck className="text-[#0B7A3E] mt-0.5 shrink-0 text-base" />
                  <span className="text-sm font-semibold text-gray-700 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 ডানদিকের কলাম: স্টিকি সাইডবার অ্যাকশন উইজেটস (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-[100px] h-fit">
          
          {/* উইজেট ১: কুইক বুকিং ফর্ম / অ্যাকশন কার্ড */}
          <div className="bg-gradient-to-br from-[#0b3c25] to-emerald-950 text-white rounded-3xl p-6 shadow-xl border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 tracking-wide uppercase">Wholesale & Order Desk</h3>
              <p className="text-xs text-emerald-100/80 mb-6 leading-relaxed">Request commercial bulk pricing tier matrix, customized package capacities, or instant supply dispatch details.</p>
              
              <div className="flex flex-col gap-3">
                <a href="tel:+8801700000000" className="w-full flex items-center justify-center gap-2 bg-[#A3D13A] text-[#0b3c25] py-3.5 rounded-xl font-bold text-sm hover:bg-white transition-all duration-300 shadow-md">
                  <FaPhoneAlt size={12} /> Call For Wholesale Inquiry
                </a>
                <button className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-300 border border-white/10 cursor-pointer">
                  <FaShoppingBag size={12} /> Request Custom Product Sample
                </button>
              </div>
            </div>
            
            {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক ডেকোরেশন */}
            <div className="absolute -right-10 -bottom-10 text-9xl text-white/5 font-extrabold select-none pointer-events-none">BAFAF</div>
          </div>

          {/* উইজেট ২: কুইক মেটা ইনফরমেশন কার্ড */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 text-[14px]">Supply Chain Verification</h4>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary"><FaShieldAlt size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Product Guarantee</p>
                <p className="text-sm font-bold text-gray-700">100% Certified Organic & Bio-Safe</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><FaTruck size={16} /></div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Shipping Method</p>
                <p className="text-sm font-bold text-gray-700">Temperature Controlled Delivery Fleet</p>
              </div>
            </div>
          </div>

          {/* উইজেট ৩: ডকুমেন্টেশন বা ব্রোশার ডাউনলোড */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 text-[14px]">Product Resources</h4>
            <button className="w-full flex items-center justify-between p-3.5 bg-gray-50 hover:bg-emerald-50 rounded-xl group border border-gray-100 hover:border-emerald-200 transition-all cursor-pointer">
              <span className="flex items-center gap-3">
                <FaLeaf className="text-emerald-600 text-lg" />
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#0B7A3E] transition-colors">Download Technical Catalog .PDF</span>
              </span>
              <span className="text-[10px] bg-gray-200 group-hover:bg-[#0B7A3E] group-hover:text-white font-bold px-2 py-0.5 rounded-md transition-colors">3.1 MB</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
