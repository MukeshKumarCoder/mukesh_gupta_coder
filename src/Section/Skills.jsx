import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skillData } from "../data/SkillData.js";

const Skills = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <section
      id="skills"
      className="pt-8 pb-16 bg-gray-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute top-0 left-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-indigo-100/40 dark:bg-indigo-900/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-100/40 dark:bg-cyan-900/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-indigo-600 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
            Technical Stack
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Digital Toolbox
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          style={{ opacity, y, scale }}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4"
        >
          {skillData.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 
              rounded-2xl sm:rounded-3xl shadow-sm flex flex-col items-center overflow-hidden transition-all"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-cyan-50/40 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center bg-slate-50 dark:bg-slate-700 rounded-xl sm:rounded-2xl shadow-sm">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="relative z-10 text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider text-center transition-colors duration-300">
                {skill.title}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
