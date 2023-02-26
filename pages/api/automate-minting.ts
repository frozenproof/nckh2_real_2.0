import {
    AppWallet,
    AssetMetadata,
    ForgeScript,
    largestFirst,
    Mint,
    Transaction,
} from "@meshsdk/core";
import type { NextApiRequest, NextApiResponse } from "next";
import { KoiosProvider } from "@meshsdk/core";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    //Using KoiosProvider as the API
    const koiosProvider = new KoiosProvider("preprod");
    //const variable to transfer to back end
    const recipentAddress = req.body.recipentAddress;
    const utxos = req.body.utxos;
    const test_names = req.body.test_names;
    const imageAddress = req.body.imageAddress;
    const test_types = req.body.test_types;

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
    console.log("In the 2nd spot before possible bug, high chance of broken undefined key");

    //Variables for transactions
    const costLovelace = '10000000';
    //Variable for payment collection
    const selectedUtxos = largestFirst(costLovelace, utxos, true);
    const tx = new Transaction({ initiator: appWallet });
    tx.setTxInputs(selectedUtxos);

    //get the address
    const AppWalletAddress = appWallet.getPaymentAddress();
    //create the script from the address
    const forgingScript = ForgeScript.withOneSignature(AppWalletAddress);

    for (var i = 0; i < 3; i++) {
        //NFT details
        const assetName = test_names[i];
        const assetMetadata: AssetMetadata = {
            "name": test_names[i],
            "image": "ipfs://" + imageAddress[i],
            "mediaType": "image/" + test_types[i],
            "description": "This NFT is minted by Create NFT."
        };

        //NFT final assesments
        const targetedNFTasset: Mint = {
            assetName: assetName,
            assetQuantity: '1',
            metadata: assetMetadata,
            label: '721',
            recipient: recipentAddress,
        };
       
        tx.mintAsset(forgingScript, targetedNFTasset);
        console.log("Flag the final possible bug 2nd");
    }
    tx.sendLovelace(process.env.paymentWalletAddress, costLovelace);
    console.log("Flag the final possible bug 3rd");
    tx.setChangeAddress(recipentAddress);
    console.log("Flag the final possible bug 4th, now building tx");
    const _unsignedTx = await tx.build();
    console.log("Done building Tx");

    const unsignedTx = await appWallet.signTx(_unsignedTx, true);

    console.log("Everything is ready");

    res.status(200).json({ unsignedTx: unsignedTx });

}
