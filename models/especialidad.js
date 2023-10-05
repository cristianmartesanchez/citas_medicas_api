const mongoose = require('mongoose')

const especialidShema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: [true, 'El campo nombre es obligatorio.'],
    },
    descripcion: {
      type: String,
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Especialidad', especialidShema)
