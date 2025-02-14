"use client";
import React from "react";
import Navbar from "./Navbar";
import { useContact } from "../context/ContactContext"; // Ensure correct import path
import toast, { Toaster } from "react-hot-toast"; // Import toast

const Hero = () => {
  const { selectedContact, setSelectedContact } = useContact();

  const handleSelectContact = (journey) => {
    // If the clicked journey is already selected, clear the selection.
    if (selectedContact === journey) {
      setSelectedContact("");
      toast.dismiss();
      toast.error("Your Journey is deselected!", {
        position: "top-center",
      });
      return;
    }

    // Otherwise, update the selected journey and show the toast.
    setSelectedContact(journey);
    toast.dismiss();
    toast.success("Your Journey is selected!", {
      position: "top-center",
    });
  };

  return (
    <div
    id="home"
    className="relative bg-black bg-[url('/hero-bg.svg')] bg-no-repeat bg-center bg-cover min-h-screen"
  >
    {/* Navbar */}
    <Navbar />
  
    {/* Hero Icons */}
    <div
      className="absolute inset-0 sm:top-20 2xl:top-48 top-28 sm:w-full w-full z-30 bg-no-repeat sm:bg-top 
                 bg-[url('/hero-icons.svg')] sm:h-[calc(60%-0.5rem)] h-[calc(100%-0.5rem)]
                 xl:h-[calc(60%-0.5rem)] 
                 bg-contain sm:bg-auto 
                 2xl:bg-[length:35%]"
    ></div>
  
    {/* Content */}
    <div className="flex flex-col items-center justify-center pt-72 z-10 space-y-4 md:pt-64 sm:pt-72 s:pt-72 lg:pt-[27rem] xl:pt-96 2xl:pt-[42rem]">
      <div className="flex flex-col items-center justify-center px-10 sm:pb-5">
        <h3 className="font-RedHatDisplay text-teal-500 text-xs md:text-lg s:text-md xl:text-2xl text-center">
          Empowering Tomorrow Through Technologya
        </h3>
        <h1 className="font-RedHatDisplay text-white text-2xl md:text-7xl s:text-4xl xl:text-8xl font-bold xl:pt-2">
          Code Revolution
        </h1>
      </div>
  
      <div className="text-center xl:pt-5 sm:pb-7">
        <h1 className="font-RedHatDisplay text-white text-lg sm:text-xl 2xl:text-5xl xl:pb-5">
          Select your Journey
        </h1>
        <div className="flex flex-wrap md:flex-row justify-center xl:gap-20 gap-5 mt-4">
          <button
            onClick={() => handleSelectContact("Idea to Prototype")}
            className={`font-RedHatDisplay italic px-3 py-1 sm:px-4 sm:py-2 rounded-full transition duration-300 ease-in-out text-sm sm:text-2xl xl:text-2xl 2xl:text-5xl ${
              selectedContact === "Idea to Prototype"
                ? "bg-button text-white"
                : "bg-gray-700 text-white hover:bg-teal-500"
            }`}
          >
            Idea to Prototype
          </button>
          <button
            onClick={() => handleSelectContact("Prototype to Product")}
            className={`font-RedHatDisplay italic px-3 py-1 sm:px-4 sm:py-2 rounded-full transition duration-300 ease-in-out text-sm sm:text-2xl xl:text-2xl 2xl:text-5xl ${
              selectedContact === "Prototype to Product"
                ? "bg-button text-white"
                : "bg-gray-700 text-white hover:bg-teal-500"
            }`}
          >
            Prototype to Product
          </button>
          <button
            onClick={() => handleSelectContact("Enhance a Product")}
            className={`font-RedHatDisplay italic px-3 py-1 sm:px-4 sm:py-2 rounded-full transition duration-300 ease-in-out text-sm sm:text-2xl xl:text-2xl 2xl:text-5xl ${
              selectedContact === "Enhance a Product"
                ? "bg-button text-white"
                : "bg-gray-800 text-white hover:bg-teal-500"
            }`}
          >
            Enhance a Product
          </button>
        </div>
      </div>
    </div>

      {/* Toaster for Notifications */}
      <Toaster />
    </div>
  );
};

export default Hero;
