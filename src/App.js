import { useState } from 'react'
import logo from './logo.svg';
import Button from './components/Button/index'
import './App.css';

const object = {
  nombre: 'Juan',
  apellido: 'Díaz',
  edad: 30,
  telefono: 923487987
}

function App() {
  const [number, setNumber] = useState(0)
  const [showImage, setShowImage] = useState(false)
  const [person, setPerson] = useState(object)

  const sumar = () => {
    setNumber(number + 1)
  }

  const mostrarImagen = () => {
    setShowImage(!showImage)
  }

  const sumarEdad = () => {
    setPerson({
      ...person,
      edad: person.edad + 1
    })
  }

  const { apellido, nombre, edad } = person

  return (
    <div>
      Clase 04 - Introducción a React.js
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>
      <Button
        onClick={sumarEdad}
        nombre="Sumar Edad"
        loading={true}
        src="https://img.icons8.com/ultraviolet/2x/loading-bar--v2.gif"
        edad={edad}
      />
      <Button
        onClick={sumar}
        nombre={`Contar ${number}`}
      />
      <Button
        onClick={mostrarImagen}
        nombre={`${showImage ? 'Ocultar' : 'Mostrar'} imagen`}
        loading={true}
        src="https://img.icons8.com/office/2x/loading-circle--v2.gif"
      />
        
      {
        showImage &&
        (
          <img
            src={logo}
            alt="logo"
          />
        )
      }
    </div>
  )
}

export default App;
