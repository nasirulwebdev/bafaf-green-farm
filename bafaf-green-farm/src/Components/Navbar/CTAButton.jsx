/*
===========================================
Component Name : CTAButton
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
Author         : MD NASIRUL ISLAM NAHID
===========================================
*/

import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

function CTAButton() {

    return (

        <Link

            to="/contact"

            className="

                group

                relative

                inline-flex
                items-center
                justify-center
                gap-3

                h-[52px]

                px-7

                rounded-full

                bg-white

                text-[#0B7A3E]

                font-semibold
                text-[15px]

                border
                border-white

                shadow-lg

                overflow-hidden

                transition-all
                duration-300
                ease-in-out

                hover:bg-[#A3D13A]
                hover:text-[#1A1A1A]

                hover:shadow-2xl

                hover:-translate-y-[2px]

            "

        >

            {/* Shine Effect */}

            <span

                className="

                    absolute

                    left-[-120%]
                    top-0

                    h-full
                    w-[60%]

                    rotate-12

                    bg-white/40

                    transition-all
                    duration-700

                    group-hover:left-[140%]

                "

            />



            {/* Phone Icon */}

            <HiOutlinePhone

                className="

                    text-[20px]

                    transition-transform
                    duration-300

                    group-hover:rotate-12
                    group-hover:scale-110

                "

            />



            {/* Text */}

            <span>

                Call For Inquiry

            </span>



            {/* Arrow */}

            <FaArrowRightLong

                className="

                    text-[15px]

                    transition-all
                    duration-300

                    group-hover:translate-x-2

                "

            />

        </Link>

    );

}

export default CTAButton;