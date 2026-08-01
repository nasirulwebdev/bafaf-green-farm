/*
===========================================
File Path      : src/Data/Contact/Contact.js
Description    : Professional Contact Page Master Dataset & Business Meta
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

// ১. মূল কন্টাক্ট ইনফো ডেটা অবজেক্ট (স্ক্রিনশটের অবিকল ৩-কলাম সিঙ্ক)
export const contactInfoData = {
  phone: {
    label: "Phone",
    value: "01750-909833",
    link: "tel:01750909833",
    badge: "Call for Inquiry",
    iconType: "phone"
  },
  email: {
    label: "Email",
    value: "bafaf.greenfarm@gmail.com",
    link: "mailto:bafaf.greenfarm@gmail.com",
    badge: "Official Correspondence Desk",
    iconType: "envelope"
  },
  location: {
    label: "Location",
    value: "Bangladesh",
    mapQueryLink: "https://google.com",
    note: "(Click map to open in Google Maps)",
    iconType: "map-marker"
  },
  workingHours: {
    label: "Working Hours",
    days: "Saturday - Thursday",
    time: "8.00 AM - 6.00 PM",
    statusBadge: "Available 24/7 Desk Support",
    iconType: "clock"
  }
};

// ২. সোস্যাল মিডিয়া ইন্টিগ্রেশন অবজেক্ট (ফুটার ও কন্টাক্ট পেজ কানেক্টিভিটি)
export const contactSocials = [
  { id: 1, name: "Facebook", url: "https://www.facebook.com/mdnasirulislam.nahid.1", iconClass: "facebook" },
  { id: 2, name: "YouTube", url: "https://www.youtube.com/@GreenWorld-gy9dkFavoriite/featured", iconClass: "youtube" },
  { id: 3, name: "WhatsApp", url: "https://web.whatsapp.com/", iconClass: "whatsapp" },
  { id: 4, name: "Instagram", url: "https://www.instagram.com/md_nasirul_islam_/", iconClass: "instagram" },
  { id: 5, name: "LinkedIn", url: "https://www.linkedin.com/in/md-nasirul-islam-nahid-8a1b49287", iconClass: "linkedin" },
  { id: 6, name: "Twitter", url: "https://www.twitter.com/yourprofile", iconClass: "twitter" },
];
// ৩. গুগল ম্যাপস এমবেডেড প্যারামিটার ডেটা (আইফ্রেম সেফ-লিংক কনফিগারেশন)
export const contactMapConfig = {
  title: "BAFAF Green Farm Headquarters Map",
  // স্ক্রিনশটের অবিকল ঢাকা, বাংলাদেশ রিজিয়ন ভিত্তিক প্রফেশনাল এমবেড ইউআরএল
  embedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3099.5665182419475!2d90.41114544905601!3d23.79329140870492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shouse%20154%2C%20road%2048%2C%20gulshan%202%2C%20dhaka%201212%2C%20bangladesha%201212!5e0!3m2!1sen!2sbd!4v1785220710170!5m2!1sen!2sbd",

  iframeSettings: {
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    style: { border: 0 }
  }
};

// ৪. কন্টাক্ট ইনকোয়ারি ফর্ম এর জন্য প্রফেশনাল প্লেসহোল্ডার কনফিগারেশন
export const contactFormPlaceholders = {
  name: "Your Name",
  phone: "Your Phone",
  email: "Your Email",
  message: "Your Message",
  submitButtonText: "Send Message",
  submittingText: "Sending Securely..."
};
