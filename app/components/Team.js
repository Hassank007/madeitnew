"use client";
import React, { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EmblaCarousel from "embla-carousel";

const TEMPORARY_DATA = [
  {
    id: 1,
    title: "Muhammad Abdullah Baig",
    description: "CEO & Co-Founder",
    image: "/teams/abdullah.jpg",
  },
  {
    id: 2,
    title: "Hafiz Muhammad Safiullah",
    description: "CTO & Co-Founder",
    image: "/teams/saifi.webp",
  },
  {
    id: 3,
    title: "Adil Jamil",
    description: "Unity Developer",
    image: "/teams/adil.jpg",
  },
  {
    id: 4,
    title: "Ayesha Rasool",
    description: "HR",
    image: "/teams/ayesha.jpg",
  },
  {
    id: 5,
    title: "Wardah Azhar",
    description: "UI/UX Designer",
    image: "/teams/wardah.png",
  },
  {
    id: 6,
    title: "Hassan Ahmed",
    description: "Web Developer",
    image: "/teams/hassan.jpg",
  },
];

const Team = () => {
  const emblaDesktopRef = useRef(null);
  const emblaMobileRef = useRef(null);
  const emblaDesktopInstance = useRef(null);
  const emblaMobileInstance = useRef(null);

  useEffect(() => {
    if (emblaDesktopRef.current) {
      emblaDesktopInstance.current = EmblaCarousel(emblaDesktopRef.current, {
        align: "start",
        slidesToScroll: 1,
        loop: true,
      });
    }
    if (emblaMobileRef.current) {
      emblaMobileInstance.current = EmblaCarousel(emblaMobileRef.current, {
        align: "start",
        slidesToScroll: 1,
        loop: true,
      });
    }
    return () => {
      emblaDesktopInstance.current?.destroy();
      emblaMobileInstance.current?.destroy();
    };
  }, []);

  const scrollPrevDesktop = () => emblaDesktopInstance.current?.scrollPrev();
  const scrollNextDesktop = () => emblaDesktopInstance.current?.scrollNext();

  const scrollPrevMobile = () => emblaMobileInstance.current?.scrollPrev();
  const scrollNextMobile = () => emblaMobileInstance.current?.scrollNext();

  return (
    <div id="our-team" className="flex flex-col bg-black items-center justify-center pb-20 pt-32">
      <h1 className="font-RedHatDisplay text-white text-center font-bold text-4xl pb-4">
        Meet the <span className="text-teal-500">Team</span>
      </h1>
      <h1 className="font-RedHatDisplay text-gray-400 text-lg">The minds backstage</h1>
      <div className="relative w-full overflow-hidden lg:px-9 xl:px-32 2xl:px-96 py-10">
        {/* Carousel Viewport for Desktop */}
        <div className="embla__viewport1 lg:block hidden" ref={emblaDesktopRef}>
          <div className="embla__container1 flex">
            {/* Slides */}
            {TEMPORARY_DATA.map((item) => (
              <div key={item.id} className="embla__slide1 p-4 flex justify-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg w-72">
                  <div className="flex flex-col items-center justify-start p-4 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[250px] max-w-[450px] mb-4 rounded-xl object-cover"
                    />
                    <div className="text-start w-full">
                      <h3 className="text-sm p-2 font-Montserrat w-fit font-bold text-white ">
                        {item.title}
                      </h3>
                      <p className="text-xs p-2 font-Montserrat text-[#A1A1A1]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Viewport */}
        <div className="embla__viewport lg:hidden block" ref={emblaMobileRef}>
          <div className="embla__container flex">
            {/* Slides */}
            {TEMPORARY_DATA.map((item) => (
              <div key={item.id} className="embla__slide p-4">
                <div className="relative rounded-lg overflow-hidden shadow-lg w-60">
                  <div className="flex flex-col items-center justify-start p-4 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="min-h-[150px] min-w-[150px] mb-4 rounded-xl object-cover"
                    />
                    <div className="text-start w-full">
                      <h3 className="text-sm p-4 font-Montserrat w-fit font-bold text-white ">
                        {item.title}
                      </h3>
                      <p className="text-xs pt-2 pl-2 font-Montserrat text-[#A1A1A1]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons for Desktop */}
        <button
          className="absolute left-2 2xl:left-80 lg:left-10 xl:left-32 top-1/2 transform -translate-y-1/2 bg-transparent text-teal-500 w-10 aspect-square rounded-full flex items-center justify-center border border-teal-400 hover:bg-gray-700 z-10 "
          onClick={scrollPrevDesktop}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="absolute right-2 2xl:right-80 lg:right-10 xl:right-32 top-1/2 transform -translate-y-1/2 bg-transparent text-teal-500 w-10 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 border border-teal-400  z-10"
          onClick={scrollNextDesktop}
        >
          <IoIosArrowForward size={24} />
        </button>

        {/* Navigation Buttons for Mobile */}
        <button
          className="absolute left-2  top-1/2 transform -translate-y-1/2 bg-transparent text-teal-500 w-10 aspect-square rounded-full flex items-center justify-center border border-teal-400 hover:bg-gray-700 z-10 lg:hidden"
          onClick={scrollPrevMobile}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-teal-500 w-10 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 border border-teal-400 z-10 lg:hidden"
          onClick={scrollNextMobile}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Team;
