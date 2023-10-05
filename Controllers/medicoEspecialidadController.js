const medicoEspecialidadModel = require('../models/medico_especialidad.js')

const getAll = async (req, res) => {
  try {
    const data = await medicoEspecialidadModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await medicoEspecialidadModel.findById(id)
    if (!data) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { medico, especialidad } = req.body

  const medicoEspecialidad = new medicoEspecialidadModel({
    medico,
    especialidad,
  })

  try {
    const medicoEspecialidadToSave = await medicoEspecialidad.save()
    res.status(200).json(medicoEspecialidadToSave)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const medicoEspecialidadUpdate =
      await medicoEspecialidadModel.findByIdAndUpdate(id, updatedData, options)
    res.status(200).json(medicoEspecialidadUpdate)
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
