/*
===========================================
File Path      : Src/Components/Products/AgroProducts.jsx
Component Name : AgroProducts (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaWhatsapp } from 'react-icons/fa';
import { productsData } from '../../Data/Products';
import { useApp } from '../../Context/AppContext';

export default function AgroProducts() {
  const data = productsData.agroProducts;
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishToFriend, wishlist } = useApp();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product) => {
        const isWishlisted = wishlist.some((w) => w.id === product.id);
        return (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-xl text-xl shadow-sm">{product.icon}</div>
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-white text-gray-900 border border-gray-200 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">{product.badge}</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{product.desc}</p>
              </div>
            </div>
            
            {/* ACTION INTERACTIVE BUTTONS PANEL WITH FIXED ITEM IMAGE */}
            <div className="p-5 pt-0 space-y-3">
              <div className="flex items-center justify-center gap-2">
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart({ id: product.id, name: product.title, path: `/products/${product.slug}`, image: product.image })}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0b3c25] text-white text-xs font-bold hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  title="Add to Cart"
                >
                  <FaShoppingCart />
                  <span>Add Cart</span>
                </button>

                {/* Wishlist Toggle Button */}
                <button
                  onClick={() => toggleWishlist({ id: product.id, name: product.title, path: `/products/${product.slug}`, image: product.image })}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isWishlisted 
                      ? "bg-red-500 border-red-500 text-white" 
                      : "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500"
                  }`}
                  title="Toggle Wishlist"
                >
                  <FaHeart />
                </button>

                {/* Wish to Friend via WhatsApp Button */}
                <button
                  onClick={() => wishToFriend({ id: product.id, name: product.title, path: `/products/${product.slug}` }, "whatsapp")}
                  className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-green-500 hover:border-green-500 transition-all duration-300 cursor-pointer"
                  title="Wish to Friend via WhatsApp"
                >
                  <FaWhatsapp />
                </button>
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => navigate(`/products/${product.slug}`)}
                className="w-full text-center text-xs font-semibold text-gray-400 hover:text-[#0b3c25] transition-colors pt-1 cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
