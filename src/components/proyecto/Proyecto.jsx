import React from 'react'
import PropTypes, { string } from 'prop-types'
import styles from './Proyecto.module.css'

function Proyecto({
  name, link, technologys, img,
}) {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.overlayProyect}`} />
      <img className={`${styles.imgContainer}`} src={`${img}`} alt="imagen" />
      <div className={`${styles.infoProyect}`}>
        <a href={link}>
          <h3>{name}</h3>
        </a>
        <span>{technologys}</span>
      </div>
    </div>
  )
}

Proyecto.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technologys: PropTypes.arrayOf(string).isRequired,
  img: PropTypes.string.isRequired,
}

export default Proyecto
