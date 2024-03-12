import '../estilos/Central.css';
import PlantillaCentral from '../templates/PlantillaCentral';
import { Navigate } from 'react-router-dom';

function Central() {

  return (
    <div className='central'>
      {
        sessionStorage.getItem("myKey") ? (
          <PlantillaCentral />
        ) : (
          <Navigate to="/login" />
        )
      }
    </div>
  )
}

export default Central;