function Boton(props) {
    return (
        <div>
            {/* hasta el momento todos los componentes q hemos creado han tenido una sola etiqueta la de apertura, pero tmb un componente q definamos puede tener etiqueta de apertura
            y de cierre, y todo lo q incluyamos dentro de las etiquetas de apertura y de cierre podemos usarlo con props.children q quiere decir descendientes o hijos,
            veamos un ejemplo ya q este componente ya puede renderizarse en App.js */}
            {props.children}
        </div>
    )
}

export default Boton