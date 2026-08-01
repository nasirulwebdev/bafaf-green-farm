/*
===========================================
Component Name : CurrencyDropdown
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState } from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";

function CurrencyDropdown() {

    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    const currencies = [

        { code: "BDT", country: "Bangladesh", symbol: "৳" },

        { code: "USD", country: "United States", symbol: "$" },

        { code: "EUR", country: "Europe", symbol: "€" },

        { code: "GBP", country: "United Kingdom", symbol: "£" },

        { code: "CAD", country: "Canada", symbol: "C$" },

        { code: "AUD", country: "Australia", symbol: "A$" },

        { code: "JPY", country: "Japan", symbol: "¥" },

        { code: "CNY", country: "China", symbol: "¥" },

        { code: "INR", country: "India", symbol: "₹" },

        { code: "SGD", country: "Singapore", symbol: "S$" }

    ];

    return (

        <div className="dropdown dropdown-end h-full">

            <label
                tabIndex={0}
                className="
                    flex
                    items-center
                    gap-2
                    h-full
                    px-4
                    cursor-pointer
                    hover:bg-white/10
                    transition-all
                    duration-300
                "
            >

                <FaGlobe />

                <span className="text-sm">

                    {selectedCurrency}

                </span>

                <FaChevronDown className="text-xs" />

            </label>

            <ul
                tabIndex={0}
                className="
                    dropdown-content
                    z-[999]
                    mt-1
                    w-64
                    rounded-xl
                    bg-base-100
                    shadow-xl
                    border
                    border-base-300
                    p-2
                "
            >

                {

                    currencies.map((currency) => (

                        <li key={currency.code}>

                            <button

                                onClick={() => setSelectedCurrency(currency.code)}

                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    rounded-lg
                                    hover:bg-base-200
                                    transition-all
                                    duration-300
                                "

                            >

                                <div className="flex flex-col items-start">

                                    <span className="font-medium">

                                        {currency.code}

                                    </span>

                                    <span className="text-xs text-gray-500">

                                        {currency.country}

                                    </span>

                                </div>

                                <span>

                                    {currency.symbol}

                                </span>

                            </button>

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default CurrencyDropdown;