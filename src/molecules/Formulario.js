import '../estilos/Formulario.css';
import { useState } from 'react';

const useAform = (initialState) => {
  const [form, setForm] = useState(initialState)
  const [dirtyFields, setDirtyFields] = useState({})
  const [watchedProperties, setWatchedProperties] = useState({})

  const register = (propertyName, otherProps = {}) => {
    const { className, id, type, placeholder, required } = otherProps

    return ({
      ...otherProps,
      id: id,
      type: type,
      name: propertyName,
      className: className,
      placeholder: placeholder,
      defaultValue: form[propertyName],
      required: required,
      onFocus: () => setWatchedProperties((watchedProperties) => ({ ...watchedProperties, [propertyName]: true })),
      onChange: (event) => {
        otherProps.onChange?.(event)
        setDirtyFields((dirtyFields) => ({ ...dirtyFields, [propertyName]: true }))
        setForm((form) => ({
          ...form,
          [propertyName]: event.target.value
        }))
      }
    })
  }
  console.log(form, dirtyFields, watchedProperties);

  return { register }
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  interest: '-- Sección de interés',
  comment: ''
}

function Formulario() {

  const { register } = useAform(initialState)

  return (
    <div className='formulario'>
      <div className='formulario__formBox'>
        <form className='formulario__form' action='' method='POST'>
          <label className='formulario__label' htmlFor='nombre'>Nombre</label>
          <input {...register('name', { className: 'formulario__entrada', type: 'text', placeholder: 'Nombre', id: 'nombre', required: true })} />

          <label className='formulario__label' htmlFor='email'>Email</label>
          <input {...register('email', { className: 'formulario__entrada', type: 'email', placeholder: 'Email', id: 'email', required: true })} />

          <label className='formulario__label' htmlFor='telefono'>Teléfono</label>
          <input {...register('phone', { className: 'formulario__entrada', type: 'tel', placeholder: 'Teléfono', id: 'telefono', required: true })} />

          <label className='formulario__label' htmlFor='interes'>Sección de interés</label>
          <select {...register('interest', { className: 'formulario__entrada', id: 'interes' })}>
            <option disabled>-- Sección de interés</option>
            <option value='op1'>Opción 1</option>
            <option value='op2'>Opción 2</option>
            <option value='op3'>Opción 3</option>
          </select>

          <label className='formulario__label' htmlFor='comentario'>Comentario</label>
          <textarea {...register('comment', { className: 'formulario__entrada', placeholder: 'Comentario', id: 'comentario' })} rows='4' cols='50' />

          <input className='formulario__boton' type='submit' value='Enviar' />
        </form>
      </div>
    </div>
  )
}

export default Formulario;