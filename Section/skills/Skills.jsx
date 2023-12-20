import React from 'react'
import styles from "./Skills.module.css"
import Card from '../../Components/Card/Card'
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import js from "../../assets/js.svg"
import reactImg from "../../assets/react.svg"
// import node from "../../assets/node.png"
// import mongo from "../../assets/mongo.svg"
import npm from "../../assets/npm.svg"
import git from "../../assets/git.svg"
import materialUI from "../../assets/material.svg"
import tailwind from "../../assets/tailwindcss.png"

const Skills = () => {
  return (
    <div id='skills'>
      <h2 className={styles.skillsHeading}>Skills</h2>
      <div className={styles.skillsCard}>
      <Card cardImg={html} cardTitle="HTML"/>
      <Card cardImg={css} cardTitle="CSS"/>
      <Card cardImg={js} cardTitle="JavaScript"/>
      <Card cardImg={reactImg} cardTitle="React"/>
      <Card cardImg={tailwind} cardTitle="Tailwind"/>
      {/* <Card cardImg={node} cardTitle="Node"/>
      <Card cardImg={mongo} cardTitle="MongoDB"/> */}
      <Card cardImg={npm} cardTitle="NPM"/>
      <Card cardImg={git} cardTitle="GitHub"/>
      <Card cardImg={materialUI} cardTitle="MaterialUI"/>
      </div>
    </div>
  )
}

export default Skills
