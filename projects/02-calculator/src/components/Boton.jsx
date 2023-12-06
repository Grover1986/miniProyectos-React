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
        <div className={`btn ${isOperator(props.children) ? 'operator' : ''}`.trim()}>
            {/* hasta el momento todos los componentes q hemos creado han tenido una sola etiqueta la de apertura, pero tmb un componente q definamos puede tener etiqueta de apertura
            y de cierre, y todo lo q incluyamos dentro de las etiquetas de apertura y de cierre podemos usarlo con props.children q quiere decir descendientes o hijos,
            veamos un ejemplo ya q este componente ya puede renderizarse en App.js */}
            {props.children}
        </div>
    )
}

export default Boton