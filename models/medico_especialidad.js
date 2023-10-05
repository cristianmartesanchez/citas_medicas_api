const mongoose = require('mongoose')

const medicoEspecialidadShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
      require: [true, 'El campo medico es obligatorio.'],
    },
    especialidad: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Especialidad',
      require: [true, 'El campo especialidad es obligatorio.'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('MedicoEspecialidad', medicoEspecialidadShema)
