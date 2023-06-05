import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

function Mensaje() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'print("Ánimo");',
        'print("Reinicialo");',
      ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: '▌',
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span ref={el} />
  )
}

export default Mensaje
