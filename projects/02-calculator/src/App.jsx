import './App.css'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import Boton from './components/Boton'
import Screen from './components/Screen'
import BotonClear from './components/BotonClear'
import Logo from './components/Logo'

function App() {
   /**
    * Vamos a trabajar con el estado aquí directamente, otro enfoque sería haber creado otro componente llamado Calculadora y q ese componente tuviera ese estado.
    * En cualquiera de los dos casos es válido.
    * Este estado le pertenece a App
    */
   const [input, setInput] = useState('')

   // ahora creamos una función q va actualizar el input
   const addInput = value => {
      setInput(input + value)  // aquí concatenamos nuestro valor inicial con el nuevo valor q recibirá la función, y luego veremos como lo vamos a interpretar como una operación 
      // matematica.
      if(!input) {
         if(value == '+' || value == '-' || value == '*' || value == '/') {
            alert('¡Por favor ingrese algún número!')
            setInput('')
         }
      }
   }

   const calculateResult = () => {
      if(input) setInput(evaluate(input))
      else alert('¡Por favor ingrese algún número!')
   }

   return (
      <div className='App'>
         <Logo />
         <div className="calculator-container">
            <Screen input={input} /> {/* le pasamos la props input y el valor del estado */}
            <div className="row">
               {/* 
                  *  Ahora todos nuestros botones tienen acceso a nuestra función addInput
                  *  Ahora ¿cómo hacemos q el Boton llame a esta función addInput, ya q solo la estamos pasando como un prop?
                  *  Eso lo hacemos en componente Boton, ahí llamamos a handleClick y cuando hacemos eso 
               */}
               <Boton handleClick={addInput}>1</Boton>
               <Boton handleClick={addInput}>2</Boton>
               <Boton handleClick={addInput}>3</Boton>
               <Boton handleClick={addInput}>+</Boton>
            </div>
            <div className="row">
               <Boton handleClick={addInput}>4</Boton>
               <Boton handleClick={addInput}>5</Boton>
               <Boton handleClick={addInput}>6</Boton>
               <Boton handleClick={addInput}>-</Boton>
            </div>
            <div className="row">
               <Boton handleClick={addInput}>7</Boton>
               <Boton handleClick={addInput}>8</Boton>
               <Boton handleClick={addInput}>9</Boton>
               <Boton handleClick={addInput}>*</Boton>
            </div>
            <div className="row">
               <Boton handleClick={calculateResult}>=</Boton>
               <Boton handleClick={addInput}>0</Boton>
               <Boton handleClick={addInput}>.</Boton>
               <Boton handleClick={addInput}>/</Boton>
            </div>
            <div className="row">
               {/* esta es otra alternativa de llamar a una funcion sin necesidad de crear otra como x ejm addInput */}
               <BotonClear handleClear={() => setInput('')}>
                  Limpiar
               </BotonClear>
            </div>
         </div>
      </div>
   )
}

export default App
