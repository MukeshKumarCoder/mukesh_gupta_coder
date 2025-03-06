import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "../../Components/projectCard/ProjectCard";
import { FaPlay, FaCode } from "react-icons/fa";
import { projectData } from "../../data/ProjectData";

const Project = () => {
  return (
    <div id="project">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className={styles.projects}>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tech={project.tech}
            href1={project.href1}
            href2={project.href2}
            icon1={<FaPlay />}
            icon2={<FaCode />}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
