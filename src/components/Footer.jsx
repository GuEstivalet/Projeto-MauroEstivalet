import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone do WhatsApp
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone do Instagram
import { faPix } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div>
        <h1>Consultório Dr. Mauro Schimtz Estivalet</h1>
        <h2>Links uteis:</h2>
        <ul>
        <ul>
        <li><NavLink to='/' end>Início</NavLink></li>
        <li><NavLink to='projeto'>Projeto</NavLink></li>
        <li><NavLink to='contato'>Contato</NavLink></li>
      </ul>
        </ul>
      </div>
      <div>
      <h1>Conheça nossas redes sociais</h1>
      <a href=''><FontAwesomeIcon className={styles.icon} icon={faWhatsapp} /></a>
      <a href=''><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></a>
      </div>
      <div>
        <h2>Aceitamos dinheiro, pix e cartões de crédito</h2>
      <FontAwesomeIcon className={styles.icon} icon={faCreditCard} />
      <FontAwesomeIcon className={styles.icon} icon={faPix} />
      </div>
    </section>
  );
}

export default Footer;