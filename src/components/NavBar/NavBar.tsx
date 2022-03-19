import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

export const NavBar:React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to='/' className={styles.nav__link}>Главная</NavLink>
      <NavLink to='/about' className={styles.nav__link}>О нас</NavLink>
      <NavLink to='/' className={styles.nav__link}>Магазины</NavLink>
    </nav>
  )
}

