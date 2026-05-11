import React from "react";
import { experienceCompany } from "../data/ExperienceCompany";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-indigo-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-indigo-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            My Journey
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent opacity-30" />

          <div className="space-y-6">
            {experienceCompany.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-4 border-indigo-500 z-10 shadow-md" />

                {/* Card */}
                <div className="w-full md:w-5/12 pl-10 sm:pl-14 md:pl-0">
                  <div
                    className="group relative p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-700 border border-slate-100 
            rounded-xl sm:rounded-2xl transition-all duration-500 
            hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                          <FaBriefcase size={14} />
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition">
                          {exp.companyName}
                        </h3>
                      </div>

                      <p className="text-indigo-600 font-semibold text-sm sm:text-base mb-2">
                        {exp.role}
                      </p>

                      <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
                        <FaCalendarAlt size={12} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-100 to-cyan-100 border dark: border-indigo-100 rounded-2xl max-w-4xl">
            <p className="text-slate-600 font-medium text-sm sm:text-base italic leading-relaxed">
              "Focusing on secure user access, performance optimization, and
              scalable MERN stack architectures."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
