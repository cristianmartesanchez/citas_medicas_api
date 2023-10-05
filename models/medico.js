const mongoose = require('mongoose')

const medicoShema = new mongoose.Schema(
  {
    nombres: {
      type: String,
      require: true,
    },
    apellidos: {
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
    correo: {
      type: String,
    },
    telefono: {
      type: String,
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

module.exports = mongoose.model('Medico', medicoShema)
