const mongoose = require('mongoose')

const medicoShema = new mongoose.Schema(
  {
    nombres: {
      type: String,
      require: [true, 'El campo nombres es obligatorio.'],
    },
    apellidos: {
      type: String,
      require: [true, 'El campo apellidos es obligatorio.'],
    },
    edad: {
      type: Number,
      require: [true, 'El campo edad es obligatorio.'],
    },
    dni: {
      type: String,
      require: [true, 'El campo DNI es obligatorio.'],
      unique: true,
    },
    direccion: {
      type: String,
    },
    correo: {
      type: String,
      require: [true, 'El campo correo es obligatorio.'],
      unique: true,
    },
    telefono: {
      type: String,
    },
    fechaNacimiento: {
      type: Date,
      require: [true, 'El campo fecha nacimiento es obligatorio.'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Medico', medicoShema)
