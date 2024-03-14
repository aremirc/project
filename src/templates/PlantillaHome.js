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
    '<style>.plantillaHome__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/570.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_640.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_640.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_640.jpg")}</style>',
    '<style>.plantillaHome__cambio {background-image: url("https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg")}</style>']
  function cambiarAde() {
    var d = document.querySelector('.plantillaHome__cambio');
    cont++;
    cont = cont % array_img.length;
    d.innerHTML = array_img[cont];
  }
  function cambiarAtr() {
    var d = document.querySelector('.plantillaHome__cambio');
    cont = (cont === 0 || cont === -1) ? 9 : cont;
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