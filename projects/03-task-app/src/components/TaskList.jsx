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
    //☝️ y eso es básicamente lo q hacemos para agregar la tarea

    const deleteTask = id => {
        const tasksUpdate = tasks.filter(task => task.id !== id)
        setTasks(tasksUpdate)
    }

    const completeTask = id => {
        const tasksUpdate = tasks.map(task => {
            // aqui estamos trabajando con el objeto de tareas, no con el componente ni la parte visual, estamos trabajando con la representación en el objeto de la tarea en ese array
            if(task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
        setTasks(tasksUpdate)
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {/* Ahora, ¿cómo mostrar una lista de componentes de React? 
                    * ps vamos a generar una lista de componentes Tarea (Task) y cada uno de esos componentes va a tener sus propios valores
                    * Pare renderizar una lista de componentes escribimos {} xq vamos a necesitar un método de arreglos de js
                */}
                {
                    tasks.map((task) => 
                        <Task 
                            key={task.id} // para q React sepa el orden de la lista y no lo cambie al actualizarlo debemos usar un atributo importante llamado key, si no se inluye key puede haber un error
                            id={task.id} // aqui tmb repetimos pero en atributo id, eso xq key no se pasa como un prop es decir no podemos acceder a key en el componente, en cambio id si
                            text={task.text}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TaskList