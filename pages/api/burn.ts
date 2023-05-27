import { CardanoWallet, useWallet } from '@meshsdk/react';
import {
    AppWallet,
    Asset,
    AssetMetadata,
    ForgeScript,
    largestFirst,
    Mint,
    Transaction,
} from "@meshsdk/core";
import type { NextApiRequest, NextApiResponse } from "next";
import { KoiosProvider } from "@meshsdk/core";
// import { BlockfrostProvider } from "@meshsdk/core";
import { UTxO } from "@meshsdk/core";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
    const burnAddress = req.body.burnAddress;
    const assetInfoHash = req.body.assetInfoHash;
    const returnAddress = req.body.returnAddress;
    const utxosin = req.body.utxosin;
    // console.log("type", typeof (address));

    const forgingScript = ForgeScript.withOneSignature(burnAddress);
    // console.log(forgingScript);
    const koiosProvider = new KoiosProvider("preprod");
    console.log("Nani tf");
    
    //create a new wallet to output the utxos 
    const appWallet = new AppWallet({
        networkId: 0,
        fetcher: koiosProvider,
        submitter: koiosProvider,
        key: {
            type: "mnemonic",
            // words: process.env.walletKey,
            words: ["solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution",],
        },
    });
    const tx = new Transaction({ initiator: appWallet });
    tx.setTxInputs(utxosin);
    // burn asset#2
    const asset2: Asset = {
        unit: assetInfoHash,
        quantity: '1',
    };

    console.log("test2", asset2);

    tx.burnAsset(forgingScript, asset2);
    tx.setChangeAddress(returnAddress);
    const unsignedTx = await tx.build();

    res.status(200).json({ unsignedTx: unsignedTx });

}
