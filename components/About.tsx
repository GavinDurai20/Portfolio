"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Brain,
  Code2,
  LineChart,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={18} />,
    skills: ["Python", "SQL", "R", "JavaScript"],
  },
  {
    title: "Data Analysis",
    icon: <Database size={18} />,
    skills: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Visualization",
    icon: <BarChart3 size={18} />,
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning",
    icon: <Brain size={18} />,
    skills: ["Logistic Regression", "EDA", "Feature Engineering"],
  },
];

const About = () => {
  return (
<section
  id="about"
  className="scroll-mt-24 relative overflow-hidden bg-[#020617] px-6 md:px-20 lg:px-32 py-28"
>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-slate-300">
            <LineChart size={16} className="text-blue-400" />
            About Me
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Turning
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Data{" "}
              </span>
              Into Insights.
            </h2>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Hi, I&apos;m
                <span className="text-blue-400 font-semibold">
                  {" "}Gavin Durai
                </span>
                , a Computer Science graduate with skills in SQL, Python,
                Power BI, and data visualization.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                Currently working as a Desktop Support Engineer at WNS through
                Insiza Technology, where I handle enterprise IT operations,
                high-severity incidents, VIP support, and technical issue
                resolution in fast-paced environments.
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
              className="group rounded-1xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300"            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-[#0f172a] border border-white/10 text-slate-300 text-sm hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
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