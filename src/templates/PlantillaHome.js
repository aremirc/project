import '../estilos/PlantillaHome.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

function PlantillaHome() {

  var cont = -1;
  var array_img = [
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/464.jpeg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/522.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/565.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/1183.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/570.jpg")}</style>']
  function cambiarAde() {
    var d = document.querySelector('.plantillaHome__cambio');
    cont++;
    cont = cont % array_img.length;
    d.innerHTML = array_img[cont];
  }
  function cambiarAtr() {
    var d = document.querySelector('.plantillaHome__cambio');
    cont = (cont === 0 || cont === -1) ? array_img.length : cont;
    cont--;
    cont = cont % array_img.length;
    d.innerHTML = array_img[cont];
  }

  return (
    <div className='plantillaHome'>
      <Header />
      <main className='plantillaHome__main'>
        <h2>BIENVENIDO</h2>
        <div className='plantillaHome__img'>
          <div className='plantillaHome__cambio' backgroundimage={'https://img3.wallspic.com/crops/9/8/3/0/30389/30389-centro_de_datos-computacin-3840x2160.jpg'}></div>
          <button className='plantillaHome__boton plantillaHome__boton--ade' onClick={cambiarAde}>►</button>
          <button className='plantillaHome__boton plantillaHome__boton--atr' onClick={cambiarAtr}>◄</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaHome;