import '../css/TaskForm.css'

function TaskForm() {
    // aqui no tenemos como interactuar cuando se dé clic al boton, asi que crearemos una funcion
    const handleSend = e => {
        const taskNew = {
            id: '123456'
        }
    }

    return (
        <form className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TaskForm