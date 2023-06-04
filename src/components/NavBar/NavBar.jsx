import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import logo from '../../assets/logoE.svg'

function NavBar() {
  // const [displayMenu, setDisplayMenu] = useState(false)
  const [navBarComponents, setNavBarComponents] = useState([])
  const [responsive, setResponsive] = useState(false)

  const navBarComponentsDemo = [
    { text: 'Inicio', id: 'inicio' },
    { text: 'Sobre mi', id: 'sobremi' },
    { text: 'Skills', id: 'skills' },
    { text: 'Portafolio', id: 'portafolio' },
  ]

  const handleClick = () => {
    setResponsive(!responsive)
  }

  useEffect(() => {
    setNavBarComponents(navBarComponentsDemo)
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      <header className={`${styles.headerContainer}`}>
        <img className={`${styles.logo}`} src={logo} alt="logoE" />
        <nav className={`${!responsive ? styles.navHeader : styles.navHeaderResponsive}`}>
          <ul className={`${!responsive ? styles.ulContainer : styles.ulContainerActive}`}>
            {navBarComponents.map((component) => (
              <li className={`${styles.liContainer}`}>
                <a className={`${styles.aContainer}`} href={`#${component.id}`}>
                  {component.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${styles.iconContainer}`}>
          <i className={!responsive ? 'fa-solid fa-bars' : 'fa-solid fa-x'} onClick={handleClick} />
        </div>
      </header>
    </div>
  )
}

export default NavBar
