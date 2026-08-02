// File Path: Src/Components/Navbar/MobileMenu.jsx
// PART 01: React Portal Setup, Component Initialization & 24 Services Data Array

import { useState } from "react";
import { createPortal } from "react-dom"; // 🟢 NEW IMPORT: রিজিড ওভারল্যাপ বাগ দূর করতে পোর্টাল ইমপোর্ট করা হলো
import { NavLink, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import NavbarMenu from "../../Data/Navbar";

function MobileMenu({ isOpen, setIsOpen }) {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [activeServiceTab, setActiveServiceTab] = useState(null); 
    const [activeProductTab, setActiveProductTab] = useState(null); 

    const mobileServices = [
        { 
            title: "Fisheries Consultancy", 
            tab: "fisheries", 
            items: [
                { name: "Pond Design & Construction", slug: "pond-design-construction" },
                { name: "Water Quality Testing", slug: "water-quality-testing" },
                { name: "Fish Health Management", slug: "fish-health-management" },
                { name: "Hatchery Management", slug: "hatchery-management" },
                { name: "Commercial Fish Farming", slug: "commercial-fish-farming" },
                { name: "Shrimp & Prawn Culture", slug: "shrimp-prawn-culture" },
                { name: "Aquaculture Logistics", slug: "aquaculture-logistics" },
                { name: "Feed Formulation & Nutrition", slug: "feed-formulation" }
            ]
        },
        { 
            title: "Agro & Farm Management", 
            tab: "agro", 
            items: [
                { name: "Soil Testing & Fertility", slug: "soil-testing" },
                { name: "Crop Advisory Services", slug: "crop-advisory" },
                { name: "Organic Farm Setup", slug: "organic-farm-setup" },
                { name: "Smart Irrigation Systems", slug: "smart-irrigation" },
                { name: "High-Yield Rice Production", slug: "rice-production" },
                { name: "Greenhouse & Polyhouse", slug: "greenhouse-farming" },
                { name: "Post-Harvest Management", slug: "post-harvest" },
                { name: "Agro Supply & Export", slug: "agro-supply-export"} 
            ]
        },
        { 
            title: "Training & Tech Support", 
            tab: "training", 
            items: [
                { name: "Farmers Training Program", slug: "farmers-training" },
                { name: "Biofloc & RAS Consultation", slug: "biofloc-ras" },
                { name: "Farm Mechanization", slug: "farm-mechanization" },
                { name: "Agro Project Planning", slug: "agro-project-planning" },
                { name: "IoT & Smart Farming Tech", slug: "iot-smart-farming" },
                { name: "Agro Entrepreneurship", slug: "agro-entrepreneurship" },
                { name: "Integrated Farming Systems", slug: "integrated-farming" },
                { name: "Pest & Disease Control", slug: "pest-disease-control" }
            ]
        }
    ];

    const mobileProducts = [
        { 
            title: "Fish Culture & Fisheries", 
            tab: "fisheries", 
            items: [
                { name: "Freshwater Fish", slug: "freshwater-fish" },
                { name: "Live & Hatchery Fish", slug: "live-hatchery-fish" },
                { name: "Frozen & Export Quality", slug: "frozen-export-quality" },
                { name: "Feed & Supplements", slug: "feed-supplements" },
                { name: "Premium Shrimp & Prawn", slug: "shrimp-prawn-culture" },
                { name: "High-Grade Fish Seed", slug: "high-grade-fish-seed" },
                { name: "Ornamental Aquarium Fish", slug: "ornamental-aquarium-fish" },
                { name: "Organic Dried Fish (Shutki)", slug: "organic-dried-fish" }
            ]
        },
        { 
            title: "Crops & Grains", 
            tab: "rice", 
            items: [
                { name: "Aromatic Rice", slug: "aromatic-rice" },
                { name: "Organic Vegetables", slug: "organic-vegetables" },
                { name: "Seasonal Fruits", slug: "seasonal-fruits" },
                { name: "High-Yield Seeds", slug: "high-yield-seeds" },
                { name: "Organic Whole Wheat", slug: "organic-whole-wheat" },
                { name: "Premium Pulses & Lentils", slug: "premium-pulses" },
                { name: "Cold-Pressed Mustard Oil", slug: "pure-mustard-oil" },
                { name: "Organic Farm Spices", slug: "organic-farm-spices" }
            ]
        },
        { 
            title: "Agro & Bio Products", 
            tab: "agro", 
            items: [
                { name: "100% Organic Products", slug: "100-organic-products" },
                { name: "Organic Fertilizers", slug: "organic-fertilizers" },
                { name: "Bio-Pesticides", slug: "bio-pesticides" },
                { name: "Farm Machinery & Tools", slug: "farm-machinery-tools" },
                { name: "Premium Bio-Compost", slug: "premium-bio-compost" },
                { name: "Pure Neem Oil Spray", slug: "pure-neem-oil" },
                { name: "Bio Plant Nutrients", slug: "bio-plant-nutrients" },
                { name: "Premium Coco Peat Blocks", slug: "premium-coco-peat" }
            ]
        }
    ];

    const toggleServiceTab = (index) => {
        setActiveServiceTab(activeServiceTab === index ? null : index);
    };

    const toggleProductTab = (index) => {
        setActiveProductTab(activeProductTab === index ? null : index);
    };

    return createPortal(
        <>
            {/* Overlay Grid Stack - Fixed with absolute top priority */}
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
                    isOpen ? "opacity-100 visible z-[99998]" : "opacity-0 invisible z-[-1]"
                }`} 
            />

            {/* Sidebar Drawer Container - Completely liberated via document.body portal */}
            <aside 
                className={`fixed top-0 left-0 w-[300px] max-w-[85%] h-full min-h-screen bg-white shadow-2xl transition-all duration-300 flex flex-col ${
                    isOpen ? "translate-x-0 z-[99999]" : "-translate-x-full"
                }`}
            >
                {/* Drawer Branding Header */}
                <div className="h-[75px] px-5 flex items-center justify-between border-b border-gray-100 shrink-0 bg-gray-50">
                    <h2 className="text-xl font-black text-[#0B7A3E] tracking-wider">BAFAF</h2>
                    <button 
                        type="button"
                        onClick={() => setIsOpen(false)} 
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-white border shadow-sm hover:bg-gray-100 text-gray-700 transition-colors"
                    >
                        <IoClose size={22} />
                    </button>
                </div>

                {/* Scrollable Navigation Menu Box */}
                <nav className="flex-1 overflow-y-auto overflow-x-hidden py-2 bg-white">
                    <ul className="flex flex-col">
                        {NavbarMenu.map((item) => {
                            const isServices = item.title.toLowerCase().includes("service");
                            const isProducts = item.title.toLowerCase().includes("product");

                            // ১. Our Services ডায়নামিক ড্রপডাউন (Linked With Exact Route)
                            if (isServices) {
                                return (
                                    <li key={item.id} className="border-b border-gray-100">
                                        <button 
                                            onClick={() => setServicesOpen(!servicesOpen)} 
                                            className="w-full px-5 py-3.5 flex items-center justify-between text-[15px] font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                                        >
                                            <span>{item.title}</span>
                                            <FaChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50/70 ${servicesOpen ? 'max-h-[1500px] border-t overflow-y-auto' : 'max-h-0'}`}>
                                            <ul className="py-2 px-3 flex flex-col gap-2">
                                                {mobileServices.map((cat, cIdx) => (
                                                    <li key={cIdx} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                                                        <button 
                                                            type="button"
                                                            onClick={() => toggleServiceTab(cIdx)}
                                                            className="w-full px-4 py-2.5 flex items-center justify-between text-[13px] font-bold text-gray-700 bg-gray-50/50"
                                                        >
                                                            <span>{cat.title}</span>
                                                            <FaChevronDown size={10} className={`transition-transform duration-200 ${activeServiceTab === cIdx ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                                        </button>
                                                        <div className={`overflow-hidden transition-all duration-200 ${activeServiceTab === cIdx ? 'max-h-[400px]' : 'max-h-0'}`}>
                                                            <ul className="p-2 grid grid-cols-1 gap-1 bg-white border-t border-gray-50">
                                                                {cat.items.map((srv, sIdx) => (
                                                                    <li key={sIdx}>
                                                                        <Link 
                                                                            to={`/services/${srv.slug}`} 
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="block px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-all"
                                                                        >
                                                                            {srv.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }

                            // ২. Our Products ড্রপডাউন (Fixed Nested Accordion for 24 Items)
                            if (isProducts) {
                                return (
                                    <li key={item.id} className="border-b border-gray-100">
                                        <button 
                                            onClick={() => setProductsOpen(!productsOpen)} 
                                            className="w-full px-5 py-3.5 flex items-center justify-between text-[15px] font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                                        >
                                            <span>{item.title}</span>
                                            <FaChevronDown size={11} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50/70 ${productsOpen ? 'max-h-[1500px] border-t overflow-y-auto' : 'max-h-0'}`}>
                                            <ul className="py-2 px-3 flex flex-col gap-2">
                                                {mobileProducts.map((cat, cIdx) => (
                                                    <li key={cIdx} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                                                        <button 
                                                            type="button"
                                                            onClick={() => toggleProductTab(cIdx)}
                                                            className="w-full px-4 py-2.5 flex items-center justify-between text-[13px] font-bold text-gray-700 bg-gray-50/50"
                                                        >
                                                            <span>{cat.title}</span>
                                                            <FaChevronDown size={10} className={`transition-transform duration-200 ${activeProductTab === cIdx ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                                        </button>
                                                        <div className={`overflow-hidden transition-all duration-200 ${activeProductTab === cIdx ? 'max-h-[400px]' : 'max-h-0'}`}>
                                                            <ul className="p-2 grid grid-cols-1 gap-1 bg-white border-t border-gray-50">
                                                                {cat.items.map((prod, pIdx) => (
                                                                    <li key={pIdx}>
                                                                        <Link 
                                                                            to={`/products/${prod.slug}`} 
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="block px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-all"
                                                                        >
                                                                            {prod.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }

                            // ৩. অন্য সাধারণ মেনু আইটেম (Home, About, Gallery, FAQ, Contact ইত্যাদি)
                            return (
                                <li key={item.id} className="border-b border-gray-100">
                                    <NavLink 
                                        to={item.path} 
                                        onClick={() => setIsOpen(false)} 
                                        className={({ isActive }) => 
                                            `px-5 py-3.5 flex items-center justify-between text-[15px] font-medium transition-all ${
                                                isActive ? "text-[#0B7A3E] bg-green-50/50 font-bold border-l-4 border-[#0B7A3E]" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                            }`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom Call For Inquiry CTA Layout */}
                <div className="p-4 border-t bg-gray-50 shrink-0">
                    <NavLink 
                        to="/contact" 
                        onClick={() => setIsOpen(false)} 
                        className="w-full flex items-center justify-center rounded-xl bg-[#0B7A3E] py-3 text-[14px] font-bold text-white hover:bg-[#064824] shadow-md shadow-emerald-900/10 transition-all duration-300"
                    >
                        Call For Inquiry
                    </NavLink>
                </div>
            </aside>
        </>,
        document.body // 🟢 PORTAL TARGET: কোডটিকে সরাসরি ব্রাউজারের মেইন বডি ট্যাগে ইঞ্জেক্ট করা হলো
    );
}

export default MobileMenu;
