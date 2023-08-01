import './App.css'
import { useState } from 'react'
import { Buscar } from './components/Buscar'
import { CrearContacto } from './components/CrearContacto'
import { ListaContactos } from './components/ListaContactos'
import { Mensaje } from './components/Mensaje'
import { Error } from './components/Error'
import { verificar } from './functions'

const contactos = [
  {
    name: 'esteban',
    number: 22232,
    id: '64c42db3055a3a22ef13e9b9',
  },
  {
    name: 'Luciano',
    number: 22342424,
    id: '64c5c4b9775256d14a3e655c',
  },
  {
    name: 'lopez',
    number: 232323,
    id: '64c5e1d17a6e1b152106ec63',
  },
  {
    name: 'Juju',
    number: 11949285914,
    id: '64c5ea6f046a8a1562a7caf0',
  },
  {
    name: 'juanci',
    number: 222,
    id: '64c71673a836deb7a17203fe',
  },
  {
    name: 'asee',
    number: 222,
    id: '64c717a0c7547d7b2285706b',
  },
  {
    name: 'lucas',
    number: 956223548,
    id: '64c718a0a61017301007c9f7',
  },
]

function App() {
  const [datos, setDatos] = useState(contactos)
  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const deleteContact = (id) => {
    setDatos(datos.filter((i) => i.id !== id))
    setMensaje('contacto borrado')
    setTimeout(() => {
      setMensaje('')
    }, 3000)
  }

  const listaFiltrada = busqueda
    ? datos.filter((i) => i.name.includes(busqueda))
    : datos

  const createContact = (contacto) => {
    if (verificar(datos, contacto)) {
      setError('el contacto ya existe')
      setTimeout(() => {
        setError('')
      }, 3000)
      return
    }
    setDatos(datos.concat(contacto))
    setMensaje('contacto creado')
    setTimeout(() => {
      setMensaje('')
    }, 3000)
  }

  const updateContact = (contacto) => {
    const nuevosDatos = datos.map((d) => (d.id === contacto.id ? contacto : d))
    if (verificar(datos, contacto)) {
      setError('el nombre ya existe')
      setTimeout(() => {
        setError('')
      }, 3000)
      return
    }
    setDatos(nuevosDatos)
    setMensaje('contacto actualizado')
    setTimeout(() => {
      setMensaje('')
    }, 3000)
  }

  return (
    <>
      <h1 className='titulo'>Contactos | Agenda</h1>
      <Buscar attBuscar={setBusqueda} />
      <CrearContacto createFunc={createContact} />
      <ListaContactos
        lista={listaFiltrada}
        deleteFunc={deleteContact}
        updateContact={updateContact}
      />
      {mensaje && <Mensaje mensaje={mensaje} />}
      {error && <Error error={error} />}
    </>
  )
}

export default App
