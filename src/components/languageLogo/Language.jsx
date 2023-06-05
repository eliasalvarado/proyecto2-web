import React from 'react'
import PropTypes, { string } from 'prop-types'
import styles from './Language.module.css'

function Language({ technologys }) {
  const classNameIcon = {
    html: 'fa-brands fa-html5',
    css: 'fa-brands fa-css3-alt',
    js: 'fa-brands fa-square-js',
    react: 'fa-brands fa-react',
    kotlin: 'fa-brands fa-android',
    postgresql: 'fa-solid fa-database',
  }

  const colorIcon = {
    html: '#F06529',
    css: '#2965F1',
    js: '#F0DB4F',
    react: '#61DBFB',
    kotlin: '#FFFFFF',
    postgresql: '#2F6792',
  }

  return (
    <div className={`${styles.mainContainer}`}>
      {technologys.map((technology) => (
        <div className={`${styles.logoContainer}`}>
          <i className={classNameIcon[technology]} style={{ color: `${colorIcon[technology]}` }} />
          <span className={`${styles.nameContainer}`}>
            {technology}
          </span>
        </div>
      ))}
    </div>
  )
}

Language.propTypes = {
  technologys: PropTypes.arrayOf(string).isRequired,
}

export default Language
