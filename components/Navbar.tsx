"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Navbar Background */}
      <div className="relative overflow-hidden bg-[#020617]/80 backdrop-blur-2xl">

        {/* Glow Effects */}
        <div className="absolute top-0 left-20 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-20 w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full" />

        {/* Navbar */}
        <nav className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl text-blue-400 font-bold text-xl hover:bg-blue-500/10 transition-all duration-300"
          >
            GD
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { number: "01.", label: "About", href: "#about" },
              { number: "02.", label: "Projects", href: "#projects" },
              { number: "03.", label: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-2 text-sm lg:text-base font-medium text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="text-blue-400 font-semibold">
                  {item.number}
                </span>

                <span className="relative">
                  {item.label}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-slate-300 hover:text-white transition-all duration-300"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden mx-6 mt-4 rounded-3xl bg-[#020617]/95 backdrop-blur-2xl shadow-2xl shadow-blue-500/5 overflow-hidden"
        >
          <div className="flex flex-col p-6 space-y-6">
            {[
              { number: "01.", label: "About", href: "#about" },
              { number: "02.", label: "Projects", href: "#projects" },
              { number: "03.", label: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300"
              >
                <span className="text-blue-400 font-semibold text-sm">
                  {item.number}
                </span>

                <span className="text-base font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;