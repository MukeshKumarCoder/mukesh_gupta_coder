import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/sideimg.svg";

const About = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-tr from-indigo-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden py-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative order-2 lg:order-1 hidden md:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur-3xl opacity-10" />

              <img
                src={aboutImg}
                loading="lazy"
                decoding="async"
                alt="Developer Illustration"
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.h2
              variants={fadeUp}
              className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600"
            >
              Who I Am
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black 
              text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Transforming Ideas into{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                Digital Reality
              </span>
            </motion.h3>

            <motion.div
              variants={fadeUp}
              className="space-y-4 text-slate-600 dark:text-slate-300 
              text-base sm:text-lg leading-relaxed"
            >
              <p>
                I am{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  Mukesh Kumar
                </span>
                , a Full Stack Developer with expertise in the{" "}
                <span className="text-indigo-600 font-medium">MERN Stack</span>.
                I build scalable and high-performance applications.
              </p>

              <p>
                I also explore{" "}
                <span className="text-violet-600 font-medium">
                  Generative AI
                </span>{" "}
                to create modern intelligent experiences.
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              <div
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 
              shadow-sm drop-shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-3xl font-black text-indigo-600">2+</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 uppercase">
                  Years Experience
                </p>
              </div>

              <div
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 
              shadow-sm drop-shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-3xl font-black text-fuchsia-600">10+</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 uppercase">
                  Projects Built
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
