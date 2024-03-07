import '../estilos/Central.css';
import PlantillaCentral from '../templates/PlantillaCentral';
import { Navigate } from 'react-router-dom';

function Central() {
    const valor = sessionStorage.getItem("myKey");

    return (
        <div className='central'>
            {
                valor ? (
                    <PlantillaCentral />
                ) : (
                    <Navigate to="/login" />
                )
            }
        </div>
    )
}

export default Central;