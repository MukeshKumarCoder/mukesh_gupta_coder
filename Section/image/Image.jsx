import React from 'react'
import styles from "./Image.module.css"

const Image = (props) => {
  return (
    <img className={styles.img} src={props.src}/> 
  )
}

export default Image
