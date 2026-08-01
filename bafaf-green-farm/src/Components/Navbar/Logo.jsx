/*
===========================================
Component Name : Logo
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { Link } from "react-router-dom";
import LogoImage from "../../assets/Logo/Logo.png";


function Logo() {

    return (

        <Link

            to="/"

            className="
                flex
                items-center

                transition-all
                duration-300

                hover:scale-[1.03]
            "

        >

            <img

                src={LogoImage}

                alt="BAFAF Green Farm"

                className="
                    h-[70px]
                    w-[70px]

                    object-contain
                "

            />

        </Link>

    );

}


export default Logo;