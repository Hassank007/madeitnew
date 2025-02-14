import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Contact";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black w-full">
        <div className="flex flex-col items-center justify-center md:pt-32 pt-7 pb-10">
          <div>
            <img src="/camsense/logo.svg" className="md:w-[16rem]" />
          </div>
          <h1 className="font-RedHatDisplay text-white text-sm md:text-lg lg:text-xl py-3 text-center px-8">
            Catch and prevent theft before it happen
          </h1>
        </div>
        <div>
          <h1 className="font-RedHatDisplay text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
            Key Features
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4   md:gap-5 px-10 py-6 md:px-44 ">
          <div className="flex items-center justify-center py-3">
            <div className="bg-[#4A4A4A54] flex items-center justify-center w-full rounded-2xl p-6 md:p-16 md:rounded-full">
              <h1 className="font-RedHatDisplay text-white text-sm md:text-lg lg:text-2xl text-center">
                Camsense is a retail-focused vertical AI agent that seamlessly
                integrates with your existing CCTV setup to detect
                shoplifting in real time
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center py-3">
            <div className="bg-[#4A4A4A54] flex items-center justify-center w-full rounded-2xl p-6 md:p-16 md:rounded-full">
              <h1 className="font-RedHatDisplay text-white text-sm md:text-lg lg:text-2xl text-center">
                It provides instant alerts, detailed theft analytics, and
                cost-saving reports via our all-in-one desktop application.
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center py-3">
            <div className="bg-[#4A4A4A54] flex items-center justify-center w-full rounded-2xl p-6 md:p-16 md:rounded-full">
              <h1 className="font-RedHatDisplay text-white text-sm md:text-lg lg:text-2xl text-center">
                It tracks known shoplifters and works with law enforcement to
                alert you when a potential offender enters, preventing
                theft proactively.
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/camsense/Laptop.png"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
{/* 
        <div className="flex flex-row justify-center items-center px-10 py-10">
          <img src="/camsense/badge.svg" />
          <h1 className="font-RedHatDisplay text-white text-sm md:text-lg lg:text-2xl text-center md:pl-10">
            One of 12 billion solution trusted in 20 countries across globe
          </h1>
        </div> */}
        <div className="flex items-center justify-center w-full my-6">
          <hr className="flex-grow border-teal-500" />
          <span className="px-4 text-lg md:text-2xl font-semibold font-RedHatDisplay italic text-white ">
            View More Projects
          </span>
          <hr className="flex-grow border-teal-500" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center pb-20">
          <img src="/camsense/qrmedic.svg" />
          <h1 className="font-RedHatDisplay text-white font-bold text-xl md:text-lg lg:text-xl py-3 text-center px-8">
            QRMEDIC
          </h1>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default page;
