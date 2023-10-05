const horarioModel = require('../models/horario.js')

const getAll = async (req, res) => {
  try {
    const data = await horarioModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const data = await horarioModel.findById(req.params.id)

    if (!data) {
      res.status(404).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { medico, fechaAtencion, inicioAtencion, finAtencion } = req.body
  try {
    const Horario = new horarioModel({
      medico,
      fechaAtencion,
      inicioAtencion,
      finAtencion,
    })

    const horarioNew = await Horario.save()
    res.status(200).json(horarioNew)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updateData = req.body
    const option = { new: true }

    const horarioUpdate = await horarioModel.findByIdAndUpdate(
      id,
      updateData,
      option
    )

    res.status(200).json(horarioUpdate)
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
