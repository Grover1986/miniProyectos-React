import '../css/Boton.css'

function Boton(props) {

    const isOperator = (value) => {
        // si estos tres valores se cumplen entonces será Verdadero, y si cualquiera de estos es False entonces será False
        return isNaN(value) && (value != '.') && (value != '=')
    } 

    return (
        /*
        * A este div le agregamos dos atributos importantes, la clase y lo q hará el botón cuando se haga clic  
        * Creamos una clase más elaborada para decidir cual será la clase del Boton ya q en la calculadora necesitaremos disintos estilos para los distintos valores del Botón
        * Si el Botón tiene un Operador el fondo será verde y si es un número el color será distinto
        */
        /* llamamos a una funcion dentro de className para saber si children es un operador (+,-,*,/), sí es un operador agregamos clase 'operator' sino ninguna clase */
        <div 
            className={`btn ${isOperator(props.children) ? 'operator' : ''}`.trim()}
            // Como estamos 👇 llamando a una función 'props.handleClick', éste se va a reemplazar x el valor retornado de dicha funcion y eso nos dará error xq el event listener
            // no debe retornar sólo un valor es decir no debe recibir una llamada sino q debe ser una función llamando a otra función es como una acción q esta esperando q ocurra 
            // el evento; entonces para q el div llame a la funcion correctamente, tenemos q escribir una funcion anónima y éste ahora si retornara correctamente y no sólo un valor
            onClick={() => props.handleClick(props.children)}>  {/* Cuando usamos este props.handleClick estamos accediendo a su valor es decir a addInput y esa funcion necesita 
            un valor y ese valor es props.children */}
            {props.children}
        </div>
    )
}

export default Boton