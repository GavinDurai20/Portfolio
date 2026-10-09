"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";
import { Layers3 } from "lucide-react";

const projects = [
  {
    title: "SupportNook",
    tagline: "Real-Time Collaboration Platform",
    description:
      "Built a real-time collaborative support and developer platform with shared workspaces, live communication, collaborative coding, and remote code execution. Containerized the application with Docker Compose and implemented CI/CD, automated testing, and Prometheus/Grafana monitoring.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    github:
      "https://github.com/GavinDurai20/SupportNook",
    link:
      "https://support-nook.vercel.app/",
  },

  {
    title: "DocTalk AI",
    tagline: "AI Medical Voice Assistant",
    description:
      "Built an AI-powered medical voice assistant for real-time voice conversations, symptom assessment, AI-generated medical reports, and doctor recommendations. Containerized the application with multi-stage Docker builds, reducing the production image by approximately 83% from 1.81 GB to 310.6 MB, and automated Docker builds and GHCR publishing with GitHub Actions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Vapi",
      "OpenRouter",
      "Docker",
      "GitHub Actions",
      "GHCR",
      "Neon PostgreSQL",
    ],
    github:
      "https://github.com/GavinDurai20/DocTalk-AI",
    link:
      "https://doc-talk-ai-lovat.vercel.app",
  },

  {
    title: "Bolt.new Clone",
    tagline: "AI-Powered Code Generator",
    description:
      "Built a Bolt.new-style web application that generates React code from natural-language prompts, displays the generated file structure, and provides a live preview within a single development interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github:
      "https://github.com/GavinDurai20/bolt.new",
    link:
      "https://bolt-new-olive.vercel.app/",
  },

  {
    title: "Tic-Tac-Toe",
    tagline: "Real-Time Multiplayer Game",
    description:
      "Built a real-time multiplayer Tic-Tac-Toe game with WebSocket-based synchronization. Implemented room-based matchmaking, automatic X/O assignment, synchronized turn logic, and real-time player chat.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/GavinDurai20/Tic-Tac-TOE",
    link:
      "https://tic-tac-toe-sigma-one-60.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 py-24 md:px-12 md:py-28 lg:px-20"
      style={{
        fontFamily: "Garamond, Georgia, serif",
      }}
    >
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c38d94]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-[#c38d94]/10 blur-[120px]" />

      {/* =========================================
          MAIN CONTAINER

          Same alignment as Hero / About / Experience
      ========================================== */}

      <div className="relative mx-auto w-full max-w-6xl">

        {/* =========================================
            HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14"
        >
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
            <Layers3
              size={16}
              className="text-[#c38d94]"
            />

            Featured Projects
          </div>

          {/* Heading */}

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#fdf2f8] md:text-6xl">
                Things I&apos;ve{" "}
                <span className="text-[#c38d94]">
                  Built.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 tracking-wide text-[#adacb5] md:text-lg md:leading-8">
                A collection of projects focused on software
                engineering, DevOps, real-time systems, AI,
                containerization, and modern web technologies.
              </p>

            </div>

            {/* Project Count */}

            <div className="hidden text-sm text-slate-500 md:block">
              04 PROJECTS
            </div>

          </div>
        </motion.div>

        {/* =========================================
            PROJECT GRID
        ========================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative"
            >

              {/* =========================================
                  PROJECT CARD
              ========================================== */}

              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-[470px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#203b64]/70
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#c38d94]/50
                  hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                "
              >

                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-72
                    w-72
                    rounded-full
                    bg-[#c38d94]/10
                    blur-[90px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =========================================
                    TOP CONTENT
                ========================================== */}

                <div className="relative flex-1 p-7 md:p-8">

                  {/* Number + Arrow */}

                  <div className="mb-10 flex items-center justify-between">

                    <span className="text-sm tracking-widest text-[#c38d94]">
                      0{index + 1}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-slate-400
                        transition-all
                        duration-300

                        group-hover:border-[#c38d94]/50
                        group-hover:text-[#c38d94]
                        group-hover:rotate-45
                      "
                    >
                      <FiArrowUpRight size={18} />
                    </div>

                  </div>

                  {/* Tagline */}

                  <p
                    className="
                      mb-3
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-[#c38d94]
                      md:text-sm
                    "
                  >
                    {project.tagline}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-[#fdf2f8]
                      transition-colors
                      duration-300
                      md:text-4xl

                      group-hover:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Divider */}

                  <div
                    className="
                      mt-6
                      mb-6
                      h-px
                      w-12
                      bg-[#c38d94]/60
                      transition-all
                      duration-500

                      group-hover:w-20
                    "
                  />

                  {/* Description */}

                  <p
                    className="
                      max-w-xl
                      text-base
                      leading-7
                      text-[#adacb5]
                      md:text-lg
                      md:leading-8
                    "
                  >
                    {project.description}
                  </p>

                </div>

                {/* =========================================
                    BOTTOM CONTENT
                ========================================== */}

                <div className="relative px-7 pb-7 md:px-8 md:pb-8">

                  {/* Tech Stack */}

                  <div className="mb-7 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-lg
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-3
                          py-1.5
                          text-sm
                          text-slate-400
                          transition-all
                          duration-300

                          group-hover:border-[#c38d94]/20
                          group-hover:text-slate-300
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex flex-wrap items-center gap-3">

                    {/* GitHub */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300

                        hover:border-white/20
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <FaGithub size={16} />

                      GitHub
                    </a>

                    {/* Live Demo */}

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          bg-[#c38d94]
                          px-5
                          py-2.5
                          text-sm
                          font-semibold
                          text-[#203b64]
                          transition-all
                          duration-300

                          hover:bg-[#d49ca3]
                          hover:shadow-[0_8px_30px_rgba(195,141,148,0.25)]
                        "
                      >
                        <FiExternalLink size={16} />

                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

                {/* =========================================
                    BOTTOM ACCENT
                ========================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-[#c38d94]
                    transition-transform
                    duration-500

                    group-hover:scale-x-100
                  "
                />

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;