"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className=" pt-24 min-h-screen flex items-center bg-white dark:bg-[#0f172a] px-6 md:px-24 lg:px-40 py-20"
    >
      <div className="max-w-3xl space-y-6">
        {/* Intro Label */}
<p className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">
  Hello, I&apos;m 
</p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Gavin <span className="text-blue-600 dark:text-blue-400">Durai</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          Full-Stack Developer | CS Graduate | Open to Work
        </h2>

        {/* Description */}
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
  I craft clean, scalable, and user-focused web applications,
  blending intuitive user interfaces with robust backend systems.
  I&apos;m eager to join a team where I can contribute meaningfully while
  growing as a developer.
</p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200 text-base md:text-lg font-medium"
          >
            View Projects
          </a>
<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200 text-base md:text-lg font-medium"
>
  Resume
</a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
