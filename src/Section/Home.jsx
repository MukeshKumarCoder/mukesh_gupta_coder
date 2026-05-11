import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import heroImg from "../assets/Hero.png";
import resume from "../assets/Mukesh-Kumar-Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import SwingDiv from "../Components/SwingDiv";
import { GoDotFill } from "react-icons/go";

const Home = () => {
  const handleDownload = () => {
    toast.success("Resume download started!");
  };

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
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SwingDiv />
      </div>
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-[100px] opacity-60 -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-[30rem] lg:h-[30rem] bg-cyan-100 dark:bg-cyan-900/30 rounded-full blur-[100px] opacity-60 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-80 sm:h-80 lg:w-[40rem] lg:h-[40rem] bg-fuchsia-100/40 dark:bg-fuchsia-900/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10"
      >
        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative group"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

            <div className="relative sm:w-72 sm:h-80 md:w-96 md:h-[28rem] rounded-[2rem] overflow-hidden border-4 sm:border-8 border-white dark:border-slate-800 shadow-2xl shadow-indigo-200 dark:shadow-indigo-900/40">
              <img
                src={heroImg}
                alt="Mukesh Kumar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-white/30 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/40 dark:border-slate-700 shadow-lg">
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-center text-xs sm:text-sm tracking-wide uppercase">
                  MERN Stack + GenAI ⚡
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800"
          >
            <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
              <motion.div
                animate={{
                  opacity: [1, 0.2, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GoDotFill fill="limegreen" size={20} />
              </motion.div>
              Available for New Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black mb-4 leading-tight lg:leading-[0.9]"
          >
            Mukesh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
              Kumar
            </span>
          </motion.h1>

          {/* TYPEWRITER */}
          <div className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-medium">
            <span>I'm a </span>

            <span className="font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-pulse">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "GenAI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>

            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              I build scalable applications with modern technologies and focus
              on performance, clean architecture, and user experience.
            </p>
          </div>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pb-6 border-b border-slate-100 dark:border-slate-800"
          >
            <a
              href={resume}
              download
              onClick={handleDownload}
              className="group w-full sm:w-auto px-6 sm:px-10 py-3 
              bg-gradient-to-r from-indigo-500 to-indigo-700 
              text-white font-bold rounded-xl 
              transition-all duration-300 flex items-center justify-center gap-2 
              hover:-translate-y-1 hover:shadow-xl"
            >
              Download CV
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-10 py-3 
              bg-white dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700 
              text-slate-700 dark:text-white font-bold rounded-xl 
              hover:bg-slate-50 dark:hover:bg-slate-700 
              hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Let’s Talk
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="pt-8 grid grid-cols-3 gap-4 sm:gap-8 lg:flex lg:gap-12 text-center lg:text-left"
          >
            <div>
              <span className="text-2xl sm:text-3xl font-black">2+</span>
              <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase">
                Years Exp
              </p>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-black">10+</span>
              <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase">
                Projects
              </p>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                MERN
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase">
                Specialist
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
