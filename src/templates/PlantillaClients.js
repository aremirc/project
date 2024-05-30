import '../estilos/PlantillaClients.css';
import More from '../atoms/More';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { FaUser } from 'react-icons/fa6';
import Logo from '../atoms/Logo';

function PlantillaClients() {
  return (
    <div className='plantillaClients' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/pareja-tiro-medio-hablando-agente-inmobiliario_23-2150322114.jpg?t=st=1714268219~exp=1714271819~hmac=a16a5824b2bb005c2693dbdfcfaf9685d3728748c36cd0eb922cd97d37f870f9&w=996')" }}>
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