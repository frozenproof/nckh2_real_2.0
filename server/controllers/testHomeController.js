const path = require("path");

let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../frontend_test/src/View/homepage.html`));
};

module.exports = {
  getHome: getHome
};