import React from 'react';
import styles from "./Localizacao.module.css"

const Localizacao = () => {
  return (
    <div>
      <h1>Local do seu atendimento: R. Voluntários da Pátria, 692 - Centro</h1>
      <iframe className={styles.mapa}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.1388755585663!2d-52.3410184245836!3d-31.766697974102108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5bd16f8d08f%3A0x7a97dadc98890159!2sR.%20Volunt%C3%A1rios%20da%20P%C3%A1tria%2C%20692%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096015-730!5e0!3m2!1spt-BR!2sbr!4v1730249535035!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Localizacao;
