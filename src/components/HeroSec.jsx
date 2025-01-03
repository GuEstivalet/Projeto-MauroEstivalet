import React from 'react';
import styles from './HeroSec.module.css';

const SecHero = () => {
  return (
    <section className={`${styles.secHero} animeLeft`}>
      <div>
          <img src="/assets/hero-image.jpg" alt="Imagem Consultorio" />
          <h1>Qual foi a última vez que fostes ao dentista?</h1>
          <a href="https://w.app/furjGk">Agende sua consulta aqui!</a> 
        </div>
    </section>
  );
};

export default SecHero;