import React from "react";
import ProjectCard from "../Components/projectCard/ProjectCard";
import { projectData } from "../data/ProjectData";

const Project = () => {
  return (
    <section
      id="project"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 -left-20 w-125 h-125 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-125 h-125 bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 font-bold text-sm tracking-[0.3em] uppercase mb-3">
            Portfolio
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
              Work
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of my recent work in{" "}
            <span className="text-slate-900 font-medium">
              Full-Stack Development
            </span>
            , built with the MERN stack and a focus on secure, scalable
            architectures.
          </p>
        </div>
        \
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
