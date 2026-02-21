import React from "react";
import { toast } from "react-toastify";
import heroImg from "../assets/Hero.jpg";
import resume from "../assets/Mukesh-Kumar-Resume.pdf";

const Home = () => {
  const handleDownload = () => {
    toast.success("Resume download started!");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20"
    >
      <div className="absolute top-0 left-0 w-125 h-125 bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-cyan-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-fuchsia-50/30 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative w-72 h-80 md:w-100 md:h-125 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-indigo-100">
              <img
                src={heroImg}
                alt="Mukesh Kumar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-light rounded-2xl border border-white/50 shadow-lg backdrop-blur-md">
                <p className="text-indigo-600 font-bold text-center text-sm tracking-wide uppercase">
                  MERN Stack + GenAI ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">
              Available for New Opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter">
            Mukesh <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-500">
              Kumar
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
            Experienced{" "}
            <span className="text-slate-900 font-bold">
              Full Stack Developer
            </span>{" "}
            specializing in scalable MERN applications and high-performance
            software architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a
              href={resume}
              download
              onClick={handleDownload}
              className="group relative w-full sm:w-auto px-10 py-4 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2"
            >
              Download CV
              <span className="group-hover:translate-y-1 transition-transform">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Let’s Talk
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-12">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900">1.5+</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                Years Exp
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900">10+</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                Projects
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-indigo-600">MERN</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                Specialist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
