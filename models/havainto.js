const mongoose = require('mongoose')

  const havaintoSchema = new mongoose.Schema({
    laji: String,
    maara: Number,
    pvm: Date,
    kunta: String,
    paikka: String,
    havainnoija: String,
    lisatiedot: String,
  });

  havaintoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Havainto', havaintoSchema)