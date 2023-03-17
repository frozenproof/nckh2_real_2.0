let fs = require('fs');

let extractData = async (logindir, logoutdir) => {

    let buffer = fs.readFileSync(logindir);
    let fileContent = buffer.toString();
    let result = fileContent.split("\n");

    let stream = fs.createWriteStream(logoutdir);
    stream.once('open', function (fd) {

        console.log(logoutdir);
        for (i = 0; i < result.length; i++) {
            var a = result[i];
            var temporary_hash = a.search(/Ipfs/i);
            if (temporary_hash == -1)
                continue;
            let tempcut = a.split(":");
            let typecut = result[i - 1].split(".");
            if (result[i - 1].length > 20)
                stream.write(result[i - 1].substring(0,19)+ "\n");
            else
                stream.write(result[i - 1] + "\n");
            stream.write(typecut[typecut.length - 1] + "\n");
            stream.write(tempcut[1] + "\n");
        }
        stream.end();
    });

}

module.exports = {
    extractData: extractData
}