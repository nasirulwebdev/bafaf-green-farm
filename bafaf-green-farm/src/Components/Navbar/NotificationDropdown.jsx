/*
===========================================
File Path      : Src/Components/Navbar/NotificationDropdown.jsx
Component Name : NotificationDropdown
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCheckCircle, FaTruck, FaTag, FaTimes } from "react-icons/fa";

const sampleNotifications = [
  {
    id: 1,
    title: "Order Shipped!",
    message: "Your order #BAFAF-8923 has been shipped.",
    time: "10 mins ago",
    unread: true,
    icon: <FaTruck className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Special Offer!",
    message: "Get 15% Off on Fresh Organic Vegetables today.",
    time: "2 hours ago",
    unread: true,
    icon: <FaTag className="text-[#0B7A3E]" />,
  },
  {
    id: 3,
    title: "Payment Successful",
    message: "Payment for order #BAFAF-8810 confirmed.",
    time: "1 day ago",
    unread: false,
    icon: <FaCheckCircle className="text-green-500" />,
  },
];

function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
        aria-label="Notifications"
      >
        <FaBell className="text-xl" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#A3D13A] text-[#0B7A3E] text-[10px] font-black flex items-center justify-center border-2 border-[#0B7A3E]">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-fadeIn text-gray-800">
          {/* Top Bar */}
          <div className="px-4 pb-2 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-gray-800">Notifications</h4>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#0B7A3E]/10 text-[#0B7A3E] text-[10px] font-bold">
                  {unreadCount} New
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="text-[11px] font-semibold text-[#0B7A3E] hover:underline cursor-pointer"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
            {notifications.length > 0 ? (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                    item.unread ? "bg-[#0B7A3E]/5" : ""
                  }`}
                >
                  <div className="p-2 rounded-full bg-white shadow-sm border border-gray-100 text-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-gray-800">{item.title}</h5>
                      <span className="text-[10px] text-gray-400">{item.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-gray-400">
                No notifications found.
              </div>
            )}
          </div>

          {/* Footer Link */}
          <div className="pt-2 px-4 border-t border-gray-100 text-center">
            <Link
              to="/notifications"
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold text-[#0B7A3E] hover:underline"
            >
              View All Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;