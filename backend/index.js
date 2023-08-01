require('dotenv').config()

const Persona = require('./models')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(logger)
app.use(cors())

app.get('/api/agenda', (req, res) => {
  Persona.find().then((personas) => res.json(personas))
})

app.get('/api/agenda/:id', (req, res) => {
  Persona.findById(req.params.id).then((persona) => res.json(persona))
})

app.post('/api/agenda', (req, res) => {
  const body = req.body
  const nuevaPersona = new Persona({
    name: body.name,
    number: body.number,
  })
  nuevaPersona.save().then(() => res.json(nuevaPersona))
})

app.put('/api/agenda/:id', (req, res) => {
  const id = req.params.id
  const nuevaPersona = req.body
  Persona.findByIdAndUpdate(id, nuevaPersona, { returnDocument: 'after' }).then(
    (respuesta) => res.json(respuesta)
  )
})

app.delete('/api/agenda/:id', (req, res) => {
  Persona.findByIdAndRemove(req.params.id).then((persona) => res.json(persona))
})

app.use(notFound)
app.listen(PORT)

function logger(req, res, next) {
  console.log(
    `${req.method} ${req.path} ${res.statusCode} ${JSON.stringify(req.body)}`
  )
  next()
}

function notFound(req, res, next) {
  console.log('pagina no encontrada')
  res.status(404).end()
}
