import '../styles/Boton.css'

function Boton ({ text, isButtonClic, handleClick }) {

    return (
        <button
        className={`btn ${isButtonClic ? 'green' : 'lila'}`} // agregamos una clase basada en condición para nuestro tipo de Botón, 'Clic' o 'Reiniciar'
        onClick={handleClick}> 
            {text}
        </button>
        // aquí tenemos nuestro Boton con sus 3 props, uno para texto, otro para saber q tipo de Boton es, y el tercero que es una funcion para hacer clic
        // la funcion handleClick va a venir del componente q renderice al Boton
        // cuando hagamos clic en Boton vamos a tener que actualizar el estado de otro componente q es el Contador
    )
}

export default Boton