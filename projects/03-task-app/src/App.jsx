import './App.css'
import Logo from './components/Logo'
import Task from './components/Task'
import TaskForm from './components/TaskForm';

function App() {

   return (
      <div className='task-app'>
         <Logo />
         <div className="main-task-list">
            <h1>Mis Tareas</h1>
            <TaskForm />
            <Task text='Aprender React' />
         </div>
      </div>
   )
}

export default App
