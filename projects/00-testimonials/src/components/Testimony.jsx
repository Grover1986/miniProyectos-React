import '../styles/Testimony.css'

function Testimony(props) {

    return (
        <div className='testimony-container'>
            <img className='testimony-image' src={props.image} alt={`Foto de ${props.name.charAt(0) + props.name.slice(1, props.name.indexOf(' '))}`} />
            <div className='text-testimony-container'>
                <p className='testimony-name'><strong>{props.name}</strong> en {props.country}</p>
                <p className='testimony-position'>{props.position} en <strong>{props.company}</strong></p>
                {/* dangerouslySetInnerHTML: Es una característica especial en React que permite establecer el contenido HTML de un componente de manera dinámica. 
                Se utiliza para renderizar HTML directamente en el DOM. La propiedad dangerouslySetInnerHTML espera un objeto con una propiedad __html 
                que contendrá el HTML que se va a renderizar. */}
                {/* {{__html: props.testimony}}: Aquí se está asignando el valor de props.testimony a la propiedad __html. props.testimony probablemente contiene 
                una cadena de texto que contiene código HTML. */}
                <p className='testimony-text' dangerouslySetInnerHTML={{__html: props.testimony}}/>
            </div>
        </div>
    )
}

export default Testimony