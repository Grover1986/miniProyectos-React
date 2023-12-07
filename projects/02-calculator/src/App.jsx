import './App.css'
import { useState } from 'react'
import freeCodeCampLogo from '/freecodecamp-logo.png'
import Boton from './components/Boton'
import Screen from './components/Screen'
import BotonClear from './components/BotonClear'

function App() {
   /**
    * Vamos a trabajar con el estado aquí directamente, otro enfoque sería haber creado otro componente llamado Calculadora y q ese componente tuviera ese estado.
    * En cualquiera de los dos casos es válido.
    * Este estado le pertenece a App
    */
   const [input, setInput] = useState('')

   // ahora creamos una función q va actualizar el input
   const addInput = value => (
      setInput(input + value)  // aquí concatenamos nuestro valor inicial con el nuevo valor q recibirá la función, y luego veremos como lo vamos a interpretar como una operación 
      // matematica.
   )

   return (
      <div className='App'>
         <div className='freecodecamp-logo-container'>
            <img
               className='freecodecamp-logo'
               src={freeCodeCampLogo}
               alt='Logo de freeCodeCamp'
            />
         </div>
         <div className="calculator-container">
            <Screen input={input} /> {/* le pasamos la props input y el valor del estado */}
            <div className="row">
               <Boton>1</Boton>
               <Boton>2</Boton>
               <Boton>3</Boton>
               <Boton>+</Boton>
            </div>
            <div className="row">
               <Boton>4</Boton>
               <Boton>5</Boton>
               <Boton>6</Boton>
               <Boton>-</Boton>
            </div>
            <div className="row">
               <Boton>7</Boton>
               <Boton>8</Boton>
               <Boton>9</Boton>
               <Boton>*</Boton>
            </div>
            <div className="row">
               <Boton>=</Boton>
               <Boton>0</Boton>
               <Boton>.</Boton>
               <Boton>/</Boton>
            </div>
            <div className="row">
               {/* este valor 'Limpiar' es fijo no va a cambiar x eso lo hubieramos manejado en duro en vez de props.children en su respectivo componente 'BotonClear', 
                  pero en el caso de componente Boton si hemos manejado props.children xq el valor cambia
               */}
               <BotonClear>Limpiar</BotonClear>
            </div>
         </div>
      </div>
   )
}

export default App
