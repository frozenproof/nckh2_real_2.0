import {
    AppWallet,
    AssetMetadata,
    ForgeScript,
    largestFirst,
    Mint,
    Transaction,
    UTxO
} from "@meshsdk/core";
import { CardanoWallet, useWallet } from '@meshsdk/react';
import type { NextApiRequest, NextApiResponse } from "next";
import { KoiosProvider } from "@meshsdk/core";
import test from "node:test";
let path = require("path");
let fs = require('fs');


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    //Using KoiosProvider as the API
    const koiosProvider = new KoiosProvider("preprod");
    //const variable to transfer to back end
    const recipentAddress = req.body.recipentAddress;
    const utxos = req.body.utxos;

    var testarray =
        `{
        "input": {
            "outputIndex": 1,
            "txHash": "01cabd301bc816e8e1ac137e7af72ca3322f88df8897324dd7e3bec1f0717521"
        },
        "output": {
            "address": "addr_test1qrqsnrkrvsvn9ec9dfudzaapx7kp95xqs8z9ypdknxt5svfuj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpqcdetaz",
            "amount": [
                {
                    "unit": "lovelace",
                    "quantity": "5000000"
                }
            ]
        }
    },
    {
        "input": {
            "outputIndex": 2,
            "txHash": "01cabd301bc816e8e1ac137e7af72ca3322f88df8897324dd7e3bec1f0717521"
        },
        "output": {
            "address": "addr_test1qrqsnrkrvsvn9ec9dfudzaapx7kp95xqs8z9ypdknxt5svfuj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpqcdetaz",
            "amount": [
                {
                    "unit": "lovelace",
                    "quantity": "5000000"
                }
            ]
        }
    },
    {
        "input": {
            "outputIndex": 4,
            "txHash": "01cabd301bc816e8e1ac137e7af72ca3322f88df8897324dd7e3bec1f0717521"
        },
        "output": {
            "address": "addr_test1qrqsnrkrvsvn9ec9dfudzaapx7kp95xqs8z9ypdknxt5svfuj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpqcdetaz",
            "amount": [
                {
                    "unit": "lovelace",
                    "quantity": "5000000"
                }
            ]
        }
    }`;

    var cut=testarray.split(",");
    let stream = fs.createWriteStream(`${__dirname}/CutRes.txt`);
    stream.once('open', function () {

        for (var i = 0; i < cut.length; i += 5) {
            var arraytemp = JSON.parse("" + cut[i] + "," + cut[i + 1] + "," + cut[i + 2] + "," + cut[i + 3] + "," + cut[i + 4]);
            // console.log( cut[i] +","+ cut[i + 1]+","+ cut[i + 2]+"," + cut[i + 3]+"," + cut[i + 4] + ",");
            stream.write(arraytemp + ",");
        }
        stream.end();
    });


    console.log("Here is the Change address", recipentAddress);

}
