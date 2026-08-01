/*
===========================================
File Path      : Src/Components/Navbar/SearchModal.jsx
Component Name : SearchModal
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes, FaFire, FaHistory } from "react-icons/fa";

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Popular Suggestions
  const popularSearches = [
    "Freshwater Fish",
    "Aromatic Rice",
    "Organic Fertilizer",
    "Biofloc Tank",
    "Vegetable Seeds",
  ];

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all">
        {/* Input Header */}
        <div className="relative flex items-center p-4 border-b border-gray-100">
          <FaSearch className="text-gray-400 text-lg ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, services, fish, crops..."
            className="w-full pl-4 pr-10 text-base font-medium text-gray-800 placeholder-gray-400 bg-transparent outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Popular Searches */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              <FaFire className="text-[#0B7A3E]" /> Popular Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-[#0B7A3E]/10 hover:text-[#0B7A3E] text-xs font-semibold text-gray-600 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links / Live Search Results Example */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-2">
              <span>Quick Category Links</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/products/fresh-fish"
                onClick={onClose}
                className="p-3 rounded-xl border border-gray-100 hover:border-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#0B7A3E]" />
                <span className="text-xs font-bold text-gray-700">Freshwater Fish</span>
              </Link>
              <Link
                to="/products/rice"
                onClick={onClose}
                className="p-3 rounded-xl border border-gray-100 hover:border-[#0B7A3E] hover:bg-[#0B7A3E]/5 transition-all flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#A3D13A]" />
                <span className="text-xs font-bold text-gray-700">Organic Crops & Rice</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 font-mono">ESC</kbd> to exit</span>
          <span className="text-[#0B7A3E] font-semibold">BAFAF Green Farm Search</span>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;