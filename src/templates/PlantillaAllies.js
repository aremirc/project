import '../estilos/PlantillaAllies.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Logo from '../atoms/Logo';
import More from '../atoms/More';

function PlantillaAllies() {
  return (
    <div className='plantillaAllies' style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/escena-negocios-futurista-ambiente-ultra-moderno_23-2151003788.jpg?t=st=1714268128~exp=1714271728~hmac=5a7168ef7e3cba8a654db262a82aadddabcbb67e22f8e80b6a27fcfa293669ee&w=900')" }}>
      <Header />
      <main className='plantillaAllies__main'>
        <div className='plantillaAllies__brands'>
          <a href='/allies' className='plantillaAllies__brandBox'>
            <Logo child={<img src='https://www.hikvision.com/etc/clientlibs/it/resources/icons/hikvision-logo.svg' alt='LOGO HIK VISION' />} />
            <More />
          </a>
          <a href='/allies' className='plantillaAllies__brandBox'>
            <Logo child={<img src='https://us.dahuasecurity.com/wp-content/uploads/2022/02/Dahua-LOGO_All-White.png' alt='LOGO DAHUA' />} />
            <More />
          </a>
          <a href='/allies' className='plantillaAllies__brandBox'>
            <Logo child={<img src='https://imgs.search.brave.com/c8o1KUZ3aaKMImFQQO2v7kkOoJftwKuxV1k9Vy4B1co/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZGl4b24uc3Zn.svg' alt='LOGO DIXON' />} />
            <More />
          </a>
          <a href='/allies' className='plantillaAllies__brandBox'>
            <Logo child={<img src='https://forza-ups-frontend.s3.amazonaws.com/media/img/home-logo-2021.png' alt='LOGO FORZA' />} />
            <More />
          </a>
          <a href='/allies' className='plantillaAllies__brandBox'>
            <Logo child={<img src='https://www.tendacn.com/static/2020/images/tlogos2.png' alt='LOGO TENDA' />} />
            <More />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaAllies;