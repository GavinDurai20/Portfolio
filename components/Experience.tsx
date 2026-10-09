"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Briefcase,
  MapPin,
  CalendarDays,
} from "lucide-react";

const experience = {
  company: "Insiza Technology",
  client: "Client: WNS Global Services",
  role: "Desktop Support Engineer L1",
  location: "Mumbai, India",
  duration: "Aug 2025 — Present",
  current: true,

  points: [
    "Provide L1 infrastructure and end-user support, resolving 15–20 technical incidents daily within SLA, including troubleshooting Windows systems, applications, networking, user access, and endpoint issues.",

    "Support WNS-to-Capgemini technology migration, assisting with endpoint configuration, system setup, application access, user onboarding, and post-migration troubleshooting.",

    "Collaborate with cross-functional infrastructure and IT teams during high-severity incidents and technology transitions, participating in bridge calls for root-cause investigation and service restoration.",

    "Perform onsite infrastructure and meeting-room technology support, troubleshooting connectivity, hardware, AV, video conferencing, and system-related issues to maintain business continuity.",
  ],
};

const Experience = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const [isHovering, setIsHovering] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(rotateY, {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);

    setSpotlight({
      x: px * 100,
      y: py * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 relative overflow-hidden bg-[#274472] px-6 md:px-12 lg:px-20 py-24 md:py-28"
      style={{
        fontFamily: "Garamond, Georgia, serif",
      }}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#c38d94]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#c38d94]/10 blur-3xl" />

      {/* =========================================
          MAIN CONTAINER

          Same width/alignment as Hero + About
      ========================================== */}

      <div className="relative mx-auto w-full max-w-6xl">

        {/* =========================================
            SECTION HEADING
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
            <Briefcase
              size={16}
              className="text-[#c38d94]"
            />

            Experience
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#fdf2f8] md:text-6xl">
            Where I&apos;ve
            <span className="text-[#c38d94]">
              {" "}Worked.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 tracking-wide text-[#adacb5] md:text-lg">
            Professional experience supporting enterprise IT
            infrastructure, resolving technical incidents, and working
            alongside cross-functional teams in fast-paced environments.
          </p>
        </motion.div>

        {/* =========================================
            EXPERIENCE CARD
        ========================================== */}

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
          initial={{
            opacity: 0,
            y: 35,
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
          className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-2xl [perspective:1000px]"
        >

          {/* =========================================
              CURSOR SPOTLIGHT
          ========================================== */}

          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,

              background: `radial-gradient(
                420px circle at ${spotlight.x}% ${spotlight.y}%,
                rgba(195,141,148,0.16),
                transparent 70%
              )`,
            }}
          />

          {/* =========================================
              EDITOR STYLE HEADER
          ========================================== */}

          <div className="relative flex items-center gap-2 border-b border-white/10 bg-black/10 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

            <span className="ml-3 text-sm text-slate-400">
              experience.log
            </span>
          </div>

          {/* =========================================
              CARD CONTENT
          ========================================== */}

          <div className="relative space-y-7 p-8 md:p-10">

            {/* =========================================
                ROLE + COMPANY
            ========================================== */}

            <div className="flex flex-wrap items-start justify-between gap-5">

              <div>
                <h3 className="text-2xl font-bold text-[#fdf2f8] md:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-base text-[#c38d94] md:text-lg">
                  {experience.company}

                  <span className="text-slate-400">
                    {" "}— {experience.client}
                  </span>
                </p>
              </div>

              {/* Present Badge */}

              {experience.current && (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>

                  Present
                </span>
              )}
            </div>

            {/* =========================================
                META INFORMATION
            ========================================== */}

            <div className="flex flex-wrap gap-6 text-sm text-slate-400 md:text-base">

              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-[#c38d94]"
                />

                {experience.duration}
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-[#c38d94]"
                />

                {experience.location}
              </span>

            </div>

            {/* Divider */}

            <div className="h-px w-full bg-white/10" />

            {/* =========================================
                RESPONSIBILITIES
            ========================================== */}

            <ul className="space-y-5">

              {experience.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + idx * 0.1,
                  }}
                  className="flex gap-4 text-base leading-7 text-[#adacb5] md:text-lg"
                >
                  {/* Terminal Marker */}

                  <span className="shrink-0 pt-0.5 text-lg font-semibold text-[#c38d94]">
                    $
                  </span>

                  {/* Responsibility */}

                  <span>
                    {point}
                  </span>
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