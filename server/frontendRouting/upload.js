const path = require("path");

let getFrontend = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../frontend/src/View/upload.html`));
};

module.exports = {
  getFrontend: getFrontend
};