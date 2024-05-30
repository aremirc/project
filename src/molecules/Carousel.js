import '../estilos/Carousel.css';
import React, { useEffect, useRef } from 'react';

const backgroundImage = new Image();
backgroundImage.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

var cont = -1;

var array_img = [
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://img3.wallspic.com/crops/9/8/3/0/30389/30389-centro_de_datos-computacin-3840x2160.jpg',
  'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

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

function Carousel({ children }) {
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
      <div className='carousel__cambio' ref={itemLiRef}>
        {children}
      </div>
      <button className='carousel__boton carousel__boton--ade' onClick={cambiarAde}>►</button>
      <button className='carousel__boton carousel__boton--atr' onClick={cambiarAtr}>◄</button>
      <div className='carousel__barraBox'>
        <span className='carousel__barra'></span>
      </div>
    </div>
  )
}

export default Carousel;