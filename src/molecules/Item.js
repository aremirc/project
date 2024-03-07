import '../estilos/Item.css';

function Item(props) {
  return (
    <section className='item'>
      <div className='item__section'>
        <h2 className='item__titulo'>{props.titulo??'Título de la sección'}</h2>
        <figure className='item__figure'>
          <img className='item__figureImg' src={props.imagen??'imagen.jpg'} alt='Descrip. de la imagen (alt)' />
          <figcaption className='item__figcaption'>{props.textoImagen??'Descripción de la imagen'}</figcaption>
        </figure>
        <p className='item__parrafo'>{props.parrafo??'Contenido de la sección.'}</p>
      </div>
    </section>
  )
}

export default Item;