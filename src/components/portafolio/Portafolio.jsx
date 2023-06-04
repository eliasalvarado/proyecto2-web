import React, { useState, useEffect } from 'react'
import styles from './Portafolio.module.css'
import Proyecto from '../proyecto/Proyecto'

function Portafolio() {
  const [proyectos, setProyectos] = useState([])

  const proyectosDemo = [
    {
      name: 'Minecraft Fox', img: '/src/assets/lab4.png', link: 'https://uvgenios.online/21808/lab4/', technologys: ['html', 'css'],
    },
    {
      name: "Kimetsu No Yaiba's Memory", img: '/src/assets/lab6.png', link: 'https://uvgenios.online/21808/lab6/', technologys: ['javascript', 'react', 'css'],
    },
    {
      name: 'Replicación de Spotify', img: '/src/assets/spotify.png', link: 'https://uvgenios.online/21808/spotify/', technologys: ['javascript', 'react', 'css'],
    },
    {
      name: 'Replicación de Spotify', img: '/src/assets/spotify.png', link: 'https://uvgenios.online/21808/spotify/', technologys: ['javascript', 'react', 'css'],
    },
    {
      name: 'Replicación de Spotify', img: '/src/assets/spotify.png', link: 'https://uvgenios.online/21808/spotify/', technologys: ['javascript', 'react', 'css'],
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
          name, img, link, technologys,
        }) => (
          <Proyecto name={name} img={img} link={link} technologys={technologys} />
        ))}
      </div>
    </div>
  )
}

export default Portafolio
