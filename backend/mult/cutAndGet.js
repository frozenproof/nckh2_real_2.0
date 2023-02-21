// var text = "Testing"

// // let result = text.slice(0, 5);
// let result = text.split("\n");
var fs = require('fs');

const buffer = fs.readFileSync(`${__dirname}/restest/TestRes2.txt`);
const fileContent = buffer.toString();
let result = fileContent.split("\n");

var stream = fs.createWriteStream(`${__dirname}/my_file.txt`);
stream.once('open', function (fd) {
    for (i = 0; i < result.length - 1; i = i + 7) {
        var a = i;
        stream.write(result[a] + "\n");
        stream.write(result[a + 2] + "\n");
    }
    stream.end();
});


