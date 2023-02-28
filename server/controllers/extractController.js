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
        
        var temp = a.substring();
        stream.write(result[i] + "\n");
    }
    stream.end();
});


