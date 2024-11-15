import React from 'react'
import styles from "./Card.module.css"

const Card = ({image, title}) => {
  return (
    <div className={styles.card}>
      <img src={image}/>
      <p>{title}</p>
    </div>
  )
}

export default Card
