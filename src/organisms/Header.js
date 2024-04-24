import '../estilos/Header.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function Header({ hide }) {

  // const [lastItem, setLastItem] = useState(false)

  // const itemClicked = () => {
  //   setLastItem(true);
  // }

  const logOut = () => {
    sessionStorage.removeItem("myKey");
    // localStorage.clear();
  }

  return (
    <header className="header">
      <div className="header__principal">
        <Link className='header__marca' to="/project">
          <img className='header__logo' src="logo.png" alt="Logo de TECNIPAC" />
          <h1 className='header__titulo'>TECNIPAC</h1>
        </Link>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'><Link className='header__link' to="/project">Inicio</Link></li>
            <li className='header__li'><Link className='header__link' to="/central">Servicios</Link></li>
            <li className='header__li'><Link className='header__link' to="/allies">Partners</Link></li>
            <li className='header__li'><Link className='header__link' to="/clients">Clientes</Link></li>
            <li className='header__li'><Link className='header__link' to="/contact">Contacto</Link></li>
          </ul>
        </nav>
        {/* <form className='header__form'>
          <input className='header__entrada' type="search" placeholder="Buscar en TECNIPAC" />
          <button className='header__boton' type="submit">Buscar</button>
          <Link className='header__link' to="/search">Search</Link>
        </form> */}
        <div className='header__box'>
          <div className='header__sesion'>
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
          <div className='header__toggle'></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
