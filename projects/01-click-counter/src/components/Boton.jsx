function Boton ({ text, isButtonClic }) {

    return (
        <button
        className={`btn ${isButtonClic ? 'green' : 'lila'}`}> {/* agregamos una clase basada en condición para nuestro tipo de Botón, 'Clic' o 'Reiniciar' */}
            {text}
        </button>
    )
}

export default Boton