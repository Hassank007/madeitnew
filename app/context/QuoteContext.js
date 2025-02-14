"use client";
import { createContext, useContext, useState, useEffect } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  // Store selected services as an array for multiple selections
  const [selectedService, setSelectedService] = useState([]);

  // Log the selectedService array whenever it changes (for debugging)
  useEffect(() => {
    console.log("Selected Service:", selectedService);
  }, [selectedService]);

  // Toggle a service:
  // - If the service is already selected, remove it.
  // - Otherwise, add it.
  const handleSelectService = (serviceName) => {
    setSelectedService((prevServices) => {
      if (prevServices.includes(serviceName)) {
        // Remove the service if it's already selected.
        return prevServices.filter((service) => service !== serviceName);
      } else {
        // Add the service.
        return [...prevServices, serviceName];
      }
    });
  };

  // Function to clear all selected services
  const clearSelectedService = () => {
    setSelectedService([]);
  };

  return (
    <QuoteContext.Provider
      value={{ selectedService, handleSelectService, clearSelectedService }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);
