import { useState } from 'react'
import '../css/TaskList.css'
import TaskForm from "./TaskForm"
import Task from './Task'

// este componente será el q contiene a ambos, tanto al formulario y a las tareas
function TaskList() {

    const [tasks, setTasks] = useState([])

    // es impresionante como podemos comunicarnos entre componentes, básicamente estamos pasando esta función al formulario TaskForm y luego ese formulario TaskForm a partir de props 
    // esta mandando la tarea de vuelta a Lista de Tareas TaskList para agregarla
    const addTask = task => {
        if(task.text.trim()) { // validamos si la tarea no está vacía
            task.text = task.text.trim()  // quitamos los espacios innecesarios

            const tasksUpdate = [task, ...tasks] // este arreglo va a contener la tarea nueva y todas las tareas anteriores, tiene este orden xq tarea nueva estará al principio del array
            setTasks(tasksUpdate)  // actualizamos el estado
        }
    }
    //☝️ y eso es básciamente lo q hacemos para agregar la tarea

    return (
        <>
            <TaskForm onSubmit={addTask} />
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