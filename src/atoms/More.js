import '../estilos/More.css';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function More({ color }) {
  return (
    <div className='more'>
      <Link className='more__button' to='/central'>
        <span style={{ color: color }} className='more__span'>Ver más</span>
        <FaArrowUpRightFromSquare className='more__icon' fill={color ?? 'black'} />
      </Link>
    </div>
  )
}

export default More;