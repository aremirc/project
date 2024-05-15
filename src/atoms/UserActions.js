import '../estilos/UserActions.css';
import { FaGear, FaUserPen } from 'react-icons/fa6';

function UserActions({ user }) {
  return (
    <div className="userActions">
      <div className="userActions__user">
        <div className="userActions__iconUser">
          <img className="userActions__img" src={user.img} alt={`Foto de perfil de ${user.name}`} />
        </div>
        <div className='userActions__text'>
          <h3 className="userActions__name">{user.name}</h3>
          <span className='userActions__role'>{user.role}</span>
          <a href={user.link} className='userActions__email'>{user.email}</a>
        </div>
      </div>
      <div className='userActions__options'>
        <div className='userActions__settings'>
          <div className='userActions__titleBox'>
            <FaGear />
            <span className='userActions__title'>SETTINGS</span>
          </div>
          <div className='userActions__iconsBox'>
            <div className='userActions__icon'>
              <span className='userActions__label'>{user.name}</span>
              <FaUserPen />
            </div>
            <div className='userActions__icon'>
              <span className='userActions__label'>{user.surname}</span>
              <FaUserPen />
            </div>
            <div className='userActions__icon'>
              <span className='userActions__label'>{user.country}</span>
              <FaUserPen />
            </div>
            <div className='userActions__icon'>
              <span className='userActions__label'>{user.phone}</span>
              <FaUserPen />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserActions;