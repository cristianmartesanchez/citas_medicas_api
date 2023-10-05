const mongoose = require('mongoose')

const horarioShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
      require: [true, 'El campo medico es obligatorio.'],
    },
    fechaAtencion: {
      type: Date,
      require: [true, 'El campo fecha atencion es obligatorio.'],
    },
    fechaInicio: {
      type: Date,
      require: [true, 'El campo fecha inicio es obligatorio.'],
    },
    fechaFin: {
      type: Date,
      require: [true, 'El campo fecha fin es obligatorio.'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Horario', horarioShema)
