import React from "react";
import { toolsData } from "../data/ToolsData";

const Tools = () => {
  return (
    <section id="tools" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h3 className="text-cyan-600 font-bold text-sm tracking-[0.3em] uppercase mb-3">
            Workflow
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Software{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              & Tools
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="group flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:border-cyan-200 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.1)] hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-cyan-50 transition-colors">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <span className="text-slate-600 group-hover:text-slate-900 text-sm font-bold tracking-tight transition-colors">
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
