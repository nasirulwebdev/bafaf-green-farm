/*
===========================================
Component Name : Home
Project        : BAFAF Green Farm
File Path      : src/Components/Home/Home.jsx
===========================================
*/

import React from "react";

// Sub-sections Import
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ProductSection from "./ProductSection";
import StatisticsSection from "./StatisticsSection";
import GallerySection from "./GallerySection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="home-page overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Service Section */}
      <ServiceSection />

      {/* 4. Product Section */}
      <ProductSection />

      {/* 5. Statistics Section */}
      <StatisticsSection />

      {/* 6. Gallery Section */}
      <GallerySection />

      {/* 7. Testimonial Section */}
      <TestimonialSection />

      {/* 8. FAQ Section */}
      <FaqSection />

      {/* 9. Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;