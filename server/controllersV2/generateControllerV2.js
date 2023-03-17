var fs = require('fs');
let Generate = async (req, res) => {
    recipentAddress = req.body.recipentAddress;
    utxos = req.body.utxos;
    var tenfolder = `${__dirname}/../../iClient/` + recipentAddress + `/log`;
    fs.mkdir(tenfolder, { recursive: true }, (err) => {
        if (err) throw err;
    });
    tenfolder = `${__dirname}/../../iClient/` + recipentAddress + `/images`;
    fs.mkdir(tenfolder, { recursive: true }, (err) => {
        if (err) throw err;
    });
    var tenfolder2 = `${__dirname}/../../iClient/Addr_test1qp86xztd3eqm8wsq2epatvccdnwwrd2ha4qph0ekyugqjc3uj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpq0zq87s/images`;

    if(tenfolder!=tenfolder2)
    {
        console.log("ITS DIFFERENT?");
    }

    console.log("FUCK YOU");
    var logoutdir = `${__dirname}/../../iClient/` + recipentAddress + `/` + recipentAddress + `.log`;
    try {
        console.log("WHAT THE");

        const file = fs.writeFile(logoutdir, 'w', function (err, f) {

            let stream = fs.createWriteStream(logoutdir);
            console.log("NANI");
            stream.once('open', function (fd) {
                var result = JSON.stringify(utxos).split(`{"input":{`);
                // var result = fileContent.split(`{"input":{`);
                for (var i = 1; i < result.length - 1; i++) {
                    var cutOutput = result[i].split(`"output":{"address":"`);
                    stream.write(`\n{\n"input" : { \n` + cutOutput[0]);
                    var cutAmount = cutOutput[1].split(`,"amount":[{"unit":"lovelace","quantity":"`);
                    stream.write(`\n"output":{\n"address":"` + cutAmount[0]);
                    stream.write(`\n,"amount": [{"unit":"lovelace","quantity":"` + cutAmount[1]);
                }
                stream.end();
            });
            console.log('File is created.');
        });
        
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = {
    Generate: Generate
}
