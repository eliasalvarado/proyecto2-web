import React from 'react'
import styles from './Sobremi.module.css'
import foto from '../../assets/foto.jpg'
import cv from '../../assets/cv.pdf'

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
          Estudiante de 3.er año de Ingeniería en Ciencia de la Computación y TI.
        </p>
        <p className={`${styles.sobreMi}`}>
          Apasionado por la computación. Inicié esta pasión desde la secundaria, donde comprendí la importancia que tiene la computación en nuestras vidas y la gran herramienta que es con el uso correcto. Aspiro a dominar los distintos campos que componen las telecomunicaciones.
        </p>
        <a className={`${styles.cv}`} href={cv} download>
          <i className="fa-solid fa-download" id="download" />
          Descargar CV
        </a>
      </div>
    </div>
  )
}

export default Sobremi
