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
export async function createTransaction(
    recipentAddress: string,
    utxos: UTxO[],
) {
    return await post(`create-minting-transaction`, { recipentAddress, utxos });
}


export var pinataAxios = require('axios');
// 
export var pinataConfig = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/testAuthentication',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTcyN2FmOC0xOTVmLTQzNDEtOGFlYy1mNWYyNWFkNzMwMzAiLCJlbWFpbCI6InR1YW5tb2MyMTIwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMGQ5NTVhMzI5N2MyZTdjYjAwYzAiLCJzY29wZWRLZXlTZWNyZXQiOiJmMzYzYjVlZGEyZTVmZmVhNWE5MDQwM2FlY2U3YzNjNTAzM2NiMDVlYmM4NDc4NjcxYjQ5NjI0NzE2ZDU2OTgyIiwiaWF0IjoxNjc2NDgyNDY4fQ.bbjma1RiNJw8qiqKe1ACKTV5RaTLND53-J-rS_6UIAI'
  }
};

