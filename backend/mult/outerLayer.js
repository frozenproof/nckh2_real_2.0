
const shell = require('shelljs')
const printout = async()=>{
    shell.exec(`${__dirname}/print.sh`)
}

printout();