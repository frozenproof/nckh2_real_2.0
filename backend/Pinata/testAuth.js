//New instance of Axios for Pinata
export var pinataAxios = require('axios');
//Pinata Configuration for api key
export var pinataConfig = {
    method: 'get',
    url: 'https://api.pinata.cloud/data/testAuthentication',
    headers: {
        'Authorization': 'Bearer ' + process.env.Pinata_Bearer_JWT,
    },
};

export async function testAPIPinata() {
    console.log("Env", process.env.Pinata_Bearer_JWT);
    const res = await pinataAxios(pinataConfig);
    console.log(res.data);
}