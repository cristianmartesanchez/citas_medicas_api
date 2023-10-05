const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.STRING_CONECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('DB connected')
  } catch (error) {
    console.log(error)
    throw new Error('Error al conectarse a la base de datos.')
  }
}

module.exports = {
  dbConnection,
}
