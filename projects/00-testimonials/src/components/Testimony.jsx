import '../styles/Testimony.css'

function Testimony(props) {

    return (
        <div className='testimony-container'>
            <img className='testimony-image' src={props.image} alt={`Foto de ${props.name}`} />
            <div className='text-testimony-container'>
                <p className='testimony-name'><strong>{props.name}</strong> en {props.country}</p>
                <p className='testimony-position'>{props.position} en <strong>{props.company}</strong></p>
                <p className='testimony-text'>{props.testimony}</p>
            </div>
        </div>
    )
}

export default Testimony