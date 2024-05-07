import '../estilos/PlantillaContact.css';
import { FaRegEnvelope, FaLocationDot, FaMapLocationDot, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import Formulario from '../molecules/Formulario';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { Navigate } from 'react-router-dom';

function PlantillaContact() {
  return (
    <div className='plantillaContact'>
      <Header />
      {
        sessionStorage.getItem("myKey") ? (
          <main className='plantillaContact__main'>
            <div className='plantillaContact__section'>
              <div className='plantillaContact__text'>
                <div className='plantillaContact__info'>
                  Información de contacto
                  <FaRegEnvelope />
                </div>
                <div className='plantillaContact__map'>
                  Mapa de ubicación
                  <FaLocationDot /><FaMapLocationDot />
                </div>
              </div>
              <Formulario />
            </div>
            <div className='plantillaContact__social'>
              <div className='plantillaContact__iconBox'>
                <a className='plantillaContact__icon' href='./contact'>
                  <FaFacebook />
                </a>
              </div>
              <div className='plantillaContact__iconBox'>
                <a className='plantillaContact__icon' href='./contact'>
                  <FaInstagram />
                </a>
              </div>
              <div className='plantillaContact__iconBox'>
                <a className='plantillaContact__icon' href='./contact'>
                  <FaYoutube />
                </a>
              </div>
            </div>
          </main>
        ) : (
          <Navigate to="/login" />
        )
      }
      <Footer />
    </div>
  )
}

export default PlantillaContact;