import '../estilos/Header.css';
import { FaHouse, FaHandHoldingHeart, FaHandshake, FaSlideshare, FaRegUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Seeker from '../molecules/Seeker';

function Header({ hide }) {
  const location = useLocation();

  const [mostrar, setMostrar] = useState(false);

  const logOut = () => {
    sessionStorage.removeItem('myKey');
    // localStorage.clear();
  }

  return (
    <header className='header'>
      <div className={mostrar ? 'header__principal active' : 'header__principal'}>
        <Link className='header__marca' to='/project'>
          <img className='header__logo' src='logo.png' alt='Logo de TECNIPAC' />
          <h1 className='header__titulo'>TECNIPAC</h1>
        </Link>
        <nav className='header__nav header__show'>
          <ul className='header__ul'>
            <li className='header__li'>
              <Link className='header__link' to="/project"><span className='header__span'>Inicio</span><FaHouse className='header__icon' /></Link>
            </li>
            <li className='header__li'>
              <Link className='header__link' to="/services"><span className='header__span'>Servicios</span><FaHandHoldingHeart className='header__icon' /></Link>
            </li>
            <li className='header__li'>
              <Link className='header__link' to="/allies"><span className='header__span'>Partners</span><FaHandshake className='header__icon' /></Link>
            </li>
            <li className='header__li'>
              <Link className='header__link' to="/clients"><span className='header__span'>Clientes</span><FaSlideshare className='header__icon' /></Link>
            </li>
          </ul>
        </nav>
        <div className='header__hidden header__show'>
          <Link className='header__link' to="/contact"><img className='header__linkImg' alt='' src='https://media.tenor.com/r2mSqYQUKycAAAAj/raf-rafs.gif' /></Link>
        </div>
        <div className='header__box'>
          <Seeker />
          <div className='header__user'>
            <a href='/profile' className='header__boton header__boton--left'><FaRegUser /></a>
            <div className='header__sesion header__show'>
              {
                sessionStorage.getItem("myKey") ? (
                  <Link className='header__boton header__boton--right' onClick={logOut} to="/login" state={{ from: location }}>Cerrar sesión</Link>
                ) : (
                  hide ? (
                    <Link className='header__boton header__boton--right' to="/register">Crear cuenta</Link>
                  ) : (
                    <>
                      <Link className='header__boton header__boton--right header__boton--up header__boton--up__right' to="/login" state={{ from: location }}>Iniciar sesión</Link>
                      <Link className='header__boton header__boton--right header__boton--down header__boton--down__right' to="/register">Crear cuenta</Link>
                    </>
                  )
                )
              }
            </div>
          </div>
          <div className={mostrar ? 'header__toggle active' : 'header__toggle'} onClick={() => setMostrar(!mostrar)}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;