const especialidadModel = require('../models/especialidad.js')

const getAll = async (req, res) => {
  try {
    const data = await especialidadModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await especialidadModel.findById(id)
    if (!data) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { nombre, descripcion } = req.body

  const especialidad = new especialidadModel({
    nombre,
    descripcion,
  })

  try {
    const especialidadToSave = await especialidad.save()
    res.status(200).json(especialidadToSave)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const especialidadUpdate = await especialidadModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    )
    res.status(200).json(especialidadUpdate)
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
