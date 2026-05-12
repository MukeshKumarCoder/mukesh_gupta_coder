import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import useDarkMode from "../Components/useDarkMood";

const navList = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "About", path: "#about" },
  { id: 3, title: "Skills", path: "#skills" },
  { id: 4, title: "Project", path: "#project" },
  { id: 5, title: "Experience", path: "#experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  const ThemeToggle = () => (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
      ${
        isDark
          ? "bg-gradient-to-r from-indigo-600 to-purple-600"
          : "bg-gradient-to-r from-yellow-300 to-orange-400"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md"
      >
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm"
        >
          {isDark ? "🌙" : "🌞"}
        </motion.span>
      </motion.div>
    </button>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 h-16 flex items-center ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-md dark:bg-slate-900/80 dark:border-slate-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full gap-3">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tight cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
              Mukesh
            </span>
            <span className="text-slate-900 dark:text-white">.dev</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navList.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  aria-label={`${link.title}`}
                  className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 dark:hover:text-white hover:text-indigo-600 transition"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                aria-label="Contact"
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Hire Me
              </a>
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full gap-6 transition-all duration-500 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl"
          >
            <FiX size={24} />
          </button>

          {navList.map((link) => (
            <a
              key={link.id}
              href={link.path}
              aria-label={`${link.title}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black text-slate-900 dark:text-white hover:text-indigo-600 transition-all duration-300 hover:scale-110"
            >
              {link.title}
            </a>
          ))}

          <a
            href="#contact"
            aria-label="Contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 px-10 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
