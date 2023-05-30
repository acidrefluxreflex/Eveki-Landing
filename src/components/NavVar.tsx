"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Hix from "./icons/Hix";

const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 max-w-full  ${
        isTop
          ? "bg-transparent"
          : "border-solid bg-primary bg-opacity-80 drop-shadow-2xl backdrop-blur-lg backdrop-filter"
      } 
      ${
        isTop ? " text-black" : "text-white"
      } mx-md navbar items-center transition-all duration-500 ease-in-out`}
    >
      <div className="m-0 flex-1 px-1 pt-1">
        <div style={{ fontFamily: "Sifonn" }}>
          <Link href="/" className="ml-3 text-3xl">
            Eveki
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <nav className="menu menu-horizontal px-1 font-medium">
          <div className="hidden lg:flex">
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/product" className="mr-5 hover:text-gray-900">
              Product
            </Link>
            <Link href="/blog" className="mr-5 hover:text-gray-900">
              Blog
            </Link>
         
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="dropdown-end dropdown mx-2">ƒ
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box glass menu-compact mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/about" className="mr-5 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
              <Link href="/blog" className="mr-5 hover:text-gray-900">
              Blog
            </Link>
              </li>
              <li>
              <Link href="/" className="mr-5 hover:text-gray-900">
              Document
            </Link>
              </li>
              <li>
              <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
