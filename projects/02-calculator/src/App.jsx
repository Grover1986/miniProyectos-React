import './App.css'
import freeCodeCampLogo from '/freecodecamp-logo.png'

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
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
             {/* fila para el botón Limpiar */}
            <div className="row"></div>
         </div>
      </div>
   )
}

export default App
