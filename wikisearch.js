const request = require("request");

const wikisearch = (haku, callback) => {
  const url = encodeURI(
    `https://fi.wikipedia.org/w/api.php?action=query&titles=${haku}&format=json&formatversion=2&prop=extracts|pageimages|cirrusdoc&exintro&explaintext&exsentences=4&piprop=original`
  );

  console.log(url);

  request({ uri: url, json: true }, (error, response, body) => {
    if (error) {
      callback("ei yhteyttä darkboxiin", undefined);
    } else if (body.error) {
      callback("Ei oo paikkaa", undefined);
    } else {
      callback(undefined, body.query.pages);
    }
  });
};

module.exports = {
  wikisearch,
};
