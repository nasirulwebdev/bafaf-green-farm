/*
===========================================
File Path      : src/Components/Contact/ContactForm.jsx
Component Name : ContactForm
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { contactFormPlaceholders } from '../../Data/Contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ১ সেকেন্ডের সিমুলেটেড সিকিউরড ডিসপ্যাচ টাইমআউট
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your inquiry has been securely sent to BAFAF Central Desk.`);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-left h-full group hover:border-[#0B7A3E] transition-all duration-300 animate-fade-in">
      <h3 className="font-black text-gray-900 text-base uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2 mb-6 transition-colors duration-300 group-hover:text-[#0B7A3E]">
        ✉️ Send Us A Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={contactFormPlaceholders.name} 
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#0B7A3E] bg-gray-50/50 focus:bg-white transition-all duration-300"
        />
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={contactFormPlaceholders.phone} 
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#0B7A3E] bg-gray-50/50 focus:bg-white transition-all duration-300"
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={contactFormPlaceholders.email} 
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#0B7A3E] bg-gray-50/50 focus:bg-white transition-all duration-300"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4" 
          placeholder={contactFormPlaceholders.message} 
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#0B7A3E] bg-gray-50/50 focus:bg-white resize-none transition-all duration-300"
        />
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 bg-[#0B7A3E] text-white text-xs font-black px-6 py-3 rounded-xl hover:bg-[#A3D13A] hover:text-gray-900 transition-all duration-300 shadow-md uppercase tracking-wider border-none cursor-pointer mt-2 w-fit group/btn disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaPaperPlane className={`text-[10px] transform transition-transform duration-300 ${isSubmitting ? 'animate-ping' : 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5'}`} /> 
          <span>{isSubmitting ? contactFormPlaceholders.submittingText : contactFormPlaceholders.submitButtonText}</span>
        </button>
      </form>
    </div>
  );
}
