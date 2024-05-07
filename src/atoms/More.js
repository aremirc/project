import '../estilos/More.css';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function More() {
  return (
    <div className='more'>
      <Link className='more__button' to='/central'>
        <span className='more__span'>Ver más</span>
        <FaArrowUpRightFromSquare className='more__icon' />
      </Link>
    </div>
  )
}

export default More;