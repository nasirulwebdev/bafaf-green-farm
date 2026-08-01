/*
===========================================
File Path      : Src/Data/Products.js
Data Name      : productsData
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

// আপনার প্রজেক্টের সঠিক পাথ (১ লেভেল পেছনে) অনুযায়ী হিরো ব্যানার এবং ২৪টি প্রোডাক্টের ইমেজ ইমপোর্ট
import heroImg from '../assets/Images/Products/products-hero.jpg';

// ১. Fish Culture & Fisheries (৮টি ইমেজ)
import freshFishImg from '../assets/Images/Products/freshwater-fish.jpg';
import liveHatcheryImg from '../assets/Images/Products/live-hatchery.jpg';
import frozenExportImg from '../assets/Images/Products/frozen-export.jpg';
import feedSupplementsImg from '../assets/Images/Products/feed-supplements.jpg';
import shrimpPrawnImg from '../assets/Images/Products/shrimp-prawn.jpg';
import fishSeedImg from '../assets/Images/Products/fish-seed.jpg';
import ornamentalFishImg from '../assets/Images/Products/ornamental-fish.jpg';
import dryFishImg from '../assets/Images/Products/dry-fish.jpg';

// ২. Crops & Grains (৮টি ইমেজ)
import aromaticRiceImg from '../assets/Images/Products/aromatic-rice.jpg';
import organicVegImg from '../assets/Images/Products/organic-vegetables.jpg';
import seasonalFruitsImg from '../assets/Images/Products/seasonal-fruits.jpg';
import highYieldSeedsImg from '../assets/Images/Products/high-yield-seeds.jpg';
import organicWheatImg from '../assets/Images/Products/organic-wheat.jpg';
import premiumPulsesImg from '../assets/Images/Products/premium-pulses.jpg';
import mustardOilImg from '../assets/Images/Products/mustard-oil.jpg';
import organicSpicesImg from '../assets/Images/Products/organic-spices.jpg';

// ৩. Agro & Bio Products (৮টি ইমেজ)
import organicProductsImg from '../assets/Images/Products/organic-products.jpg';
import organicFertilizersImg from '../assets/Images/Products/organic-fertilizers.jpg';
import bioPesticidesImg from '../assets/Images/Services/water-testing.jpg'; // পূর্বের রিসোর্স থেকে ম্যাপড
import farmMachineryImg from '../assets/Images/Services/farm-machinery.jpg'; // পূর্বের রিসোর্স থেকে ম্যাপড
import bioCompostImg from '../assets/Images/Products/bio-compost.jpg';
import neemOilImg from '../assets/Images/Products/neem-oil.jpg';
import plantNutrientsImg from '../assets/Images/Products/plant-nutrients.jpg';
import cocoPeatImg from '../assets/Images/Products/coco-peat.jpg';

export const productsData = {
  hero: {
    title: "OUR PREMIUM PRODUCTS",
    subtitle: "Organic Agro & Fresh Fish Direct from Farm",
    bgImage: heroImg
  },

  // 🐟 ১. Fish Culture & Fisheries (৮টি প্রোডাক্ট)
  fisheries: [
    { id: "p1", slug: "freshwater-fish", title: "Freshwater Fish", desc: "Premium quality locally cultured freshwater fish, harvested daily under strict hygienic conditions.", image: freshFishImg, icon: "🐟", badge: "Popular" },
    { id: "p2", slug: "live-hatchery-fish", title: "Live & Hatchery Fish", desc: "Healthy, disease-free live fish seeds and fingerlings optimized for fast growth in commercial ponds.", image: liveHatcheryImg, icon: "🦐" },
    { id: "p3", slug: "frozen-export-quality", title: "Frozen & Export Quality", desc: "Flash-frozen premium seafood and fish processed to match strict international export standards.", image: frozenExportImg, icon: "❄️" },
    { id: "p4", slug: "feed-supplements", title: "Feed & Supplements", desc: "Nutrient-rich floating and sinking fish feed formulated for optimal FCR and fish health.", image: feedSupplementsImg, icon: "🥣" },
    { id: "p5", slug: "shrimp-prawn-culture", title: "Premium Shrimp & Prawn", desc: "Freshwater prawns and black tiger shrimps cultured in monitored brackish water environments.", image: shrimpPrawnImg, icon: "🍤" },
    { id: "p6", slug: "high-grade-fish-seed", title: "High-Grade Fish Seed", desc: "Genetically superior fish spawn and fry collected from certified broods for high yields.", image: fishSeedImg, icon: "🧬" },
    { id: "p7", slug: "ornamental-aquarium-fish", title: "Ornamental Aquarium Fish", desc: "Vibrant and healthy decorative ornamental fish varieties bred for home and commercial aquariums.", image: ornamentalFishImg, icon: "🐠" },
    { id: "p8", slug: "organic-dried-fish", title: "Organic Dried Fish (Shutki)", desc: "100% sun-dried fish prepared traditionally without any harmful chemical preservatives or DDT.", image: dryFishImg, icon: "☀️" }
  ],

  // 🌾 ২. Crops & Grains (৮টি প্রোডাক্ট)
  crops: [
    { id: "p9", slug: "aromatic-rice", title: "Aromatic Rice", desc: "Premium Chinigura and Kalijira aromatic rice known for its exquisite fragrance and taste.", image: aromaticRiceImg, icon: "🌾", badge: "Fresh Harvest" },
    { id: "p10", slug: "organic-vegetables", title: "Organic Vegetables", desc: "Fresh, seasonal vegetables grown using 100% organic fertilizers and zero toxic pesticides.", image: organicVegImg, icon: "🥦" },
    { id: "p11", slug: "seasonal-fruits", title: "Seasonal Fruits", desc: "Naturally ripened chemical-free seasonal fruits sourced directly from our dedicated orchards.", image: seasonalFruitsImg, icon: "🍎" },
    { id: "p12", slug: "high-yield-seeds", title: "High-Yield Seeds", desc: "Scientifically tested, climate-resilient crop seeds certified for high germination rates.", image: highYieldSeedsImg, icon: "🌱" },
    { id: "p13", slug: "organic-whole-wheat", title: "Organic Whole Wheat", desc: "Nutrient-dense premium whole wheat grains stone-ground to preserve natural dietary fiber.", image: organicWheatImg, icon: "🌾" },
    { id: "p14", slug: "premium-pulses", title: "Premium Pulses & Lentils", desc: "High-protein unpolished local lentils and pulses processed safely without artificial coloring.", image: premiumPulsesImg, icon: "🫘" },
    { id: "p15", slug: "pure-mustard-oil", title: "Cold-Pressed Mustard Oil", desc: "100% pure, pungent wooden cold-pressed (Ghani) mustard oil extracted from premium seeds.", image: mustardOilImg, icon: "🫙" },
    { id: "p16", slug: "organic-farm-spices", title: "Organic Farm Spices", desc: "Pure, unadulterated turmeric, chili, and coriander powders processed directly from our farm.", image: organicSpicesImg, icon: "🌶️" }
  ],

  // 🧪 ৩. Agro & Bio Products (৮টি প্রোডাক্ট)
  agroProducts: [
    { id: "p17", slug: "100-organic-products", title: "100% Organic Products", desc: "Assorted certified eco-friendly consumer agro goods packaged naturally for healthy lifestyles.", image: organicProductsImg, icon: "🪵", badge: "Pure" },
    { id: "p18", slug: "organic-fertilizers", title: "Organic Fertilizers", desc: "Premium vermicompost and nutrient-balanced organic fertilizers to enrich long-term soil health.", image: organicFertilizersImg, icon: "🪱" },
    { id: "p19", slug: "bio-pesticides", title: "Bio-Pesticides", desc: "Microbial and botanical extracts formulated for safe, non-toxic agricultural pest containment.", image: bioPesticidesImg, icon: "🧪" },
    { id: "p20", slug: "farm-machinery-tools", title: "Farm Machinery & Tools", desc: "Modern, cost-effective semi-automated agricultural tools designed to reduce labor intensity.", image: farmMachineryImg, icon: "🚜" },
    { id: "p21", slug: "premium-bio-compost", title: "Premium Bio-Compost", desc: "Decomposed organic matter enriched with beneficial microbes for superior root development.", image: bioCompostImg, icon: "🍂" },
    { id: "p22", slug: "pure-neem-oil", title: "Pure Neem Oil Spray", desc: "Natural cold-pressed neem oil that acts as an excellent organic antifungal and pest repellent.", image: neemOilImg, icon: "🌿" },
    { id: "p23", slug: "bio-plant-nutrients", title: "Bio Plant Nutrients", desc: "Liquid organic growth promoters packed with micro and macro elements for all crop types.", image: plantNutrientsImg, icon: "🧪" },
    { id: "p24", slug: "premium-coco-peat", title: "Premium Coco Peat Blocks", desc: "Low-EC washed coco peat blocks with high water retention, perfect for modern greenhouse farming.", image: cocoPeatImg, icon: "🥥" }
  ]
};
