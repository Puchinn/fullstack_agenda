import './App.css'
import { useState, useEffect } from 'react'
import { Buscar } from './components/Buscar'
import { CrearContacto } from './components/CrearContacto'
import { ListaContactos } from './components/ListaContactos'
import { Mensaje } from './components/Mensaje'
import { Error } from './components/Error'
import { verificar } from './functions'
import {
  getData,
  createData,
  deleteData,
  updateData,
} from './services/servicios'

function App() {
  const [datos, setDatos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const deleteContact = (id) => {
    deleteData(id).then(() => {
      setDatos(datos.filter((i) => i.id !== id))
      setMensaje('contacto borrado')
      setTimeout(() => {
        setMensaje('')
      }, 3000)
    })
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
    createData(contacto)
      .then((res) => {
        setDatos(datos.concat(res))
        setMensaje('contacto creado')
        setTimeout(() => {
          setMensaje('')
        }, 3000)
      })
      .catch((err) => {
        setError(err.response.data.error)
        setTimeout(() => {
          setError('')
        }, 3000)
      })
  }

  const updateContact = (contacto) => {
    updateData(contacto.id, contacto)
      .then((res) => {
        const nuevosDatos = datos.map((d) => (d.id === res.id ? res : d))
        setDatos(nuevosDatos)
        setMensaje('contacto actualizado')
        setTimeout(() => {
          setMensaje('')
        }, 3000)
      })
      .catch((err) => {
        setError(err.response.data.error)
        setTimeout(() => {
          setError('')
        }, 3000)
      })
  }

  useEffect(() => {
    getData().then((res) => setDatos(res))
  }, [])

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
