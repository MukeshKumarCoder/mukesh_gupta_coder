import React from 'react'
import styles from "./Tools.module.css"
import { toolsData } from '../../data/ToolsData'
import Card from '../../Components/Card/Card'

const Tools = () => {
    return (
        <div id="tools">
          <h2 style={{textAlign: "center"}}>Tools</h2>
          <div className={styles.toolsCard}>
            {toolsData.map((tool) => (
              <Card key={tool.id} title={tool.title} image={tool.image} />
            ))}
          </div>
        </div>
  )
}

export default Tools
