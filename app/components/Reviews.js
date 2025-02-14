"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    { src: "/reviews/qrmedic.svg", alt: "qrmedic", mr: "mr-1 md:mr-4" },
    { src: "/reviews/pineamite.svg", alt: "pineamite", mr: "mr-2 md:mr-6" },
    { src: "/reviews/next.svg", alt: "next", mr: "mr-2 md:mr-6" },
    { src: "/reviews/qoves.svg", alt: "qoves", mr: "mr-2 md:mr-6" },
  ];


  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
      name: "Mark Jacob",
      role: "CEO PRIMA.td",
      avatar: "/reviews/avatar.svg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
      name: "Jane Doe",
      role: "Manager at Example",
      avatar: "/reviews/avatar.svg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
      name: "John Smith",
      role: "CTO ExampleTech",
      avatar: "/reviews/avatar.svg",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsAnimating(false);
      }, 1000); // Match CSS transition duration
    }, 4000); // 4 seconds per review

    return () => clearInterval(interval);
  }, [reviews.length]);


  return (
    <>
      <div>
        {/* Desktop View */}
        <div className="bg-black ">
          <div id="our-clients" className="overflow-hidden">
            <div className="flex animate-marquee gap-x-6">
              {Array(3)
                .fill(images)
                .flat()
                .map((image, index) => (
                  <div key={index}  className={`flex-shrink-0 ${image.mr}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      // Set a fixed width, and add a max-height
                      className="w-44 lg:w-60 xl:w-80 2xl:w-96  object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center xl:pt-24 2xl:px-32 2xl:pt-72 pt-32 px-16">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <h1 className="font-RedHatDisplay text-white text-center pt-20 text-2xl 2xl:text-6xl xl:px-80 2xl:px-96">
              "We deliver expert technology solutions, driving innovation and excellence
              across industries."
            </h1>
          </div>
          <div className="pt-20 px-14 2xl:px-80">
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
