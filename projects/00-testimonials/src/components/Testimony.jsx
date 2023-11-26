import EmmaImage from '../images/testimonio-emma.png';
import '../styles/Testimony.css'

function Testimony(props) {
    // Un componente funcional de React retorna un elemento JSX
    /* 
    * Los props en react nos permiten pasar datos a los componentes dentro de los cuales podemos renderizar diferente información 
        dependiendo de que props se pasen.
    * En este componente Testimony tenemos texto fijo y ese texto no lo vamos a poder reusar xq x ejm sólo vamos a tener el testimonio de Emma,
        para eso nos serviria los props para usar el componente para cada testimonio, pero vamos a personalizar el nombre de la persona, 
        la empresa donde trabaja, el país, el cargo y su testimonio.
        Veamos:
 */
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