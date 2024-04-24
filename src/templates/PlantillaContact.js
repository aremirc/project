import '../estilos/PlantillaContact.css';
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
            <div>
              <div>Información de contacto</div>
              <Formulario />
              <div>Mapa de ubicación</div>
              <div>Redes sociales</div>
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