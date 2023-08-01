require('dotenv').config()

const url = process.env.MONGODB_URI
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

console.log('conectando a la base de datos...')
mongoose.connect(url).then(() => console.log('conexion exitosa'))

const personaSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'el nombre es demasiado corto, minimo 3 caracteres'],
    required: [true, 'El nombre no esta definido'],
    unique: [true, 'El nombre debe ser unico'],
  },
  number: {
    type: Number,
    required: [true, 'el numero no esta definido'],
    min: [10000000, 'el numero debe tener al menos 8 digitos'],
  },
})

personaSchema.plugin(uniqueValidator)

personaSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  },
})

const Persona = mongoose.model('Persona', personaSchema)
module.exports = Persona
