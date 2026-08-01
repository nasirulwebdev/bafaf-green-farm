/*
===========================================
Component Name : ProductDetail Page
Project        : BAFAF Green Farm
File Path      : src/Pages/Home/ProductDetail.jsx
===========================================
*/

import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCheck, FaPhone, FaCartShopping } from "react-icons/fa6";
import HomeData from "../../Data/Home";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = HomeData;

  // URL-এর আইডি অনুযায়ী প্রোডাক্ট খুঁজে বের করা
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F4F7F4]">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h2>
        <Link to="/" className="px-6 py-2 bg-[#0B7A3E] text-white rounded-full text-xs font-bold shadow-md">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-28 bg-[#F4F7F4] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0B7A3E] mb-8 hover:underline"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        {/* PRODUCT DETAILS CARD */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-10">
          
          {/* PRODUCT IMAGE */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-[#A3D13A]/20 text-[#064824] text-[10px] font-bold uppercase rounded-full">
                Verified Product
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404040] mt-3 uppercase">
                {product.name}
              </h1>
              <p className="text-lg font-bold text-[#0B7A3E] mt-1">
                {product.price}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#404040] uppercase">Key Features:</h4>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                    <FaCheck className="text-[#0B7A3E]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="tel:+8801700000000"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0B7A3E] text-white text-xs font-bold hover:bg-[#085a2e] transition-colors shadow-md"
              >
                <FaPhone />
                <span>Order via Call</span>
              </a>
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#A3D13A] text-[#064824] text-xs font-bold hover:bg-[#92be32] transition-colors shadow-md"
              >
                <FaCartShopping />
                <span>Bulk Inquiry</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;