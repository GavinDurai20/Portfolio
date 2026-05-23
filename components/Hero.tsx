"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden min-h-screen flex items-center bg-[#020617] px-6 md:px-20 lg:px-32 py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl"
      >
        {/* Intro */}
        <p className="text-sm uppercase tracking-[0.25em] text-blue-400 font-medium mb-5">
          Hello, I&apos;m
        </p>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Gavin{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Durai
            </span>
          </h1>

          {/* Roles */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-200">
              Data Analyst & ML Enthusiast
            </h2>

            <p className="text-lg md:text-xl text-slate-400">
              Computer Science Graduate
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl">
          Passionate about working with data, building dashboards, and creating
          meaningful insights using SQL, Python, Power BI, and visualization
          tools. I enjoy solving real-world problems through analytics and
          machine learning-driven solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            View Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 font-medium hover:bg-white/10 transition-all duration-300"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;