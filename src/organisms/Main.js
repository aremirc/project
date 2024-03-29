import '../estilos/Main.css';
import Item from '../molecules/Item';

function Main() {
  return (
    <div className='main'>
      <div className='main__principal'>
        <Item titulo='Cámaras de seguridad' imagen='https://media.istockphoto.com/id/871704344/es/foto/conectar-m%C3%B3vil-con-c%C3%A1mara-de-seguridad.jpg?b=1&s=612x612&w=0&k=20&c=UHd1dw7bN7PNQclCaeqZqXiuKUV5qZ7OGOMW1o0AX7M=' parrafo='Las cámaras de seguridad son dispositivos de videovigilancia utilizados para grabar o transmitir en tiempo real imágenes y/o vídeos a una ubicación específica, como una estación de monitorización o un smartphone.' />
        <Item titulo='Fibra óptica' imagen='https://img1.wallspic.com/crops/3/9/7/9/29793/29793-ingeniera_de_telecomunicaciones-de_fibra_ptica-3840x2160.jpg' />
        <Item titulo='Cableado estructurado' imagen='https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=600' parrafo='El cableado estructurado es fundamental para la infraestructura de red de un edificio, permitiendo la conectividad y comunicación eficiente entre dispositivos y usuarios. ' />
        <Item titulo='Seguridad electrónica' imagen='https://img1.wallspic.com/previews/0/4/7/9/29740/29740-ingeniera_de_telecomunicaciones-la_seguridad_de_la_informacin-conocimiento-x750.jpg' />
        <Item titulo='Videoportero' imagen='https://images.pexels.com/photos/13007854/pexels-photo-13007854.jpeg?auto=compress&cs=tinysrgb&w=600' parrafo='Un videoportero es un sistema autónomo que gestiona las llamadas en la puerta de un edificio, permitiendo la comunicación audiovisual. Este dispositivo permite a la persona en el interior identificar a la visita, entablar una conversación y abrir la puerta si así lo desea.' />
        <Item imagen='https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Item imagen='https://images.pexels.com/photos/8132431/pexels-photo-8132431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Item imagen='https://images.pexels.com/photos/6342345/pexels-photo-6342345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Main;