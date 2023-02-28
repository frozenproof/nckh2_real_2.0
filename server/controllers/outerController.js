const path = require("path");
let shell = require('shelljs')
// export const printout = async()=>{
let printout = async () => {
    shell.exec(`node ${__dirname}/pinController.js | cat > ${__dirname}/PinningRes.log`);
    shell.exec(`node ${__dirname}/extractController.js`);
}
printout();