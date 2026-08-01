/*
===========================================
Component Name : SearchButton
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { FaSearch } from "react-icons/fa";

function SearchButton() {

    const handleSearch = () => {
        console.log("Open Search Modal");
    };

    return (

        <button
            onClick={handleSearch}
            className="
                h-full
                w-11
                flex
                items-center
                justify-center
                hover:bg-white/10
                transition-all
                duration-300
            "
        >

            <FaSearch />

        </button>

    );

}

export default SearchButton;