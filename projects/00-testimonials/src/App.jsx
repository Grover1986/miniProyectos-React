import './App.css'
import Testimony from "./components/Testimony";
import testimonials from './services/testimonials';

function App() {

    return (
        <div className='App'>
            <div className='main-container'>
                <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

                {testimonials.map((elem, index) => {
                    const {name, country, image, position, company, testimony} = elem

                    return (
                        <Testimony key={index}
                            name={name}
                            country={country}
                            image={image}
                            position={position}
                            company={company}
                            testimony={testimony}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default App