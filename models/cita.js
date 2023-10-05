const mongoose = require('mongoose')

const citaShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
      require: [true, 'El campo medico es obligatorio.'],
    },
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Paciente',
      require: [true, 'El campo paciente es obligatorio.'],
    },
    fechaAtencion: {
      type: Date,
      require: [true, 'El campo fecha atencion es obligatorio.'],
    },
    fechaInicio: {
      type: Date,
      require: [true, 'El campo fecha inicio es obligatorio.'],
    },
    fechaFin: { type: Date },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cita', citaShema)
