const express = require('express')
require('dotenv').config()
var cors = require('cors')

const { dbConnection } = require('../database/config.js')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8080'

    //Connection
    this.database()

    //Middlewares
    this.middlewares()

    //Routes
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use('/api/paciente', require('../routes/pacienteRoutes.js'))
    this.app.use('/api/medico', require('../routes/medicoRoutes.js'))
    this.app.use('/api/cita', require('../routes/citaRoutes.js'))
    this.app.use(
      '/api/especialidad',
      require('../routes/especialidadRoutes.js')
    )
    this.app.use(
      '/api/medicoEspecialidad',
      require('../routes/medicoEspecialidadRoutes.js')
    )
    this.app.use('/api/horario', require('../routes/horarioRoutes.js'))
  }

  async database() {
    await dbConnection()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen on ${this.port}`)
    })
  }
}

module.exports = Server
