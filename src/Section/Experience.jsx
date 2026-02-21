import React from "react";
import { experienceCompany } from "../data/ExperienceCompany";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-3">
            My Journey
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-linear-to-b from-indigo-500 via-cyan-400 to-transparent rounded-full opacity-20"></div>

          <div className="space-y-16">
            {experienceCompany.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-indigo-500 z-10 hidden md:block shadow-[0_0_15px_rgba(79,70,229,0.4)]"></div>

                <div className="w-full md:w-5/12 ml-10 md:ml-0">
                  <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <FaBriefcase size={18} />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.companyName}
                      </h3>
                    </div>

                    <p className="text-indigo-600 font-bold text-sm mb-4 relative z-10">
                      {exp.role}
                    </p>

                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium relative z-10">
                      <FaCalendarAlt size={14} className="text-slate-300" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>

                <div className="hidden md:block md:w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block px-6 py-3 bg-linear-to-r from-indigo-50 to-cyan-50 border border-indigo-100 rounded-2xl">
            <p className="text-slate-600 font-medium text-sm md:text-base italic">
              "Focusing on secure user access, performance optimization, and
              scalable MERN stack architectures."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
