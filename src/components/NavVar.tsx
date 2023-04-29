"use client";
import React, { useState, useEffect } from "react";

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
    <header
      className={`fixed top-0 z-10 w-full ${
        isTop ? "bg-transparent" : "bg-blue-500"
      } text-white transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3L4 5v7c0 6 8 10 8 10z"></path>
          </svg>
          <span className="ml-3 text-xl">Eveki</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
