const pacienteModel = require('../models/paciente.js')

const getAll = async (req, res) => {
  try {
    const data = await pacienteModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await pacienteModel.findById(id)
    if (!data) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { nombre, apellido, edad, dni, direccion, telefono, sexo } = req.body
  const paciente = new pacienteModel({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    dni: dni,
    direccion: direccion,
    telefono: telefono,
    sexo: sexo,
  })

  try {
    const pacienteToSave = await paciente.save()
    res.status(200).json(pacienteToSave)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const pacienteUpadte = await pacienteModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    )
    res.status(200).json(pacienteUpadte)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
}
