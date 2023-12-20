import '../css/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'; // importamos react-icons

// la prop completed nos sirve para q el estilo cambie al completar la tarea
// prop id nos sirve para identificar la tarea de manera única
// tenemos text q va a mostrar un texto
// y tenemos a dos funciones completeTask y deleteTask q van a pasarse como props, éstas dos funciones se van a llamar en caso ocurra un evento
function Task({ id, text, completed, completeTask, deleteTask }) {
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className='task-text'
            onClick={() => completeTask(id)}> {/* para completar tarea necesitamos el id de la tarea */}
                {text}
            </div>
            <div className='task-icons-container'
            onClick={() => deleteTask(id)}> {/* para eliminar tarea necesitamos el id de la tarea */}
                <AiOutlineCloseCircle className='task-icon' />  {/* aqui estamos asignando className como una prop, xq asi lo trabaja el componente */}
            </div>
        </div>
    )
}

export default Task