import React from "react";
import styles from "./Experience.module.css";
import { experienceCompany } from "../../data/ExperienceCompany";

const Experience = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div className={styles.experienceContainer}>
        <table>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Duration</th>
          </tr>

          {experienceCompany.map((company) => (
            <tr key={company.id}>
              <td>{company.companyName}</td>
              <td>{company.role}</td>
              <td>{company.duration}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Experience;
