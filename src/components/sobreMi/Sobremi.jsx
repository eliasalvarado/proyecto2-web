import React from 'react'
import styles from './Sobremi.module.css'
import foto from '../../assets/foto.jpg'

function Sobremi() {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.imgContainer}`}>
        <img className={`${styles.foto}`} src={foto} alt="fotoEliasAlvarado" />
      </div>
      <div className={`${styles.sobreContainer}`}>
        <h2 className={`${styles.title}`}>
          Sobre Mi
        </h2>
        <h3 className={`${styles.presentation}`}>
          Me presento, soy
          <span className={`${styles.presentationName}`}> Elías Alvarado</span>
        </h3>
        <p className={`${styles.sobreMi}`}>
          textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
        </p>
        <a className={`${styles.cv}`} href="">Descargar CV</a>
      </div>
    </div>
  )
}

export default Sobremi
