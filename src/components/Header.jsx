import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [buttonMenu, setButtonMenu] = React.useState(false);

  React.useEffect(() => {
    // Função para verificar a largura da página
    const checkPageWidth = () => {
      if (window.innerWidth > 900) {
      setButtonMenu(false);
      } 
    };

    // Verificar ao carregar a página
    checkPageWidth();

    // Adicionar o listener ao evento de redimensionamento da janela
    window.addEventListener('resize', checkPageWidth);

    // Remover o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkPageWidth);
    };
  }, []);

  function onClick () {
    setButtonMenu(!buttonMenu);
    window.scrollTo(0, 0);
  }

  return (
   <header>
      <nav className={styles.navBar}>
      <NavLink className={styles.logo} to='/' end><img src="./assets/logo-mauro.jpg" alt="Logo do consultório odontológico Mauro Estivalet" /></NavLink>
      <ul>
        <li><NavLink className={styles.link} to='/' end>Início</NavLink></li>
        <li><NavLink className={styles.link} to='curso'>Curso</NavLink></li>
        <li><NavLink className={styles.link} to='contato'>Contato</NavLink></li>
      </ul>
      </nav>

    <nav className={buttonMenu ? `${styles.mobileMenuOn}` : `${styles.mobileMenu}`}>
      <NavLink className={styles.logoMobile} onClick={buttonMenu ? onClick : null} to='/' end><img src="./assets/logo-mauro.jpg" alt="Logo do consultório odontológico Mauro Estivalet" /></NavLink>
      <button onClick={onClick} className={buttonMenu ? `${styles.buttonOnBtn}` : `${styles.buttonOffBtn}`}><FontAwesomeIcon icon={faBars} /></button>
        <ul className={buttonMenu ? `${styles.buttonOnLista}` : `${styles.buttonOffLista}`}>
          <li><NavLink onClick={onClick} className={styles.mobileLinks} to='/' end>Início</NavLink></li>
          <li><NavLink onClick={onClick} className={styles.mobileLinks} to='curso'>Curso</NavLink></li>
          <li><NavLink onClick={onClick} className={styles.mobileLinks} to='contato'>Contato</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header