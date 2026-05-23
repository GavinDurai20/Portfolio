"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] px-6 md:px-20 lg:px-32 py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Card */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16 text-center shadow-2xl shadow-black/20">
          
          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
            <HiOutlineSparkles className="text-blue-400" size={16} />
            Open to Opportunities
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let&apos;s Work
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto">
            I’m currently exploring opportunities in data analytics, business
            intelligence, and machine learning. If you’d like to collaborate,
            discuss a project, or just connect, feel free to reach out.
          </p>

          {/* Email Button */}
          <div className="mt-12">
            <a
              href="mailto:gavinnadar20@gmail.com"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              <FiMail
                size={20}
                className="group-hover:rotate-6 transition-transform"
              />
              gavinnadar20@gmail.com
            </a>
          </div>

          {/* Bottom Text */}
          <p className="mt-6 text-sm text-slate-500">
            Based in Mumbai, India • Available for internships & full-time roles
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;