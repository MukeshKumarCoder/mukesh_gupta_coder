import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-linear-to-b from-slate-50 to-transparent -z-10" />

      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-2xl font-black mb-6 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-500">
            Mukesh
          </span>
          <span className="text-slate-900">.dev</span>
        </div>

        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-3">
          <div className="px-6 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
            <p className="text-slate-600 flex items-center gap-2 text-sm font-medium">
              Made with
              <FaHeart className="text-rose-500 animate-pulse" />
              by <span className="text-slate-900 font-bold">Mukesh Kumar</span>
            </p>
          </div>

          <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-black mt-4">
            © {currentYear} • Designed for High Performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
