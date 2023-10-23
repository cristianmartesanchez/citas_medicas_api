const paciente = require('../models/paciente')

const existDNI = async (dni) => {
  const pacienteDni = await paciente.findOne({ dni })

  if (pacienteDni) {
    throw new Error(`El DNI ${dni} ya esta registrado.`)
  }
}

const exitEmail = async (correo) => {
  const pacienteCorreo = await paciente.findOne({ correo })

  if (pacienteCorreo) {
    throw new Error(`El correo ${correo} ya esta registrado.`)
  }
}

const exitIdUsuario = async (id) => {
  const pacienteId = await paciente.findById(id)

  if (!pacienteId) {
    throw new Error(`El Id ${id} no existe.`)
  }
}

module.exports = {
  existDNI,
  exitEmail,
  exitIdUsuario,
}
