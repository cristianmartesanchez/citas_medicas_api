const { dbConnection } = require('./config.js')

const main = async () => {
  await dbConnection()
}

module.exports = { main }
