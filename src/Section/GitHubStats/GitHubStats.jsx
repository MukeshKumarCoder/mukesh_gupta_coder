import React, { useEffect, useRef, useState } from "react";
import styles from "./GitHubStats.module.css";

const GitHubStats = () => {
  const username = "MukeshKumarCoder";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.githubStats}>
      <h2 className={styles.statsTitle}>My GitHub Stats</h2>
      <div className={styles.statsCards}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
          alt="GitHub stats"
          className={`${styles.card} ${isVisible ? styles.showDelay1 : ""}`}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
          alt="Top Languages"
          className={`${styles.card} ${isVisible ? styles.showDelay2 : ""}`}
        />
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight`}
          alt="GitHub Streak"
          className={`${styles.card} ${isVisible ? styles.showDelay3 : ""}`}
        />
      </div>
    </section>
  );
};

export default GitHubStats;
