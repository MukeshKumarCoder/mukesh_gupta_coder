import React from "react";
import aboutImg from "../assets/sideimg.svg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-tr from-indigo-50/50 via-white to-fuchsia-50/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-fuchsia-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <img
              src={aboutImg}
              alt="Developer Illustration"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-2">
              Who I Am
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Transforming Ideas into <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
                Digital Reality
              </span>
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                I am{" "}
                <span className="text-slate-900 font-semibold">
                  Mukesh Kumar
                </span>
                , a Full Stack Developer with a mastery of the{" "}
                <span className="text-indigo-600 font-medium">MERN Stack</span>.
                I am specialize in creating seamless user experiences and robust
                backend architectures.
              </p>
              <p>
                Beyond standard development, I am deeply involved in{" "}
                <span className="text-violet-600 font-medium  bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-600">
                  Generative AI
                </span>
                , exploring how intelligent features can redefine modern web
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-indigo-100">
                <p className="text-3xl font-black text-indigo-600">1+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">
                  Years Experience
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-fuchsia-100">
                <p className="text-3xl font-black text-fuchsia-600">10+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">
                  Projects Built
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
