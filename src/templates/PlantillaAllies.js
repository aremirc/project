import '../estilos/PlantillaAllies.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

function PlantillaAllies() {
  return (
    <div className='plantillaAllies'>
      <Header />
      <main className='plantillaAllies__main'>
        <div className='plantillaAllies__brands'>
          <div className='plantillaAllies__logo'>
            <img className='plantillaAllies__img' src='https://www.hikvision.com/etc/clientlibs/it/resources/icons/hikvision-logo.svg' alt='LOGO HIK VISION' />
          </div>
          <div className='plantillaAllies__logo'>
            <img className='plantillaAllies__img' src='https://us.dahuasecurity.com/wp-content/uploads/2022/02/Dahua-LOGO_All-White.png' alt='LOGO DAHUA' />
          </div>
          <div className='plantillaAllies__logo'>
            <img className='plantillaAllies__img' src='https://imgs.search.brave.com/c8o1KUZ3aaKMImFQQO2v7kkOoJftwKuxV1k9Vy4B1co/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZGl4b24uc3Zn.svg' alt='LOGO DIXON' />
          </div>
          <div className='plantillaAllies__logo'>
            <img className='plantillaAllies__img' src='https://forza-ups-frontend.s3.amazonaws.com/media/img/home-logo-2021.png' alt='LOGO FORZA' />
          </div>
          <div className='plantillaAllies__logo'>
            <img className='plantillaAllies__img' src='https://www.tendacn.com/static/2020/images/tlogos2.png' alt='LOGO TENDA' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaAllies;