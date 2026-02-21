import React, { useEffect, useRef, useState } from "react";

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

  const commonParams = `&title_color=4f46e5&icon_color=6366f1&text_color=475569&bg_color=ffffff&hide_border=true`;

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold text-sm tracking-[0.3em] uppercase mb-3">
            Contributions
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Coding{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
              Activity
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="p-2 bg-white border border-slate-100 rounded-4xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500">
              <img
                src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true${commonParams}`}
                alt="GitHub stats"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <div
              className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="p-2 bg-white border border-slate-100 rounded-4xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500">
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&title_color=4f46e5&icon_color=6366f1&text_color=475569&bg_color=ffffff`}
                  alt="Top Languages"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="p-2 bg-white border border-slate-100 rounded-4xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500">
                <img
                  src={`https://streak-stats.demolab.com?user=${username}${commonParams}`}
                  alt="GitHub Streak"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="p-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all overflow-hidden flex justify-center">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github&hide_border=true&color=4f46e5&bg_color=ffffff`}
              alt="Contribution Graph"
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
