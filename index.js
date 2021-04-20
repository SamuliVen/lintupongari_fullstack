require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const Havainto = require("./models/havainto");
const Lintu = require("./models/lintu");

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

app.get("/api/lintudb/havainto", (req, res) => {
  Havainto.find({}).then((havainnot) => {
    res.json(havainnot);
  });
});

app.get("/api/lintudb/lintu", (req, res) => {
  Lintu.find({}).then((linnut) => {
    res.json(linnut);
  });
});

app.get("/api/lintudb/havainto/:id", (request, response, next) => {
  Havainto.findById(request.params.id)
    .then((havainto) => {
      if (havainto) {
        response.json(havainto);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log("Error found!");
      next(error);
    });
});

app.post("/api/lintudb/havainto", (request, response) => {
  const body = request.body;

  if (body.laji === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const uusiHavainto = new Havainto({
    laji: body.laji,
    maara: body.maara,
    pvm: new Date(),
    kunta: body.kunta,
    paikka: body.paikka,
    havainnoija: body.havainnoija,
    lisatiedot: body.lisatiedot,
  });

  uusiHavainto.save().then((savedHavainto) => {
    response.json(savedHavainto);
  });
});

app.delete("/api/lintudb/havainto/:id", (request, response, next) => {
  Havainto.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
