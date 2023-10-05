const mongoose = require('mongoose')

const medicoEspecialidadShema = new mongoose.Schema(
  {
    medico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medico',
      require: true,
    },
    especialidad: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Especialidad',
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

module.exports = mongoose.model('MedicoEspecialidad', medicoEspecialidadShema)
