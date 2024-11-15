import React from "react";
import styles from "./Experience.module.css";
import { experienceCompany } from "../../data/ExperienceCompany";

const Experience = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.comapnyNav}>
          <h3>Company</h3>
          <h3>Role</h3>
          <h3>Duration</h3>
        </div>
        {experienceCompany.map((company) => (
          <div className={styles.companyList} key={company.id}>
            <p>{company.companyName}</p>
            <p>{company.role}</p>
            <p>{company.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
