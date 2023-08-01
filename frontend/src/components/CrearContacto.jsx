export function CrearContacto({ createFunc }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoContacto = {
      name: e.target.nombre.value,
      number: e.target.numero.value,
    }
    createFunc(nuevoContacto)
    e.target.numero.value = ''
    e.target.nombre.value = ''
  }

  return (
    <div className='container_crear'>
      <h3>Crear nuevo contacto</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>
          Nombre:
          <input type='text' name='nombre' id='nombre' />
        </label>
        <label htmlFor='numero'>
          Numero:
          <input type='text' name='numero' id='numero' />
        </label>
        <button>Crear</button>
      </form>
    </div>
  )
}
