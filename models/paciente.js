const { Schema, model } = require('mongoose')

const pacienteShema = new Schema(
  {
    nombres: {
      type: String,
      require: [true, 'El campo nombres es obligatorio.'],
    },
    apellidos: {
      type: String,
      require: [true, 'El campo apellidos es obligatorio.'],
    },
    edad: {
      type: Number,
      require: [true, 'El campo edad es obligatorio'],
    },
    dni: {
      type: String,
      require: [true, 'El campo DNI es obligatorio.'],
      unique: true,
    },
    direccion: {
      type: String,
      require: false,
    },
    telefono: {
      type: String,
      require: [true, 'El campo telefono es obligatorio.'],
    },
    correo: {
      type: String,
      require: [true, 'El correo es obligatorio.'],
    },
    sexo: {
      type: String,
      require: [true, 'El campo sexo es obligatorio.'],
    },
    fechaNacimiento: {
      type: Date,
      require: [true, 'El campo fecha nacimiento es obligatorio.'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

module.exports = model('Paciente', pacienteShema)
