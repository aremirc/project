import '../estilos/Footer.css';
import { FaRegHeart, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__principal">
        <p className='footer__texto'>&copy; 2024 TECNIPAC. Todos los derechos reservados.</p>
        <span className='footer__dev'>Made with <FaRegHeart /> by AREMIRC</span>
        <div className='footer__social'>
          <div className='footer__iconBox'>
            <a className='footer__icon' href='./contact'>
              <FaFacebook />
            </a>
          </div>
          <div className='footer__iconBox'>
            <a className='footer__icon' href='./contact'>
              <FaInstagram />
            </a>
          </div>
          <div className='footer__iconBox'>
            <a className='footer__icon' href='./contact'>
              <FaYoutube />
            </a>
          </div>
        </div>
        <ul className='footer__ul'>
          <li className='footer__li'>
            <Link className='footer__link' to="/contact">
              <img className='footer__imgFixed' alt='' src='https://media.tenor.com/r2mSqYQUKycAAAAj/raf-rafs.gif' />
            </Link>
          </li>
          <li className='footer__li'>
            <Link className='footer__link' to="/about">Acerca de</Link>
          </li>
          <li className='footer__li'>
            <Link className='footer__link' to="/privacy">Política de privacidad</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;