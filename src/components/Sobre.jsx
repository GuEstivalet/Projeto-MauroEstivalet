import React from 'react'
import styles from "./Sobre.module.css"

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.imageBox}>
      <div className={styles.imageContainer}><img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  /></div>
      </div>
      <p>Mauro Schmitz Estivalet é dentista formado pela Universidade Federal de Pelotas (UFPEL), com mais de 20 anos de experiência na área odontológica. Especialista em Gestão de Serviços de Saúde e Endodontia, ele possui mestrado em Clínica Odontológica com ênfase em Endodontia e atualmente está cursando doutorado na mesma área. Ao longo de sua trajetória, Mauro se destacou no tratamento de casos complexos, consolidando-se como referência em sua especialidade. Seu compromisso com a excelência e a constante busca por aperfeiçoamento garantem um atendimento de alta qualidade, sempre focado na segurança e no bem-estar de seus pacientes.</p>
      </section>
  )
}

export default Sobre
