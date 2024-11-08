import React from 'react'
import styles from "./Curso.module.css"

const Curso = () => {
  return (
    <section>
        <div className={styles.curso}>
            <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
            <p>
            O curso prático de endodontia, com duração de 12 horas, é voltado para dentistas que desejam aprimorar suas habilidades na área de tratamento de canais radiculares. Ministrado por um profissional experiente, o curso oferece uma abordagem intensiva e prática, permitindo que os participantes realizem procedimentos em simulações clínicas ou dentes extraídos. Ao longo do curso, os alunos têm a oportunidade de revisar as etapas do tratamento endodôntico, desde a limpeza e modelagem do canal até a obturação final, utilizando tecnologias modernas como localizadores apicais e sistemas de irrigação eficazes. Essa vivência prática permite que os profissionais adquiram maior segurança na execução dos tratamentos em seu dia a dia.</p>
        </div>
        <div className={styles.cursosec}>
            <p>Além das habilidades técnicas, o curso aborda tópicos como o diagnóstico diferencial das patologias pulpares e a escolha de materiais mais adequados para cada situação. Com o foco em proporcionar uma experiência prática e objetiva, o curso busca melhorar a eficiência e o sucesso dos tratamentos endodônticos realizados pelos participantes, reforçando o conhecimento teórico com exercícios práticos supervisionados. Ao término das 12 horas, os profissionais estarão mais confiantes para enfrentar desafios clínicos, além de atualizados com as melhores práticas e inovações da endodontia moderna.</p>
            <img src='/src/assets/contato-image.jpg'alt='Imagem do Dr. Mauro Estivalet'  />
        </div>
      
    </section>
  )
}

export default Curso
