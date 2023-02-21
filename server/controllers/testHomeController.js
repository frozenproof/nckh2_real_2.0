const path = require("path");

let getHome = (req, res) => {
  // return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/index.html`));
  return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/homepage.html`));
  // return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/nftmint.html`));
};

module.exports = {
  getHome: getHome
};