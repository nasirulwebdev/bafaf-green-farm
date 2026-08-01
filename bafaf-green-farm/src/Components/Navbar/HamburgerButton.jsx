/*
===========================================
Component Name : HamburgerButton
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { Squash as Hamburger } from "hamburger-react";

function HamburgerButton({

    toggled,

    toggle,

}) {

    return (

        <button

            type="button"

            aria-label="Toggle Mobile Menu"

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

            "

        >

            <Hamburger

                toggled={toggled}

                toggle={toggle}

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