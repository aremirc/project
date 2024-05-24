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
            <li className='header__li' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/representacion-3d-modelo-casa_23-2150799783.jpg?t=st=1714267880~exp=1714271480~hmac=58377c187d19d524a1f724f54616b27ff2f16dd45bb0def12401761d40d290f5&w=740')" }}>
              <Link className='header__link' to="/project"><span className='header__span'>Inicio</span><FaHouse className='header__icon' /></Link>
            </li>
            <li className='header__li' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/escudo-seguridad-proteccion-privacidad-concepto-confidencialidad_53876-128097.jpg?t=st=1714268039~exp=1714271639~hmac=c3467e3ac3782e821276fe08bc4a4d1997f4901ffea747d3f57be33f24ff100d&w=1060')" }}>
              <Link className='header__link' to="/services"><span className='header__span'>Servicios</span><FaHandHoldingHeart className='header__icon' /></Link>
            </li>
            <li className='header__li' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/escena-negocios-futurista-ambiente-ultra-moderno_23-2151003788.jpg?t=st=1714268128~exp=1714271728~hmac=5a7168ef7e3cba8a654db262a82aadddabcbb67e22f8e80b6a27fcfa293669ee&w=900')" }}>
              <Link className='header__link' to="/allies"><span className='header__span'>Partners</span><FaHandshake className='header__icon' /></Link>
            </li>
            <li className='header__li' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/pareja-tiro-medio-hablando-agente-inmobiliario_23-2150322114.jpg?t=st=1714268219~exp=1714271819~hmac=a16a5824b2bb005c2693dbdfcfaf9685d3728748c36cd0eb922cd97d37f870f9&w=996')" }}>
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