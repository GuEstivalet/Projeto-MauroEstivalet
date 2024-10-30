import React from 'react'
import styles from "./MainSection.module.css"
import Localizacao from "./Localizacao"
import Head from './Head'

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <Head title="Dr. Mauro Estivalet | Início" description='Início página do Dr. Mauro Estivalet' />
      <Localizacao/>
    </div>
  )
}

export default MainSection
