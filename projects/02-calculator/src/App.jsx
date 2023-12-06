import './App.css'
import freeCodeCampLogo from '/freecodecamp-logo.png'
import Boton from './components/Boton'

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
             {/* 4 filas para los números y signos */}
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
             {/* fila para el botón Limpiar */}
            <div className="row"></div>
         </div>
      </div>
   )
}

export default App
