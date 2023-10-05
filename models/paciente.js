const mongoose = require('mongoose')

const pacienteShema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido: {
      type: String,
      require: true,
    },
    edad: {
      type: Number,
      require: true,
    },
    dni: {
      type: String,
      require: true,
    },
    direccion: {
      type: String,
      require: true,
    },
    telefono: {
      type: String,
      require: true,
    },
    sexo: {
      type: String,
      require: true,
    },
    fechaNacimiento: {
      type: Date,
      require: true,
    },
    activo: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Paciente', pacienteShema)
