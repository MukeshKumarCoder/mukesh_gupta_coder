import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/asset 1.svg";

const About = () => {
  return (
    <div className={styles.about_container} id="about">
      <div className={styles.about_left}>
        <h2>Who I am</h2>
        <p className={styles.title}>Mukesh Kumar | Full Stack MERN Developer</p>
        <p>
          I am a dedicated Full Stack Developer with a lifelong passion for
          technology. I studied Full Stack Development at{" "}
          <strong>Masai School</strong>, where I gained expertise in the{" "}
          <strong>MERN stack</strong>: MongoDB, Express, React, and Node.js. I
          am skilled at building scalable web applications, creating RESTful
          APIs, responsive interfaces, and secure back-end solutions. With
          experience in OAuth, JWT authentication, and database optimization, I
          focus on crafting innovative, user-centered applications while
          continually expanding my technical skills.
        </p>
      </div>
      <div className={styles.about_right}>
        <img src={aboutImg} alt="Developer illustration" />
      </div>
    </div>
  );
};

export default About;
