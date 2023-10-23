const pacienteModel = require('../models/paciente.js')

const getAll = async (req, res) => {
  try {
    const { limit, from } = req.query
    const query = { activo: true }

    const [total, pacientes] = await Promise.all([
      pacienteModel.countDocuments(query),
      pacienteModel.find(query).skip(from).limit(limit),
    ])

    res.status(200).json({ total, pacientes })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const query = { activo: true }
    const paciente = await pacienteModel.findById(id)
    if (!paciente) {
      res.status(400).json({ message: error.message })
    }

    res.status(200).json({ paciente })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  const { nombres, apellidos, edad, dni, direccion, telefono, sexo, correo } =
    req.body
  const paciente = new pacienteModel({
    nombres,
    apellidos,
    edad,
    dni,
    direccion,
    telefono,
    sexo,
    correo,
  })

  try {
    const pacienteToSave = await paciente.save()
    res.status(200).json({ paciente })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const { _id, dni, correo, ...resto } = req.body
    const options = { new: true }

    if (dni) {
      const pacientedni = await pacienteModel.findOne({ dni })
      const pacientecorreo = await pacienteModel.findOne({ correo })

      if (pacientedni && pacientedni.id !== id) {
        throw new Error(`El dni ${dni} esta registrado.`)
      }

      if (pacientecorreo && pacientecorreo.id !== id) {
        throw new Error(`El correo ${correo} esta registrado.`)
      }

      resto.dni = dni
      resto.correo = correo
    }

    const paciente = await pacienteModel.findByIdAndUpdate(id, resto, options)
    res.status(200).json({ paciente })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const pacienteDelete = async (req, res) => {
  try {
    const { id } = req.params
    const paciente = await pacienteModel.findByIdAndUpdate(id, {
      activo: false,
    })
    res.status(200).json({ paciente })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  pacienteDelete,
}
