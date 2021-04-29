const wikiRouter = require("express").Router();
const { wikisearch } = require("../wikisearch");

wikiRouter.get("/", (req, res, next) => {
    wikisearch(req.query.haku, (error, data) => {
      if (error) {
        res.end(error);
      } else {
        res.json(data);
      }
    });
  });

  module.exports = wikiRouter;