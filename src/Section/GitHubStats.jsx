import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "MukeshKumarCoder";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const commonParams =
    "&title_color=4f46e5&icon_color=6366f1&text_color=475569&bg_color=ffffff&hide_border=true";

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-8 bg-gradient-to-tr from-indigo-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-50 -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-[120px] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-indigo-600 font-bold text-xs tracking-[0.3em] uppercase mb-3">
            Contributions
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Coding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Activity
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl p-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-xl">
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true${commonParams}`}
                  alt="GitHub stats"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
            {/* GRAPH */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="sm:mt-8 rounded-3xl p-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-2xl overflow-x-auto">
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github&hide_border=true&color=4f46e5&bg_color=ffffff`}
                  alt="Contribution Graph"
                  className="min-w-175 w-full"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {/* LANGUAGES */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl p-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-xl">
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&title_color=4f46e5&icon_color=6366f1&text_color=475569&bg_color=ffffff`}
                  alt="Top Languages"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>

            {/* STREAK */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl p-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-xl">
                <img
                  src={`https://streak-stats.demolab.com?user=${username}${commonParams}`}
                  alt="GitHub Streak"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
