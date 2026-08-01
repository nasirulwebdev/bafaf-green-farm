/*
===========================================
Component Name : MobileMenu
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import NavbarMenu from "../../Data/Navbar";

function MobileMenu({ isOpen, setIsOpen }) {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false); // প্রোডাক্টের জন্য নতুন স্টেট

    const mobileServices = [
        { title: "Fisheries Consultancy", tab: "fisheries" },
        { title: "Agro & Farm Management", tab: "agro" },
        { title: "Training & Tech Support", tab: "training" }
    ];

    // ২৪টি প্রোডাক্টের সরাসরি নিজস্ব ডিটেইলস পেজের পাথ
    const mobileProducts = [
        { title: "Fish Culture & Fisheries", tab: "fisheries", items: [
            { name: "Freshwater Fish", slug: "freshwater-fish" },
            { name: "Live & Hatchery Fish", slug: "live-hatchery-fish" },
            { name: "Frozen & Export Quality", slug: "frozen-export-quality" },
            { name: "Feed & Supplements", slug: "feed-supplements" },
            { name: "Premium Shrimp & Prawn", slug: "shrimp-prawn-culture" },
            { name: "High-Grade Fish Seed", slug: "high-grade-fish-seed" },
            { name: "Ornamental Aquarium Fish", slug: "ornamental-aquarium-fish" },
            { name: "Organic Dried Fish (Shutki)", slug: "organic-dried-fish" }
        ]},
        { title: "Crops & Grains", tab: "rice", items: [
            { name: "Aromatic Rice", slug: "aromatic-rice" },
            { name: "Organic Vegetables", slug: "organic-vegetables" },
            { name: "Seasonal Fruits", slug: "seasonal-fruits" },
            { name: "High-Yield Seeds", slug: "high-yield-seeds" },
            { name: "Organic Whole Wheat", slug: "organic-whole-wheat" },
            { name: "Premium Pulses & Lentils", slug: "premium-pulses" },
            { name: "Cold-Pressed Mustard Oil", slug: "pure-mustard-oil" },
            { name: "Organic Farm Spices", slug: "organic-farm-spices" }
        ]},
        { title: "Agro & Bio Products", tab: "agro", items: [
            { name: "100% Organic Products", slug: "100-organic-products" },
            { name: "Organic Fertilizers", slug: "organic-fertilizers" },
            { name: "Bio-Pesticides", slug: "bio-pesticides" },
            { name: "Farm Machinery & Tools", slug: "farm-machinery-tools" },
            { name: "Premium Bio-Compost", slug: "premium-bio-compost" },
            { name: "Pure Neem Oil Spray", slug: "pure-neem-oil" },
            { name: "Bio Plant Nutrients", slug: "bio-plant-nutrients" },
            { name: "Premium Coco Peat Blocks", slug: "premium-coco-peat" }
        ]}
    ];

    return (
        <>
            {/* Overlay */}
            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} />

            {/* Drawer */}
            <aside className={`fixed top-0 left-0 w-[320px] max-w-[85%] h-screen bg-white shadow-2xl z-[999] transition-all duration-300 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* Header */}
                <div className="h-[90px] px-6 flex items-center justify-between border-b">
                    <h2 className="text-xl font-bold text-primary">BAFAF</h2>
                    <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"><IoClose size={26} /></button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto">
                    <ul className="py-4">
                        {NavbarMenu.map((item) => {
                            const isServices = item.title.toLowerCase().includes("service");
                            const isProducts = item.title.toLowerCase().includes("product");

                            // ১. Our Services ড্রপডাউন
                            if (isServices) {
                                return (
                                    <li key={item.id} className="border-b border-gray-100">
                                        <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full px-6 py-4 flex items-center justify-between text-[16px] font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300">
                                            <span>{item.title}</span>
                                            <FaChevronDown className={`text-xs transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 ${servicesOpen ? 'max-h-[200px] border-t border-gray-50' : 'max-h-0'}`}>
                                            <ul className="pl-8 py-2 flex flex-col gap-1">
                                                {mobileServices.map((sub, sIdx) => (
                                                    <li key={sIdx}>
                                                        <Link to={`/services?tab=${sub.tab}`} onClick={() => setIsOpen(false)} className="block py-2.5 text-[14px] font-medium text-gray-600 hover:text-primary transition-colors">• {sub.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }

                            // ২. Our Products ড্রপডাউন (নতুন যুক্ত করা হয়েছে)
                            if (isProducts) {
                                return (
                                    <li key={item.id} className="border-b border-gray-100">
                                        <button onClick={() => setProductsOpen(!productsOpen)} className="w-full px-6 py-4 flex items-center justify-between text-[16px] font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300">
                                            <span>{item.title}</span>
                                            <FaChevronDown className={`text-xs transition-transform duration-300 ${productsOpen ? 'rotate-180 text-primary' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 ${productsOpen ? 'max-h-[450px] overflow-y-auto border-t border-gray-50' : 'max-h-0'}`}>
                                            <ul className="pl-6 py-3 flex flex-col gap-3">
                                                {mobileProducts.map((cat, cIdx) => (
                                                    <div key={cIdx} className="flex flex-col gap-1">
                                                        <Link to={`/products?tab=${cat.tab}`} onClick={() => setIsOpen(false)} className="text-[13px] font-bold text-primary px-2 py-0.5">• {cat.title}</Link>
                                                        <ul className="pl-4 flex flex-col gap-1 text-[13px] font-medium text-gray-500">
                                                            {cat.items.map((subItem, sIdx) => (
                                                                <li key={sIdx}>
                                                                    <Link to={`/products/${subItem.slug}`} onClick={() => setIsOpen(false)} className="block py-1 hover:text-primary transition-colors">  {subItem.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }

                            // ৩. অন্য সাধারণ মেনু আইটেম
                            return (
                                <li key={item.id} className="border-b border-gray-100">
                                    <NavLink to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `px-6 py-4 flex items-center justify-between text-[16px] font-medium transition-all duration-300 ${isActive ? "text-primary bg-green-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"}`}>
                                        {item.title}
                                        {item.dropdown && <FaChevronDown className="text-xs" />}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom CTA */}
                <div className="p-6 border-t">
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center rounded-full bg-primary py-3 font-semibold text-white hover:bg-[#086633] transition-all duration-300">Call For Inquiry</NavLink>
                </div>
            </aside>
        </>
    );
}

export default MobileMenu;
