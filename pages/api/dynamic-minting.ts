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
import { Deferred } from "next/dist/server/image-optimizer";

// import { key1 } from '@/secretWalletkey_test/key1';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    console.log("In the spot before possible bug");
  
    //Using KoiosProvider as the API
    const koiosProvider = new KoiosProvider("preprod");
    //const variable to transfer to back end
    const recipentAddress = req.body.recipentAddress;
    const utxos = req.body.utxos;
   
    console.log("In the spot after possible bug");
  
    //create a new wallet to output the utxos 
    const appWallet = new AppWallet({
      networkId: 0,
      fetcher: koiosProvider,
      submitter: koiosProvider,
      key: {
        type: "mnemonic",
        words: [
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
        ],
      },
    });
  
    console.log("In the 2nd spot before possible bug");

    //get the address
    const AppWalletAddress = appWallet.getPaymentAddress();
    //create the script from the address
    const forgingScript = ForgeScript.withOneSignature(AppWalletAddress);
    console.log("In the 2nd spot after possible bug");
  
    console.log("In the 3rd spot before possible bug");
   //NFT details
    const assetName = 'DemonMeoToken';
    const assetMetadata: AssetMetadata = {
      "name": "Demon Token",
      "image": "ipfs://QmZhn8oALDSpDv4MQjsFtafYCk35moAwE1cQmw7EpGTTTV",
      "mediaType": "image/png",
      "description": "This NFT is minted by Create NFT."
    };
  
    //NFT final assesments
    const targetedNFTasset: Mint = {
      assetName: assetName,
      assetQuantity: '1000',
      metadata: assetMetadata,
      label: '721',
      recipient: recipentAddress,
    };
    console.log("In the 3rd spot after possible bug");
  
    //Variables for transactions
    const costLovelace = '10000000';
    //Variable for payment collection
    const selectedUtxos = largestFirst(costLovelace, utxos, true);
    //Variable for payment wallet-our wallet for the app
   
    console.log("Before the final possible bug");
    //Transaction
    const tx = new Transaction({ initiator: appWallet });
    tx.setTxInputs(selectedUtxos);
    console.log("Flag the final possible bug");
    tx.mintAsset(forgingScript, targetedNFTasset);
    console.log("Flag the final possible bug 2nd");
    tx.sendLovelace(process.env.paymentWalletAddress, costLovelace);
    console.log("Flag the final possible bug 3rd");

    tx.setChangeAddress(recipentAddress);
    console.log("Flag the final possible bug 4th");
    const _unsignedTx = await tx.build();
    const unsignedTx = await appWallet.signTx(_unsignedTx,true);
  
    console.log("Everything is ready");
    res.status(200).json({ unsignedTx: unsignedTx });
  }
  