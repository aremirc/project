import '../estilos/Item.css';
import Star from '../atoms/Star';
import More from '../atoms/More';

function Item(props) {
  return (
    <div className='item'>
      <figure className='item__figure'>
        <img className='item__figureImg' src={props.imagen ?? 'imagen.jpg'} alt={props.textoImagen ?? 'Descrip. de la imagen (alt)'} />
        <figcaption className='item__figcaption'>{props.textoImagen ?? 'Descripción de la imagen'}</figcaption>
      </figure>
      <div className='item__texto'>
        <h3 className='item__titulo'>{props.titulo ?? 'Título de la sección'}</h3>
        <p className='item__parrafo'>{props.parrafo ?? 'Contenido de la sección.'}</p>
      </div>
      <div className='item__stars'>
        <span className='item__icon'>
          <Star />
        </span>
        <span className='item__icon'>
          <Star />
        </span>
        <span className='item__icon'>
          <Star />
        </span>
        <span className='item__icon'>
          <Star />
        </span>
        <span className='item__icon'>
          <Star />
        </span>
      </div>
      <div className='item__link'>
        <More color={props.color ?? 'greenyellow'} />
      </div>
    </div>
  )
}

export default Item;