import '../estilos/NoPage.css';
import { FaStudiovinari } from 'react-icons/fa6';
import { useEffect } from 'react';

function NoPage() {

  useEffect(() => {
    var intervalo = setInterval(colorRandom, 1500)

    return (() => clearInterval(intervalo))
  }, [])

  function colorRandom() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')'

    document.querySelector('.noPage__titulo').style.color = color
  }

  return (
    <div className='noPage'>
      <h2 className='noPage__titulo'><FaStudiovinari /><br />Página no encontrada</h2>
    </div>
  )
}

export default NoPage;