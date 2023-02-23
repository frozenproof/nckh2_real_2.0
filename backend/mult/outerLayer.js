
const shell = require('shelljs')
// export const printout = async()=>{
const printout = async () => {
    shell.exec(`${__dirname}/print.sh`)
}
printout();