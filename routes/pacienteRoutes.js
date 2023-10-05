const { Router } = require('express')
const router = Router()

const {
  getAll,
  getById,
  create,
  update,
} = require('../Controllers/pacienteController')

router.get('/', getAll)

router.get('/:id', getById)

router.post('/', create)

router.put('/:id', update)

module.exports = router
