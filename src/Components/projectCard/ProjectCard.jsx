import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, description, tech, href1, href2 }) => {
  const techStack = tech.split(",").map((item) => item.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

      <div
        className="relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700
        rounded-2xl sm:rounded-3xl overflow-hidden 
        transition-all duration-500 
        hover:-translate-y-3 
        hover:shadow-[0_30px_80px_-20px_rgba(79,70,229,0.25)]"
      >
        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 md:group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <a
                href={href1}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live project"
                className="p-3 bg-white text-indigo-600 rounded-xl hover:scale-110 transition"
              >
                <FaExternalLinkAlt />
              </a>

              <a
                href={href2}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub Repository"
                className="p-3 bg-white text-slate-900 rounded-xl hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </div>

            <span className="px-5 py-2 bg-white text-indigo-600 font-bold rounded-xl">
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-5 line-clamp-3">
            {description}
          </p>

          {/* Mobile Buttons */}
          <div className="flex md:hidden gap-3 mb-5">
            <a
              href={href1}
              target="_blank"
              rel="noreferrer"
              aria-label="Open live project"
              className="flex-1 py-2 text-center bg-indigo-600 text-white rounded-lg text-sm font-semibold"
            >
              Live
            </a>

            <a
              href={href2}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub Repository"
              className="flex-1 py-2 text-center bg-slate-900 text-white rounded-lg text-sm font-semibold"
            >
              Code
            </a>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((item, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] 
                font-bold uppercase tracking-wide 
                bg-gradient-to-r from-indigo-50 to-cyan-50 
                dark:from-slate-700 dark:to-slate-600
                text-indigo-600 dark:text-indigo-300 
                rounded-lg border border-indigo-100/50 dark:border-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
