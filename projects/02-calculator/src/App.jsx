import './App.css'
import freeCodeCampLogo from '/freecodecamp-logo.png'
import Boton from './components/Boton'
import Screen from './components/Screen'
import BotonClear from './components/BotonClear'

function App() {


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
            <Screen />
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
