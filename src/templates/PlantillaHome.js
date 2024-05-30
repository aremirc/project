import '../estilos/PlantillaHome.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Carousel from '../molecules/Carousel';

function PlantillaHome() {
  return (
    <div className='plantillaHome' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className='plantillaHome__header'>
        <Header />
      </div>
      <main className='plantillaHome__main'>
        <Carousel children={
          <div className='plantillaHome__texto'>
            <h2 className='plantillaHome__titulo'>CABLEADO<br /><span className='plantillaHome__titulo--span'>ESTRUCTURADO</span></h2>
          </div>
        } />
      </main>
      <div className='plantillaHome__footer'>
        <Footer />
      </div>
    </div>
  )
}

export default PlantillaHome;