import { Contacto } from './Contacto'

export function ListaContactos({ lista, deleteFunc, updateContact }) {
  const listaMapeada = lista.map((i) => (
    <Contacto
      key={i.id}
      datos={i}
      deleteFunct={deleteFunc}
      updateContact={updateContact}
    />
  ))

  return (
    <div className='container_lista'>
      <h3>Lista de contactos</h3>
      <ul className='lista_contactos'>{listaMapeada}</ul>
    </div>
  )
}
