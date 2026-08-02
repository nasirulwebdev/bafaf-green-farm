// Location: Src/Pages/Dashboard/ProfileDashboard.jsx
// Part 1: Navigation Actions and State Fix

// Location: Src/Pages/Dashboard/ProfileDashboard.jsx
// Part 1: Imports and Enhanced Location Hooks

import React, { useState, useEffect } from 'react'; // 🟢 useEffect যুক্ত করা হলো
import { useNavigate, useLocation } from 'react-router-dom'; // 🟢 useLocation যুক্ত করা হলো
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut, 
  Lock, 
  Shield, 
  Camera, 
  Mail, 
  CheckCircle,
  ShoppingBag as StoreIcon
} from 'lucide-react';

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🟢 টপবার ড্রপডাউন থেকে আসা স্টেট অবজেক্ট ট্র্যাক করার জন্য
  
  // Controls internal view swapping between 'profile', 'wishlist', and 'settings'
  const [activeTab, setActiveTab] = useState('profile'); 

  // 🟢 এই লিসেনার মডিউলটি টপবার ড্রপডাউনের রিয়েল-টাইম লাইভ ক্লিক ইভেন্ট সিঙ্ক করবে
  useEffect(() => {
    if (location.state && location.state.targetTab) {
      setActiveTab(location.state.targetTab); // টপবার থেকে পাঠানো সুনির্দিষ্ট ট্যাব একটিভ হবে
    }
  }, [location.state]);
  // Part 2: User States and Action Handlers

  // User Profile information
  const [userData, setUserData] = useState({
    name: 'MD NASIRUL ISLAM',
    email: 'nasirul.islam@example.com',
    initials: 'JD',
    phone: '+880 1712-345678',
    joiningDate: 'August 2026'
  });

  // International Best Practice: Redirects to Products & Services page
  const handleMyOrdersRedirect = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate('/products'); // ড্রপডাউনের সাথে মিল রেখে সরাসরি প্রোডাক্ট+সার্ভিস পেজে রিডাইরেক্ট করবে
  };

  const handleLogOut = () => {
    console.log("Logged out cleanly");
    navigate('/login');
  };

    // Part 2: Premium Sidebar Layout with Tab Anchors
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
        
        {/* Sidebar Container */}
        <div className="bg-slate-900 text-slate-100 p-6 flex flex-col justify-between border-r border-slate-800">
          <div>
            {/* Header Identity from Image */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-800">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg text-white tracking-wider shadow-inner">
                {userData.initials}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-semibold text-sm truncate text-white uppercase">{userData.name}</h4>
                <p className="text-xs text-slate-400 truncate">{userData.email}</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              <button 
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'profile' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <User size={18} />
                <span>My Profile</span>
              </button>

              <button 
                type="button"
                onClick={handleMyOrdersRedirect}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800 transition-all"
              >
                <ShoppingBag size={18} />
                <span>My Orders</span>
              </button>

              <button 
                type="button"
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'wishlist' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <Heart size={18} />
                <span>Wishlist</span>
              </button>

              <button 
                type="button"
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'settings' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <Settings size={18} />
                <span>Account Settings</span>
              </button>
            </nav>
          </div>

          {/* Action Log Out */}
          <button 
            type="button"
            onClick={handleLogOut}
            className="w-full flex items-center space-x-3 px-4 py-3 mt-8 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all border border-rose-500/20"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
                {/* Part 3: Active Content Rendering */}
        <div className="col-span-1 md:col-span-3 p-8 bg-slate-50/50">
          
          {/* PROFILE VIEW */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight">My Profile</h2>
                  <p className="text-sm text-slate-500">Manage your profile details and dynamic personal settings.</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  <CheckCircle size={12} className="mr-1" /> Verified Member
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-3xl font-extrabold text-white shadow-md">
                    {userData.initials}
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-md border border-slate-100 text-slate-600 hover:text-emerald-600">
                    <Camera size={14} />
                  </button>
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-lg font-bold text-slate-800">{userData.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center justify-center sm:justify-start">
                    <Mail size={14} className="mr-1.5 text-slate-400" /> {userData.email}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Personal Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500">Full Name</label>
                    <input type="text" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500">Phone Number</label>
                    <input type="text" value={userData.phone} onChange={(e) => setUserData({...userData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WISHLIST VIEW */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">My Wishlist</h2>
                <p className="text-sm text-slate-500">Products you've saved to purchase later.</p>
              </div>
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
                  <Heart size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Your Wishlist is Empty</h4>
                <button onClick={handleMyOrdersRedirect} className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium shadow-md flex items-center space-x-2">
                  <StoreIcon size={16} />
                  <span>Start Shopping</span>
                </button>
              </div>
            </div>
          )}

          {/* ACCOUNT SETTINGS VIEW (FIXED) */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Account Settings</h2>
                <p className="text-sm text-slate-500">Manage security credentials and reset passwords safely.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Lock size={18} className="text-emerald-600" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider">Update Password</h4>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500">New Password</label>
                      <input type="password" placeholder="Min. 8 characters" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-500">Confirm Password</label>
                      <input type="password" placeholder="Repeat new password" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                    </div>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button type="button" className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium shadow-md">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Shield size={18} className="text-emerald-600" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider">Security Modules</h4>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h5 className="text-sm font-medium text-slate-800">Two-Factor Authentication (2FA)</h5>
                    <p className="text-xs text-slate-400">Secure your session with an extra verification layer.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
