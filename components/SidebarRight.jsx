import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SidebarRight = () => {
  return (
    <div className="fixed bottom-0 right-8 lg:right-20 hidden md:flex flex-col items-center z-50">
      {/* Social Icons */}
      <div className="flex flex-col items-center gap-5 mb-6">
        <a
          href="https://github.com/GavinDurai20"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition transform hover:scale-110"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/gavin-durai/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition transform hover:scale-110"
        >
          <FaLinkedinIn size={26} />
        </a>
        <a
          href="https://www.instagram.com/gavin_durai/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition transform hover:scale-110"
        >
          <FaInstagram size={26} />
        </a>
      </div>

      {/* Vertical Line */}
      <div className="w-px h-20 bg-blue-500 dark:bg-blue-400" />
    </div>
  );
};

export default SidebarRight;
