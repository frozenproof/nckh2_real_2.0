const axios = require("axios");
// const axiosRetry = require("axios-retry");
const FormData = require("form-data");
const JWT = 'Bearer ' + process.env.Pinata_Bearer_JWT

// export const uploadToPinata = async (sourceUrl) => {
  export const uploadToPinata = async () => {

  const axiosInstance = axios.create();

  // axiosRetry(axiosInstance, { retries: 5 });
  const data = new FormData();

  const response = await axiosInstance("", {
    method: "GET",
    responseType: "stream",
  });
  data.append(`file`, response.data);

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
      maxBodyLength: "Infinity",
      headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          'Authorization': JWT
      }
    });
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
};

