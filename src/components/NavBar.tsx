// src/components/Navbar.tsx
import React, { useState } from "react";
import WhatsAppButton from "./WhatsappButton";
import PhoneButton from "./PhoneButton";
import ClientButton from "./ClientButton";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/sulamerica_logo.png" alt="Logo" className="w-30" />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-x-6">
          <ClientButton link="https://saude.sulamericaseguros.com.br/empresa/login/" />
          <PhoneButton />
          <WhatsAppButton message="Olá, gostaria de saber mais sobre os planos de saúde da Porto Seguro." />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300">
          <div className="flex flex-col items-center py-4 space-y-4">
            <ClientButton link="https://saude.sulamericaseguros.com.br/empresa/login/" />
            <PhoneButton />
            <WhatsAppButton message="Olá, gostaria de saber mais sobre os planos de saúde da Porto Seguro." />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
