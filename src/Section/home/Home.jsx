import React from "react";
import styles from "./Home.module.css";
import heroImg from "../../assets/Hero.jpg";
import Image from "../image/Image";
import Button from "../../Components/Button/Button";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/MukeshKumar.pdf";

const Home = () => {
  const handleDownload = () => {
    toast.success("Download");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.links}>
        <a href="https://github.com/MukeshKumarCoder" target="_blank">
          <FaGithub className={styles.socialLinks} />
        </a>
        <a
          href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
          target="_blank"
        >
          <FaLinkedin className={styles.socialLinks} />
        </a>
      </div>

      <div className={styles.hero_img}>
        <Image src={heroImg} />
      </div>
      <div className={styles.main} id="home">
        <div className={styles.homeLeft}></div>
        <div className={styles.homeRight}>
          <p>Full-Stack Web Developer</p>
          <h1>Mukesh Kumar</h1>
          <p>
            My passion for software is in conceptualizing ideas and transforming
            them into elegant interfaces. I prioritize the user experience,
            software architecture, and code quality of what I create.
          </p>
          <div className={styles.btn}>
            <a href={resume} download>
              <Button handleDownload={handleDownload} className={styles.btn2}>
                Download CV
              </Button>
            </a>
            <a href="#contact">
              <Button className={styles.btn1}>Contact</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
