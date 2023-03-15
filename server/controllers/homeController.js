const path = require("path");

let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../frontend/src/View/index.html`));
  // return res.sendFile(path.join(`${__dirname}/../../out/index.html`));
};

module.exports = {
  getHome: getHome
};