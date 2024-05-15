import '../estilos/Carousel.css';
import React, { useEffect, useRef } from 'react';

const backgroundImage = new Image();
backgroundImage.src = 'https://img3.wallspic.com/crops/9/8/3/0/30389/30389-centro_de_datos-computacin-3840x2160.jpg';

var cont = -1;
var array_img = [
  'https://4kwallpapers.com/images/walls/thumbs_3t/464.jpeg',
  'https://4kwallpapers.com/images/walls/thumbs_3t/522.jpg',
  'https://4kwallpapers.com/images/walls/thumbs_3t/565.jpg',
  'https://4kwallpapers.com/images/walls/thumbs_3t/1183.jpg',
  'https://4kwallpapers.com/images/walls/thumbs_3t/570.jpg']

function cambiarAde() {
  var d = document.querySelector('.carousel__cambio');
  cont++;
  cont = cont % array_img.length;
  d.style.backgroundImage = `url('${array_img[cont]}')`;
}

function cambiarAtr() {
  var d = document.querySelector('.carousel__cambio');
  cont = (cont === 0 || cont === -1) ? array_img.length : cont;
  cont--;
  cont = cont % array_img.length;
  d.style.backgroundImage = `url('${array_img[cont]}')`;
}

function Carousel() {
  const itemLiRef = useRef(null);

  useEffect(() => {
    backgroundImage.onload = () => {
      document.querySelector('.carousel__cambio').style.backgroundImage = `url('${backgroundImage.src}')`;
    }

    const interval = setInterval(cambiarAde, 7000);

    const handleUnmount = () => {
      backgroundImage.onload = null;
      clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => handleUnmount();
  }, []);

  return (
    <div className='carousel'>
      <div className='carousel__cambio' ref={itemLiRef}></div>
      <button className='carousel__boton carousel__boton--ade' onClick={cambiarAde}>►</button>
      <button className='carousel__boton carousel__boton--atr' onClick={cambiarAtr}>◄</button>
      <div className='carousel__barraBox'>
        <span className='carousel__barra'></span>
      </div>
    </div>
  )
}

export default Carousel;