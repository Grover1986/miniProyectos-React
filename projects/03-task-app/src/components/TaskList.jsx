import { useState } from 'react'
import '../css/TaskList.css'
import TaskForm from "./TaskForm"
import Task from './Task'

// este componente será el q contiene a ambos, tanto al formulario y a las tareas
function TaskList() {

    const [tasks, setTasks] = useState([])

    /**
     * Ahora, ¿qué es lo que debe ocurrir para q se agregue una tarea a la lista?
     * Inicialmente esa lista está vacía (hablando del useState tasks)
     * Cuando en el formulario (componente TaskForm) se haga clic sobre el boton Agregar Tarea, queremos q el componente TaskList lo sepa y agregue esa tarea al useState tasks 
     * x medio de funcion addTask
     */
    const addTask = task => {
        console.log('Tarea agregada')
        console.log(task)
    }

    return (
        <>
            <TaskForm />
            <div className='task-list-container'>
                {/* Ahora, ¿cómo mostrar una lista de componentes de React? 
                    * ps vamos a generar una lista de componentes Tarea (Task) y cada uno de esos componentes va a tener sus propios valores
                    * Pare renderizar una lista de componentes escribimos {} xq vamos a necesitar un método de arreglos de js
                */}
                {
                    // cada task se va a representar como un Objeto en el Array y para cada uno de ellos se va a crear un componente
                    tasks.map((task) => 
                        <Task 
                            text={task.text}
                            completed={task.completed}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TaskList