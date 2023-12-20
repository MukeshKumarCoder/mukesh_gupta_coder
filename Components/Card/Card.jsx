import React from 'react'
import styles from "./Card.module.css"

const Card = ({cardImg, cardTitle}) => {
  return (
    <div className={styles.card}>
      <img src={cardImg}/>
      <p>{cardTitle}</p>
    </div>
  )
}

export default Card
