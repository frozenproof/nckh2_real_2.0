const util = require("util");
const path = require("path");
let shell = require('shelljs')

// let pinMulti = async (req, res) => {
//     shell.exec(`node ${__dirname}/../controllers/pinController.js | cat > ${__dirname}/../log/PinningRes.log`);
//     shell.exec(`node ${__dirname}/../controllers/extractController.js`);
//     console.log("done");
//     return true;
// }

let pinMulti = async () => {
    shell.exec(`node ${__dirname}/../controllers/pinController.js | cat > ${__dirname}/../log/PinningRes.log`);
    shell.exec(`node ${__dirname}/../controllers/extractController.js`);
    console.log("done");
    return true;
}

let pinEngine = util.promisify(pinMulti);

module.exports = pinEngine;