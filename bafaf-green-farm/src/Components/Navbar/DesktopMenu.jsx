/*
===========================================
File Path      : Src/Components/Navbar/DesktopMenu.jsx
Component Name : DesktopMenu
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import NavbarMenu from "../../Data/Navbar";
import ProductsMegaMenu from "./ProductsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";

function DesktopMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setActiveDropdown(null);
  };

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {NavbarMenu.map((item) => {
          const isProducts = item.title.toLowerCase().includes("product");
          const isServices = item.title.toLowerCase().includes("service");
          const hasMegaMenu = isProducts || isServices || item.dropdown;

          return (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                    relative
                    flex
                    items-center
                    gap-2
                    h-[90px]
                    text-[16px]
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isActive
                        ? "text-[#A3D13A]"
                        : "text-white"
                    }
                  `
                }
              >
                {/* Menu Title */}
                <span
                  className={`
                    transition-all
                    duration-300
                    ${item.hoverColor || "hover:text-[#A3D13A]"}
                    group-hover:-translate-y-[2px]
                  `}
                >
                  {item.title}
                </span>

                {hasMegaMenu && (
                  <FaChevronDown
                    className={`
                      text-[10px]
                      transition-all
                      duration-300
                      ${
                        activeDropdown === item.id
                          ? "rotate-180 text-[#A3D13A]"
                          : "group-hover:rotate-180 group-hover:text-[#A3D13A]"
                      }
                    `}
                  />
                )}

                {/* Hover Underline */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-5
                    h-[3px]
                    w-0
                    rounded-full
                    bg-[#A3D13A]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </NavLink>

              {/* Render Mega Menus */}
              {isProducts && activeDropdown === item.id && (
                <div className="absolute top-[85px] -left-64 z-[1000]">
                  <ProductsMegaMenu closeMenu={closeMenu} />
                </div>
              )}

              {isServices && activeDropdown === item.id && (
                <div className="absolute top-[85px] -left-48 z-[1000]">
                  <ServicesMegaMenu closeMenu={closeMenu} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DesktopMenu;