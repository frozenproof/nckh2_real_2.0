const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
const src = `${__dirname}/../../images`;
var path = require('path');
// const { spawn } = require("child_process");

// var request1 = require(`${__dirname}/../env.js`);
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTcyN2FmOC0xOTVmLTQzNDEtOGFlYy1mNWYyNWFkNzMwMzAiLCJlbWFpbCI6InR1YW5tb2MyMTIwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGQ5NTVhMzI5N2MyZTdjYjAwYzAiLCJzY29wZWRLZXlTZWNyZXQiOiJmMzYzYjVlZGEyZTVmZmVhNWE5MDQwM2FlY2U3YzNjNTAzM2NiMDVlYmM4NDc4NjcxYjQ5NjI0NzE2ZDU2OTgyIiwiaWF0IjoxNjc2NDgyNDY4fQ.bbjma1RiNJw8qiqKe1ACKTV5RaTLND53-J-rS_6UIAI';

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
