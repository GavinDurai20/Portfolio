"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  LineChart,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={18} />,
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Layout size={18} />,
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={18} />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: <Database size={18} />,
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: <Terminal size={18} />,
    skills: ["Docker", "Git", "GitHub", "Vercel", "Render"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 md:px-20 lg:px-32 py-28"
    >
      {/* Background Glow — navy/coral theme, matching the rest of the site */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#c38d94]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c38d94]/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-mono text-sm text-slate-200">
            <LineChart size={16} className="text-[#c38d94]" />
            About Me
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#fdf2f8]">
              Building
              <span className="text-[#c38d94]"> Software</span> That
              Solves Problems.
            </h2>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-[#adacb5] leading-relaxed">
                Hi, I&apos;m
                <span className="text-[#c38d94] font-semibold">
                  {" "}Gavin Durai
                </span>
                , a Computer Science graduate with a strong foundation in
                Java, Python, and JavaScript, and working knowledge of React,
                Node.js, and database design.
              </p>

              <p className="text-[#adacb5]/80 text-lg leading-relaxed">
                Currently working as a Desktop Support Engineer at WNS
                Global Services through Insiza Technology, where I handle
                enterprise IT operations, high-severity incidents, VIP
                support, and technical issue resolution in fast-paced
                environments — while pursuing an entry-level Software
                Engineer role.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="pt-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-5"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-[#c38d94]/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-[#c38d94]/10 text-[#c38d94] group-hover:bg-[#c38d94]/20 transition-all duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#fdf2f8]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-mono px-4 py-2 rounded-full bg-black/10 border border-white/10 text-slate-300 text-sm hover:bg-[#c38d94]/10 hover:text-[#c38d94] hover:border-[#c38d94]/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

