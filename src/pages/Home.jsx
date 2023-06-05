import React from 'react'
import styles from './Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import Contacto from '../components/contacto/Contacto'
import Sobremi from '../components/sobreMi/Sobremi'
import Skills from '../components/skills/Skills'
import Portafolio from '../components/portafolio/Portafolio'

function Home() {
  const mensaje = 'print("Reinicialo");'
  return (
    <div className={`${styles.mainContainer}`}>
      <header>
        <NavBar />
      </header>
      <section className={`${styles.inicioContainer}`} id="inicio">
        <div className={`${styles.presentationContainer}`}>
          <p className={`${styles.helloPresentation}`}>
            {'While(True) {'}
            <br />
            {mensaje}
            <br />
            {'}'}
          </p>
          <h2 className={`${styles.h2Presentation}`}>
            Soy
            <span className={`${styles.namePresentation}`}> Elías Alvarado</span>
            , bienvenido a mi portafolio
          </h2>
          <Contacto />
        </div>
      </section>
      <section className={`${styles.sobremiContainer}`} id="sobremi">
        <Sobremi />
      </section>
      <section className={`${styles.skillsContainer}`} id="skills">
        <Skills />
      </section>
      <section className={`${styles.portafolioContainer}`} id="portafolio">
        <Portafolio />
      </section>
    </div>
  )
}

export default Home
