const havaintoRouter = require("express").Router();
const Havainto = require("../models/havainto");
const Lintu = require("../models/lintu")

havaintoRouter.get("/havainto", (request, response) => {
  Havainto.find({}).then((havainnot) => {
    response.json(havainnot.map((havainto) => havainto.toJSON()));
  });
});

havaintoRouter.get("/lintu" ,(request, response) => {
  Lintu.find({}).then((linnut) => {
    response.json(linnut.map((lintu) => lintu.toJSON()));
  });
});

havaintoRouter.get("/havainto/:id", (request, response, next) => {
  Havainto.findById(request.params.id)
    .then((havainto) => {
      if (havainto) {
        response.json(havainto.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

havaintoRouter.post("/havainto", (request, response, next) => {
  const body = request.body;

  const uusiHavainto = new Havainto({
    laji: body.laji,
    maara: body.maara,
    pvm: new Date(),
    kunta: body.kunta,
    paikka: body.paikka,
    havainnoija: body.havainnoija,
    lisatiedot: body.lisatiedot,
  });

  uusiHavainto
    .save()
    .then((savedHavainto) => {
      response.json(savedHavainto);
    })
    .catch((error) => next(error));
});

havaintoRouter.delete("/havainto/:id", (request, response, next) => {
  Havainto.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

havaintoRouter.put("/havainto/:id", (request, response, next) => {
  const body = request.body;

  const havainto = {
    laji: body.laji,
    maara: body.maara,
    paikka: body.paikka,
    havainnoija: body.havainnoija,
    lisatiedot: body.lisatiedot,
  };

  Havainto.findByIdAndUpdate(request.params.id, havainto, { new: true })
    .then((updatedHavainto) => {
      response.json(updatedHavainto);
    })
    .catch((error) => next(error));
});

module.exports = havaintoRouter;
