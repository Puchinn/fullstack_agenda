export function EditarContacto({ datos, cacelEdit, updateContact }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = e.target.nuevoNombre.value || datos.name
    const numero = e.target.nuevoNumero.value || datos.number
    const nuevosDatos = {
      ...datos,
      name: nombre,
      number: numero,
    }
    updateContact(nuevosDatos)
    cacelEdit()
  }

  return (
    <div className='editar_contacto'>
      <div>
        <h2>editando : {datos.name}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='nuevoNombre'>
            Nuevo nombre:
            <input type='text' name='nuevoNombre' id='nuevoNombre' />
          </label>
          <label htmlFor='nuevoNumero'>
            Nuevo numero:
            <input type='text' name='nuevoNumero' id='nuevoNumero' />
          </label>
          <button onClick={cacelEdit}>Cancelar</button>
          <button type='submit'>Guardar</button>
        </form>
      </div>
    </div>
  )
}
