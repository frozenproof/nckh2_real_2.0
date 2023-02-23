
let shell = require('shelljs')
// export const printout = async()=>{
let printout = async () => {
    shell.exec(`${__dirname}/print.sh`)
}
printout();