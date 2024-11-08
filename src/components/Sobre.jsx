import React from 'react'
import styles from "./Sobre.module.css"

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
      <p>Mauro Schmitz Estivalet é um dentista formado pela Universidade Federal de Pelotas (UFPEL), com mais de 20 anos de experiência na área odontológica.Especialista em endodontia, Mauro concluiu seu mestrado na área e atualmente está cursando o doutorado, aprofundando ainda mais seu conhecimento.Ao longo de sua carreira, ele se consolidou como referência no tratamento de casos complexos, sempre buscando aperfeiçoar-se para oferecer o melhor em seu consultório.Seu compromisso com a excelência e a constante atualização garantem um atendimento de alta qualidade, focado na segurança e no bem-estar dos pacientes.</p>
    </section>
  )
}

export default Sobre
