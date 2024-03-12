import '../estilos/Login.css';
import PlantillaLogin from '../templates/PlantillaLogin';
import { Navigate } from 'react-router-dom';

function Login() {

  return (
    <div className='login'>
      {
        sessionStorage.getItem("myKey") ? (
          <Navigate to="/central" />
        ) : (
          < PlantillaLogin />
        )
      }
    </div>
  )
}

export default Login;