/*
===========================================
File Path      : vite.config.js
Project        : BAFAF Green Farm (Fixed Netlify Build)
Framework      : React 19 + Vite 6 + Tailwind v4
===========================================
*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy"; // 🚀 বিল্ড ফিক্স প্লাগইন ইম্পোর্ট করা হলো
import path from "path";
import { fileURLToPath } from "url";

// ES Modules এ __dirname সাপোর্ট করার জন্য প্রফেশনাল ডিক্লেয়ারেশন
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
    // 🟢 নিশ্চিত সমাধান: ভাইট যখন প্রোজেক্ট বিল্ড করবে, তখন এই প্লাগইনটি public ফোল্ডার থেকে
    // _redirects ফাইলটিকে জোরপূর্বক সরাসরি dist ফোল্ডারের মূল রুটে কপি করে দেবে।
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects",
          dest: "."
        }
      ]
    })
  ],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
