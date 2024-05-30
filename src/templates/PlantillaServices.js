import '../estilos/PlantillaServices.css';
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

function PlantillaServices() {
  return (
    <div className='plantillaServices' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/escudo-seguridad-proteccion-privacidad-concepto-confidencialidad_53876-128097.jpg?t=st=1714268039~exp=1714271639~hmac=c3467e3ac3782e821276fe08bc4a4d1997f4901ffea747d3f57be33f24ff100d&w=1060')" }}>
      <Header />
      <main className='plantillaServices__main'>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaServices;