"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Hix from "./icons/Hix";

const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10  ${
        isTop
          ? "bg-transparent"
          : "border-solid bg-primary bg-opacity-80 drop-shadow-2xl backdrop-blur-lg backdrop-filter"
      } 
      ${
        isTop ? " text-black" : "text-white"
      } mx-md navbar transition-all duration-500 ease-in-out`}
    >
      <div className="flex-1 px-1">
        <div style={{ fontFamily: "Sifonn" }}>
          <Link href="/" className="ml-3 text-3xl">
            Eveki
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <nav className="menu menu-horizontal px-1">
          <div className="hidden lg:flex" >
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Second Link
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Third Link
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Fourth Link
          </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button className="mobile-menu-button outline-none ">
              {isMenuOpen ? <Hix /> : <Hix />}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
