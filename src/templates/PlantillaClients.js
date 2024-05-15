import '../estilos/PlantillaClients.css';
import More from '../atoms/More';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { FaUser } from 'react-icons/fa6';
import Logo from '../atoms/Logo';

function PlantillaClients() {
  return (
    <div className='plantillaClients'>
      <Header />
      <main className='plantillaClients__main'>
        <div className='plantillaClients__brands'>
          <div className='plantillaClients__brandBox'>
            <Logo child={<FaUser className='plantillaClients__img' />} />
            <More />
          </div>
          <div className='plantillaClients__brandBox'>
            <Logo child={<FaUser className='plantillaClients__img' />} />
            <More />
          </div>
          <div className='plantillaClients__brandBox'>
            <Logo child={<FaUser className='plantillaClients__img' />} />
            <More />
          </div>
          <div className='plantillaClients__brandBox'>
            <Logo child={<FaUser className='plantillaClients__img' />} />
            <More />
          </div>
          <div className='plantillaClients__brandBox'>
            <Logo child={<FaUser className='plantillaClients__img' />} />
            <More />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaClients;