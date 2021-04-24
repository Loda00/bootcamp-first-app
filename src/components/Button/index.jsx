import React from 'react'
import './style.css'

const Button = ({
  onClick,
  nombre,
  loading,
  src,
  edad = 0
}) => {
  console.log('edad', edad)
  return (
    <>
      <button
        className="btn_main"
        onClick={onClick}
      >
        {
          loading &&
          <img
            className="btn_main_loading"
            src={src}
            alt="loading"
          />
        }
        {nombre}
      </button>
      <span>Boton para salir</span>
    </>
  )
}

export default Button