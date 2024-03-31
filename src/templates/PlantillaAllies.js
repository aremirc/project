import '../estilos/PlantillaAllies.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Boton from '../atoms/Boton';

function PlantillaAllies() {
  return (
    <div className='plantillaAllies'>
      <Header />
      <main className='plantillaAllies__main'>
        <Boton text='HIK VISION' />
        <Boton text='DAHUA' />
        <Boton text='DIXON' />
        <Boton text='FORZA' />
        <Boton text='TENDA' />
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaAllies;