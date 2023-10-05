const mongoose = require('mongoose')

const especialidShema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
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

module.exports = mongoose.model('Especialidad', especialidShema)
