const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const lintuSchema = new mongoose.Schema({
    laji: String,
    tieteellinenNimi: String,
    kuvaWikipediastaAPI: String,
    lahko: String,
    heimo: String,
    suku: String,
    elinvoimaisuus: String,
  });

  lintuSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Lintu', lintuSchema)