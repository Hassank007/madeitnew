"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Generic scroll function that takes a section ID
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="lg:block hidden">
        <div className="bg-transparent w-full h-20 flex items-center justify-center z-50 fixed top-0 left-0 right-0">
          <div className="flex w-full items-center justify-between px-8">
            <div className="flex items-center cursor-pointer">
              <Link href="/">
                <img src="/logo-m.svg" alt="Logo" />
              </Link>
            </div>
            <div>
              <ul className="text-white flex flex-row items-center justify-center space-x-4 font-RedHatDisplay">
                <Link href="#home" onClick={scrollToSection("home")}>
                  <li className="p-5">Home</li>
                </Link>
                <Link href="#our-team" onClick={scrollToSection("our-team")}>
                  <li className="p-5">Our Team</li>
                </Link>
                <Link href="#services" onClick={scrollToSection("services")}>
                  <li className="p-5">Services</li>
                </Link>
                <Link href="#our-clients" onClick={scrollToSection("our-clients")}>
                  <li className="p-5">Our Clients</li>
                </Link>
                <li className="relative group">
                  <span className="flex items-center justify-between cursor-pointer p-5 gap-1">
                    Products
                    <svg
                      className="w-5 h-5 lg:w-4 lg:h-4 transform group-hover:rotate-180 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <ul className="absolute top-[65%] p-5 space-y-5 -left-20 mt-5 w-80 bg-[#555555] rounded-lg text-black border shadow-lg hidden group-hover:block z-50 group-hover:scale-105 transition-transform duration-300">
                    <li className="cursor-pointer text-sm font-normal text-white font-RedHatDisplay">
                      <Link href="/camsense">
                        <img src="/camsense/logo.svg" alt="Camsense" className="w-24" />
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link href="#contact" onClick={scrollToSection("contact")}>
                  <li className="p-5">Get in Touch</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden block">
        <div className="relative w-full h-14 bg-black text-white">
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full h-12 px-4 bg-black z-50 relative">
            <div className="flex-shrink-0 pt-3">
              <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
                <img src="/hamburger.svg" alt="Menu" />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center pt-2">
              <img src="/logo-m.svg" alt="Logo" />
            </div>
            <div className="flex-shrink-0"></div>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-500 bg-opacity-35 backdrop-blur-lg text-white z-[999] transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col p-4 space-y-6">
              <button onClick={() => setSidebarOpen(false)} className="self-end text-gray-400 focus:outline-none">
                ✕
              </button>

              {/* About Us */}
              <div>
              <Link href="#home">
                <button
                   className="flex items-center justify-between w-full text-md font-RedHatDisplay border-b-2 text-white"
                
                >
                  Home
               </button>
               </Link>
              </div>
              <div>
              <Link href="#our-team">
                <button
                   className="flex items-center justify-between w-full text-md font-RedHatDisplay border-b-2 text-white"
                
                >
                  Our Team
               </button>
               </Link>
              </div>

              {/* Products */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-md font-RedHatDisplay border-b-2"
                  onClick={() => toggleDropdown("product")}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transform ${activeDropdown === "product" ? "rotate-180" : ""} transition-transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "product" && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link href="/camsense">
                      <img src="/camsense/logo.svg" alt="Camsense" className="w-24" />
                    </Link>
                  </div>
                )}
              </div>
              <div>
              <Link href="#service">
                <button
                   className="flex items-center justify-between w-full text-md font-RedHatDisplay border-b-2 text-white"
                
                >
                  Services
               </button>
               </Link>
              </div>
              {/* Services */}
            

              {/* Contact Us */}
              <div>
                <Link href="#contact">
                <button
                   className="flex items-center justify-between w-full text-md font-RedHatDisplay border-b-2 text-white"
                  onClick={() => toggleDropdown("contact")}
                >
                 Get in Touch
               </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
