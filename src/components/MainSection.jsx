import React from 'react'
import styles from "./MainSection.module.css"
import Localizacao from "./Localizacao"

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <Localizacao/>
    </div>
  )
}

export default MainSection
