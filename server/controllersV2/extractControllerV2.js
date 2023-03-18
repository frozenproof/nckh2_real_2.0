let fsync = require('fs');
let fs = require('fs/promises');
const util = require("util");

let extractData = async (logindir, logoutdir) => {
    console.log("?? extract" + logindir);
    let buffer = fsync.readFileSync(logindir);
    let fileContent = buffer.toString();
    let result = fileContent.split("\n");
    console.log("Extract is Here");
    var finalresult = "";
    for (i = 0; i < result.length; i++) {
        var a = result[i];
        var temporary_hash = a.search(/Ipfs/i);
        if (temporary_hash == -1)
            continue;
        let tempcut = a.split(":");
        let typecut = result[i - 1].split(".");
        if (result[i - 1].length >= 31)
        {
            finalresult += "1\n";
            finalresult = finalresult + result[i - 1] + "\n";
        }
        else
        {
            finalresult += "0\n";
            finalresult = finalresult + result[i - 1] + "\n";
        }     
        finalresult = finalresult + typecut[typecut.length - 1] + "\n";
        finalresult = finalresult + tempcut[1] + "\n";
    }
    // console.log("Final result is"+finalresult+"END");
    var zero = await fs.writeFile(logoutdir, finalresult, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    });
    console.log("Helllo from extract 2");
    console.log(zero);
    return zero;
}

module.exports = {
    extractData: extractData
};