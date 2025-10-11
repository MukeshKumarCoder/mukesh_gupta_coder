
import styles from "./Home.module.css";
import heroImg from "../../assets/Hero.jpg";
import Image from "../image/Image";
import Button from "../../Components/Button/Button";
import { toast } from "react-toastify";
import resume from "../../assets/Mukesh-Kumar CV.pdf";

const Home = () => {
  const handleDownload = () => {
    toast.success("Download");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.hero_img}>
          <Image src={heroImg} />
        </div>
        <div className={styles.right} id="home">
          <div>
            <p>Full-Stack Web Developer</p>
            <h1>Mukesh Kumar</h1>
            <p>
              My passion for software is in conceptualizing ideas and
              transforming them into elegant interfaces. I prioritize the user
              experience, software architecture, and code quality of what I
              create.
            </p>
            <div className={styles.btn}>
              <a href={resume} download>
                <Button handleDownload={handleDownload} className={styles.btn1}>
                  Download CV
                </Button>
              </a>
              <a href="#contact">
                <Button className={styles.btn2}>Contact</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
