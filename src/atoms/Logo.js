import '../estilos/Logo.css';

function Logo({ child }) {
  return (
    <div className='logo'>
      {child}
    </div>
  )
}

export default Logo;