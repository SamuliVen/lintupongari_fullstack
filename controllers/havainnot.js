const jwt = require("jsonwebtoken");
const havaintoRouter = require("express").Router();
const Havainto = require("../models/havainto");
const Lintu = require("../models/lintu");
const User = require("../models/user");

havaintoRouter.get("/havainto", async (request, response) => {
  const havainnot = await Havainto.find({}).populate("user", {
    username: 1,
    name: 1,
  });

  response.json(havainnot.map((havainto) => havainto.toJSON()));
});

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

havaintoRouter.get("/lintu", (request, response) => {
  Lintu.find({}).then((linnut) => {
    response.json(linnut.map((lintu) => lintu.toJSON()));
  });
});

havaintoRouter.post("/havainto", async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(body.userId);

  const uusiHavainto = new Havainto({
    laji: body.laji,
    maara: body.maara,
    pvm: new Date(),
    kunta: body.kunta,
    paikka: body.paikka,
    lisatiedot: body.lisatiedot,
    user: user._id,
  });

  const savedHavainto = await uusiHavainto.save();
  user.havainnot = user.havainnot.concat(savedHavainto._id);
  await user.save();

  response.json(savedHavainto.toJSON());
});

havaintoRouter.get("/havainto/:id", async (request, response, next) => {
  const havainto = await Havainto.findById(request.params.id);
  if (havainto) {
    response.json(havainto.toJSON());
  } else {
    response.status(404).end();
  }
});

havaintoRouter.delete("/havainto/:id", async (request, response, next) => {
  await Havainto.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

havaintoRouter.put("/havainto/:id", (request, response, next) => {
  const body = request.body;

  const havainto = {
    laji: body.laji,
    maara: body.maara,
    paikka: body.paikka,
    lisatiedot: body.lisatiedot,
  };

  Havainto.findByIdAndUpdate(request.params.id, havainto, { new: true })
    .then((updatedHavainto) => {
      response.json(updatedHavainto);
    })
    .catch((error) => next(error));
});

module.exports = havaintoRouter;
