import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "Git", "GitHub"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen bg-white dark:bg-[#0f172a] px-6 md:px-16 py-20 font-sans"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT: About Content */}
        <div className="space-y-5 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            👋 About Me
          </h2>
<p className="text-base md:text-lg leading-relaxed">
  Hi, I&apos;m <span className="text-[#3b82f6] dark:text-[#60a5fa] font-semibold">Gavin Durai</span>,
  a computer science graduate and aspiring full-stack developer passionate about building impactful digital solutions.
</p>
          <p className="text-base md:text-lg leading-relaxed">
I enjoy writing clean, scalable code, creating intuitive user interfaces, and learning new technologies to strengthen my development skills. As a fresher, I am eager to contribute to innovative teams while continuously growing through real-world projects and collaborative environments.
          </p>
        </div>

        {/* RIGHT: Structured Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            💻 Technical Skills
          </h3>
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                  {category.title}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
