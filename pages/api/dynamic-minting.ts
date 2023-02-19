import type { NextApiRequest, NextApiResponse } from 'next'
import { AppWallet, KoiosProvider, ForgeScript, AssetMetadata, Mint, largestFirst, Transaction } from '@meshsdk/core';
import { key1 } from '@/secretWalletkey_test/key1';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
  
    //Using KoiosProvider as the API
    const koiosProvider = new KoiosProvider("preprod");
    //const variable to transfer to back end
    const recipentAddress = req.body.recipentAddress;
    const utxos = req.body.utxos;
  
    //create a new wallet to output the utxos 
    const appWallet = new AppWallet({
      networkId: 0,
      fetcher: koiosProvider,
      submitter: koiosProvider,
      key: {
        type: 'mnemonic',
        words: key1,
      },
    });
  
    //get the address
    const AppWalletAddress = appWallet.getPaymentAddress();
    //create the script from the address
    const forgingScript = ForgeScript.withOneSignature(AppWalletAddress);
  
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
      assetQuantity: '100',
      metadata: assetMetadata,
      label: '721',
      recipient: recipentAddress,
    };
  
    //Variables for transactions
    const costLovelace = '10000000';
    //Variable for payment collection
    const selectedUtxos = largestFirst(costLovelace, utxos, true);
    //Variable for payment wallet-our wallet for the app
   
    //Transaction
    const tx = new Transaction({ initiator: appWallet });
    tx.setTxInputs(selectedUtxos);
    tx.mintAsset(forgingScript, targetedNFTasset);
    tx.sendLovelace(process.env.paymentWalletAddress, costLovelace);
    tx.setChangeAddress(recipentAddress);
    const _unsignedTx = await tx.build();
    const unsignedTx = await appWallet.signTx(_unsignedTx,true);
  
    res.status(200).json({unsignedTx:unsignedTx})
  }
  