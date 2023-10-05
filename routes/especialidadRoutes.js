const { Router } = require('express')
const router = Router()

const {
  getAll,
  getById,
  create,
  update,
} = require('../Controllers/especialidadController.js')

router.get('/', getAll)

router.get('/:id', getById)

router.post('/', create)

router.patch('/:id', update)

module.exports = router
