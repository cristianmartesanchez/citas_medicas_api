const { Router } = require('express')
const router = Router()

const { check } = require('express-validator')
const { ValidarCampos } = require('../Middlewares/Validar_campos.js')

const {
  getAll,
  getById,
  create,
  update,
  medicoDelete,
} = require('../Controllers/medicoController.js')

router.get('/', getAll)

router.get('/:id', getById)

router.post(
  '/',
  [
    check('nombres', 'El campo nombres es obligatorio.').not().isEmpty(),
    check('apellidos', 'El campo apellidos es obligatorio.').not().isEmpty(),
    check('correo', 'El correo no es valido.').isEmail(),
    //check('correo').custom(exitEmail),
    //check('dni').custom(existDNI),
    ValidarCampos,
  ],
  create
)

router.put(
  '/:id',
  [
    check('id', 'No es un id valido').isMongoId(),
    //check('id').custom(exitIdUsuario),
    //check('correo').custom(exitEmail),
    //check('dni').custom(existDNI),
    ValidarCampos,
  ],
  update
)

router.delete(
  '/:id',
  [
    check('id', 'No es un id valido').isMongoId(),
    //check('id').custom(exitIdUsuario),
    ValidarCampos,
  ],
  medicoDelete
)

module.exports = router
