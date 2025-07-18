"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 bg-[#0f172a] shadow-lg">
      <nav className="max-w-7xl mx-auto pl-4 pr-6 md:pl-8 md:pr-16 py-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-[#3b82f6] border-1 border-[#3b82f6] px-3 py-2 rounded hover:bg-[#3b82f6] hover:text-white transition"
        >
          GD
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-base font-mono">
          <a href="#about" className="text-gray-300 hover:text-[#3b82f6] transition font-medium">
            <span className="text-[#3b82f6]">01.</span> About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-[#3b82f6] transition font-medium">
            <span className="text-[#3b82f6]">02.</span> Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-[#3b82f6] transition font-medium">
            <span className="text-[#3b82f6]">03.</span> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-300">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-6 bg-[#1e293b] rounded-lg shadow-lg px-8 py-6 space-y-6 text-base font-mono">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#3b82f6] transition font-medium"
          >
            <span className="text-[#3b82f6]">01.</span> About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#3b82f6] transition font-medium"
          >
            <span className="text-[#3b82f6]">02.</span> Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#3b82f6] transition font-medium"
          >
            <span className="text-[#3b82f6]">03.</span> Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
