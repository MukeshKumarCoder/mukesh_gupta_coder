import React from 'react'
import styles from "./ProjectCard.module.css"

const ProjectCard = ({title, projectImg, projectDetails, langauge, icon1, icon2, href1, href2}) => {
  return (
    <div className={styles.project_card}>
      <h3>{title}</h3>
      <img src={projectImg} alt={projectImg}/>
      <p>{projectDetails}</p>
      <p className={styles.langauge}>{langauge}</p>
      <div className={styles.project_icon}>
        <a href={href1} target='_blank'>
            <p>{icon1}</p>
        </a>
        <a href={href2} target='_blank'>
            <p>{icon2}</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
