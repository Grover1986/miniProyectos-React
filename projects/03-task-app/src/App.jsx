import './App.css'
import Logo from './components/Logo'

function App() {

   return (
      <div className='task-app'>
         <Logo />
         <div className="main-task-list">
            <h1>Mis Tareas</h1>
            {/* aqui vamos a renderizar o crear lista de componentes es algo nuevo q no hemos visto */}
         </div>
      </div>
   )
}

export default App
