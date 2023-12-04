import './App.css'
import freeCodeCampLogo from '/freecodecamp-logo.png'
import Boton from './components/Boton'
import Counter from './components/Counter'

function App() {

  const handleClick = (e) => {
    console.log('event: ', e.target.textContent)
  }

  const resetCounter = (e) => {
    console.log('event: ', e.target.textContent)
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
                numClics='5' 
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
