import React from "react";
import { skillData } from "../data/SkillData.js";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-100/40 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h3 className="text-indigo-600 font-bold text-sm tracking-[0.3em] uppercase mb-3">
            Technical Stack
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
              Digital Toolbox
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="group relative p-8 bg-white border border-slate-100 rounded-4xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] flex flex-col items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-white transition-colors duration-500 shadow-sm">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-125"
                />
              </div>

              <p className="relative z-10 text-slate-600 group-hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors duration-300">
                {skill.title}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
