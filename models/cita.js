const mongoose = require('mongoose')

const citaShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
    },
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Paciente',
    },
    fechaAtencion: {
      type: Date,
      require: true,
    },
    inicioAtencio: {
      type: Date,
      require: true,
    },
    finAtencion: { type: Date },
    activo: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cita', citaShema)
