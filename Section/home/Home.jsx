import React from "react";
import styles from "./Home.module.css";
import heroimg from "../../assets/Hero.jpg";
import Image from "../image/Image";
import Button from "../../Components/Button/Button";
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {

  function handleDownload(){
    toast.success("Download")
  }
  return (
    <>
    <div className={styles.links}>
            <a href="https://github.com/magupta1" target="_blank">
              <FaGithub className={styles.socialLinks}/>
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
              target="_blank"
            >
              <FaLinkedin className={styles.socialLinks}/>
            </a>
          </div>

          <div className={styles.hero_img}>
            <Image src={heroimg} />
          </div>
      <div className={styles.homeContainer} id="home">
        <div className={styles.homeLeft}>
        </div>
        <div className={styles.homeRight}>
          <p>Front-End Web Developer</p>
          <h1>Mukesh Kumar</h1>
          <p>
            My passion for software lies with dreaming up ideas and making them
            come true with elegant interfaces. I take great care in the
            experience, architecture, and code quality of the things I build.
          </p>
          <div className={styles.btn}>
            <a
              href="../../assets/Mukesh Kumar-mukesh gupta-Frontend Developer(React).pdf"
              download
            >
              <Button handleDownload={handleDownload} className={styles.btn2}>Dounload CV</Button>
            </a>
            <a href="#contact" >
            <Button className={styles.btn1}>Contact</Button>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
