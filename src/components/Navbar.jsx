import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

import logo from "../assets/images/logo.svg";
import bgdesk from "../assets/images/image-hero-desktop.jpg";
import bgmobile from "../assets/images/image-hero-mobile.jpg";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <img
        src={windowWidth <= 575 ? bgmobile : bgdesk}
        className="w-full object-cover"
        alt="bgdesk"
      />
      <nav className="flex absolute top-12 w-full z-20">
        <div className="relative">
          <a
            href="/"
            className="flex justify-start relative left-24 z-10 max-md:left-4"
          >
            <img src={logo} alt="Logo" className="w-40" />
          </a>
        </div>
        <ul
          className={`flex justify-end w-full relative right-20 max-md:flex-col max-md:justify-center max-md:top-16 max-md:bg-white max-md:shadow-lg max-md:items-center rounded-lg max-md:${
            !isOpen ? "hidden" : "flex"
          }
          ${!isOpen ? "flex" : "hidden"}`}
        >
          <a
            href="/"
            className="text-white mr-7 cursor-pointer transition-all duration-500 hover:text-[14px] max-md:text-black max-md:mr-0 p-4 md:pt-0"
          >
            <li>About</li>
          </a>
          <a
            href="/"
            className="text-white mr-7 cursor-pointer transition-all duration-500 hover:text-[14px] max-md:text-black max-md:mr-0 p-4 md:pt-0"
          >
            <li>Discover</li>
          </a>
          <a
            href="/"
            className="text-white cursor-pointer transition-all duration-500 hover:text-[14px] max-md:text-black p-4 md:pt-0"
          >
            <li>GetStarted</li>
          </a>
        </ul>
        <div className="text-white absolute max-md:right-16 md:hidden max-md:flex">
          <Hamburger size={22} toggled={isOpen} toggle={toggleMenu} />
        </div>
      </nav>
    </div>
  );
}
