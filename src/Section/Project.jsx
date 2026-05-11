import React, { useState } from "react";
import ProjectCard from "../Components/projectCard/ProjectCard";
import { projectData } from "../data/ProjectData";
import { motion } from "framer-motion";

const Project = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section
      id="project"
      className="py-8 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 -left-10 sm:-left-20 w-40 h-40 sm:w-72 sm:h-72 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-10 sm:-right-20 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-indigo-600 font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Portfolio
          </h4>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Work
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            My recent projects built with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
