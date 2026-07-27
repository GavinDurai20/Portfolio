"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

const experience = {
  company: "Insiza Technology",
  client: "Client: WNS Global Services",
  role: "Desktop Support Engineer L1",
  location: "Mumbai, India",
  duration: "Aug 2025 — Present",
  current: true,
  points: [
    "Resolved 15–20 technical support tickets daily while consistently meeting SLA targets.",
    "Provided priority technical support to senior management and VIP users, ensuring minimal downtime.",
    "Delivered on-site IT support during board meetings, keeping projectors, conferencing tools, and A/V setups running smoothly.",
    "Worked efficiently under pressure during high-severity incidents, resolving issues within SLA timelines.",
    "Joined client bridge calls and coordinated with internal teams to resolve process and application issues.",
  ],
};

const Experience = () => {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
    setSpotlight({ x: px * 100, y: py * 100 });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 md:px-20 lg:px-32 py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#c38d94]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-[#c38d94]/10 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-slate-200 mb-6">
            <Briefcase size={16} className="text-[#c38d94]" />
            Experience
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#fdf2f8] leading-tight">
            Where I&apos;ve
            <span className="text-[#c38d94]"> Worked.</span>
          </h2>
        </div>

        {/* Job Card — tilts toward the cursor and shows a soft spotlight that follows it */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden [perspective:1000px]"
        >
          {/* Cursor-tracking spotlight */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(420px circle at ${spotlight.x}% ${spotlight.y}%, rgba(195,141,148,0.16), transparent 70%)`,
            }}
          />

          {/* Editor-style top bar */}
          <div className="relative flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            
            <span className="ml-3 font-mono text-xs text-slate-400">
             
            </span>
          </div>

          <div className="relative p-8 md:p-10 space-y-6">
            {/* Role + Company */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#fdf2f8]">
                  {experience.role}
                </h3>
                <p className="text-[#c38d94] font-mono text-sm mt-1">
                  {experience.company}{" "}
                  <span className="text-slate-400">
                    — {experience.client}
                  </span>
                </p>
              </div>

              {experience.current && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 font-mono text-xs text-green-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Present
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-5 font-mono text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} className="text-[#c38d94]" />
                {experience.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#c38d94]" />
                {experience.location}
              </span>
            </div>

            {/* Bullet points — reveal one by one like terminal output */}
            <ul className="space-y-3 pt-2">
              {experience.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                  className="flex gap-3 text-[#adacb5] leading-relaxed"
                >
                  <span className="font-mono text-[#c38d94] select-none">
                    $
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;