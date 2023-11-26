import EmmaImage from '../images/testimonio-emma.png';
import '../styles/Testimony.css'

function Testimony() {
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
                <p className='testimony-name'>Emma Bostian en Suecia</p>
                <p className='testimony-position'>Ingeniera de Software en Spotify</p>
                <p className='testimony-text'>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el 
                que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba 
                para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
            </div>
        </div>
    )
}

export default Testimony