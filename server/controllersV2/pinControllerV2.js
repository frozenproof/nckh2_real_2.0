const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
var path = require('path');
let shell = require('shelljs');
let debug = console.log.bind(console);

const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTcyN2FmOC0xOTVmLTQzNDEtOGFlYy1mNWYyNWFkNzMwMzAiLCJlbWFpbCI6InR1YW5tb2MyMTIwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGQ5NTVhMzI5N2MyZTdjYjAwYzAiLCJzY29wZWRLZXlTZWNyZXQiOiJmMzYzYjVlZGEyZTVmZmVhNWE5MDQwM2FlY2U3YzNjNTAzM2NiMDVlYmM4NDc4NjcxYjQ5NjI0NzE2ZDU2OTgyIiwiaWF0IjoxNjc2NDgyNDY4fQ.bbjma1RiNJw8qiqKe1ACKTV5RaTLND53-J-rS_6UIAI';

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