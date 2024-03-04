import '../estilos/Login.css';

function Login(props) {  
  return (
    <div className='login'>
      <div className='login__principal'>
        <form className='login__form' onSubmit={props.hideLogIn}>
          <div>
            <label className='login__label' htmlFor="username">Usuario:</label>
            <input className='login__entrada' type="text" id="username" name="username" required />
          </div>
          <div>
            <label className='login__label' htmlFor="password">Contraseña:</label>
            <input className='login__entrada' type="password" id="password" name="password" required />
          </div>
          <div>
            <input className='login__boton' type="submit" value="Iniciar sesión" onClick={props.verify} />
          </div>
          <div>
            <a className='login__link' href="recuperar_contrasena.html">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;