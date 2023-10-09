const { Router } = require('express')
const router = Router()

const { check } = require('express-validator')
const { ValidarCampos } = require('../Middlewares/Validar_campos.js')

const {
  getAll,
  getById,
  create,
  update,
} = require('../Controllers/pacienteController')

router.get('/', getAll)

router.get('/:id', getById)

router.post(
  '/',
  [
    check('nombres', 'El campo nombre es obligatorio.').not().isEmpty(),
    check('apellidos', 'El campo apellido es obligatorio.').not().isEmpty(),
    ValidarCampos,
  ],
  create
)

router.put('/:id', update)

module.exports = router
