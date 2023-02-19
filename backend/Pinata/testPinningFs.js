const axios = require('axios')
const FormData = require('form-data')
const fs = require("fs");
const src = "/home/kirigiri/nckh2_real/backend/download.jpg";
const Pinata_Bearer_JWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTcyN2FmOC0xOTVmLTQzNDEtOGFlYy1mNWYyNWFkNzMwMzAiLCJlbWFpbCI6InR1YW5tb2MyMTIwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGQ5NTVhMzI5N2MyZTdjYjAwYzAiLCJzY29wZWRLZXlTZWNyZXQiOiJmMzYzYjVlZGEyZTVmZmVhNWE5MDQwM2FlY2U3YzNjNTAzM2NiMDVlYmM4NDc4NjcxYjQ5NjI0NzE2ZDU2OTgyIiwiaWF0IjoxNjc2NDgyNDY4fQ.bbjma1RiNJw8qiqKe1ACKTV5RaTLND53-J-rS_6UIAI';
const JWT = 'Bearer ' + Pinata_Bearer_JWT;


const pinFileToIPFS = async () => {
    const formData = new FormData();
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const metadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
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

// pinFileToIPFS (src);
pinFileToIPFS ();