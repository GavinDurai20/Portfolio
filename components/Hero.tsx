"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen bg-[#274472] overflow-hidden"
    >
      {/* MAIN CONTENT — matches the px-6 md:px-20 lg:px-32 padding used across every other section */}
      <div className="relative z-10 max-w-5xl px-6 md:px-20 lg:px-32 pt-28 md:pt-36 lg:pt-40">
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
          applications with React and Node.js. Currently working as part of
          the Desktop Support team at{" "}
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