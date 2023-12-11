import '../css/Logo.css'
import freeCodeCampLogo from '/freecodecamp-logo.png'

const Logo = () => (
    <div className='freecodecamp-logo-container'>
        <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freeCodeCamp'
        />
    </div>
);

export default Logo