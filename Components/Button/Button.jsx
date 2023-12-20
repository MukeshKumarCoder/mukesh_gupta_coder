import React, { Children } from 'react'
import styles from "./Button.module.css"

const Button = ({children, className, handleDownload}) => {

  


  return (
    <div>
      <button onClick={handleDownload} className={className}>{children}</button>
    </div>
  )
}

export default Button
