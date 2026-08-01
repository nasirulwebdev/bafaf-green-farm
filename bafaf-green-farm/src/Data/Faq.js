/*
===========================================
File Path      : src/Data/Faq.js
Description    : Professional FAQ Master Dataset (Category & Icon Synchronized)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

// ৮টি মূল প্রফেশনাল বিজনেস ক্যাটাগরি প্যানেল অবজেক্ট
export const faqCategories = [
  { id: 'general', label: 'General Questions', icon: '⚙️' },
  { id: 'products', label: 'Product & Services', icon: '📦' },
  { id: 'orders', label: 'Order & Payment', icon: '💳' },
  { id: 'shipping', label: 'Shipping & Delivery', icon: '🚚' },
  { id: 'returns', label: 'Returns & Refunds', icon: '🔄' },
  { id: 'business', label: 'Partnership & Business', icon: '🤝' },
  { id: 'account', label: 'Account & Support', icon: '👤' }
];

export const faqData = [
  // 🟢 ক্যাটাগরি ১: GENERAL QUESTIONS (সাধারণ জিজ্ঞাসা)
  { 
    id: 1, 
    category: 'general', 
    question: 'What is Bafaf Green Farm?', 
    answer: 'Bafaf Green Farm is a leading agro and fisheries company dedicated to sustainable farming, high-quality products, and eco-friendly practices. We are committed to delivering fresh, healthy, and safe food while protecting our environment.',
    icon: '🌱'
  },
  { 
    id: 2, 
    category: 'general', 
    question: 'Where is Bafaf Green Farm located?', 
    answer: 'Our primary research commercial hubs, automated biofloc infrastructure, and high-density aquaculture hatcheries are strategically situated across key agrarian districts in Bangladesh, ensuring optimized distribution access.',
    icon: '📍'
  },
  { 
    id: 3, 
    category: 'general', 
    question: 'What types of products do you offer?', 
    answer: 'We specialize in wholesale high-yield fisheries supply, hybrid commercial rice seeds, certified organic premium vegetables, chemical-free safe processed fruits, and nationwide institution-level agricultural consulting frameworks.',
    icon: '🥦'
  },
  { 
    id: 4, 
    category: 'general', 
    question: 'Are your products organic?', 
    answer: 'Yes, 100% of our designated agro and harvest lines maintain strict non-chemical, bio-safe fertilizer treatments. We operate with strict adherence to global organic food safety compliance metrics.',
    icon: '✨'
  },
  { 
    id: 5, 
    category: 'general', 
    question: 'How do you ensure product quality?', 
    answer: 'Our expert quality assurance team executes routine microbiological laboratory screenings, deep water PH indexing, and strict cold-chain transit logs at every critical production checkpoint.',
    icon: '🔬'
  },

  // 🟢 ক্যাটাগরি ২: PRODUCT & SERVICES (পণ্য এবং সেবা)
  { 
    id: 6, 
    category: 'products', 
    question: 'Do you provide specialized aqua consultancy?', 
    answer: 'Absolutely. We offer customized commercial pond layout blueprint designs, oxygen automated telemetry integration management, and targeted harvest risk mitigation mapping for local fish farms.',
    icon: '🐟'
  },
  { 
    id: 7, 
    category: 'products', 
    question: 'Can I purchase hybrid commercial seeds in bulk?', 
    answer: 'Yes, our bulk institutional wing caters directly to large-scale commercial agro farmlands, corporate seed suppliers, NGO agricultural distribution networks, and wholesale traders.',
    icon: '🌾'
  },
  { 
    id: 8, 
    category: 'products', 
    question: 'Do you host modern agricultural training workshops?', 
    answer: 'Yes, we regularly run hands-on IoT smart farming guidelines, agricultural officer training programs, and practical field level workshops directly near our model farm sites.',
    icon: '👨‍🌾'
  },

  // 🟢 ক্যাটাগরি ৩: ORDER & PAYMENT (অর্ডার এবং পেমেন্ট গেটওয়ে)
  { 
    id: 9, 
    category: 'orders', 
    question: 'What payment methodologies do you accept?', 
    answer: 'We fully accept certified corporate bank wire transfers, local mobile financial services (MFS via bKash/Nagad/Rocket Corporate Desks), and authorized international credit/debit transaction systems.',
    icon: '💰'
  },
  { 
    id: 10, 
    category: 'orders', 
    question: 'Is there any digital token generation for active bookings?', 
    answer: 'Yes, upon secure transaction verification, our enterprise database immediately generates a unique trace ID billing token for strict wholesale slot allocation.',
    icon: '🎫'
  },
  { 
    id: 11, 
    category: 'orders', 
    question: 'Can I modify my wholesale packing configurations after ordering?', 
    answer: 'Modifications are allowed within 12 hours of booking confirmation by directly getting in touch with your assigned account allocation manager or wholesale desk cell.',
    icon: '✍️'
  },
    // 🟢 ক্যাটাগরি ৪: SHIPPING & DELIVERY (পরিবহন ও লজিস্টিকস)
  { 
    id: 12, 
    category: 'shipping', 
    question: 'How is the cold chain logistics managed?', 
    answer: 'We operate our own dedicated state-of-the-art fleet of temperature-controlled refrigerated specialized trucks, preventing post-harvest heat spikes and preserving peak quality freshness.',
    icon: '🚛'
  },
  { 
    id: 13, 
    category: 'shipping', 
    question: 'Do you provide nationwide bulk distribution?', 
    answer: 'Yes, our enterprise supply network spans all 64 districts across Bangladesh with guaranteed operational timeframes and real-time delivery dispatch metrics tracking.',
    icon: '🗺️'
  },
  { 
    id: 14, 
    category: 'shipping', 
    question: 'What happens in case of heavy transit delays?', 
    answer: 'Our smart dispatch matrix automatically recalculates secondary dynamic routes. In severe weather events, customers receive instant SMS alert logs from our central dispatch server.',
    icon: '⏰'
  },

  // 🟢 ক্যাটাগরি ৫: RETURNS & REFUNDS (রিটার্ন ও রিফান্ড পলিসি)
  { 
    id: 15, 
    category: 'returns', 
    question: 'What is your refund policy for perishable commodities?', 
    answer: 'Any biological deviations or transit damage reported with clear verification logs within 24 business hours are systematically evaluated for prioritized replacement dispatch or direct account credit re-issue.',
    icon: '🛡️'
  },
  { 
    id: 16, 
    category: 'returns', 
    question: 'How long does a processed refund take to reflect?', 
    answer: 'Approved commercial refunds are automatically credited back to the original source bank node or enterprise account within 5 to 7 operational business days.',
    icon: '⏱️'
  },

  // 🟢 ক্যাটাগরি ৬: PARTNERSHIP & BUSINESS (বাণিজ্যিক পার্টনারশিপ)
  { 
    id: 17, 
    category: 'business', 
    question: 'How can a commercial farmer partner with BAFAF?', 
    answer: 'You can interact with the "Partner With Us" custom green banner link to submit your territory dimensions or land layouts. Our agricultural survey team will schedule an on-site field evaluation.',
    icon: '💼'
  },
  { 
    id: 18, 
    category: 'business', 
    question: 'Do you offer direct agricultural raw material export supply contracts?', 
    answer: 'Yes, we establish legal contract farming structures for international wholesale aggregators, strictly adhering to global phytosanitary compliance codes.',
    icon: '🚢'
  },

  // 🟢 ক্যাটাগরি ৭: ACCOUNT & SUPPORT (অ্যাকাউন্ট ও সার্বক্ষণিক সাপোর্ট)
  { 
    id: 19, 
    category: 'account', 
    question: 'How can I access 24/7 technical emergency assistance?', 
    answer: 'Our active operations support desk can be reached instantly via our certified hotline (+880 1777-999222) or official helpdesk parameters for immediate field-level guidance.',
    icon: '📞'
  },
  { 
    id: 20, 
    category: 'account', 
    question: 'Is my enterprise data completely secure inside BAFAF networks?', 
    answer: 'Absolutely. All supplier records, order history tokens, and payment ledger files are protected by high-standard data safety frameworks and strict confidentiality protocols.',
    icon: '🔒'
  }
];
