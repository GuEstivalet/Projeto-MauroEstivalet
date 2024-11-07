import React from 'react'
import styles from "./Curso.module.css"

const Curso = () => {
  return (
    <section>
        <div className={styles.curso}>
            <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
            <p>paragrafo sobre mim</p>
        </div>
        <div className={styles.curso}>
            <p>paragrafo sobre mim</p>
            <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
        </div>
      
    </section>
  )
}

export default Curso
