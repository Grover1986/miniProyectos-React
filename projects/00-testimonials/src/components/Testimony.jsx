function Testimony() {
    // Un componente funcional de React retorna un elemento JSX
    return (
        <div className='testimony-container'>
            {/* todo lo q va entre {} se considera un valor o una expresión de JS */}
            <img
                className='testimony-image'
                src={require('../images/testimonio-emma.png')}
                alt='Foto de Emma' />
        </div>
    )
}

export default Testimony