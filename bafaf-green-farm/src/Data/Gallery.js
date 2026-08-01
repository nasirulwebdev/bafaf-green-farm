/*
===========================================
File Path      : src/Data/Gallery.js
Description    : Gallery Master Dataset with Dynamic Icons (56 Items Complete)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

// 🚀 ভাইট ম্যাজিক লাইন: গ্যালারি ফোল্ডারের সব .jpg, .jpeg, .png ছবি এক লাইনে ব্যাকগ্রাউন্ডে অটো-ইম্পোর্ট হবে
const galleryImages = import.meta.glob('../assets/Images/Gallery/*.{png,jpg,jpeg}', { eager: true });

// ফোল্ডার থেকে সিরিয়াল অনুযায়ী নির্দিষ্ট ছবিটি টেনে আনার হেল্পার ফাংশন
const getImg = (fileName) => {
  const path = `../assets/Images/Gallery/${fileName}`;
  return galleryImages[path] ? galleryImages[path].default : '';
};

export const galleryData = [
  // 🐟 ক্যাটাগরি ১: fisheries (১ থেকে ৮ নম্বর আলাদা ছবি)
  { id: 1, category: 'fisheries', title: 'Modern Biofloc Tank Setup', desc: 'High-density fish cultivation with oxygen control.', image: getImg('fish-1.jpg'), type: 'image', icon: '🐟' },
  { id: 2, category: 'fisheries', title: 'Premium Salmon Breeding', desc: 'Certified commercial hatchery monitoring.', image: getImg('fish-2.jpg'), type: 'image', icon: '🐠' },
  { id: 3, category: 'fisheries', title: 'Automated Feed Dispenser', desc: 'Smart timers for optimal fish nutrition feeding.', image: getImg('fish-3.jpg'), type: 'image', icon: '🧮' },
  { id: 4, category: 'fisheries', title: 'Water Quality Testing Lab', desc: 'Continuous PH and dissolved oxygen analytics.', image: getImg('fish-4.jpg'), type: 'image', icon: '🧪' },
  { id: 5, category: 'fisheries', title: 'Fingerling Sorting Process', desc: 'Handpicked healthy fingerlings for distribution.', image: getImg('fish-5.jpg'), type: 'image', icon: '🧺' },
  { id: 6, category: 'fisheries', title: 'Commercial Net Harvesting', desc: 'Large scale seasonal fish harvesting event.', image: getImg('fish-6.jpg'), type: 'image', icon: '🕸️' },
  { id: 7, category: 'fisheries', title: 'Cold Storage Fish Loader', desc: 'Instant freezing unit setup for export supply.', image: getImg('fish-7.jpg'), type: 'image', icon: '❄️' },
  { id: 8, category: 'fisheries', title: 'Eco Pond Aeration System', desc: 'Solar-powered paddlewheels for clean water.', image: getImg('fish-8.jpg'), type: 'image', icon: '⚙️' },

  // 🌾 ক্যাটাগরি ২: rice (৯ থেকে ১৬ নম্বর আলাদা ছবি)
  { id: 9, category: 'rice', title: 'Hybrid Seedling Plantations', desc: 'Disease-resistant high yield premium rice crops.', image: getImg('rice-1.jpg'), type: 'image', icon: '🌾' },
  { id: 10, category: 'rice', title: 'Golden Organic Paddy Field', desc: '100% chemical-free organic rice production rows.', image: getImg('rice-2.jpg'), type: 'image', icon: '🌱' },
  { id: 11, category: 'rice', title: 'Modern Combined Harvester', desc: 'Mechanical harvesting reducing grain waste.', image: getImg('rice-3.jpg'), type: 'image', icon: '🚜' },
  { id: 12, category: 'rice', title: 'Automated Grain Rice Milling', desc: 'Meticulous de-husking and polishing process.', image: getImg('rice-4.jpg'), type: 'image', icon: '🏭' },
  { id: 13, category: 'rice', title: 'Moisture Control Laboratory', desc: 'Strict checks before moisture vacuum packaging.', image: getImg('rice-5.jpg'), type: 'image', icon: '🔬' },
  { id: 14, category: 'rice', title: 'Premium Miniket Storage Rows', desc: 'Organized bulk bags inside clean dry warehouse.', image: getImg('rice-6.jpg'), type: 'image', icon: '📦' },
  { id: 15, category: 'rice', title: 'Traditional Sun Drying Yards', desc: 'Natural sunlight temperature control method.', image: getImg('rice-7.jpg'), type: 'image', icon: '☀️' },
  { id: 16, category: 'rice', title: 'Export Quality Packaging', desc: 'Double-layered jute bags sealed for container shipment.', image: getImg('rice-8.jpg'), type: 'image', icon: '🛍️' },

  // 🥦 ক্যাটাগরি ৩: vegetables (১৭ থেকে ২৪ নম্বর আলাদা ছবি)
  { id: 17, category: 'vegetables', title: 'Hydroponic Lettuce Rows', desc: 'Vertical soil-less smart vegetable greenhouse.', image: getImg('veg-1.jpg'), type: 'image', icon: '🥦' },
  { id: 18, category: 'vegetables', title: 'Organic Broccoli Harvest', desc: 'Fresh morning picked vitamin-rich crops.', image: getImg('veg-2.jpg'), type: 'image', icon: '🥬' },
  { id: 19, category: 'vegetables', title: 'Drip Irrigation Systems', desc: 'Water-saving root targeted automatic plumbing.', image: getImg('veg-3.jpg'), type: 'image', icon: '💧' },
  { id: 20, category: 'vegetables', title: 'Sorting & Grading Belt', desc: 'Sizing and cleaning before marketplace shipping.', image: getImg('veg-4.jpg'), type: 'image', icon: '🔄' },
  { id: 21, category: 'vegetables', title: 'Vibrant Bell Pepper Greenhouse', desc: 'Controlled atmosphere for optimal growth.', image: getImg('veg-5.jpg'), type: 'image', icon: '🫑' },
  { id: 22, category: 'vegetables', title: 'Root Crop Cleaning Chamber', desc: 'High-pressure wash for organic potatoes.', image: getImg('veg-6.jpg'), type: 'image', icon: '🧼' },
  { id: 23, category: 'vegetables', title: 'Eco-Friendly Basket Packing', desc: 'Plastic-free premium delivery crates.', image: getImg('veg-7.jpg'), type: 'image', icon: '🧺' },
  { id: 24, category: 'vegetables', title: 'Cold-Chain Delivery Fleet', desc: 'Temperature-tracked trucks for fresh delivery.', image: getImg('veg-8.jpg'), type: 'image', icon: '🚚' },

  // 🍎 ক্যাটাগরি ৪: fruits (২৫ থেকে ৩২ নম্বর আলাদা ছবি)
  { id: 25, category: 'fruits', title: 'Dragon Fruit Trellis Farm', desc: 'Organic high-nutrition premium dragon crops.', image: getImg('fruit-1.jpg'), type: 'image', icon: '🍎' },
  { id: 26, category: 'fruits', title: 'High-Yield Mango Orchards', desc: 'Naturally ripened famous commercial mango trees.', image: getImg('fruit-2.jpg'), type: 'image', icon: '🥭' },
  { id: 27, category: 'fruits', title: 'Premium Citrus Plantations', desc: 'Juicy seedless Malta collection sector.', image: getImg('fruit-3.jpg'), type: 'image', icon: '🍊' },
  { id: 28, category: 'fruits', title: 'Manual Fruit Plucking Planners', desc: 'Trained workers avoiding any skin scratches.', image: getImg('fruit-4.jpg'), type: 'image', icon: '🧤' },
  { id: 29, category: 'fruits', title: 'Wax Coating & Polishing Line', desc: 'Natural shellac shield for extended fresh life.', image: getImg('fruit-5.jpg'), type: 'image', icon: '✨' },
  { id: 30, category: 'fruits', title: 'Export Crates Quality Labeling', desc: 'Barcode trace technology barcode allocation.', image: getImg('fruit-6.jpg'), type: 'image', icon: '🏷️' },
  { id: 31, category: 'fruits', title: 'Strawberry Greenhouse Tunnels', desc: 'Pest-protected temperature stable chambers.', image: getImg('fruit-7.jpg'), type: 'image', icon: '🍓' },
  { id: 32, category: 'fruits', title: 'Nutritional Value Lab Reports', desc: 'Brix scale sugar percentage testing operations.', image: getImg('fruit-8.jpg'), type: 'image', icon: '📊' },

  // 🏢 ক্যাটাগরি ৫: facilities (৩৩ থেকে ৪০ নম্বর আলাদা ছবি)
  { id: 33, category: 'facilities', title: 'Main Agro Processing Hub', desc: 'Centralized heavy machinery operational sector.', image: getImg('facility-1.jpg'), type: 'image', icon: '🏢' },
  { id: 34, category: 'facilities', title: 'Deep Freezing Cold Store', desc: 'Minus 18-degree preservation warehouse rooms.', image: getImg('facility-2.jpg'), type: 'image', icon: '🧊' },
  { id: 35, category: 'facilities', title: 'R&D Bio-Science Laboratory', desc: 'Soil micro-nutrient and DNA testing space.', image: getImg('facility-3.jpg'), type: 'image', icon: '🥼' },
  { id: 36, category: 'facilities', title: 'Solar Powered Power Station', desc: 'Green energy backup powering grid operations.', image: getImg('facility-4.jpg'), type: 'image', icon: '☀️' },
  { id: 37, category: 'facilities', title: 'Water Filtration Plants', desc: 'Industrial RO filtration securing clean inputs.', image: getImg('facility-5.jpg'), type: 'image', icon: '🚰' },
  { id: 38, category: 'facilities', title: 'Automatic Silo Storage Yards', desc: 'Massive bulk storage protecting raw grains.', image: getImg('facility-6.jpg'), type: 'image', icon: '🏗️' },
  { id: 39, category: 'facilities', title: 'Decontamination Entry Gates', desc: 'Bio-secure entry airlocks for crisp safety.', image: getImg('facility-7.jpg'), type: 'image', icon: '🚪' },
  { id: 40, category: 'facilities', title: 'Logistics Weighing Platforms', desc: 'Automated digital dynamic weight bridge loaders.', image: getImg('facility-8.jpg'), type: 'image', icon: '⚖️' },

  // 📅 ক্যাটাগরি ৬: events (৪১ থেকে ৪৮ নম্বর আলাদা ছবি)
  { id: 41, category: 'events', title: 'Annual Farmers Workshop 2026', desc: 'Empowering local farmers with modern techniques.', image: getImg('event-1.jpg'), type: 'image', icon: '📅' },
  { id: 42, category: 'events', title: 'Agro Innovation Summit Meet', desc: 'Discussion panel with top country experts.', image: getImg('event-2.jpg'), type: 'image', icon: '🤝' },
  { id: 43, category: 'events', title: 'Successful Harvest Festival', desc: 'Celebrating record production milestones together.', image: getImg('event-3.jpg'), type: 'image', icon: '🎉' },
  { id: 44, category: 'events', title: 'Government Inspection Tour', desc: 'Compliance verification by agricultural ministry.', image: getImg('event-4.jpg'), type: 'image', icon: '🎖️' },
  { id: 45, category: 'events', title: 'Smart Farming Field Training', desc: 'Hands-on IoT device handling guidelines.', image: getImg('event-5.jpg'), type: 'image', icon: '👨‍🌾' },
  { id: 46, category: 'events', title: 'Global Agro Export Sign Ceremony', desc: 'International partnership contract signups.', image: getImg('event-6.jpg'), type: 'image', icon: '✒️' },
  { id: 47, category: 'events', title: 'Organic Product Exhibition', desc: 'Showcasing fresh non-GMO farm outputs.', image: getImg('event-7.jpg'), type: 'image', icon: '🎪' },
  { id: 48, category: 'events', title: 'CSR Seed Distribution Program', desc: 'Free high-quality seed supply to poor villagers.', image: getImg('event-8.jpg'), type: 'image', icon: '🎁' },

  // 🎥 ক্যাটাগরি ৭: videos (৪৯ থেকে ৫৬ নম্বর আলাদা ছবি)
  { id: 49, category: 'videos', title: 'Full Agro Farm Aerial Tour', desc: 'Drone cinematic flight showcasing full landscape.', image: getImg('video-1.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🎥' },
  { id: 50, category: 'videos', title: 'Smart Aquaculture Guidelines', desc: 'Video walkthrough of modern fish farming.', image: getImg('video-2.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🎬' },
  { id: 51, category: 'videos', title: 'From Field To Dinner Plate', desc: 'Complete storytelling video documentary.', image: getImg('video-3.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🍿' },
  { id: 52, category: 'videos', title: 'Automated Packing Machine Flow', desc: 'Inside look at fast robotic seal technology.', image: getImg('video-4.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🤖' },
  { id: 53, category: 'videos', title: 'Lab Research Daily Document', desc: 'How our scientists run routine quality tests.', image: getImg('video-5.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '📹' },
  { id: 54, category: 'videos', title: 'Interviews with Happy Farmers', desc: 'Real stories and feedback from field level.', image: getImg('video-6.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🗣️' },
  { id: 55, category: 'videos', title: 'Export Cargo Loading Process', desc: 'Live video tracking international dispatch.', image: getImg('video-7.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🚢' },
  { id: 56, category: 'videos', title: 'Future Goals Project Presentation', desc: 'CEO speech discussing smart upcoming expansions.', image: getImg('video-8.jpg'), type: 'video', videoUrl: 'w3schools.com', icon: '🎯' }];
