// var text = "Testing"

// // let result = text.slice(0, 5);
// let result = text.split("\n");
let fs = require('fs');

let buffer = fs.readFileSync(`${__dirname}/../log/PinningRes.log`);
let fileContent = buffer.toString();
let result = fileContent.split("\n");

let stream = fs.createWriteStream(`${__dirname}/../log/CutRes.log`);
stream.once('open', function (fd) {

    for (i = 0; i < result.length; i++) {
        var a = result[i];
        var temporary_hash = a.search(/Ipfs/i);
        if (temporary_hash == -1)
            continue;
        stream.write(result[i - 2]+"\n");
        let temp_type=result[i - 2].split(".");
        stream.write(temp_type[temp_type.length-1]+"\n");
        let temp_cut=a.split("'");
        stream.write(temp_cut[1] + "\n");
    }
    stream.end();
});


