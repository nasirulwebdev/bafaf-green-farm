/*
===========================================
File Path      : Src/Components/Navbar/ProductsMegaMenu.jsx
Component Name : ProductsMegaMenu
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { Link } from "react-router-dom";
import { 
  FaFish, 
  FaSeedling, 
  FaAppleAlt, 
  FaChevronRight, 
  FaAward 
} from "react-icons/fa";

function ProductsMegaMenu({ closeMenu }) {
  // আপনার আসল মডেলের ডিজাইন ও আইকন অক্ষুণ্ণ রেখে ২৪টি ডাইনামিক প্রোডাক্ট লিংকআপ করা হলো
  const categories = [
    {
      title: "Fish Culture & Fisheries",
      slug: "fisheries",
      icon: <FaFish className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "Freshwater Fish", path: "/products/freshwater-fish", badge: "Popular" },
        { name: "Live & Hatchery Fish", path: "/products/live-hatchery-fish" },
        { name: "Frozen & Export Quality", path: "/products/frozen-export-quality" },
        { name: "Feed & Supplements", path: "/products/feed-supplements" },
        { name: "Premium Shrimp & Prawn", path: "/products/shrimp-prawn-culture" },
        { name: "High-Grade Fish Seed", path: "/products/high-grade-fish-seed" },
        { name: "Ornamental Aquarium Fish", path: "/products/ornamental-aquarium-fish" },
        { name: "Organic Dried Fish (Shutki)", path: "/products/organic-dried-fish" },
      ],
    },
    {
      title: "Crops & Grains",
      slug: "rice",
      icon: <FaAppleAlt className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "Aromatic Rice", path: "/products/aromatic-rice", badge: "Fresh Harvest" },
        { name: "Organic Vegetables", path: "/products/organic-vegetables" },
        { name: "Seasonal Fruits", path: "/products/seasonal-fruits" },
        { name: "High-Yield Seeds", path: "/products/high-yield-seeds" },
        { name: "Organic Whole Wheat", path: "/products/organic-whole-wheat" },
        { name: "Premium Pulses & Lentils", path: "/products/premium-pulses" },
        { name: "Cold-Pressed Mustard Oil", path: "/products/pure-mustard-oil" },
        { name: "Organic Farm Spices", path: "/products/organic-farm-spices" },
      ],
    },
    {
      title: "Agro & Bio Products",
      slug: "agro",
      icon: <FaSeedling className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "100% Organic Products", path: "/products/100-organic-products", badge: "Pure" },
        { name: "Organic Fertilizers", path: "/products/organic-fertilizers" },
        { name: "Bio-Pesticides", path: "/products/bio-pesticides" },
        { name: "Farm Machinery & Tools", path: "/products/farm-machinery-tools" },
        { name: "Premium Bio-Compost", path: "/products/premium-bio-compost" },
        { name: "Pure Neem Oil Spray", path: "/products/pure-neem-oil" },
        { name: "Bio Plant Nutrients", path: "/products/bio-plant-nutrients" },
        { name: "Premium Coco Peat Blocks", path: "/products/premium-coco-peat" },
      ],
    },
  ];

  return (
    <div className="w-[980px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-12 gap-8 text-gray-800 animate-fadeIn">
      {/* Category Columns */}
      <div className="col-span-8 grid grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {/* Category Header - এখন এটিও ক্লিকেবল এবং মেইন প্রোডাক্ট পেজের ট্যাব ওপেন করবে */}
            <Link 
              to={`/products?tab=${cat.slug}`}
              onClick={closeMenu}
              className="flex items-center gap-2 pb-2 border-b border-gray-100 hover:opacity-85 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center">
                {cat.icon}
              </div>
              <h4 className="font-bold text-[15px] text-[#0B7A3E] whitespace-nowrap">
                {cat.title}
              </h4>
            </Link>

            {/* Sub Items - ২৪টি ডাটা গ্রিড স্ট্রাকচারকে স্ট্যাবল রাখতে স্ক্রোলবার কন্ট্রোল অ্যাড করা হলো */}
            <ul className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
              {cat.items.map((sub, sIdx) => (
                <li key={sIdx}>
                  <Link
                    to={sub.path}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-[13px] font-medium text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all duration-200"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#A3D13A] transition-colors shrink-0" />
                      <span className="truncate">{sub.name}</span>
                    </span>

                    {sub.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#A3D13A]/20 text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-colors shrink-0">
                        {sub.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Promo Card */}
      <div className="col-span-4 bg-gradient-to-br from-[#0B7A3E] to-[#064824] rounded-xl p-6 text-white flex flex-col justify-between relative overflow-hidden group">
        <FaSeedling className="absolute -right-6 -bottom-6 text-9xl text-white/10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-[#A3D13A] mb-3">
            <FaAward className="text-xs" /> Premium Quality
          </div>
          <h3 className="text-xl font-bold mb-2 leading-snug">
            Organic Agro & Fresh Fish Direct from Farm
          </h3>
          <p className="text-xs text-white/80 leading-relaxed">
            Sourced with care, chemical-free and packed with natural goodness for your healthy lifestyle.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to="/products"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A3D13A] hover:text-white transition-colors"
          >
            Explore All Products
            <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsMegaMenu;
