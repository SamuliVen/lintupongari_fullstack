const { wikisearch } = require("../models/wikisearch");
const wikiRouter = require("express").Router();

wikiRouter.get("/wiki", (req, res, next) => {
  wikisearch(req.query.haku, (error, data) => {
    if (error) {
      res.end(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = wikiRouter;