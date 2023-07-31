export function Buscar({ attBuscar }) {
  const handleChange = (e) => {
    attBuscar(e.target.value)
  }

  return (
    <div className='container_buscar'>
      <h3>Buscar contacto</h3>
      <input onChange={handleChange} type='text' placeholder='Esteban...' />
    </div>
  )
}
