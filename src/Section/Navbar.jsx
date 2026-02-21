import React, { useState, useEffect } from "react";

const navList = [
  { id: 1, title: "Home", path: "#" },
  { id: 2, title: "About", path: "#about" },
  { id: 3, title: "Skills", path: "#skills" },
  { id: 4, title: "Project", path: "#project" },
  { id: 5, title: "Experience", path: "#experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter cursor-pointer">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-500">
            Mukesh
          </span>
          <span className={scrolled ? "text-slate-900" : "text-slate-800"}>
            .dev
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {navList.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-indigo-600 ${
                  scrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-7 py-2.5 bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 active:scale-95"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`md:hidden text-2xl p-2 rounded-xl bg-slate-100 ${scrolled ? "text-slate-900" : "text-slate-800"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } md:hidden flex flex-col items-center justify-center gap-8`}
      >
        {navList.map((link) => (
          <a
            key={link.id}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
          >
            {link.title}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="px-10 py-4 bg-linear-to-r from-indigo-600 to-cyan-500 text-white rounded-2xl font-black shadow-xl"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
