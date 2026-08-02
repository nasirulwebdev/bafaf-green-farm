// File Path: Src/Components/Navbar/HamburgerButton.jsx

import { Squash as Hamburger } from "hamburger-react";

function HamburgerButton({ isOpen, setIsOpen }) {
    return (
        <button
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="
                lg:hidden
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-xl
                text-white
                transition-all
                duration-300
                hover:bg-white/10
                active:scale-95
                cursor-pointer
                z-[10001]
            "
        >
            <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={22}
                color="#FFFFFF"
                rounded
                duration={0.4}
                distance="md"
            />
        </button>
    );
}

export default HamburgerButton;
