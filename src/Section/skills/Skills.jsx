import React from "react";
import styles from "./Skills.module.css";
import Card from "../../Components/Card/Card";
import {skillData} from "../../data/SkillData.js";

const Skills = () => {
  return (
    <div id="skills">
      <h2 style={{textAlign: "center"}}>Skills</h2>
      <div className={styles.skillsCard}>
        {skillData.map((skill) => (
          <Card key={skill.id} title={skill.title} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
