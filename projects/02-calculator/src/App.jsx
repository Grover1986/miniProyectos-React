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
      </div>
   )
}

export default App
