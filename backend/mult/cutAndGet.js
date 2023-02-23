// var text = "Testing"

// // let result = text.slice(0, 5);
// let result = text.split("\n");
var fs = require('fs');

const buffer = fs.readFileSync(`${__dirname}/restest/PinningRes.log`);
const fileContent = buffer.toString();
let result = fileContent.split("\n");

var stream = fs.createWriteStream(`${__dirname}/restest/CutRes.log`);
stream.once('open', function (fd) {

    for (i = 0; i < result.length - 1; i += 7) {
        var a = i;
        stream.write(result[a] + "\n");

        const bufferContent = result[a+2].toString();
        let result2 = bufferContent.split("'");
        stream.write(result2[1] + "\n");
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


