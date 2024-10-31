import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <nav className={styles.header}>
      <NavLink className={styles.logo} to='/' end><img src="./src/assets/logo-mauro.jpg" alt="Logo do consultório odontológico Mauro Estivalet" /></NavLink>
      <ul>
        <li><NavLink className={styles.link} to='/' end>Início</NavLink></li>
        <li><NavLink className={styles.link} to='projeto'>Projeto</NavLink></li>
        <li><NavLink className={styles.link} to='contato'>Contato</NavLink></li>
      </ul>
   </nav>
  )
}

export default Header