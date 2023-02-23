// var text = "Testing"

// // let result = text.slice(0, 5);
// let result = text.split("\n");
let fs = require('fs');

let buffer = fs.readFileSync(`${__dirname}/PinningRes.log`);
let fileContent = buffer.toString();
let result = fileContent.split("\n");

let stream = fs.createWriteStream(`${__dirname}/CutRes.log`);
stream.once('open', function (fd) {

    for (i = 0; i < result.length - 1; i++) {
        stream.write(result[i] + "\n");

    }
    stream.end();
});

// stream.once('open', function (fd) {
//     for (i = 0; i < result.length; i ++) {
//         var a = i;
//         stream.write(result[a] + "\n");
//     }
//     stream.end();
// });


