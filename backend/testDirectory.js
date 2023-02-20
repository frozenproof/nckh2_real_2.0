const fs = require("fs");
const srcf = `${__dirname}/download.jpg`;


const searchFile = async () => {
    try {
        const file = fs.createReadStream(srcf);
        console.log("Success");
    }
    catch (error) {
        console.log(error);
    }
}

searchFile();