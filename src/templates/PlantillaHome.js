import '../estilos/PlantillaHome.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Carousel from '../molecules/Carousel';

function PlantillaHome() {
  return (
    <div className='plantillaHome'>
      <Header />
      <main className='plantillaHome__main'>
        <div className='plantillaHome__texto'>
          <h2 className='plantillaHome__titulo'>CABLEADO<br /><span className='plantillaHome__titulo--span'>ESTRUCTURADO</span></h2>
          <p></p>
        </div>
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaHome;