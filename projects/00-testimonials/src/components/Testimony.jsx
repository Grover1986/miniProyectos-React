import EmmaImage from '../images/testimonio-emma.png';
import '../styles/Testimony.css'

function Testimony(props) {
    // Un componente funcional de React retorna un elemento JSX
    return (
        <div className='testimony-container'>
            {/* todo lo q va entre {} se considera un valor o una expresión de JS */}
            <img
                className='testimony-image'
                src={EmmaImage} // para insertar una imagen, una opción es usar require()
                alt='Foto de Emma'
            />
            {/* por ahora estamos asignando valores fijos pero luego con las props esto será dinámico para reutilizar código y no tener q
            escribir uno x cada uno */}
            <div className='text-testimony-container'>
                <p className='testimony-name'>{props.name} en {props.country}</p>
                <p className='testimony-position'>{props.position} en {props.company}</p>
                <p className='testimony-text'>{props.testimony}</p>
            </div>
        </div>
    )
}

export default Testimony