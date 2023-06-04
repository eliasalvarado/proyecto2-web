import React, { useState, useEffect } from 'react'
import styles from './Skills.module.css'

function Skills() {
  const [languages, setLanguages] = useState([])
  const [skills, setSkills] = useState([])

  const languagesDemo = [
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 80 },
    { name: 'C++', percentage: 80 },
    { name: 'Kotlin', percentage: 60 },
    { name: 'JavaScript', percentage: 50 },
    { name: 'HTML & CSS', percentage: 60 },
  ]

  const skillsDemo = [
    { name: 'Adaptabilidad', percentage: 80 },
    { name: 'Liderazgo', percentage: 70 },
    { name: 'Trabajo en equipo', percentage: 60 },
    { name: 'Comunicación asertiva', percentage: 90 },
    { name: 'Inteligencia social', percentage: 60 },
  ]

  useEffect(() => {
    setLanguages(languagesDemo)
    setSkills(skillsDemo)
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      <h2 className={`${styles.title}`}>
        Skills
      </h2>
      <div className={`${styles.rowContainer}`}>
        <div className={`${styles.columnContainer}`}>
          <h3 className={`${styles.subTitleContainer}`}>
            Lenguajes de programación
          </h3>
          {languages.map((language) => (
            <div className={`${styles.skillContainer}`}>
              <span className={`${styles.spanSkill}`}>
                {language.name}
              </span>
              <div className={`${styles.skillBar}`}>
                <div className={`${styles.skillProgress}`} style={{ width: `${language.percentage}%` }}>
                  <span className={`${styles.skillPercentage}`}>
                    {language.percentage}
                    %
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.columnContainer}`}>
          <h3 className={`${styles.subTitleContainer}`}>
            Habilidades
          </h3>
          {skills.map((skill) => (
            <div className={`${styles.skillContainer}`}>
              <span className={`${styles.spanSkill}`}>
                {skill.name}
              </span>
              <div className={`${styles.skillBar}`}>
                <div className={`${styles.skillProgress}`} style={{ width: `${skill.percentage}%` }}>
                  <span className={`${styles.skillPercentage}`}>
                    {skill.percentage}
                    %
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
