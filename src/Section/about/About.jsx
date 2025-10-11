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
          I am a passionate and dedicated{" "}
          <strong>Full Stack Web Developer</strong> specializing in the{" "}
          <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>.
          I hold a certification in Full Stack Development from Masai School,
          where I honed my skills in building{" "}
          <strong>
            scalable, responsive, and user-centered web applications
          </strong>
          .
        </p>
        <p>
          Proficient in <strong>HTML, CSS, JavaScript, and Tailwind CSS</strong>
          , I focus on creating{" "}
          <strong>clean, efficient, and high-performing interfaces</strong>
          backed by <strong>secure and optimized back-end systems</strong>. My
          experience includes working with{" "}
          <strong>OAuth, JWT authentication, RESTful APIs</strong>, and{" "}
          <strong>database optimization</strong> to deliver seamless digital
          experiences.
        </p>
        <p>
          Currently, I am <strong>exploring Generative AI (GenAI)</strong> to
          integrate <strong>intelligent and innovative features</strong> into
          modern web solutions—bridging creativity with technology to build the
          next generation of web applications.
        </p>
      </div>
      <div className={styles.about_right}>
        <img src={aboutImg} alt="Developer illustration" />
      </div>
    </div>
  );
};

export default About;
