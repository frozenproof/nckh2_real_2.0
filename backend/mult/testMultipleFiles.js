const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
const src = `${__dirname}/../../images`;
var path = require('path');

var request1 = require(`${__dirname}/../env.js`);
const JWT = 'Bearer ' + request1.bkey;

const pinFileToIPFS = async (tesrc) => {
  const files = await fs.promises.readdir(tesrc);

  for (const name of files) {
  const formData = new FormData();
  const fromPath = path.join(tesrc, name);

    //Append the file to form
    const file = fs.createReadStream(fromPath);
    formData.append('file', file);

    const metadata = JSON.stringify({
      name: 'File name'+name,
    });
    console.log('File name'+name);

    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    });

    formData.append('pinataOptions', options);

    console.log("Sending request");

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
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

// pinFileToIPFS (src);
pinFileToIPFS(src);