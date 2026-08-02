/*
===========================================
File Path      : Src/Components/Navbar/ServicesMegaMenu.jsx
Component Name : ServicesMegaMenu (Part 01 - Fixed Images)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { Link } from "react-router-dom";
import { 
  FaHandshake, 
  FaChevronRight, 
  FaHeadset, 
  FaUserGraduate,
  FaWater,
  FaTractor,
  FaShoppingCart,
  FaHeart,
  FaWhatsapp
} from "react-icons/fa";
import { useApp } from "@/Context/AppContext";

// 🟢 কার্ট পেজের ইমেজ ট্র্যাকিং ফিক্স করতে আপনার জেনুইন লোকাল অ্যাসেট ইমেজগুলো ইমপোর্ট করা হলো
import fishFarmingImg from "@/assets/Images/Services/fish-farming.jpg";
import riceProductionImg from "@/assets/Images/Services/rice-production.jpg";
import agroProductsImg from "@/assets/Images/Services/water-testing.jpg";

function ServicesMegaMenu({ closeMenu }) {
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();

  const serviceCategories = [
    {
      title: "Fisheries Consultancy",
      slug: "fisheries",
      image: fishFarmingImg, // সরাসরি ক্যাটাগরি লেভেলে ইমেজ অবজেক্ট ম্যাপ করা হলো
      icon: <FaWater className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "s1", name: "Pond Design & Construction", path: "/services/pond-design", badge: "Popular" },
        { id: "s2", name: "Water Quality Testing", path: "/services/water-testing" },
        { id: "s3", name: "Fish Health Management", path: "/services/fish-health" },
        { id: "s4", name: "Hatchery Management", path: "/services/hatchery-management" },
        { id: "s5", name: "Commercial Fish Farming", path: "/services/commercial-fish-farming" },
        { id: "s6", name: "Shrimp & Prawn Culture", path: "/services/shrimp-farming" },
        { id: "s7", name: "Aquaculture Logistics", path: "/services/aquaculture-logistics" },
        { id: "s8", name: "Feed Formulation & Nutrition", path: "/services/fish-feed-formulation" },
      ],
    },
    {
      title: "Agro & Farm Management",
      slug: "agro",
      image: riceProductionImg, // সরাসরি ক্যাটাগরি লেভেলে ইমেজ অবজেক্ট ম্যাপ করা হলো
      icon: <FaTractor className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "s9", name: "Soil Testing & Fertility", path: "/services/soil-testing", badge: "Essential" },
        { id: "s10", name: "Crop Advisory Services", path: "/services/crop-advisory" },
        { id: "s11", name: "Organic Farm Setup", path: "/services/organic-farm" },
        { id: "s12", name: "Smart Irrigation Systems", path: "/services/smart-irrigation" },
        { id: "s13", name: "High-Yield Rice Production", path: "/services/rice-production-yield" },
        { id: "s14", name: "Greenhouse & Polyhouse Setup", path: "/services/greenhouse-farming" },
        { id: "s15", name: "Post-Harvest Management", path: "/services/cold-storage-management" },
        { id: "s16", name: "Agro Supply & Export Guide", path: "/services/supply-export-logistics" },
      ],
    },

    {
      title: "Training & Tech Support",
      slug: "training",
      image: agroProductsImg, // সরাসরি ক্যাটাগরি লেভেলে ইমেজ অবজেক্ট ম্যাপ করা হলো
      icon: <FaUserGraduate className="text-[#0B7A3E] text-lg" />,
      items: [
        { id: "s17", name: "Farmers Training Program", path: "/services/farmers-training", badge: "Certified" },
        { id: "s18", name: "Biofloc & RAS Consultancy", path: "/services/biofloc-ras" },
        { id: "s19", name: "Farm Mechanization", path: "/services/farm-mechanization" },
        { id: "s20", name: "Agro Project Planning", path: "/services/project-planning" },
        { id: "s21", name: "IoT & Smart Farming Tech", path: "/services/smart-farming-iot" },
        { id: "s22", name: "Agro Entrepreneurship Guide", path: "/services/agro-entrepreneurship" },
        { id: "s23", name: "Integrated Farming Systems", path: "/services/integrated-farm-training" },
        { id: "s24", name: "Pest & Disease Control Lab", path: "/services/pest-disease-control" },
      ],
    },
  ];

  return (
    <div className="w-[980px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-12 gap-8 text-gray-800 animate-fadeIn">
      {/* Category Columns */}
      <div className="col-span-8 grid grid-cols-3 gap-6">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <Link 
              to={`/services?tab=${cat.slug}`}
              onClick={closeMenu}
              className="flex items-center gap-2 pb-2 border-b border-gray-100 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center">
                {cat.icon}
              </div>
              <h4 className="font-bold text-[14px] text-[#0B7A3E] whitespace-nowrap">
                {cat.title}
              </h4>
            </Link>

            <ul className="flex flex-col gap-1.5 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
              {cat.items.map((sub, sIdx) => {
                const isWishlisted = wishlist.some((w) => w.id === sub.id);
                return (
                  <li key={sIdx} className="group relative flex items-center justify-between py-1.5 px-2 rounded-lg text-[12px] font-semibold text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all duration-200">
                    <Link
                      to={sub.path}
                      onClick={closeMenu}
                      className="flex items-center gap-2 truncate flex-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#A3D13A] transition-colors shrink-0" />
                      <span className="truncate">{sub.name}</span>
                    </Link>

                    <div className="flex items-center gap-1 ml-2">
                      {sub.badge && !isWishlisted && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#A3D13A]/20 text-[#0B7A3E] shrink-0">
                          {sub.badge}
                        </span>
                      )}

                      {/* Add/Book Service: 🟢 সরাসরি cat.image পাস করা হলো যা আপনার লোকাল অ্যাসেট ইমেজ লোড করবে */}
                      <button 
                        onClick={() => addToCart({ id: sub.id, name: sub.name, path: sub.path, image: cat.image })}
                        title="Book Service"
                        className="p-1 text-gray-400 hover:text-[#0B7A3E] rounded transition-colors cursor-pointer"
                      >
                        <FaShoppingCart className="text-[11px]" />
                      </button>

                      {/* Toggle Wishlist */}
                      <button 
                        onClick={() => toggleWishlist({ id: sub.id, name: sub.name, path: sub.path, image: cat.image })}
                        title="Add to Wishlist"
                        className={`p-1 rounded transition-colors cursor-pointer ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                      >
                        <FaHeart className="text-[11px]" />
                      </button>

                      {/* Wish to Friend via WhatsApp */}
                      <button 
                        onClick={() => wishToFriend({ id: sub.id, name: sub.name, path: sub.path }, "whatsapp")}
                        title="Share with Friend"
                        className="p-1 text-gray-400 hover:text-green-500 rounded transition-colors cursor-pointer"
                      >
                        <FaWhatsapp className="text-[11px]" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Service Promo Card */}
      <div className="col-span-4 bg-gradient-to-br from-[#0B7A3E] to-[#064824] rounded-xl p-6 text-white flex flex-col justify-between relative overflow-hidden group">
        <FaHandshake className="absolute -right-6 -bottom-6 text-9xl text-white/10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-[#A3D13A] mb-3">
            <FaHeadset className="text-xs" /> Expert Consultation
          </div>
          <h3 className="text-xl font-bold mb-2 leading-snug">
            Need Expert Advice for Your Farm?
          </h3>
          <p className="text-xs text-white/80 leading-relaxed">
            Get personalized consultancy from certified fisheries and agro experts to double your farm productivity.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to="/services"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A3D13A] hover:text-white transition-colors"
          >
            Explore All Services
            <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesMegaMenu;
