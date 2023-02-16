const axios = require('axios')
const FormData = require('form-data')
const JWT = 'Bearer ' + process.env.Pinata_Bearer_JWT
const fs = require("fs/promises");

const options = JSON.stringify({
    cidVersion: 0,
})
const metadata = JSON.stringify({
    name: 'File name',
});
const src = "temp/img/download.jpg";
const file = fs.createReadStream(src, {encoding:'utf8'});

const [fileImg, setFileImg] = useState(null);
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    
export const pinFileToIPFS = async () => {
    
    const formData = new FormData();
    //append form data
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
