import React from 'react'
import styles from "./MainSection.module.css"
import Localizacao from "./Localizacao"
import Head from './Head'
import HeroSec from "./HeroSec"
import Tratamentos from './Tratamentos'

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <Head title="Dr. Mauro Estivalet | Início" description='Início página do Dr. Mauro Estivalet' />
      <HeroSec/>
      <Tratamentos/>
      <Localizacao/>
    </div>
  )
}

export default MainSection
