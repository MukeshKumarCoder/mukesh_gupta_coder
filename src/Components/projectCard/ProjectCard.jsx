import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, image, description, tech, href1, href2 }) => {
  const techStack = tech.split(",").map((item) => item.trim());

  return (
    <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-2">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={href1}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white text-indigo-600 rounded-2xl hover:scale-110 transition-transform shadow-xl"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={20} />
          </a>
          <a
            href={href2}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white text-slate-900 rounded-2xl hover:scale-110 transition-transform shadow-xl"
            title="View Code"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-linear-to-r from-indigo-50 to-cyan-50 text-indigo-600 rounded-lg border border-indigo-100/50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
