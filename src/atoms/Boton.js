import '../estilos/Boton.css';

function Boton(props) {
  return (
    <button className='boton'>{props.text}</button>
  )
}

export default Boton;