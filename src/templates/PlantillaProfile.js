import '../estilos/PlantillaProfile.css';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Tooltip from '../atoms/Tooltip';
import { Navigate, useLocation } from 'react-router-dom';
import UserActions from '../atoms/UserActions';

function PlantillaProfile() {
  const location = useLocation();

  const useUser = () => {
    return {
      name: 'Aremirc',
      surname: 'Global',
      country: 'Perú',
      phone: 946786465,
      role: 'Admin',
      email: 'aremirc@example.com',
      link: 'aremirc.github.io/project',
      img: 'https://imgs.search.brave.com/vZituzKerJQISdQ-zzjOUKN8rPMO3fl62PIkjpcbJRk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE3/NDgzMDY2L3Bob3Rv/L25ldy15b3JrLW55/LWFjdG9yLWthdGll/LWhvbG1lcy1wb3Nl/cy1mb3ItYS1waG90/by13aXRoLWxvYmJ5/LXNpZ25hZ2UtZHVy/aW5nLWltZy1ueWZ3/LXRoZS1zaG93cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Y3ZwbjNTbHZEdlhH/bWR6YmNVTXpwelZq/ckNXLThLWUJfVk9s/QVhzMUotaz0'
    }
  }

  const user = useUser()

  return (
    <div className='plantillaProfile'>
      <Header />
      {/* user ? <AuthenticatedApp /> : <UnauthenticatedApp /> */}
      {
        sessionStorage.getItem("myKey") ? (
          user && (
            <div className='plantillaProfile__main'>
              <UserActions user={user} />
              <Tooltip content={(clase) => <a className={clase} href={user.link}>{user.link}</a>}>
                {(isHovered, toggleHover, clase, clasePin) =>
                  <button className={clase}>
                    <p style={{ color: `${isHovered ? 'white' : 'black'}` }}>Hover me</p>
                    {!isHovered && <span className={clasePin} onClick={toggleHover}>📌</span>}
                  </button>
                }
              </Tooltip>
            </div>
          )
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
      <Footer />
    </div >
  )
}

export default PlantillaProfile;