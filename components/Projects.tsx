"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Layers3 } from "lucide-react";

const projects = [
  {
    title: "Telecom Customer Churn Prediction",
    tagline: "Machine Learning & Data Analytics",
    description:
      "Analyzed 7,000+ telecom customer records to identify customer churn patterns and retention trends. Built a Logistic Regression model using Scikit-learn achieving around 79% accuracy and performed detailed exploratory data analysis to uncover business insights.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    github: "https://github.com/GavinDurai20/Customer-churn-prediction",
    link: "#",
  },
  {
    title: "DocTalk AI",
    tagline: "Real-Time AI Medical Voice Assistant",
    description:
      "Developed an AI-powered medical voice assistant where users can describe symptoms through voice and receive real-time AI-generated responses. Integrated AssemblyAI for speech-to-text, Clerk authentication, and Neon PostgreSQL for secure medical history storage.",
    tech: [
      "Next.js",
      "TypeScript",
      "AssemblyAI",
      "Clerk",
      "Neon PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/GavinDurai20/DocTalk-AI",
    link: "https://doc-talk-ai-lovat.vercel.app",
  },
  {
    title: "Power BI Sales Dashboard",
    tagline: "Business Intelligence & Visualization",
    description:
      "Created an interactive Power BI dashboard to analyze sales performance, revenue trends, and customer insights. Built dynamic visualizations, KPI tracking, and automated reporting features for better business decision-making.",
    tech: [
      "Power BI",
      "SQL",
      "Excel",
      "Data Visualization",
      "DAX",
    ],
    github: "https://github.com/GavinDurai20",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] px-6 md:px-20 lg:px-32 py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-sm text-slate-300 mb-6">
            <Layers3 size={16} className="text-blue-400" />
            Featured Projects
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Data & AI
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Real-world projects focused on machine learning, data analytics,
            business intelligence, and AI-powered applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[2rem] bg-white/5 backdrop-blur-2xl p-7 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Top Content */}
              <div className="space-y-5">
                <div>
                  <p className="text-blue-400 text-sm font-medium mb-2">
                    {project.tagline}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-[#0f172a] text-slate-300 text-xs border border-white/10 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;