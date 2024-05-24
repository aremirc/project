import '../estilos/PlantillaLogin.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function PlantillaLogin() {
  const location = useLocation();
  const previousPath = location.state && location.state.from ? location.state.from : '/project';

  const navigate = useNavigate();
  console.log(navigate);

  const verify = () => {
    sessionStorage.setItem("myKey", true);
  }

  return (
    <div className='plantillaLogin'>
      <Header hide={true} />
      <div className='plantillaLogin__principal'>
        <form className='plantillaLogin__form'>
          <div className='plantillaLogin__box'>
            <label className='plantillaLogin__label' htmlFor="username">Usuario</label>
            <input className='plantillaLogin__entrada' type="text" id="username" name="username" required />
          </div>
          <div className='plantillaLogin__box'>
            <label className='plantillaLogin__label' htmlFor="password">Contraseña</label>
            <input className='plantillaLogin__entrada' type="password" id="password" name="password" required />
          </div>
          <div className='plantillaLogin__box'>
            {/* <input className='plantillaLogin__boton' type="submit" value="Iniciar sesión" /> */}
            <Link className='plantillaLogin__boton' onClick={verify} to={previousPath}>Iniciar sesión</Link>
          </div>
          <div>
            <a className='plantillaLogin__link' href="recuperar_contrasena.html">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default PlantillaLogin;