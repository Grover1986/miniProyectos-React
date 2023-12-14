import './App.css'
import Logo from './components/Logo'
import TaskList from './components/TaskList';

function App() {

   return (
      <div className='task-app'>
         <Logo />
         <div className="main-task-list">
            <h1>Mis Tareas</h1>
            <TaskList />   {/* este componente va a representar el formulario y la lista como tal de las tareas */}
         </div>
      </div>
   )
}

export default App
