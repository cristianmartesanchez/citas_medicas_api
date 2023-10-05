const medicoModel = require('../models/medico.js')

const getAll = async (req, res) => {
  try {
    const data = await medicoModel.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await medicoModel.findById(id)
    if (!data) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const {
    nombres,
    apellidos,
    edad,
    dni,
    direccion,
    telefono,
    sexo,
    correo,
    fechaNacimiento,
  } = req.body

  const medico = new medicoModel({
    nombres,
    apellidos,
    edad,
    dni,
    direccion,
    telefono,
    sexo,
    correo,
    fechaNacimiento,
  })

  try {
    const medicoToSave = await medico.save()
    res.status(200).json(medicoToSave)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const medicoUpdate = await medicoModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    )
    res.status(200).json(medicoUpdate)
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
