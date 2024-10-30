import React from 'react';
import styles from './HeroSec.module.css';

const SecHero = () => {
  return (
    <section className={`${styles.secHero} animeLeft`}>
        <img src='src/assets/hero-image.jpg' alt="Imagem de um atendimento odontológico no consultório do Dr. Mauro Estivalet." />
        <div>
          <h1>Qual foi a última vez que fostes ao dentista?</h1>
          <a href="/">Agende sua visita aqui!</a> 
        </div>
    </section>
  );
};

export default SecHero;