/*
===========================================
File Path      : Src/Pages/Cart/CartDetails.jsx
Component Name : CartDetails (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaTrashAlt, 
  FaArrowLeft, 
  FaShoppingBag, 
  FaShieldAlt, 
  FaTruck, 
  FaSyncAlt, 
  FaPlus, 
  FaMinus,
  FaTicketAlt
} from "react-icons/fa";
import { useApp } from "@/Context/AppContext";

export default function CartDetails() {
  const { cart, removeFromCart, addToCart, setCart } = useApp();
  const navigate = useNavigate();

  // ১. আইটেমের সংখ্যা কমানোর কাস্টম লজিক
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 } 
            : cartItem
        )
      );
    } else {
      removeFromCart(item.id);
    }
  };

  // ২. কার্টের সাবটোটাল হিসাব করার অটোমেটিক ক্যালকুলেশন (৳/BDT কারেন্সি)
  // নোট: যদি আপনার ডাটায় প্রাইস না থাকে, ইন্টারন্যাশনাল লেআউটের জন্য একটি স্ট্যান্ডার্ড বেস প্রাইস (যেমন: ৳৫০০) ধরা হয়েছে
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price || 500) * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 120 : 0; // ৳১২০ স্ট্যান্ডার্ড হোম ডেলিভারি চার্জ
  const total = subtotal + shipping;

  // ১. কার্ট সম্পূর্ণ খালি থাকলে যে প্রিমিয়াম স্ক্রিনটি শো করবে
  if (cart.length === 0) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-[#0B7A3E]/10 text-[#0B7A3E] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <FaShoppingBag className="text-4xl" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-950 mb-3 tracking-wide uppercase">Your Shopping Cart is Empty</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Sourced with care, chemical-free and packed with natural goodness is waiting for you. Let's add some fresh items!
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B7A3E] text-white font-bold text-sm hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 shadow-md hover:scale-105 uppercase tracking-wider"
        >
          <FaArrowLeft className="text-xs" /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/50 min-h-screen py-12 md:py-16 text-gray-800 font-sans antialiased">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200/60 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wide">
              Shopping <span className="text-[#0B7A3E]">Cart</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
              Review your fresh farm selections before checking out.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B7A3E] hover:text-[#A3D13A] transition-colors self-start md:self-auto group"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* MAIN CART GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: SHOPPING ITEMS LIST TABLE */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-4">
                    <th className="pb-4 font-extrabold">Product Details</th>
                    <th className="pb-4 font-extrabold text-center">Price</th>
                    <th className="pb-4 font-extrabold text-center">Quantity</th>
                    <th className="pb-4 font-extrabold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100/70">
                  {cart.map((item) => {
                    const itemPrice = item.price || 500;
                    const defaultImg = "https://unsplash.com";
                    return (
                      <tr key={item.id} className="group">
                        {/* Column 1: Info & Image */}
                        <td className="py-5 pr-4 flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-gray-50 relative">
                            <img 
                              src={item.image || defaultImg} 
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="truncate max-w-[200px] sm:max-w-xs">
                            <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#0B7A3E] transition-colors truncate uppercase tracking-wide">
                              {item.name}
                            </h3>
                            <p className="text-[11px] text-gray-400 mt-0.5 font-semibold">BAFAF Green Premium</p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[11px] font-bold text-red-400 hover:text-red-600 transition-colors flex items-center gap-1 mt-2 cursor-pointer"
                              title="Remove item"
                            >
                              <FaTrashAlt className="text-[9px]" /> <span>Remove</span>
                            </button>
                          </div>
                        </td>

                        {/* Column 2: Price */}
                        <td className="py-5 px-2 text-center text-sm font-bold text-gray-700 whitespace-nowrap">
                          ৳{itemPrice}
                        </td>

                        {/* Column 3: Quantity Controls */}
                        <td className="py-5 px-2">
                          <div className="flex items-center justify-center mx-auto border border-gray-200 rounded-xl max-w-[100px] h-9 p-1 bg-gray-50/50">
                            <button
                              onClick={() => handleDecreaseQuantity(item)}
                              className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                              title="Decrease"
                            >
                              <FaMinus className="text-[10px]" />
                            </button>
                            <span className="flex-1 text-center text-xs font-extrabold text-gray-900 px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="p-1.5 text-gray-400 hover:text-[#0B7A3E] rounded-lg transition-colors cursor-pointer"
                              title="Increase"
                            >
                              <FaPlus className="text-[10px]" />
                            </button>
                          </div>
                        </td>

                        {/* Column 4: Total Price */}
                        <td className="py-5 pl-2 text-right text-sm font-black text-gray-900 whitespace-nowrap">
                          ৳{itemPrice * item.quantity}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY CARD (INTERNATIONAL LAYOUT) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-black text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-4 mb-4">
                Order Summary
              </h2>

              {/* Promo Coupon Code Input */}
              <div className="mb-6">
                <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Have a Promo Code?
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <FaTicketAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <input 
                      type="text" 
                      placeholder="Enter Coupon" 
                      className="w-full h-11 pl-9 pr-3 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#0B7A3E] bg-gray-50/30 transition-colors"
                    />
                  </div>
                  <button 
                    type="button"
                    className="h-11 px-4 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-[#0B7A3E] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Calculation Breakdowns */}
              <div className="space-y-3 border-b border-gray-100 pb-4 mb-4 text-xs font-bold text-gray-500">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Cart Subtotal</span>
                  <span className="text-gray-900 font-extrabold">৳{subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Eco Shipping Charge</span>
                  <span className="text-gray-900 font-extrabold">৳{shipping}</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span className="font-semibold">Coupon Discount</span>
                  <span className="font-extrabold">-৳0</span>
                </div>
              </div>

              {/* Final Estimated Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-black text-gray-900 uppercase tracking-wide">Total Estimated</span>
                <span className="text-xl font-black text-[#0B7A3E] tracking-tight">৳{total}</span>
              </div>

              {/* Secure Checkout Button */}
              <button
                onClick={() => console.log("Redirecting to Shipping/Payment Setup...")}
                className="w-full h-12 rounded-xl bg-[#0B7A3E] text-white text-sm font-black hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 shadow-md hover:scale-102 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <span>Proceed To Checkout</span>
              </button>
            </div>

            {/* INTERNATIONAL TRUST BADGES */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-green-50 text-[#0B7A3E] shrink-0 mt-0.5">
                  <FaShieldAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">100% Secure Checkout</h4>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5 leading-relaxed">Your transactions are guarded with bank-grade SSL data encryption layers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                <div className="p-2 rounded-xl bg-green-50 text-[#0B7A3E] shrink-0 mt-0.5">
                  <FaTruck className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">Temperature Controlled Delivery</h4>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5 leading-relaxed">Dedicated active cooling vans to lock in ultimate direct farm freshness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                <div className="p-2 rounded-xl bg-green-50 text-[#0B7A3E] shrink-0 mt-0.5">
                  <FaSyncAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">BAFAF Trust Assurance</h4>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5 leading-relaxed">Hassle-free exchange policy if organic parameters don't match criteria.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
