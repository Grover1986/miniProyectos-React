import { useState } from 'react'
import '../css/TaskForm.css'

function TaskForm() {

    // cuando el usuario esté escribiendo tenemos q cambiar el estado del formulario, asi q crearemos un useState
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSend = e => {
        e.preventDefault()
        console.log('Enviando formulario')

        const taskNew = {
            id: '123456',
            texto: input,
            completed: false
        }
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
                onChange={handleChange}
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TaskForm