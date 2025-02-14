"use client";
import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-20 pl-10 md:pl-0">
      <div className="container mx-auto flex flex-col space-y-6 pt-20 md:px-20">
        {/* Logo */}
        <div className="flex md:items-center md:justify-center text-2xl font-bold md:pb-14">
          <img src="./logo-m.svg" alt="Logo" className="w-40" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between xl:justify-center  md:pb-14 pt-7 md:pt-0 ">
          {/* Email */}
          <div className="flex items-center space-x-5 xl:pr-48">
            <FaEnvelope className="text-teal-400 md:text-2xl" />
            <span className="font-RedHatDisplay ">info@madeitventures.com</span>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-5 xl:pr-44">
            <FaMapMarkerAlt className="text-teal-400 md:text-2xl" />
            <span className="font-RedHatDisplay ">Rawalpindi, Pakistan</span>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center space-x-5 xl:pl-16 xl:mr-10 ">
           
            <FaLinkedinIn className="text-teal-400 md:text-2xl" />
            <a href="https://www.linkedin.com/company/madeitventures" target="_blank">
            <span className="font-RedHatDisplay  cursor-pointer">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="bg-teal-500 h-[0.1px] w-full container mx-auto hidden md:block"></div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:justify-between  md:items-center">
          {/* Navigation Links Container */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 text-sm font-medium pt-7 md:pt-0">
            <Link href="#home">
              <span className="hover:text-teal-400 transition-colors font-RedHatDisplay">
                Home
              </span>
            </Link>
            <Link href="#our-team">
              <span className="hover:text-teal-400 transition-colors font-RedHatDisplay">
                Our Team
              </span>
            </Link>
            <Link href="#services">
              <span className="hover:text-teal-400 transition-colors font-RedHatDisplay">
                Services
              </span>
            </Link>
            <Link href="#our-clients">
              <span className="hover:text-teal-400 transition-colors font-RedHatDisplay">
                Our Clients
              </span>
            </Link>
            <Link href="#contact">
              <span className="hover:text-teal-400 transition-colors font-RedHatDisplay">
                Contact
              </span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white font-RedHatDisplay mt-4 md:mt-0 pt-7 md:pt-0">
            &copy; {new Date().getFullYear()} - MADEIT
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
