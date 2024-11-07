import React from 'react'
import styles from "./Sobre.module.css"

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
      <p>paragrafo sobre mim</p>
    </section>
  )
}

export default Sobre
