const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'Bearer ' + process.env.Pinata_Bearer_JWT

const options = JSON.stringify({
    cidVersion: 0,
})
const metadata = JSON.stringify({
    name: 'File name',
});
const src = "temp/img/download.jpg";
const file = fs.createReadStream(src)

export const pinFileToIPFS = async () => {
    const formData = new FormData();

    formData.append('file', file)
    formData.append('pinataMetadata', metadata);
    formData.append('pinataOptions', options);
    
    //testing request
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
