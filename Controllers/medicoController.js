const medicoModel = require('../models/medico.js')

const getAll = async (req, res) => {
  try {
    const { from, limit } = req.query

    const [total, medicos] = await Promise.all([
      medicoModel.countDocuments({ activo: true }),
      medicoModel.find({ activo: true }).skip(from).limit(limit),
    ])

    res.status(200).json({ total, medicos })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const medico = await medicoModel.findById(id)
    if (!medico) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json({ medico })
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

const medicoDelete = async (req, res) => {
  try {
    const id = req.params.id

    const medicoUpdate = await medicoModel.findByIdAndUpdate(id, {
      activo: false,
    })
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
  medicoDelete,
}
