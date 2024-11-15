import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/asset 1.svg";

const About = () => {
  return (
    <div className={styles.about_container} id="about">
      <div className={styles.about_left}>
        <h2>Who I am</h2>
        <p className={styles.title}>
          Mukesh Kumar | Full Stack (MERN) Developer
        </p>
        <p>
          Dedicated Full Stack Developer with a lifelong passion for technology.
          I pursued Full Stack Development at Masai School, gaining expertise in
          the MERN stack — MongoDB, Express, React, and Node.js. Skilled in
          building scalable web applications, I create RESTful APIs, responsive
          interfaces, and secure back-end solutions. With experience in OAuth,
          JWT authentication, and database optimization, I’m focused on crafting
          innovative, user-centered applications while continually expanding my
          technical skills.
        </p>
      </div>
      <div className={styles.about_right}>
        <img src={aboutImg} />
      </div>
    </div>
  );
};

export default About;
