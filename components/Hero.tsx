"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen flex items-center overflow-hidden bg-[#274472] px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#c38d94]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c38d94]/10 blur-3xl rounded-full" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#c38d94] text-base md:text-lg font-semibold tracking-wide mb-3"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#fdf2f8] leading-[1.1]"
        >
          Gavin Durai.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-[#adacb5] leading-[1.1] mt-3"
        >
          Learn. Build. Deploy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-base md:text-lg tracking-wide text-[#adacb5] leading-relaxed"
        >
          I&apos;m a Computer Science graduate looking for an entry-level
          Cloud / DevOps role. With over a year of hands-on incident response
          and SLA-driven support behind me, I&apos;m now building skills in
          Docker, Kubernetes, Git and Python. Currently part of the Desktop
          Support team at{" "}
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