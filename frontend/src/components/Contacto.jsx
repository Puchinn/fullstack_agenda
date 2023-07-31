import { useState } from 'react'
import { EditarContacto } from './EditarContacto'

export function Contacto({ datos, deleteFunct, updateContact }) {
  const { name, number, id } = datos
  const [editar, setEditar] = useState(false)

  const handleClick = () => {
    const eliminar = window.confirm('borrar el contacto?')
    if (eliminar) {
      return deleteFunct(id)
    }
  }

  const handleEdit = () => {
    setEditar(true)
  }

  const cacelEdit = () => {
    setEditar(false)
  }

  return (
    <div>
      <p>Nombre : {name}</p>
      <p>Numero : {number}</p>
      <button onClick={handleClick}>🗑</button>
      <button onClick={handleEdit}>Editar</button>
      {editar && (
        <EditarContacto
          datos={datos}
          cacelEdit={cacelEdit}
          updateContact={updateContact}
        />
      )}
    </div>
  )
}
