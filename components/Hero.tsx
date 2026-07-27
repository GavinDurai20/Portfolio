"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { number: "01.", label: "About", href: "#about" },
  { number: "02.", label: "Experience", href: "#experience" },
  { number: "03.", label: "Work", href: "#projects" },
  { number: "04.", label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <Github size={20} />, href: "https://github.com/GavinDurai20" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/gavin-durai/" },
  { icon: <Mail size={20} />, href: "mailto:gavinnadar20@gmail.com" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#274472] overflow-hidden">
      {/* NAVBAR — sits close to the edges */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 py-8">
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-[#c38d94] text-[#c38d94] font-mono text-sm hover:bg-[#c38d94]/10 transition-colors duration-300"
        >
          Resume
        </a>
      </nav>

      {/* LEFT SOCIAL RAIL */}
      <div className="hidden lg:block fixed left-6 md:left-20 top-0 bottom-0 z-20">
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

      {/* RIGHT EMAIL RAIL — same top-[57vh] content start and same top-[86vh] line start as the left rail, so both match exactly */}
      <div className="hidden lg:block fixed right-6 md:right-20 top-0 bottom-0 z-20">
        <a
          href="mailto:gavinnadar20@gmail.com"
          className="absolute top-[50vh] left-1/2 -translate-x-1/2 font-mono text-sm tracking-widest text-slate-200 hover:text-[#c38d94] transition-colors duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          gavinnadar20@gmail.com
        </a>
        <div className="absolute left-1/2 -translate-x-1/2 top-[86vh] bottom-0 w-px bg-slate-300" />
      </div>

      {/* MAIN CONTENT — indented further than the nav, matching the padding used across the rest of the site */}
      <div className="relative z-10 max-w-5xl px-6 md:px-20 lg:px-32 pt-16 md:pt-28 md:left-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[#c38d94] text-lg mb-4"
        >
          Hi my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-[#fdf2f8] leading-[1.1]"
        >
          Gavin Durai.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-[#adacb5] leading-[1.1] mt-4"
        >
          Code. Build. Solve.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg text-[#adacb5] leading-relaxed"
        >
          I&apos;m a Computer Science graduate with a foundation in Java,
          Python, and JavaScript. My current focus is on building full-stack
          applications with React and Node.js. Currently working as part of the Desktop Support team at{" "}
          <a
            href="https://www.wns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c38d94] hover:underline"
          >
            Insiza Technology
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;