"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Layers3 } from "lucide-react";

const projects = [
  {
    title: "DocTalk AI",
    tagline: "Real-Time AI Medical Voice Assistant",
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
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 md:px-20 lg:px-32 pt-10 md:pt-14 pb-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#c38d94]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c38d94]/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-slate-200 mb-7">
            <Layers3 size={16} className="text-[#c38d94]" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#fdf2f8] leading-tight">
            Things I&apos;ve
            <span className="text-[#c38d94]"> Built.</span>
          </h2>
          <p className="text-[#adacb5] mt-6 max-w-2xl text-lg">
            A couple of full-stack builds where I worked through real-time
            sync, auth, and data — end to end.
          </p>
        </div>

        {/* Timeline of Projects */}
        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-300/20 hidden md:block" />
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-[#c38d94] bg-[#274472] text-[#c38d94] font-mono text-lg font-bold">
                    0{index + 1}
                  </div>
                </div>

                <div className="group flex-1 rounded-[1.75rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#c38d94]/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-3 font-mono text-xs text-slate-400">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                    </span>
                  </div>

                  <div className="p-7 md:p-8 space-y-5">
                    <div>
                      <p className="font-mono text-[#c38d94] text-xs uppercase tracking-widest mb-2">
                        {project.tagline}
                      </p>
                      <h3 className="text-2xl font-bold text-[#fdf2f8]">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[#adacb5] leading-relaxed text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono px-3 py-1.5 rounded-md bg-black/10 text-slate-300 text-xs border border-white/10 group-hover:border-[#c38d94]/30 group-hover:text-[#c38d94] transition-all duration-300"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 flex-wrap pt-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300 font-mono text-sm"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>

                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#c38d94] text-[#c38d94] hover:bg-[#c38d94]/10 transition-all duration-300 font-mono text-sm"
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;