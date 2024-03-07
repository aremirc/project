import '../estilos/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__principal">
          <p className='footer__texto'>Derechos de autor &copy; 2024 Mi Sitio Web</p>
          <ul className='footer__ul'>
            <li className='footer__li'><a className='footer__link' href=".">Acerca de</a></li>
            <li className='footer__li'><a className='footer__link' href=".">Contacto</a></li>
            <li className='footer__li'><a className='footer__link' href=".">Política de privacidad</a></li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
