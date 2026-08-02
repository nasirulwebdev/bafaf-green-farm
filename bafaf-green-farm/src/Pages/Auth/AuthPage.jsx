/*
===========================================
File Path      : Src/Pages/Auth/AuthPage.jsx
Component Name : AuthPage (Part 01)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaRegEye, 
  FaRegEyeSlash, 
  FaSignInAlt, 
  FaUserPlus,
  FaLeaf,
  FaArrowLeft
} from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext"; // আপনার লাইভ ফায়ারবেস অথ কন্টেক্সট

export default function AuthPage() {
  const navigate = useNavigate();
  const { login, register, loginWithGoogle } = useAuth(); // গুগল লগইন মেথড কন্টেক্সট থেকে আনা হলো

  // ১. লগইন এবং সাইনআপ ট্যাগের মধ্যে সুইচ করার স্টেট ('login' অথবা 'signup')
  const [authMode, setAuthMode] = useState("login");
  
  // ২. পাসওয়ার্ড শো/হাইড করার লোকাল স্টেট
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ৩. ফায়ারবেস রেসপন্স মেসেজ ট্র্যাকিং স্টেট
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // ৪. লগইন ফর্ম ডেটা স্টেট
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // ৫. সাইনআপ (Registration) ফর্ম ডেটা স্টেট
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // ৬. প্রথাগত ইমেইল লগইন সাবমিট হ্যান্ডলার
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setFormLoading(true);

    const result = await login(loginData.email, loginData.password);
    setFormLoading(false);

    if (result.success) {
      setSuccessMessage("Login successful! Welcome back to BAFAF.");
      setTimeout(() => navigate("/"), 1500); // ১.৫ সেকেন্ড পর হোম পেজে রিডাইরেক্ট করবে
    } else {
      setErrorMessage(result.message);
    }
  };

  // ৭. প্রথাগত সাইনআপ (Registration) সাবমিট হ্যান্ডলার
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (signupData.password !== signupData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please verify.");
      return;
    }

    setFormLoading(true);
    const result = await register(signupData.fullName, signupData.email, signupData.password);
    setFormLoading(false);

    if (result.success) {
      setSuccessMessage("Registration successful! Account created.");
      setTimeout(() => navigate("/"), 1500);
    } else {
      setErrorMessage(result.message);
    }
  };

  // ৮. গুগল পপ-আপ লগইন ক্লিক হ্যান্ডলার
  const handleGoogleLoginClick = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setFormLoading(true);

    const result = await loginWithGoogle();
    setFormLoading(false);

    if (result.success) {
      setSuccessMessage("Google Sign-In successful! Connecting profile...");
      setTimeout(() => navigate("/"), 1500);
    } else {
      setErrorMessage(result.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10 font-sans antialiased">
      {/* গ্লোবাল মডার্ন কার্ড কন্টেইনার */}
      <div className="w-full max-w-[1100px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px] border border-gray-100">
        
        {/* 🟢 বাম কলাম: প্রিমিয়াম ইন্টারন্যাশনাল ব্র্যান্ডিং ব্যানার প্যানেল */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B7A3E] to-[#043319] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
          {/* ব্যাকগ্রাউন্ড অর্গানিক লিফ ওয়াটারমার্ক */}
          <FaLeaf className="absolute -right-16 -bottom-16 text-[280px] text-white/5 group-hover:scale-110 transition-transform duration-750 pointer-events-none" />
          
          {/* টপ ব্যাক বাটন */}
          <button 
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A3D13A] hover:text-white transition-colors self-start cursor-pointer bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5"
          >
            <FaArrowLeft className="text-[10px]" /> Back To Home
          </button>

          {/* ব্র্যান্ডিং টেক্সট কন্টেন্ট */}
          <div className="my-auto space-y-4 pt-12 lg:pt-0">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <FaLeaf className="text-2xl text-[#A3D13A] animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide leading-tight">
              BAFAF <br /><span className="text-[#A3D13A]">Green Farm</span>
            </h2>
            <div className="w-12 h-1 bg-[#A3D13A] rounded-full" />
            <p className="text-xs md:text-sm text-emerald-100/80 leading-relaxed font-medium">
              Sourced with ultimate care, chemical-free and packed with natural goodness for your healthy premium lifestyle.
            </p>
          </div>

          {/* ফুটার ট্রাস্ট ব্যাজ */}
          <div className="pt-6 border-t border-white/10 text-[11px] font-bold text-emerald-200/60 uppercase tracking-widest">
            © 2026 BAFAF Trust Assurance
          </div>
        </div>

        {/* 🟢 ডান কলাম: লাইভ ইন্টারঅ্যাক্টিভ অথেনটিকেশন ফর্ম প্যানেল */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
          {/* 3. ট্যাব সিঙ্ক কন্ট্রোল বোতাম (Login vs Sign Up) */}
          <div className="flex border-b border-gray-100 pb-4 mb-8 max-w-xs gap-6 text-left">
            <button
              onClick={() => { setAuthMode("login"); setErrorMessage(""); setSuccessMessage(""); }}
              className={`pb-2 text-sm md:text-base font-black uppercase tracking-wider transition-all relative cursor-pointer ${
                authMode === "login" ? "text-[#0B7A3E]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Sign In
              {authMode === "login" && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0B7A3E] rounded-full" />}
            </button>
            <button
              onClick={() => { setAuthMode("signup"); setErrorMessage(""); setSuccessMessage(""); }}
              className={`pb-2 text-sm md:text-base font-black uppercase tracking-wider transition-all relative cursor-pointer ${
                authMode === "signup" ? "text-[#0B7A3E]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Register
              {authMode === "signup" && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0B7A3E] rounded-full" />}
            </button>
          </div>

          {/* 🚨 লাইভ মেসেজ অ্যালার্ট ব্যানার মেকানিজম */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-xs font-bold text-red-600 flex items-center gap-2 animate-fadeIn text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-xs font-bold text-[#0B7A3E] flex items-center gap-2 animate-fadeIn text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              {successMessage}
            </div>
          )}
          {/* 🟢 ডাইনামিক ফর্ম রেন্ডারিং কন্টেন্ট */}
          {authMode === "login" ? (
            /* 1. লগইন ফর্ম গ্রুপ */
            <div className="space-y-5">
              <form onSubmit={handleLoginSubmit} className="space-y-5 text-left">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full h-12 pl-11 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                      Password
                    </label>
                    <button type="button" className="text-[11px] font-bold text-[#0B7A3E] hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full h-12 pl-11 pr-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      {showPassword ? <FaRegEyeSlash className="text-sm" /> : <FaRegEye className="text-sm" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full h-12 bg-[#0B7A3E] text-white rounded-xl text-sm font-black uppercase tracking-wider shadow-md hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {formLoading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </>
                  )}
                </button>
              </form>

              {/* 🟢 INTERNATIONAL GOOGLE LOGIN DIVISION LINE */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-extrabold uppercase tracking-widest">Or Continue With</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              {/* 🟢 PREMIUM GOOGLE SIGN IN BUTTON */}
              <button
                type="button"
                onClick={handleGoogleLoginClick}
                disabled={formLoading}
                className="w-full h-12 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.94 1 12 1 7.35 1 3.39 3.67 1.39 7.56l3.89 3.02C6.2 7.74 8.89 5.04 12 5.04z"/>
                  <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.48-1.07 2.74-2.32 3.58l3.6 2.79c2.1-1.94 3.75-4.8 3.75-8.52z"/>
                  <path fill="#FBBC05" d="M5.28 14.78c-.24-.73-.38-1.5-.38-2.28s.14-1.55.38-2.28L1.39 7.56C.5 9.35 0 11.35 0 13s.5 3.65 1.39 5.44l3.89-3.66z"/>
                  <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.6-2.79c-1.11.75-2.53 1.19-4.36 1.19-3.11 0-5.8-2.7-6.72-5.54l-3.89 3.02C3.39 20.33 7.35 23 12 23z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          ) : (

            /* 2. সাইনআপ (Registration) ফর্ম গ্রুপ */
            <form onSubmit={handleSignupSubmit} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={signupData.fullName}
                    onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                    className="w-full h-11 pl-11 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full h-11 pl-11 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                  Create Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Minimum 6 characters"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full h-11 pl-11 pr-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <FaRegEyeSlash className="text-sm" /> : <FaRegEye className="text-sm" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Re-enter password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    className="w-full h-11 pl-11 pr-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B7A3E] focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showConfirmPassword ? <FaRegEyeSlash className="text-sm" /> : <FaRegEye className="text-sm" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full h-11 bg-[#0B7A3E] text-white rounded-xl text-sm font-black uppercase tracking-wider shadow-md hover:bg-[#A3D13A] hover:text-[#064824] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                {formLoading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaUserPlus />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
