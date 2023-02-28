const path = require("path");

let getPin = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/pin.html`));
};

module.exports = {
    getPin : getPin 
};