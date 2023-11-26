import './App.css'
import Testimony from "./components/Testimony";

function App() {
    return (
        <div className='App'>
            <div className='main-container'>
                <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
                
                {/* Una vez q ya asignamos los props, es decir nuestro componente Testimonio ya recibió props, 
                es momento de pasar props.
                Aquí, el componente q renderiza (crea) los props es App y el componente q recibe los props es Testimonio,
                veamos: */}

                <Testimony 
                    name='Emma Bostian'
                    country='Suecia'
                    image=''
                    position='Ingeniera de Software'
                    company='Spotify'
                    testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
                    Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para 
                    conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
                />
            </div>
        </div>
    )
}

export default App