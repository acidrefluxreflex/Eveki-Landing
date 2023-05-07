"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Spacer from "./base/Spacer";


const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

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
        isTop ? "bg-transparent" : "bg-primary backdrop-blur-lg backdrop-filter bg-opacity-80 drop-shadow-2xl border-solid"
      } 
      ${
        isTop ? " text-black" : "text-white"
      } transition-all duration-500 ease-in-out navbar mx-md`}
    >
 
        <div className="flex-1 px-1">
        
          <div  style={{ fontFamily: "Sifonn" }}>
          <Link href="/" className="ml-3 text-3xl">Eveki</Link>
          </div>
        </div>
        

        <div className="flex-none">
        <nav className="menu menu-horizontal px-1">
          <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/" className="mr-5 hover:text-gray-900">Second Link</Link>
          <Link href="/" className="mr-5 hover:text-gray-900">Third Link</Link>
          <Link href="/" className="mr-5 hover:text-gray-900">Fourth Link</Link>
        </nav>
        </div>
      </div>

  );
};

export default Navbar;
