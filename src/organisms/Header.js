import '../estilos/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  
  const logOut = () => {
    sessionStorage.removeItem("myKey");
  }
  

  return (
    <header className="header">
      <div className="header__principal">
        <h1 className='header__titulo'>Mi sitio web</h1>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'><a className='header__link' href=".">Inicio</a></li>
            <li className='header__li'><a className='header__link' href=".">Acerca de</a></li>
            <li className='header__li'><a className='header__link' href=".">Contacto</a></li>
          </ul>
        </nav>
        <img className='header__logo' src="logo.png" alt="Logo de mi sitio web" />
        {/* <form className='header__form'>
          <input className='header__entrada' type="search" placeholder="Buscar en mi sitio web" />
          <button className='header__boton' type="submit">Buscar</button>
        </form> */}
        <div>
          {
            sessionStorage.getItem("myKey") ? (
              // <button className='header__boton' onClick={logOut}>Cerrar sesión</button>
              <Link className='header__boton' onClick={logOut} to="/login">Cerrar sesión</Link>
            ) : (
              <>
                <Link className='header__boton' to="/login">Iniciar sesión</Link>
                <button className='header__boton'>Crear cuenta</button>
              </>
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
