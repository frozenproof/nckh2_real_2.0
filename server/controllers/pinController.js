const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
const src = `${__dirname}/../../images`;
var path = require('path');
// const { spawn } = require("child_process");

// var request1 = require(`${__dirname}/../env.js`);
const JWT = 'need new key from pinata API';

// let pinFileToIPFS = async () => {
let pinFileToIPFS = async () => {
  let files = await fs.promises.readdir(src);

  for (let fileName of files) {
    let formData = new FormData();
    let fromPath = path.join(src, fileName);

    // Append the file to form
    let file = fs.createReadStream(fromPath);
    formData.append('file', file);

    let metadata = JSON.stringify({
      name: fileName,
    });

    formData.append('pinataMetadata', metadata);

    let options = JSON.stringify({
      cidVersion: 0,
    });

    formData.append('pinataOptions', options);
    console.log(fileName);

    try {
      let res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

}

pinFileToIPFS();
