"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState("");

  // Log the selected contact value every time it changes
  useEffect(() => {
    console.log("Selected contact changed:", selectedContact);
  }, [selectedContact]);

  // Function to clear the selected contact
  const clearSelectedContact = () => {
    setSelectedContact("");
  };

  return (
    <ContactContext.Provider
      value={{ selectedContact, setSelectedContact, clearSelectedContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }

  // Log the selected contact value when it's accessed
  console.log("Accessing Contact Context: ", context.selectedContact);

  return context;
};
