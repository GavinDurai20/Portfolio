"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative min-h-screen flex items-center overflow-hidden bg-[#274472] px-6 py-24 md:px-12 md:py-28 lg:px-20"
      style={{ fontFamily: "Garamond, Georgia, serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#c38d94]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#c38d94]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Section Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
            <HiOutlineSparkles
              className="text-[#c38d94]"
              size={16}
            />
            Open to Cloud & DevOps Roles
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#fdf2f8] sm:text-5xl md:text-6xl">
            Let&apos;s Work
            <span className="text-[#c38d94]"> Together</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#c5c6d0] md:text-lg md:leading-8">
            I&apos;m looking for entry-level Cloud and DevOps roles where I can
            apply my incident-response background and grow into infrastructure
            automation and Kubernetes. If you have an opening or a project,
            I&apos;d love to hear from you.
          </p>

          {/* Email Button */}
          <div className="mt-12">
            <a
              href="mailto:gavinnadar20@gmail.com"
              className="group inline-flex items-center gap-3 rounded-md border border-[#c38d94] px-7 py-4 text-base font-medium text-[#c38d94] transition-colors duration-300 hover:bg-[#c38d94]/10"
            >
              <FiMail
                size={20}
                className="transition-transform group-hover:rotate-6"
              />
              gavinnadar20@gmail.com
            </a>
          </div>

          {/* Location / Availability */}
          <p className="mt-6 text-sm text-slate-400">
            Based in Mumbai, India • Open to Cloud/DevOps internships &{" "}
            full-time roles
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;