import React from "react";
import { toolsData } from "../data/ToolsData";

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-8 bg-gradient-to-tr from-indigo-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-48 h-48 sm:w-80 sm:h-80 lg:w-152 lg:h-152 
        bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[90px] sm:blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-cyan-600 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Workflow
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              & Tools
            </span>
          </h3>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="group flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 p-4 sm:p-5 
              bg-white dark:bg-slate-800 
              border border-slate-100 dark:border-slate-700 
              rounded-2xl transition-all duration-300 shadow-sm 
              hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
              bg-slate-50 dark:bg-slate-700 
              rounded-xl group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 transition"
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain grayscale group-hover:grayscale-0 transition"
                />
              </div>

              {/* Title */}
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-xs sm:text-sm font-bold tracking-tight text-center sm:text-left transition">
                {tool.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
