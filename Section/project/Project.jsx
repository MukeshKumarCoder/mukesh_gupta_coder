import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "../../Components/projectCard/ProjectCard";
import razorPay from "../../assets/project1.png";
import { FaPlay, FaCode } from "react-icons/fa";
import eComm from "../../assets/project2.png"
import weather from "../../assets/project3.png"
import toggleHead from "../../assets/project5.png"
import fitClub from "../../assets/project6.png"
import topCourses from "../../assets/project4.png"


const Project = () => {
  return (
    <div id="project">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard
          title="RazorPay Clone"
          projectImg={razorPay}
          projectDetails="Designed and implemented a feature-rich landing page for a Razorpay clone using HTML and Tailwind CSS. This online payment app emphasizes a seamless user experience and responsiveness"
          langauge="HTML Tailwind css"
          href1={`https://razorpay-clone-tailwind1.netlify.app/`}
          href2={`https://github.com/magupta1/RazorpayClone-with-Tailwind`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="WEE Store"
          projectImg={eComm}
          projectDetails="Developed a visually compelling and responsive E-Commerce website home page using HTML5 and CSS. Prioritized user experience for both mobile and tablet devices, ensuring seamless"
          langauge="HTML and CSS"
          href1={`https://magupta1.github.io/E-Commerce/`}
          href2={`https://github.com/magupta1/E-Commerce`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="Weather App"
          projectImg={weather}
          projectDetails="Developed a sleek Weather App using OpenWeather API, HTML5, CSS, and JavaScript. Enables users to effortlessly search and access real-time weather data by city name."
          langauge="HTML, css and JavaScript"
          href1={`https://weather-app-api-mukesh.netlify.app/`}
          href2={`https://github.com/magupta1/Masai_Js_Problems/tree/main/WeatherApp2`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="ToggleHead Project"
          projectImg={toggleHead}
          projectDetails="Made a cool landing page for digital marketing called ToggleHead. Used React.js, CSS, and Swipe.js for swiping stuff. Works great on phones and tablets too. It shows off my skills in React.js."
          langauge="React.js, CSS, Swiper.js"
          href1={`https://togglehead-project.netlify.app/`}
          href2={`https://github.com/magupta1/ToggleHead-Project`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="FitClup App"
          projectImg={fitClub}
          projectDetails="Crafted a sleek landing page for Fit Club using React.js and CSS3. Emphasized clean design, responsiveness, and subtle animations/images. Showcases a blend of technical proficiency and creative design."
          langauge="React.js, css and animation"
          href1={`https://fit-club-react-project.netlify.app/`}
          href2={`https://github.com/magupta1/FitClub`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="TopCourses App"
          projectImg={topCourses}
          projectDetails="Developed a React.js project Top Courses showcasing a collection of courses. Implemented category-based filtering for easy navigation. Designed with CSS to provide a user-friendly and responsive experience."
          langauge="React.js and CSS"
          href1={`https://topcourseswithfilter.netlify.app/`}
          href2={`https://github.com/magupta1/top-Courses`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        
      </div>
    </div>
  );
};

export default Project;
