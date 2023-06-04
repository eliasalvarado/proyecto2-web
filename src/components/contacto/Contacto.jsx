import React from 'react'
import styles from './Contacto.module.css'

function contacto() {
  return (
    <ul className={`${styles.ulContainer}`}>
      <li className={`${styles.liContainer}`}>
        <a className={`${styles.aContainer}`} href="https://www.linkedin.com/in/ealvaradorax/">
          <i className="fa-brands fa-linkedin" />
        </a>
      </li>
      <li className={`${styles.liContainer}`}>
        <a className={`${styles.aContainer}`} href="https://github.com/eliasalvarado">
          <i className="fa-brands fa-github" />
        </a>
      </li>
    </ul>
  )
}

export default contacto
