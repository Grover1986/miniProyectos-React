import { useState } from 'react'
import '../css/TaskForm.css'
import {v4 as uuidv4} from 'uuid'

function TaskForm(props) {

    // cuando el usuario esté escribiendo tenemos q cambiar el estado del formulario, asi q crearemos un useState
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSend = e => {
        e.preventDefault()

        // este objeto va quedando bien, ya luego lo vamos a pasar a nuestro componente TaskList para poder actualizar esa lista de tareas q representa su estado
        const taskNew = {
            id: uuidv4(),   // para manejar los Identificadores instalamos UUID
            text: input,
            completed: false
        }
        props.onSubmit(taskNew) // esta funcion será un prop q nos lo va a pasar el componente TaskList y nos va a permitir agregar esta tarea (objeto) a la lista de tareas del estado
        setInput('')
    }

    return (
        <form 
            className='task-form'
            onSubmit={handleSend}>
            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
                value={input}
                onChange={handleChange}
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TaskForm