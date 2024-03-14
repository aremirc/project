import '../estilos/Item.css';

function Item(props) {
  return (
    <div className='item'>
      <figure className='item__figure'>
        <img className='item__figureImg' src={props.imagen ?? 'imagen.jpg'} alt='Descrip. de la imagen (alt)' />
        <figcaption className='item__figcaption'>{props.textoImagen ?? 'Descripción de la imagen'}</figcaption>
      </figure>
      <div className='item__texto'>
        <h3 className='item__titulo'>{props.titulo ?? 'Título de la sección'}</h3>
        <p className='item__parrafo'>{props.parrafo ?? 'Contenido de la sección.'}</p>
      </div>
    </div>
  )
}

export default Item;