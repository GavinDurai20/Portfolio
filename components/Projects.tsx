import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Medical Voice Agent",
    tagline: "Voice-Powered Virtual Healthcare",
    description:
      "Built a real-time AI medical voice assistant using Next.js, React, TypeScript, AssemblyAI, Clerk, and Neon DB to capture patient symptoms via voice for improved healthcare accessibility. Integrated secure authentication, automated medical report generation, and subscription workflows for scalable virtual consultations.",
    tech: ["Next.js", "React", "TypeScript", "AssemblyAI", "Clerk", "Neon DB"],
    github: "https://github.com/GavinDurai20/DocTalk-AI",
    link: "https://doc-talk-ai-lovat.vercel.app",
  },
  {
    title: "Bolt.New Clone",
    tagline: "AI React Code Generator",
    description:
      "SaaS app that generates React.js code from AI prompts using Gemini AI and Convex, with real-time code generation and export support.",
    tech: ["Next.js", "React", "Tailwind", "Convex", "Gemini AI"],
    github: "https://github.com/GavinDurai20/bolt.new",
    link: "https://bolt-new-olive.vercel.app/",
  },
  {
    title: "Tic Tac Toe Multiplayer",
    tagline: "Real-Time Game with Matchmaking",
    description:
      "Multiplayer Tic Tac Toe game using WebSockets, React state management, Node.js backend, and Tailwind for styling.",
    tech: ["React", "Node.js", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/GavinDurai20/Tic-Tac-TOE",
    link: "https://tic-tac-toe-sigma-one-60.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-[#0f172a] px-6 md:px-16 py-20 font-sans"
    >
      <div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
  🧱 Projects I&apos;ve Built
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] rounded-lg p-6 flex flex-col justify-between shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1 text-sm border border-blue-500 rounded text-blue-600 hover:bg-blue-50 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;