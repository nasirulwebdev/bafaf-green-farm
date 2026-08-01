// আপনার বর্তমান ফোল্ডার পাথ অনুযায়ী সব ছবি ইমপোর্ট করা হলো
import heroImg from '../assets/Images/Services/services-hero.jpg';
import pondDesignImg from '../assets/Images/Services/pond-design.jpg';
import waterTestingImg from '../assets/Images/Services/water-testing.jpg';
import fishHealthImg from '../assets/Images/Services/fish-health.jpg';
import hatcheryImg from '../assets/Images/Services/hatchery.jpg';
import soilTestingImg from '../assets/Images/Services/soil-testing.jpg';
import cropAdvisoryImg from '../assets/Images/Services/crop-advisory.jpg';
import organicSetupImg from '../assets/Images/Services/organic-setup.jpg';
import smartIrrigationImg from '../assets/Images/Services/smart-irrigation.jpg';
import farmersTrainingImg from '../assets/Images/Services/farmers-training.jpg';
import bioflocRasImg from '../assets/Images/Services/biofloc-ras.jpg';
import farmMachineryImg from '../assets/Images/Services/farm-machinery.jpg';
import projectPlanningImg from '../assets/Images/Services/project-planning.jpg';

// ফোল্ডারে থাকা বাকি নতুন ছবিগুলোও একই পাথে ইমপোর্ট করে নেওয়া হলো
import fishFarmingImg from '../assets/Images/Services/fish-farming.jpg';
import logisticsImg from '../assets/Images/Services/logistics.jpg';
import shFarmingImg from '../assets/Images/Services/sh-farming.jpg';
import supplyExportImg from '../assets/Images/Services/supply-export.jpg';
import riceProductionImg from '../assets/Images/Services/rice-production.jpg';

export const servicesData = {
  hero: {
    title: "OUR PROFESSIONAL SERVICES",
    subtitle: "Nurturing Nature, Growing Futures",
    bgImage: heroImg
  },

  // 🐟 ১. Fisheries Consultancy (৮টি ডাটা + আইকন সহ)
  fisheries: [
    { id: "f1", slug: "pond-design", title: "Pond Design & Construction", desc: "Customized scientific designs for efficient, high-yield commercial fish farming operations.", image: pondDesignImg, icon: "🐟" },
    { id: "f2", slug: "water-testing", title: "Water Quality Testing", desc: "Comprehensive testing of chemical and biological water parameters to prevent fish mortality.", image: waterTestingImg, icon: "🧪" },
    { id: "f3", slug: "fish-health", title: "Fish Health Management", desc: "Advanced disease diagnosis, treatment planning, and sustainable biological health solutions.", image: fishHealthImg, icon: "🩺" },
    { id: "f4", slug: "hatchery-management", title: "Hatchery Management", desc: "Modern techniques and setup optimization for premium quality fish seed and fry production.", image: hatcheryImg, icon: "🏭" },
    { id: "f5", slug: "commercial-fish-farming", title: "Commercial Fish Farming", desc: "End-to-end operational guidance for modern commercial scale aquaculture ventures.", image: fishFarmingImg, icon: "🚢" },
    { id: "f6", slug: "shrimp-farming", title: "Shrimp & Prawn Culture", desc: "Specialized consultancy for high-value brackish and freshwater shrimp farming.", image: shFarmingImg, icon: "🍤" },
    { id: "f7", slug: "aquaculture-logistics", title: "Aquaculture Logistics", desc: "Safe live fish transportation management and cold chain storage optimization.", image: logisticsImg, icon: "🚛" },
    { id: "f8", slug: "fish-feed-formulation", title: "Feed Formulation & Nutrition", desc: "Cost-effective floating and sinking feed formulation techniques using local raw ingredients.", image: supplyExportImg, icon: "🥣" }
  ],

  // 🌾 ২. Agro & Farm Management (৮টি ডাটা + আইকন সহ)
  agro: [
    { id: "a1", slug: "soil-testing", title: "Soil Testing & Fertility", desc: "In-depth soil health analysis to maximize nutrient efficiency and optimize crop yield.", image: soilTestingImg, icon: "🌱" },
    { id: "a2", slug: "crop-advisory", title: "Crop Advisory Services", desc: "Seasonal crop selection, modern pest management, and expert agricultural consultancy.", image: cropAdvisoryImg, icon: "🌾" },
    { id: "a3", slug: "organic-farm", title: "Organic Farm Setup", desc: "End-to-end operational planning and layouts required for 100% certified organic farming.", image: organicSetupImg, icon: "🍎" },
    { id: "a4", slug: "smart-irrigation", title: "Smart Irrigation Systems", desc: "Automated, cost-effective, and water-saving modern drip and sprinkler irrigation layouts.", image: smartIrrigationImg, icon: "💧" },
    { id: "a5", slug: "rice-production-yield", title: "High-Yield Rice Production", desc: "Scientific practices and climate-smart advisory for maximizing premium rice yields.", image: riceProductionImg, icon: "🌾" },
    { id: "a6", slug: "greenhouse-farming", title: "Greenhouse & Polyhouse Setup", desc: "Controlled environment agriculture architecture and year-round high-value vegetable farming.", image: organicSetupImg, icon: "🏡" },
    { id: "a7", slug: "cold-storage-management", title: "Post-Harvest Management", desc: "Advanced techniques to minimize post-harvest damage and cold storage layout strategies.", image: logisticsImg, icon: "❄️" },
    { id: "a8", slug: "supply-export-logistics", title: "Agro Supply & Export Guide", desc: "Strategic operational support for exporting local organic vegetables and agro goods worldwide.", image: supplyExportImg, icon: "🌍" }
  ],

  // 🎓 ৩. Training & Tech Support (৮টি ডাটা + আইকন সহ)
  training: [
    { id: "t1", slug: "farmers-training", title: "Farmers Training Program", desc: "Hands-on, practical field training programs on modern smart agriculture techniques.", image: farmersTrainingImg, icon: "🎓" },
    { id: "t2", slug: "biofloc-ras", title: "Biofloc & RAS Consultancy", desc: "Complete setup and troubleshooting guides for high-density modern indoor aquaculture systems.", image: bioflocRasImg, icon: "🔄" },
    { id: "t3", slug: "farm-mechanization", title: "Farm Mechanization", desc: "Strategic integration of advanced agricultural machinery to reduce manual labor and costs.", image: farmMachineryImg, icon: "🚜" },
    { id: "t4", slug: "project-planning", title: "Agro Project Planning", desc: "Detailed financial feasibility, commercial layouts, and complete agro-business master planning.", image: projectPlanningImg, icon: "📊" },
    { id: "t5", slug: "smart-farming-iot", title: "IoT & Smart Farming Tech", desc: "Integrating sensor-based automated monitoring devices for advanced drone and field tracking.", image: smartIrrigationImg, icon: "📱" },
    { id: "t6", slug: "agro-entrepreneurship", title: "Agro-Entrepreneurship Guide", desc: "Business management, dynamic brand building, and capital funding training for youth.", image: projectPlanningImg, icon: "💼" },
    { id: "t7", slug: "integrated-farm-training", title: "Integrated Farming Systems", desc: "Practical lessons on simultaneous poultry, cattle, and fish farm structural optimization.", image: fishFarmingImg, icon: "🏡" },
    { id: "t8", slug: "pest-disease-control", title: "Pest & Disease Control Lab", desc: "Advanced operational training for non-toxic pest containment and safe plant pathology.", image: waterTestingImg, icon: "🔬" }
  ]
};
