const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.glc41.mongodb.net/lintupongari?retryWrites=true`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const havaintoSchema = new mongoose.Schema({
  laji: String,
  maara: Number,
  pvm: Date,
  kunta: String,
  paikka: String,
  havainnoija: String,
  lisätiedot: String,
});

const Havainto = mongoose.model("Havainto", havaintoSchema);

const havainto = new Havainto({
  laji: "Hanhi",
  maara: 1,
  pvm: new Date(),
  kunta: "Joensuu",
  paikka: "Utran ranta",
  havainnoija: "SamuliV",
  lisätiedot: "mongoose testi",
});

havainto.save().then((response) => {
  mongoose.connection.close();
});

// Havainto.find({}).then(result => {
//     result.forEach(havainto => {
//         console.log(havainto)
//     })
//     mongoose.connection.close()
// })
