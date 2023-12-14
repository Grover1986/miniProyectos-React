import '../css/TaskList.css'
import TaskForm from "./TaskForm"

// este componente será el q contiene a ambos, tanto al formulario y a las tareas
function TaskList() {
    return (
        // sino se quiere introducir un nuevo div q sea un contenedor, entonces se pueden usar los Fragmentos
        <>
            <TaskForm />
            {/* dentro de este div tendremos una lista de componentes */}
            <div className='task-list-container'>
                LISTA DE TAREAS
            </div>
        </>
    )
}

export default TaskList