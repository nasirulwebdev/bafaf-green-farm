import { Outlet } from "react-router-dom";

import ScrollToTop from "@/Components/Common/ScrollToTop";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />

            <Navbar />

            {/* pt-32 (128px) এবং বড় স্ক্রিনে pt-36 (144px) দেওয়া হলো যাতে কন্টেন্ট নেভবারের নিচে না ঢোকে */}
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;