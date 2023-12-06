import '../css/Screen.css'

// No necesariamente tenemos q crear un componente con la palabra function, tmb podemos usar const y definir el componente como una función de flecha.
// Normalmente este tipo de definición la podemos usar para componentes más sencillos, q sólo tienen presentación no tienen lógica ni funciones
const Screen = ({ input }) => (
    <div className='input'>
        {input}
    </div>
)

export default Screen