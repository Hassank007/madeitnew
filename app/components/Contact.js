"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Ensure you've installed this package
import { useContact } from "../context/ContactContext";
import { useQuote } from "../context/QuoteContext";

export default function ContactForm() {
  const formRef = useRef(null);

  // Get data and functions from your custom context providers
  const { selectedContact, setSelectedContact } = useContact();
  const { selectedService, handleSelectService, clearSelectedService } = useQuote();

  // Local state for success/error messages
  const [message, setMessage] = useState("");

  // Define the tags to use for service selection
  const tags = [
    "Augmented and Virtual Reality",
    "Artificial Intelligent Solutions",
    "Web Development",
    "Mobile App Development",
  ];

  // A helper function to normalize strings for consistent comparisons
  const normalizeString = (str) => str.replace(/&/g, "and").trim().toLowerCase();

  // Debug: Log the selected service whenever it changes
  useEffect(() => {
    console.log("Selected Service:", selectedService);
  }, [selectedService]);

  // Convert the selectedService (a comma-separated string) to an array.
  let servicesArray = [];
  if (typeof selectedService === "string" && selectedService.trim() !== "") {
    servicesArray = selectedService.split(",").map((s) => s.trim());
  } else if (Array.isArray(selectedService)) {
    servicesArray = selectedService;
  }

  // Remove duplicate services (if any)
  const uniqueServices = Array.from(new Set(servicesArray));

  // Handler for toggling a tag selection.
  // This allows multiple services to be selected/deselected individually.
  const handleTagClick = (tag) => {
    const normalizedTag = normalizeString(tag);
    // Check if the tag is already selected.
    const exists = uniqueServices.some(
      (service) => normalizeString(service) === normalizedTag
    );

    // Create a new selection array:
    // - If it exists, remove it.
    // - Otherwise, add it.
    let newSelected;
    if (exists) {
      newSelected = uniqueServices.filter(
        (service) => normalizeString(service) !== normalizedTag
        
      );
      uniqueServices.join(", ")

    } else {
      newSelected = [...uniqueServices, tag];
    }

    // Update the context:
    // First, clear the current selection, then re-add each service.
    clearSelectedService();
    newSelected.forEach((service) => {
      handleSelectService(service);
    });
  };

  // Handler to clear all service selections
  const clearAllSelections = () => {
    clearSelectedService();
  };

  // Handler to submit the form and send the email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Log all form entries for debugging
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs
      .sendForm(
        "service_gmail",      // e.g., service_xxx
        "template_ojogmsa",   // e.g., template_yyy
        formRef.current,      // form reference
        "8ein5UeJs6t7Xdu4X"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage("Your message has been sent successfully!");
          // Optionally reset the form fields
          e.target.reset();
          clearAllSelections(); // Clear selected services
          setSelectedContact(""); // Clear the dropdown
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          setMessage("An error occurred while sending your message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-10 md:px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug font-RedHatDisplay">
            Facing a <span className="text-teal-400">challenge?</span>
            <br />
            or <br />
            Ideas to <span className="text-teal-400">envision?</span>
          </h1>
          <p className="mt-4 text-lg font-RedHatDisplay">Contact us now.</p>
          <div className="mt-2 border-b-2 border-teal-400 w-24"></div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-[#121212] p-10 rounded-3xl shadow-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 font-RedHatDisplay"
          >
            {/* Hidden inputs to send context data */}
            <input
              type="hidden"
              name="selectedContact"
              value={selectedContact}
            />
            <input
              type="hidden"
              name="selectedServices"
              value={uniqueServices.join(", ")}
            />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm md:text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name" // This should match the variable in your EmailJS template
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2 text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm md:text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // This should match the variable in your EmailJS template
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2 text-sm"
              />
            </div>

            {/* Dropdown for Contact Category */}
            <div className="relative">
              <select
                id="category"
                value={selectedContact || ""}
                onChange={(e) => setSelectedContact(e.target.value)}
                className="w-full bg-gray-500 border border-gray-600 rounded-full text-gray-white py-2 px-4 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select an Option</option>
                <option value="Enhance a Product">Enhance a Product</option>
                <option value="Idea to Prototype">Idea to Prototype</option>
                <option value="Prototype to Product">Prototype to Product</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Tags for Service Selection */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => {
                const normalizedTag = normalizeString(tag);
                const isSelected = uniqueServices.some(
                  (service) => normalizeString(service) === normalizedTag
                );
                return (
                  <div
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`px-4 py-2 rounded-md text-xs md:text-sm text-center cursor-pointer ${
                      isSelected ? "bg-teal-500 text-black" : "bg-gray-800 text-white"
                    }`}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>

            {/* Button to clear tag selections */}
            {uniqueServices.length > 0 && (
              <button
                type="button"
                onClick={clearAllSelections}
                className="mt-2 px-4 py-2 rounded-full text-xs md:text-sm text-white hover:bg-red-500 transition-colors"
              >
                Clear Selection
              </button>
            )}

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm md:text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // This should match the variable in your EmailJS template
                placeholder="A brief summary or one-liner"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2 text-sm"
              />
            </div>

            {/* Query Field */}
            <div>
              <label htmlFor="query" className="block text-sm md:text-lg font-medium">
                Describe your query
              </label>
              <textarea
                id="query"
                name="message" // This should match the variable in your EmailJS template
                placeholder="Please provide a detailed description of the query."
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2 text-sm"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 mt-4 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors"
            >
              Send <span className="ml-2">→</span>
            </button>

            {/* Display a success or error message */}
            {message && (
              <p className="text-sm mt-2 text-center text-teal-400">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
