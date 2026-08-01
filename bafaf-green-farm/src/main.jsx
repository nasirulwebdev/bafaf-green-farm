import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "@/Styles/Index.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    newestOnTop
                    theme="colored"
                />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);