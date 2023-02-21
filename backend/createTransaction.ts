import { UTxO } from "@meshsdk/core";
import axios from "axios"

//create a new instance of axios, from url api because there is folder api inside pages folder
const instance = axios.create({
    baseURL: `/api/`,
    withCredentials: true,
});

export function post(route: string, body = {}) {
    return instance
        .post(`${route}`, body)
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            throw error;
        })
}

//This function pass the address , and the utxos, call the post function , and pass the parameters to the back end
export async function sendingDataTobackend(
    recipentAddress: string,
    utxos: UTxO[]
) {
    console.log("Before sending request to backend");
    try {
        console.log("Running",recipentAddress,utxos);
        return await post(`dynamic-minting`, { recipentAddress, utxos });
    }
    catch(err: unknown) {
        console.log(err); //Object is of type 'unknown'
    }
}

