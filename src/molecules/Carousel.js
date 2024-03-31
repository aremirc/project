import '../estilos/Carousel.css';
import React, { useEffect, useRef } from 'react';

function Carousel() {

  const itemLiRef = useRef(null);

  useEffect(() => {
    const backgroundImage = new Image()
    backgroundImage.src = 'https://img3.wallspic.com/crops/9/8/3/0/30389/30389-centro_de_datos-computacin-3840x2160.jpg'
    backgroundImage.onload = () => {
      console.log('Listo');
    }
  }, []);

  var cont = -1;
  var array_img = [
    '<style>.carousel__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/464.jpeg")}</style>',
    '<style>.carousel__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/522.jpg")}</style>',
    '<style>.carousel__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/565.jpg")}</style>',
    '<style>.carousel__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/1183.jpg")}</style>',
    '<style>.carousel__cambio {background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/570.jpg")}</style>']
  function cambiarAde() {
    var d = document.querySelector('.carousel__cambio');
    cont++;
    cont = cont % array_img.length;
    d.innerHTML = array_img[cont];
  }
  function cambiarAtr() {
    var d = document.querySelector('.carousel__cambio');
    cont = (cont === 0 || cont === -1) ? array_img.length : cont;
    cont--;
    cont = cont % array_img.length;
    d.innerHTML = array_img[cont];
  }

  return (
    <div className='carousel'>
      <div className='carousel__cambio' ref={itemLiRef}></div>
      <button className='carousel__boton carousel__boton--ade' onClick={cambiarAde}>►</button>
      <button className='carousel__boton carousel__boton--atr' onClick={cambiarAtr}>◄</button>
    </div>
  )
}

export default Carousel;