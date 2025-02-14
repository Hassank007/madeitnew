"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useQuote } from "../context/QuoteContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { selectedService, handleSelectService } = useQuote();

  const tabs = [
    {
      id: "tab1",
      label: "Augmented & Virtual Reality",
      activeIcon: "/services/ai-active.svg",
      inactiveIcon: "/services/ai.svg",
      image: "/services/ar.svg",
      description:
        "Transform the way you interact with digital content. We craft immersive AR and VR solutions tailored to your business needs, enhancing engagement and creating unforgettable experiences.",
      features: [
        "Immersive Virtual Tours",
        "AR Product Visualization",
        "Interactive Training Simulations",
      ],
    },
    {
      id: "tab2",
      label: "Artificial Intelligent Solutions",
      activeIcon: "/services/helmet-active.svg",
      inactiveIcon: "/services/helmet.svg",
      image: "/services/aimain.jpg",
      description:
        "Leverage the power of AI to drive innovation and automate processes. Our AI solutions help businesses enhance decision-making, customer experience, and operational efficiency.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "AI-Powered Chatbots",
      ],
    },
    {
      id: "tab3",
      label: "Mobile App Development",
      activeIcon: "/services/mobile-active.svg",
      inactiveIcon: "/services/mobile.svg",
      image: "/services/mobilemain.webp",
      description:
        "Build innovative and user-friendly mobile applications. From concept to deployment, we deliver apps that are feature-rich, responsive, and tailored to your target audience.",
      features: [
        "iOS and Android Development",
        "Cross-Platform Apps",
        "Custom App Design and Development",
      ],
    },
    {
      id: "tab4",
      label: "Web Development",
      activeIcon: "/services/code-active.svg",
      inactiveIcon: "/services/code.svg",
      image: "/services/codemain.webp",
      description:
        "Tailored software solutions to meet your unique business requirements. We design and develop high-quality software systems that scale with your needs.",
      features: [
        "Enterprise Software",
        "Custom Web Applications",
        "API Integration and Development",
      ],
    },
  ];

  const handleTabClick = (tabId) => setActiveTab(tabId);

  // Scroll to contact section function.
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = (service) => {
    const selectedServicesArr = Array.isArray(selectedService)
      ? selectedService
      : [];

    // Dismiss any existing toast notifications.
    toast.dismiss();

    if (selectedServicesArr.includes(service)) {
      handleSelectService(service); // toggle off
      toast.error("Your service is deselected!", {
        position: "top-center",
      });
      return;
    }

    handleSelectService(service);

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-white border p-4 rounded-md shadow-md text-black flex items-center justify-between`}
        >
          <div>
            <div className="font-bold font-RedHatDisplay">
              You selected: {service}
            </div>
            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  scrollToContact(e);
                  toast.dismiss(t.id);
                }}
                className="text-blue-500 underline font-RedHatDisplay"
              >
                Click here to contact us
              </a>
            </div>
          </div>
          <button onClick={() => toast.dismiss(t.id)} className="ml-4">
            ✕
          </button>
        </div>
      ),
      { duration: 5000 }
    );
  };

  const activeService = tabs.find((tab) => tab.id === activeTab);

  return (
    <div
      id="services"
      className="flex flex-col bg-black items-center justify-center py-10"
    >
      <Toaster />
      <h1 className="font-RedHatDisplay text-gray-400 text-lg">
        Assurance of the best
      </h1>
      <h1 className="font-RedHatDisplay text-white text-center font-bold text-4xl pb-4">
        Services we provide to{" "}
        <span className="text-teal-500">help you grow</span>
      </h1>

      <div className="flex flex-col items-center bg-black text-white py-10">
        {/* Tab buttons */}
        <div className="flex space-x-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-md ${
                activeTab === tab.id ? "text-white" : "text-gray-400"
              }`}
            >
              <img
                src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon}
                alt={`${tab.label} icon`}
                className={`w-10 h-10 transition-transform transform ${
                  activeTab === tab.id ? "scale-110" : "scale-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Fixed container to prevent layout shifts */}
        <div className="w-full max-w-6xl min-h-[500px]">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <Image
                src={activeService.image}
                alt={activeService.label}
                width={600}
                height={400}
                className="rounded-lg transition-transform hover:scale-110 ease-in-out cursor-pointer duration-300"
              />
            </div>

            {/* Text and Button Section */}
            <div className="flex flex-col items-start justify-start gap-5 font-RedHatDisplay">
              <h2 className="text-4xl font-bold font-RedHatDisplay">
                {activeService.label}&nbsp;
                <span>
                  <button
                    onClick={() => handleQuoteClick(activeService.label)}
                    className={`transition-all delay-100 text-white text-sm px-4 py-1 rounded-full inline-block relative -top-1 md:left-0 ${
                      Array.isArray(selectedService) &&
                      selectedService.includes(activeService.label)
                        ? "bg-teal-500"
                        : "bg-transparent border border-teal-500 hover:bg-teal-500"
                    }`}
                  >
                    Select
                  </button>
                </span>
              </h2>
              <p className="mt-4 text-gray-400">{activeService.description}</p>
              <ul className="list-disc ml-5 mt-5 text-white">
                {activeService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
