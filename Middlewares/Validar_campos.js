const { validationResult } = require('express-validator')

const ValidarCampos = (req, res, next) => {
  const results = validationResult(req)

  if (!results.isEmpty()) {
    return res.status(400).json({ errors: results.array() })
  }

  next()
}

module.exports = {
  ValidarCampos,
}
