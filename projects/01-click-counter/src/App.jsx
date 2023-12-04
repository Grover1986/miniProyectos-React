import './App.css'
import { useState } from 'react'
import freeCodeCampLogo from '/freecodecamp-logo.png'
import Boton from './components/Boton'
import Counter from './components/Counter'

function App() {

  const [numClics, setNumClics] = useState(0)

  const handleClick = () => {
    setNumClics(numClics + 1)
  }

  const resetCounter = () => {
    setNumClics(0)
  }

  return (
    <div className='App'>
        <div className='freecodecamp-logo-container'>
            <img 
                className='freecodecamp-logo'
                src={freeCodeCampLogo}
                alt='Logo de freeCodeCamp' 
            />
        </div>
        <div className="main-container">
            {/* en este contenedor iran el Contador y los dos Botones */}
            <Counter 
                numClics={numClics} 
            />
            <Boton 
              text='Clic' 
              isButtonClic={true}
              handleClick={handleClick} 
            />
            <Boton 
              text='Reiniciar' 
              isButtonClic={false}
              handleClick={resetCounter}
            />
        </div>
    </div>
  )
}

export default App
