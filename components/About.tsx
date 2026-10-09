"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  GitBranch,
  Database,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={18} />,
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "DevOps",
    icon: <GitBranch size={18} />,
    skills: [
      "Linux",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Web Technologies",
    icon: <Layout size={18} />,
    skills: ["React.js", "Node.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <Database size={18} />,
    skills: ["MongoDB", "PostgreSQL"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 md:px-12 lg:px-20 py-24 md:py-28"
      style={{ fontFamily: "Garamond, Georgia, serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#c38d94]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#c38d94]/10 blur-3xl" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute right-0 top-20 h-[520px] w-px bg-white/10" />

      <div className="pointer-events-none absolute right-0 top-20 h-px w-32 bg-white/10" />

      <div className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full border border-white/5" />

      {/* Same container width as Hero */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
            <GitBranch
              size={16}
              className="text-[#c38d94]"
            />

            DevOps & Software Engineering
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#fdf2f8] md:text-6xl">
              Building Software.
              <span className="block text-[#c38d94]">
                Automating Delivery.
              </span>
            </h2>

            <div className="space-y-5">
              <p className="text-base leading-relaxed tracking-wide text-[#c5c6d0] md:text-lg">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-[#c38d94]">
                  Gavin Durai
                </span>
                , a Computer Science graduate focused on software engineering
                and DevOps, with a strong interest in building reliable,
                testable, and containerized applications.
              </p>

              <p className="text-base leading-relaxed tracking-wide text-[#c5c6d0] md:text-lg">
                Through hands-on projects, I&apos;ve worked beyond application
                development and learned how to{" "}
                <span className="font-medium text-[#fdf2f8]">
                  build, test, containerize, deploy, and monitor
                </span>{" "}
                applications using Docker, Docker Compose, GitHub Actions,
                GitHub Container Registry, Prometheus, and Grafana.
              </p>

              <p className="text-base leading-relaxed tracking-wide text-[#c5c6d0] md:text-lg">
                My recent work includes building automated CI pipelines,
                running frontend and backend test suites, creating versioned
                Docker images, orchestrating multi-container environments,
                exposing application metrics, and visualizing system health
                through monitoring dashboards.
              </p>

              <p className="text-base leading-relaxed tracking-wide text-[#c5c6d0] md:text-lg">
                I&apos;m currently working as a Desktop Support Engineer at
                WNS Global Services through Insiza Technology, where I handle
                enterprise IT operations, high-severity incidents, VIP
                support, and technical issue resolution while transitioning
                toward a software engineering and DevOps-focused career.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-5 lg:pt-[92px]"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#c38d94]/40 hover:bg-white/[0.07]"
            >
              {/* Card Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-[#c38d94]/10 p-3 text-[#c38d94] transition-all duration-300 group-hover:bg-[#c38d94]/20">
                  {category.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#fdf2f8] md:text-xl">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/10 px-3.5 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-[#c38d94]/30 hover:bg-[#c38d94]/10 hover:text-[#c38d94]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;