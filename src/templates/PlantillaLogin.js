import '../estilos/PlantillaLogin.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { Link } from 'react-router-dom';

function PlantillaLogin(props) {

    const verify = () => {
        sessionStorage.setItem("myKey", true);
    }

    return (
        <div className='plantillaLogin'>
            <Header />
            <div className='plantillaLogin__principal'>
                <div className='login__principal'>
                    <form className='login__form' onSubmit={props.hideLogIn}>
                        <div>
                            <label className='login__label' htmlFor="username">Usuario:</label>
                            <input className='login__entrada' type="text" id="username" name="username" required />
                        </div>
                        <div>
                            <label className='login__label' htmlFor="password">Contraseña:</label>
                            <input className='login__entrada' type="password" id="password" name="password" required />
                        </div>
                        <div>
                            <input className='login__boton' type="submit" value="Iniciar sesión" onClick={verify} />
                            <Link className='login__boton' onClick={props.logIn} to="/central">Iniciar sesión</Link>
                        </div>
                        <div>
                            <a className='login__link' href="recuperar_contrasena.html">¿Olvidaste tu contraseña?</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PlantillaLogin;