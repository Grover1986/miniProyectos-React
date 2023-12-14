import './App.css'
import Logo from './components/Logo'
import TaskForm from './components/TaskForm';

function App() {

   return (
      <div className='task-app'>
         <Logo />
         <div className="main-task-list">
            <h1>Mis Tareas</h1>
            <TaskForm />
         </div>
      </div>
   )
}

export default App
