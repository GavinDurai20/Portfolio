"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { Layers3 } from "lucide-react";

const projects = [
  {
    title: "SupportNook",
    tagline: "Real-Time Collaboration Platform",
    description:
      "Developed a real-time collaborative workspace with live chat, synchronized code editing, and digital whiteboarding using Socket.IO, with MongoDB for persistent room data and Docker Compose for consistent containerized deployment.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Docker"],
    github: "https://github.com/GavinDurai20/SupportNook",
    link: "https://support-nook.vercel.app/",
  },
  {
    title: "DocTalk AI",
    tagline: "AI Medical Voice Assistant",
    description:
      "Developed an AI-powered medical voice assistant where users describe symptoms by voice and get real-time AI-generated responses. Integrated AssemblyAI for speech-to-text, Clerk for auth, and Neon PostgreSQL for secure medical history storage.",
    tech: ["Next.js", "TypeScript", "AssemblyAI", "Clerk", "Neon PostgreSQL"],
    github: "https://github.com/GavinDurai20/DocTalk-AI",
    link: "https://doc-talk-ai-lovat.vercel.app",
  },
  {
    title: "Bolt.new Clone",
    tagline: "AI-Powered Code Generator",
    description:
      "Built a Bolt.new-style web app where typing a prompt like 'create a todo app' instantly generates the React code, shows the file structure, and renders a live preview — all in one interface.",
    tech: ["Next.js", "TypeScript", "Convex", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/GavinDurai20/bolt.new",
    link: "https://bolt-new-olive.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe",
    tagline: "Real-Time Multiplayer Game",
    description:
      "Built a real-time multiplayer Tic-Tac-Toe game with WebSocket-based synchronization. Room-based matchmaking auto-assigns X/O, turn logic keeps both boards in sync instantly, and a live chat feature lets players talk while they play.",
    tech: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/GavinDurai20/Tic-Tac-TOE",
    link: "https://tic-tac-toe-sigma-one-60.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#274472] px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#c38d94]/10 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#c38d94]/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md font-mono text-sm text-slate-300 mb-6">
            <Layers3 size={16} className="text-[#c38d94]" />
            Featured Projects
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fdf2f8]">
                Things I&apos;ve{" "}
                <span className="text-[#c38d94]">Built.</span>
              </h2>

              <p className="text-[#adacb5] mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
                A collection of projects focused on real-time systems, AI,
                collaboration, and modern web technologies.
              </p>
            </div>

            <div className="hidden md:block font-mono text-xs text-slate-500">
              04 PROJECTS
            </div>
          </div>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="
                  relative h-full min-h-[430px]
                  rounded-3xl
                  border border-white/10
                  bg-[#203b64]/70
                  backdrop-blur-xl
                  overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#c38d94]/50
                  hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute -top-32 -right-32
                    w-72 h-72
                    rounded-full
                    bg-[#c38d94]/10
                    blur-[90px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* Top Section */}
                <div className="relative p-7 md:p-8">

                  {/* Number + Arrow */}
                  <div className="flex items-center justify-between mb-10">
                    <span
                      className="
                        font-mono text-sm
                        text-[#c38d94]
                        tracking-widest
                      "
                    >
                      0{index + 1}
                    </span>

                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        border border-white/10
                        flex items-center justify-center
                        text-slate-400
                        transition-all duration-300
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
                      font-mono text-[11px]
                      uppercase tracking-[0.2em]
                      text-[#c38d94]
                      mb-3
                    "
                  >
                    {project.tagline}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      text-3xl md:text-4xl
                      font-bold
                      tracking-tight
                      text-[#fdf2f8]
                      group-hover:text-white
                      transition-colors duration-300
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-px bg-[#c38d94]/60 mt-6 mb-6 group-hover:w-20 transition-all duration-500" />

                  {/* Description */}
                  <p
                    className="
                      text-[#adacb5]
                      text-sm md:text-[15px]
                      leading-7
                      max-w-xl
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="relative mt-auto px-7 md:px-8 pb-7 md:pb-8">

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1.5
                          rounded-lg
                          bg-white/[0.04]
                          border border-white/10
                          text-slate-400
                          text-[11px]
                          font-mono
                          transition-all duration-300
                          group-hover:border-[#c38d94]/20
                          group-hover:text-slate-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-5 py-2.5
                        rounded-xl
                        bg-white/[0.06]
                        border border-white/10
                        text-slate-300
                        text-sm
                        font-medium
                        transition-all duration-300
                        hover:bg-white/10
                        hover:text-white
                        hover:border-white/20
                      "
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-5 py-2.5
                          rounded-xl
                          bg-[#c38d94]
                          text-[#203b64]
                          text-sm
                          font-semibold
                          transition-all duration-300
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

                {/* Bottom Accent */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    h-[2px]
                    bg-[#c38d94]
                    scale-x-0
                    origin-left
                    group-hover:scale-x-100
                    transition-transform duration-500
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

