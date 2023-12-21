import { useState } from 'react'
import '../css/TaskForm.css'

function TaskForm() {

    // cuando el usuario esté escribiendo tenemos q cambiar el estado del formulario, asi q crearemos un useState
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSend = e => {
        const taskNew = {
            id: '123456',
            // Ahora deseamos q el texto sea lo q escribió el usuario, y ¿cómo vamos a obtener lo q escribió el usuario?
            // ps tenemos q manejar q ocurre cuando cambia el contenido del formulario, para eso creamos funcion handleChange
            texto: 'Hola'
        }
    }

    return (
        <form className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
                onChange={handleChange}
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TaskForm