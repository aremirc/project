import '../estilos/PlantillaServices.css';
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

function PlantillaServices() {
  return (
    <div className='plantillaServices'>
      <Header />
      <main className='plantillaServices__main'>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaServices;