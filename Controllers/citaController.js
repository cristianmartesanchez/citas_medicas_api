const citaModel = require('../models/cita.js')

const getAll = async (req, res) => {
  try {
    const data = await citaModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await citaModel.findById(id)
    if (!data) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { medico, paciente, fechaAtencion, inicioAtencion, finAtencion } =
    req.body

  const cita = new citaModel({
    medico,
    paciente,
    fechaAtencion,
    inicioAtencion,
    finAtencion,
  })

  try {
    const citaToSave = await cita.save()
    res.status(200).json(citaToSave)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const citaUpdate = await citaModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    )
    res.status(200).json(citaUpdate)
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
