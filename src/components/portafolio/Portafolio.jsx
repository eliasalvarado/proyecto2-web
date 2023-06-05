import React, { useState, useEffect } from 'react'
import styles from './Portafolio.module.css'
import Proyecto from '../proyecto/Proyecto'

function Portafolio() {
  const [proyectos, setProyectos] = useState([])

  const proyectosDemo = [
    {
      name: 'Minecraft Fox', img: '/src/assets/lab4.png', link: 'https://uvgenios.online/21808/lab4/', github: 'https://github.com/eliasalvarado/lab4-cssOnly.git', technologys: ['html', 'css'],
    },
    {
      name: "Kimetsu No Yaiba's Memory", img: '/src/assets/lab6.png', link: 'https://uvgenios.online/21808/lab6/', github: 'https://github.com/eliasalvarado/lab6.git', technologys: ['js', 'react', 'css'],
    },
    {
      name: 'Replicación de Spotify', img: '/src/assets/spotify.png', link: 'https://uvgenios.online/21808/spotify/', github: 'https://github.com/eliasalvarado/proyecto1-web.git', technologys: ['js', 'react', 'css'],
    },
    {
      name: 'Moview', img: '/src/assets/moview.jpg', link: 'https://github.com/eliasalvarado/Moview.git', github: 'https://github.com/eliasalvarado/Moview.git', technologys: ['kotlin'],
    },
    {
      name: 'Reportería de centros clínicos', img: '/src/assets/clinica.png', link: 'https://github.com/erickguerra22/DBProject_2.git', github: 'https://github.com/erickguerra22/DBProject_2.git', technologys: ['js', 'react', 'css', 'postgresql'],
    },
  ]

  useEffect(() => setProyectos(proyectosDemo), [])

  return (
    <div className={`${styles.mainContainer}`}>
      <h2 className={`${styles.title}`}>
        Portafolio
      </h2>
      <div className={`${styles.rowContainer}`}>
        {proyectos.map(({
          name, img, link, github, technologys,
        }) => (
          <Proyecto name={name} img={img} link={link} github={github} technologys={technologys} />
        ))}
      </div>
    </div>
  )
}

export default Portafolio
