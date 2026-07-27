"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const Contact = () => {
  return (
    <section
  id="contact"
  className="relative overflow-hidden bg-[#274472] min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-32"
>
      {/* Background Glow — matches Hero's navy/coral theme */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#c38d94]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#c38d94]/10 blur-3xl rounded-full" />

<motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative max-w-4xl mx-auto text-center"
>
  {/* Small Tag */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-slate-200 mb-8">
    <HiOutlineSparkles className="text-[#c38d94]" size={16} />
    Open to Opportunities
  </div>

  {/* Heading */}
  <h2 className="text-4xl md:text-6xl font-bold text-[#fdf2f8] leading-tight">
    Let&apos;s Work
    <span className="text-[#c38d94]"> Together</span>
  </h2>

  {/* Description */}
  <p className="mt-8 text-lg md:text-xl leading-relaxed text-white max-w-2xl mx-auto">
    I'm looking for software engineering roles. If you have any relevant
    openings or projects, I would love to hear from you. Feel free to
    reach out to me. Looking forward to potentially collaborating with you.
  </p>

  {/* Email Button */}
  <div className="mt-12">
    <a
      href="mailto:gavinnadar20@gmail.com"
      className="group inline-flex items-center gap-3 px-7 py-4 rounded-md border border-[#c38d94] text-[#c38d94] font-mono font-medium hover:bg-[#c38d94]/10 transition-colors duration-300"
    >
      <FiMail
        size={20}
        className="group-hover:rotate-6 transition-transform"
      />
      gavinnadar20@gmail.com
    </a>
  </div>

  {/* Bottom Text */}
  <p className="mt-6 text-sm font-mono text-slate-400">
    Based in Mumbai, India • Available for internships & full-time roles
  </p>
</motion.div>
    </section>
  );
};

export default Contact;