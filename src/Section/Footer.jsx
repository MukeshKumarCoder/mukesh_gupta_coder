import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-tr from-indigo-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden py-8">
      {/* TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 blur-[120px] opacity-40 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-black mb-3"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
            Mukesh
          </span>
          <span className="text-slate-900 dark:text-slate-200">.dev</span>
        </motion.div>

        {/* NAV LINKS */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-3 text-sm font-bold uppercase tracking-widest text-slate-500"
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative group">
                <span className="group-hover:text-indigo-600 transition">
                  {item}
                </span>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-4 mb-3"
        >
          <a
            href="https://github.com/MukeshKumarCoder"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-50 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300hover:scale-110"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>
        </motion.div>

        {/* MADE WITH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-lg"
        >
          <p className="text-slate-600 flex items-center gap-2 text-sm font-medium">
            Made with
            <FaHeart className="text-rose-500 animate-pulse" />
            by <span className="text-slate-900 font-bold">Mukesh Kumar</span>
          </p>
        </motion.div>

        {/* COPYRIGHT */}
        <p className="mt-6 text-xs tracking-[0.3em] uppercase font-black text-slate-400">
          © {currentYear} • Designed for High Performance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
