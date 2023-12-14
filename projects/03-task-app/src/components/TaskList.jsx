import { useState } from 'react'
import '../css/TaskList.css'
import TaskForm from "./TaskForm"

// este componente será el q contiene a ambos, tanto al formulario y a las tareas
function TaskList() {

    const [tasks, setTasks] = useState([])

    return (
        <>
            <TaskForm />
            <div className='task-list-container'>
                LISTA DE TAREAS
            </div>
        </>
    )
}

export default TaskList