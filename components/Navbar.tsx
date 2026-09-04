"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const navLinks = [
  { number: "01.", label: "About", href: "#about" },
  { number: "02.", label: "Experience", href: "#experience" },
  { number: "03.", label: "Work", href: "#projects" },
  { number: "04.", label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub size={20} />, href: "https://github.com/GavinDurai20" },
  { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/gavin-durai/" },
  { icon: <FiMail size={20} />, href: "mailto:gavinnadar20@gmail.com" },
];

const Navbar = () => {
  return (
    <>
      {/* NAVBAR — now fixed, stays visible while scrolling through every section */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#274472]/80 backdrop-blur-md border-b border-white/10">
        <a
          href="#home"
          className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-[#c38d94] text-[#c38d94] text-xl font-bold font-mono"
        >
          G
        </a>

        <div className="hidden md:flex items-center gap-16 lg:gap-24">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-slate-200 hover:text-[#c38d94] transition-colors duration-300"
            >
              <span className="text-[#c38d94]">{link.number}</span> {link.label}
            </a>
          ))}
        </div>

        <a
          href="Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-[#c38d94] text-[#c38d94] font-mono text-sm hover:bg-[#c38d94]/10 transition-colors duration-300"
        >
          Resume
        </a>
      </nav>

      {/* LEFT SOCIAL RAIL — unchanged from your version */}
      <div className="hidden lg:block fixed right-6 md:right-20 top-0 bottom-0 z-20">
        <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-7">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-[#c38d94] hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[86vh] bottom-0 w-px bg-slate-300" />
      </div>
    </>
  );
};

export default Navbar;  