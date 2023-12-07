import '../css/BotonClear.css'

const BotonClear = (props) => (
    <div 
        className='btnClear'
        onClick={props.handleClear}>
        {props.children}
    </div>
)

export default BotonClear