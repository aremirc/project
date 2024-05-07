import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

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
  data: ''
}

function Seeker() {
  const { register } = useAform(initialState)

  return (
    <form className='header__form header__show'>
      <label className='header__label'>
        <input {...register('data', { className: 'header__entrada', type: 'search', placeholder: 'Buscar en TECNIPAC', required: true })} />
        <button className='header__boton header__boton--search' type="submit"><FaMagnifyingGlass /></button>
      </label>
    </form>
  )
}

export default Seeker;