import React from "react";
import styles from "./Experience.module.css";
import { experienceCompany } from "../../data/ExperienceCompany";

const Experience = () => {
  return (
    <div id="experience">
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div className={styles.experienceContainer}>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {experienceCompany.map((company) => (
              <tr key={company.id}>
                <td>{company.companyName}</td>
                <td>{company.role}</td>
                <td>{company.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
