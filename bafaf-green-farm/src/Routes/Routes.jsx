import { Routes, Route } from "react-router-dom";

import MainLayout from "@/Layouts/MainLayout";

import Home from "@/Pages/Home/Home";
import About from "@/Pages/About/About";
import Services from "@/Pages/Services/Services";
// আপনার প্রজেক্টের স্ট্যান্ডার্ড মেনে শর্টকাট পাথ (@/) দিয়ে ইমপোর্ট ঠিক করা হলো
import ServiceDetails from "@/Pages/Services/ServiceDetails"; 
import Products from "@/Pages/Products/Products";
import ProductsDetails from "@/Pages/Products/ProductsDetails"; 
import Gallery from "@/Pages/Gallery/Gallery";
import GalleryDetails from "@/Pages/Gallery/GalleryDetails";
import FAQ from "@/Pages/FAQ/FAQ";
import Contact from "@/Pages/Contact/Contact";
import NotFound from "@/Pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path="about" element={<About />} />

                <Route path="services" element={<Services />} />
                
                {/* ডাইনামিক সার্ভিস ডিটেইলস রাউট (আপনার মেইন লেআউটের চাইল্ড হিসেবে যুক্ত হলো) */}
                <Route path="services/:slug" element={<ServiceDetails />} />
                
                <Route path="products" element={<Products />} />

                {/* ডাইনামিক প্রোডাক্ট ডিটেইলস রাউট */}
                <Route path="products/:productId" element={<ProductsDetails />} />

                <Route path="gallery" element={<Gallery />} />
                <Route path="gallery/:id" element={<GalleryDetails />} />

                <Route path="faq" element={<FAQ />} />

                <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
