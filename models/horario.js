const mongoose = require('mongoose')

const horarioShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
      require: true,
    },
    fechaAtencion: {
      type: Date,
      require: true,
    },
    inicioFecha: {
      type: Date,
      require: true,
    },
    finAtencion: {
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

module.exports = mongoose.model('Horario', horarioShema)
