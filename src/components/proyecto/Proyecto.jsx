import React from 'react'
import PropTypes, { string } from 'prop-types'
import styles from './Proyecto.module.css'
import Language from '../languageLogo/Language'

function Proyecto({
  name, link, technologys, img, github,
}) {
  return (
    <div className={`${styles.mainContainer}`}>
      <img className={`${styles.imgContainer}`} src={`${img}`} alt="imagen" />
      <div className={`${styles.languagesContainer}`}>
        <Language technologys={technologys} />
      </div>
      <div className={`${styles.infoProyect}`}>
        <a className={`${styles.aContainer}`} href={link}>
          <h3 className={`${styles.projectName}`}>{name}</h3>
          <i className="fa-solid fa-link" />
        </a>
        <a className={`${styles.repositoryContainer}`} href={github}>
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  )
}

Proyecto.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technologys: PropTypes.arrayOf(string).isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default Proyecto
