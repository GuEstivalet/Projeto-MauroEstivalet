import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <nav className={styles.header}>
      <ul>
        <li><NavLink className={styles.logo} to='/' end>Logo</NavLink></li>
        <li><NavLink className={styles.link} to='/' end>Início</NavLink></li>
        <li><NavLink className={styles.link} to='projeto'>Projeto</NavLink></li>
        <li><NavLink className={styles.link} to='contato'>Contato</NavLink></li>
      </ul>
   </nav>
  )
}

export default Header