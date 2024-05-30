import '../estilos/PlantillaContact.css';
import { FaRegEnvelope, FaMapLocationDot } from 'react-icons/fa6';
import Formulario from '../molecules/Formulario';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { Navigate, useLocation } from 'react-router-dom';

function PlantillaContact() {
  const location = useLocation();

  return (
    <div className='plantillaContact' style={{ backgroundImage: "url('https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <Header />
      {
        sessionStorage.getItem("myKey") ? (
          <main className='plantillaContact__main'>
            <div className='plantillaContact__section'>
              <div className='plantillaContact__text'>
                <div className='plantillaContact__info'>
                  Información de contacto <FaRegEnvelope />
                  <br />
                  <FaMapLocationDot /> Mapa de ubicación
                </div>
                <div className='plantillaContact__map'>
                  <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31077.856095179963!2d-74.22063419999999!3d-13.1792896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127df3a774ab1f%3A0xa8754afd6ff9a870!2sPlaza%20Mayor%20de%20Huamanga%2C%20Ayacucho!5e0!3m2!1ses!2spe!4v1716265699546!5m2!1ses!2spe" width="450" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <Formulario />
            </div>
          </main>
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
      <Footer />
    </div>
  )
}

export default PlantillaContact;