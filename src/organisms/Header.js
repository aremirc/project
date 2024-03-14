import '../estilos/Header.css';
import { Link } from 'react-router-dom';

function Header({ hide }) {

  const logOut = () => {
    sessionStorage.removeItem("myKey");
  }

  return (
    <header className="header">
      <div className="header__principal">
        <h1 className='header__titulo'>Mi sitio web</h1>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'><Link className='header__link' to="/project">Inicio</Link></li>
            <li className='header__li'><Link className='header__link' to="/central">Servicios</Link></li>
            <li className='header__li'><Link className='header__link' to="/allies">Aliados</Link></li>
            <li className='header__li'><Link className='header__link' to="/contact">Contacto</Link></li>
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
              <Link className='header__boton' onClick={logOut} to="/login">Cerrar sesión</Link>
            ) : (
              hide ? (
                <Link className='header__boton' to="/register">Crear cuenta</Link>
              ) : (
                <>
                  <Link className='header__boton' to="/login">Iniciar sesión</Link>
                  <Link className='header__boton' to="/register">Crear cuenta</Link>
                </>
              )
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
