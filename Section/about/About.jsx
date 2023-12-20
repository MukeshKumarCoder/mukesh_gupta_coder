import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/asset 1.svg";

const About = () => {
  return (
    <div className={styles.about_container} id="about">
      <div className={styles.about_left}>
        <h2>Who I am</h2>
        <p>My name is Mukesh Kumar. I'm a Front-End Web Developer.</p>
        <p>
          I have been passionate about new technologies and computers since
          childhood. That's why I Wanted To pursue Computer Science Engineering. But Beacuse Of Money Problem I Couldn't. But Now With the Help of Masai School I'm Learning Full Stack Web Development. Now i'm a front-end Developer and Learning back-end Development.
        </p>
      </div>
      <div className={styles.about_right}>
        <img src={aboutImg} />
      </div>
    </div>
  );
};

export default About;
