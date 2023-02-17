const { Readable } = require("stream");
const FormData = require("form-data");
const axios = require("axios");
const JWT = `Bearer PASTE_YOUR_JWT`

const uploadFromBuffer = async (buffer) => {
  try {
    const stream = Readable.from(buffer);
    const data = new FormData();
    data.append('file', stream, {
      filepath: 'FILENAME.png'
    })

    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
      maxBodyLength: "Infinity",
      headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          Authorization: JWT
      }
    });

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
} 