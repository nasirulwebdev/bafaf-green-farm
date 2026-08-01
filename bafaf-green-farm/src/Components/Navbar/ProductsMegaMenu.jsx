/*
===========================================
File Path      : Src/Components/Navbar/ProductsMegaMenu.jsx
Component Name : ProductsMegaMenu (Part 01 - Fixed Images)
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
  FaAward,
  FaShoppingCart,
  FaHeart,
  FaWhatsapp
} from "react-icons/fa";
import { useApp } from "@/Context/AppContext";

// 🟢 কার্ট পেজের জন্য আপনার সচল অ্যাসেট পাথ থেকে মেইন ব্যাকআপ ছবিগুলো ইমপোর্ট করা হলো
import fishImg from "@/assets/Images/Services/fish-farming.jpg";
import riceImg from "@/assets/Images/Services/rice-production.jpg";
import agroImg from "@/assets/Images/Services/water-testing.jpg";

function ProductsMegaMenu({ closeMenu }) {
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();

  const categories = [
    {
      title: "Fish Culture & Fisheries",
      slug: "fisheries",
      image: fishImg, // ক্যাটাগরি লেভেলে সরাসরি ছবি সেট করা হলো
      icon: <FaFish className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "p1", name: "Freshwater Fish", path: "/products/freshwater-fish", badge: "Popular" },
        { id: "p2", name: "Live & Hatchery Fish", path: "/products/live-hatchery-fish" },
        { id: "p3", name: "Frozen & Export Quality", path: "/products/frozen-export-quality" },
        { id: "p4", name: "Feed & Supplements", path: "/products/feed-supplements" },
        { id: "p5", name: "Premium Shrimp & Prawn", path: "/products/shrimp-prawn-culture" },
        { id: "p6", name: "High-Grade Fish Seed", path: "/products/high-grade-fish-seed" },
        { id: "p7", name: "Ornamental Aquarium Fish", path: "/products/ornamental-aquarium-fish" },
        { id: "p8", name: "Organic Dried Fish (Shutki)", path: "/products/organic-dried-fish" },
      ],
    },
    {
      title: "Crops & Grains",
      slug: "rice",
      image: riceImg, // ক্যাটাগরি লেভেলে সরাসরি ছবি সেট করা হলো
      icon: <FaAppleAlt className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "p9", name: "Aromatic Rice", path: "/products/aromatic-rice", badge: "Fresh Harvest" },
        { id: "p10", name: "Organic Vegetables", path: "/products/organic-vegetables" },
        { id: "p11", name: "Seasonal Fruits", path: "/products/seasonal-fruits" },
        { id: "p12", name: "High-Yield Seeds", path: "/products/high-yield-seeds" },
        { id: "p13", name: "Organic Whole Wheat", path: "/products/organic-whole-wheat" },
        { id: "p14", name: "Premium Pulses & Lentils", path: "/products/premium-pulses" },
        { id: "p15", name: "Cold-Pressed Mustard Oil", path: "/products/pure-mustard-oil" },
        { id: "p16", name: "Organic Farm Spices", path: "/products/organic-farm-spices" },
      ],
    },

    {
      title: "Agro & Bio Products",
      slug: "agro",
      image: agroImg, // ক্যাটাগরি লেভেলে সরাসরি ছবি সেট করা হলো
      icon: <FaSeedling className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "p17", name: "100% Organic Products", path: "/products/100-organic-products", badge: "Pure" },
        { id: "p18", name: "Organic Fertilizers", path: "/products/organic-fertilizers" },
        { id: "p19", name: "Bio-Pesticides", path: "/products/bio-pesticides" },
        { id: "p20", name: "Farm Machinery & Tools", path: "/products/farm-machinery-tools" },
        { id: "p21", name: "Premium Bio-Compost", path: "/products/premium-bio-compost" },
        { id: "p22", name: "Pure Neem Oil Spray", path: "/products/pure-neem-oil" },
        { id: "p23", name: "Bio Plant Nutrients", path: "/products/bio-plant-nutrients" },
        { id: "p24", name: "Premium Coco Peat Blocks", path: "/products/premium-coco-peat" },
      ],
    },
  ];

  return (
    <div className="w-[980px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-12 gap-8 text-gray-800 animate-fadeIn">
      {/* Category Columns */}
      <div className="col-span-8 grid grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
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

            <ul className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
              {cat.items.map((sub, sIdx) => {
                const isWishlisted = wishlist.some((w) => w.id === sub.id);
                return (
                  <li key={sIdx} className="group relative flex items-center justify-between py-1.5 px-2 rounded-lg text-[13px] font-medium text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all duration-200">
                    <Link
                      to={sub.path}
                      onClick={closeMenu}
                      className="flex items-center gap-2 truncate flex-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#A3D13A] transition-colors shrink-0" />
                      <span className="truncate">{sub.name}</span>
                    </Link>

                    <div className="flex items-center gap-1.5 ml-2">
                      {sub.badge && !isWishlisted && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#A3D13A]/20 text-[#0B7A3E] shrink-0">
                          {sub.badge}
                        </span>
                      )}
                      
                      {/* Cart Action: 🟢 সরাসরি cat.image পাস করা হলো যা আপনার লোকাল অ্যাসেট ইমেজ লোড করবে */}
                      <button 
                        onClick={() => addToCart({ id: sub.id, name: sub.name, path: sub.path, image: cat.image })}
                        title="Add to Cart"
                        className="p-1 text-gray-400 hover:text-[#0B7A3E] rounded transition-colors cursor-pointer"
                      >
                        <FaShoppingCart className="text-xs" />
                      </button>

                      {/* Toggle Wishlist */}
                      <button 
                        onClick={() => toggleWishlist({ id: sub.id, name: sub.name, path: sub.path, image: cat.image })}
                        title="Add to My Wishlist"
                        className={`p-1 rounded transition-colors cursor-pointer ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                      >
                        <FaHeart className="text-xs" />
                      </button>

                      {/* Wish to Friend via WhatsApp */}
                      <button 
                        onClick={() => wishToFriend({ id: sub.id, name: sub.name, path: sub.path }, "whatsapp")}
                        title="Wish to a Friend"
                        className="p-1 text-gray-400 hover:text-green-500 rounded transition-colors cursor-pointer"
                      >
                        <FaWhatsapp className="text-xs" />
                      </button>
                    </div>
                  </li>
                );
              })}
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
