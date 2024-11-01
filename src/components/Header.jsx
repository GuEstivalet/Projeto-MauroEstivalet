import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [buttonMenu, setButtonMenu] = React.useState(false);

  function onClick () {
    setButtonMenu(!buttonMenu);
  }

  return (
   <header>
      <nav className={styles.navBar}>
      <NavLink className={styles.logo} to='/' end><img src="./src/assets/logo-mauro.jpg" alt="Logo do consultório odontológico Mauro Estivalet" /></NavLink>
      <ul>
        <li><NavLink className={styles.link} to='/' end>Início</NavLink></li>
        <li><NavLink className={styles.link} to='projeto'>Projeto</NavLink></li>
        <li><NavLink className={styles.link} to='contato'>Contato</NavLink></li>
      </ul>
      </nav>

    <nav className={buttonMenu ? `${styles.mobileMenuOn}` : `${styles.mobileMenu}`}>
    <NavLink className={styles.logo} to='/' end><img src="./src/assets/logo-mauro.jpg" alt="Logo do consultório odontológico Mauro Estivalet" /></NavLink>
      <ul className={buttonMenu ? `${styles.buttonOnLista}` : `${styles.buttonOffLista}`}>
        <li><NavLink className={styles.mobileLinks} to='/' end>Início</NavLink></li>
        <li><NavLink className={styles.mobileLinks} to='projeto'>Projeto</NavLink></li>
        <li><NavLink className={styles.mobileLinks} to='contato'>Contato</NavLink></li>
      </ul>
     <button onClick={onClick} className={buttonMenu ? `${styles.buttonOnBtn}` : `${styles.buttonOffBtn}`}><FontAwesomeIcon icon={faBars} /></button>
     
    </nav>
   </header>
  )
}

export default Header