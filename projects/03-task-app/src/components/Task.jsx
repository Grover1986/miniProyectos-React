import '../css/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'; // importamos react-icons

// la prop completed nos sirve para q el estilo cambie al completar la tarea
function Task({ text, completed }) {
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className='task-text'>
                {text}
            </div>
            <div className='task-icons-container'>
                <AiOutlineCloseCircle className='task-icon' />  {/* aqui estamos asignando className como una prop, xq asi lo trabaja el componente */}
            </div>
        </div>
    )
}

export default Task