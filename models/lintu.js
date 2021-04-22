const mongoose = require('mongoose')

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