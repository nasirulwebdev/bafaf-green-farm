/*
===========================================
File Path      : Src/Components/Navbar/ServicesMegaMenu.jsx
Component Name : ServicesMegaMenu
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
  FaTractor
} from "react-icons/fa";

function ServicesMegaMenu({ closeMenu }) {
  // আগের প্রজেক্ট আর্কিটেকচার বহাল রেখে ৩টি ক্যাটাগরির অধীনে মোট ২৪টি ডাইনামিক ডিটেইলস পাথ যুক্ত করা হলো
  const serviceCategories = [
    {
      title: "Fisheries Consultancy",
      slug: "fisheries",
      icon: <FaWater className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "Pond Design & Construction", path: "/services/pond-design", badge: "Popular" },
        { name: "Water Quality Testing", path: "/services/water-testing" },
        { name: "Fish Health Management", path: "/services/fish-health" },
        { name: "Hatchery Management", path: "/services/hatchery-management" },
        { name: "Commercial Fish Farming", path: "/services/commercial-fish-farming" },
        { name: "Shrimp & Prawn Culture", path: "/services/shrimp-farming" },
        { name: "Aquaculture Logistics", path: "/services/aquaculture-logistics" },
        { name: "Feed Formulation & Nutrition", path: "/services/fish-feed-formulation" },
      ],
    },
    {
      title: "Agro & Farm Management",
      slug: "agro",
      icon: <FaTractor className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "Soil Testing & Fertility", path: "/services/soil-testing", badge: "Essential" },
        { name: "Crop Advisory Services", path: "/services/crop-advisory" },
        { name: "Organic Farm Setup", path: "/services/organic-farm" },
        { name: "Smart Irrigation Systems", path: "/services/smart-irrigation" },
        { name: "High-Yield Rice Production", path: "/services/rice-production-yield" },
        { name: "Greenhouse & Polyhouse Setup", path: "/services/greenhouse-farming" },
        { name: "Post-Harvest Management", path: "/services/cold-storage-management" },
        { name: "Agro Supply & Export Guide", path: "/services/supply-export-logistics" },
      ],
    },
    {
      title: "Training & Tech Support",
      slug: "training",
      icon: <FaUserGraduate className="text-[#0B7A3E] text-lg" />,
      items: [
        { name: "Farmers Training Program", path: "/services/farmers-training", badge: "Certified" },
        { name: "Biofloc & RAS Consultancy", path: "/services/biofloc-ras" },
        { name: "Farm Mechanization", path: "/services/farm-mechanization" },
        { name: "Agro Project Planning", path: "/services/project-planning" },
        { name: "IoT & Smart Farming Tech", path: "/services/smart-farming-iot" },
        { name: "Agro Entrepreneurship Guide", path: "/services/agro-entrepreneurship" },
        { name: "Integrated Farming Systems", path: "/services/integrated-farm-training" },
        { name: "Pest & Disease Control Lab", path: "/services/pest-disease-control" },
      ],
    },
  ];

  return (
    <div className="w-[980px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-12 gap-8 text-gray-800 animate-fadeIn">
      {/* Category Columns */}
      <div className="col-span-8 grid grid-cols-3 gap-6">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {/* Category Header: এখানে ক্লিক করলে মেইন সার্ভিস পেজে গিয়ে সেই নির্দিষ্ট ট্যাব অ্যাক্টিভ হবে */}
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

            {/* Sub Items: ২৪টি ডেটা কলামের উচ্চতা ঠিক রাখতে স্ক্রোলবার অ্যাড করা হলো */}
            <ul className="flex flex-col gap-1.5 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
              {cat.items.map((sub, sIdx) => (
                <li key={sIdx}>
                  <Link
                    to={sub.path}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-[12px] font-semibold text-gray-600 hover:text-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all duration-200"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#A3D13A] transition-colors shrink-0" />
                      <span className="truncate">{sub.name}</span>
                    </span>

                    {sub.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#A3D13A]/20 text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-colors shrink-0">
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
