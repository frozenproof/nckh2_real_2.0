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
    console.log("Sending request to backend");
    try {
        // return await post(`dynamic-minting`, { recipentAddress, utxos });
        // return await post(`multi-dynamic-minting`, { recipentAddress, utxos });
        var test_names = ["hi3.png", "l6209640.png", "uyu.jpg"];
        var imageAddress = ["QmTWjgDhu57zV2UTG9a2FkWVkemNKmYKEnhmtFVFv2FryH", "QmZhn8oALDSpDv4MQjsFtafYCk35moAwE1cQmw7EpGTTTV", "QmPfgm9PYZPpLD6muD5WStEjYNWLYR29xrqUbsrSuTCuEt"];
        var test_types = ["png", "png", "jpg"];
        return await post(`automate-minting`, { recipentAddress, utxos,test_names,imageAddress ,test_types});
    }
    catch (err: unknown) {
        console.log(err); //Object is of type 'unknown'
    }
}

