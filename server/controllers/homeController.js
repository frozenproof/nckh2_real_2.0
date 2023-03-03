const path = require("path");

let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../frontend/src/View/homepage.html`));
};

module.exports = {
  getHome: getHome
};