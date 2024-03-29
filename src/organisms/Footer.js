import '../estilos/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__principal">
          <p className='footer__texto'>Derechos de autor &copy; 2024 TECNIPAC</p>
          <ul className='footer__ul'>
            <li className='footer__li'><Link className='footer__link' to="/about">Acerca de</Link></li>
            <li className='footer__li'><Link className='footer__link' to="/contact">Contacto</Link></li>
            <li className='footer__li'><Link className='footer__link' to="/privacy">Política de privacidad</Link></li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
