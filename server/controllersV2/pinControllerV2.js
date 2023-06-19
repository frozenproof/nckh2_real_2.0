const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
var path = require('path');
let shell = require('shelljs');
let debug = console.log.bind(console);

const JWT = 'need new key from pinata API';

let pinningIPFS = async (imagedir, logdir) => {
  let files = await fs.promises.readdir(imagedir);

  for (let fileName of files) {
    let formData = new FormData();
    let fromPath = path.join(imagedir, fileName);

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
      var res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      debug(res.data)
      console.log("O.O");
      (shell.exec(`echo "` + fileName + `" | cat >> ` + logdir));
      let temp_req = JSON.stringify(res.data);
      let cut = temp_req.split(",");
      for (var i = 0; i < cut.length; i++)
        (shell.exec(`echo "` + cut[i] + `" | cat >> ` + logdir));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  pinningIPFS: pinningIPFS
};