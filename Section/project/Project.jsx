import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "../../Components/projectCard/ProjectCard";
import razorPay from "../../assets/project1.png";
import { FaPlay, FaCode } from "react-icons/fa";
import eComm from "../../assets/project2.png"
import weather from "../../assets/project3.png"


const Project = () => {
  return (
    <div id="project">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard
          title="RazorPay Clone"
          projectImg={razorPay}
          projectDetails="I have made this Razorpay clone using HTML And Tailwind CSS it is a online payment app. it is responsive also"
          langauge="HTML Tailwind css"
          href1={`https://razorpay-clone-tailwind1.netlify.app/`}
          href2={`https://github.com/magupta1/RazorpayClone-with-Tailwind`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="WEE Store"
          projectImg={eComm}
          projectDetails="I have made this E-Commerce Website using HTML5 and CSS it's only home page and it's a Mobile and Tab Responsive Website also"
          langauge="HTML and CSS"
          href1={`https://magupta1.github.io/E-Commerce/`}
          href2={`https://github.com/magupta1/E-Commerce`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        <ProjectCard
          title="Weather App"
          projectImg={weather}
          projectDetails="I have made this weather app using open weather API and also HTML5, CSS, and JavaScript in this app you can  search weather data by City name"
          langauge="HTML, css and JavaScript"
          href1={`https://weather-app-api-mukesh.netlify.app/`}
          href2={`https://github.com/magupta1/Masai_Js_Problems/tree/main/WeatherApp2`}
          icon1={<FaPlay />}
          icon2={<FaCode />}
        />
        
      </div>
    </div>
  );
};

export default Project;
