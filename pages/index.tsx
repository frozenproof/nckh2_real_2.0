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
// const mintAddress = require("../koiosApi/koiosParser");
// import {findMintAddress}  from '../koiosApi/koiosParser';


export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
  const instance = axios.create({
    baseURL: `/api/`,
    withCredentials: true,
  });
  function post(route: string, body = {}) {
    return instance
      .post(`${route}`, body)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw error;
      })
  }
  async function mintDataBackend(
    recipentAddress: string,
    utxos: UTxO[]
  ) {
    console.log("Sending request to backend");
    try {
      return await post(`minting`, { recipentAddress, utxos });
      // return await post(`logging`, { recipentAddress, utxos });
    }
    catch (err: unknown) {
      console.log(err); //Object is of type 'unknown'
    }
  }
  async function burnTobackend(
    burnAddress: string,
    assetInfoHash: string,
    returnAddress: string,
    utxosin:UTxO[]
  ) {
    console.log("Sending request to backend");
    try {
      return await post(`burn`, { burnAddress, assetInfoHash, returnAddress ,utxosin});
      // return await post(`logging`, { recipentAddress, utxos });
    }
    catch (err: unknown) {
      console.log(err); //Object is of type 'unknown'
    }
  }

  async function burnTestTx() {
    const usedAddress = await wallet.getUsedAddresses();
    // const address = usedAddress[0];
    const burnAddress = "addr_test1qrn2nesakxk2fyw6u9r3lvlvguxm9su5ltkl0mydca6ddmfuj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpq2xwg2m";
    const assetInfoHash = 'ba4f55c24690ece71df250f1f51a5a928cd8ae6a662667a6c7e1643d7a746f72616d322e706e67';
    const returnAddress = usedAddress[0];
    const utxosin = await wallet.getUtxos();
    console.log("address", (burnAddress));

    // // console.log("type", typeof (address));
    // const forgingScript = ForgeScript.withOneSignature(burnAddress);
    // console.log(forgingScript);

    // const tx = new Transaction({ initiator: wallet });
    // // const koios = new KoiosProvider('preprod');

    // tx.setTxInputs(utxosin);
    // // burn asset#2
    // const asset2: Asset = {
    //   unit: assetInfoHash,
    //   quantity: '1',
    // };

    // console.log("test2", asset2);

    // tx.burnAsset(forgingScript, asset2);
    // tx.setChangeAddress(usedAddress[0]);
    // const unsignedTx = await tx.build();
    // const signedTx = await wallet.signTx(unsignedTx);
    // const txHash = await wallet.submitTx(signedTx);

     try {
       const { unsignedTx } = await burnTobackend(burnAddress, assetInfoHash, returnAddress, utxosin);
       console.log("Unsigned Tx", unsignedTx);
       const signedTx = await wallet.signTx(unsignedTx, true);
       console.log("Signed Tx", signedTx);

       const txHash = await wallet.submitTx(signedTx);
       console.log('Txhash', txHash);
     }
     catch (error) {
       console.log("Error", error);
     }
  }

  async function otestTx() {
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address", changeAddress);

    let utxos = await wallet.getUtxos();
    console.log("Here is the utxos", utxos);
    document.getElementById("walletAddress")!.innerHTML = changeAddress;
    // let txt = "";
    // for (let x in utxos[0]) {
    //   for (let y in utxos[0][x]) {
    //     txt += utxos[0][x][y] + " ";
    //   };
    // };
    try {
      const { unsignedTx } = await mintDataBackend(changeAddress, utxos);
      console.log("Unsigned Tx", unsignedTx);
      const signedTx = await wallet.signTx(unsignedTx, true);
      console.log("Signed Tx", signedTx);

      const txHash = await wallet.submitTx(signedTx);
      console.log('Txhash', txHash);
    }
    catch (error) {
      console.log("Error", error);
    }
  }
  async function allAssets() {
    console.log("This is wallet type:", typeof (wallet));
    console.log("This is wallet :", (wallet));
    const assets = await wallet.getAssets();
    console.log("All assets", assets);
    let viewAsset = (assets);
    let documentElement = document.getElementById("assetsAll");
    documentElement!.innerHTML = JSON.stringify(viewAsset);
    const assetInfoHash = 'ba4f55c24690ece71df250f1f51a5a928cd8ae6a662667a6c7e1643d7a746f72616d322e706e67';

    const koios = new KoiosProvider('preprod');
    // let resultrun = await findMintAddress(assetInfoHash);
    try
    {
      const metainfo = await koios.fetchAssetMetadata(assetInfoHash);
      console.log("MEtadata",metainfo);
      const walletCurrent = await koios.fetchAssetAddresses(assetInfoHash);
      console.log("Current address",walletCurrent);

    }
    catch(error)
    {
      console.log(error);
    }
    console.log("Wallet",await wallet.getLovelace() );

  }
  async function mintNFT() {
    // prepare forgingScript
    const usedAddress = await wallet.getUsedAddresses();
    const address = usedAddress[0];
    const forgingScript = ForgeScript.withOneSignature(address);

    const tx = new Transaction({ initiator: wallet });

    // define asset#1 metadata
    const assetMetadata1: AssetMetadata = {
      "name": "T1",
      "image": "ipfs://QmREp3TLtFCeTFozpDUTnpkLvjDe2Mvdu1r6x8k4m6mdtk",
      "mediaType": "image/jpg",
      "description": "This NFT is minted by Mesh (https://meshjs.dev/)."
    };
    const asset1: Mint = {
      assetName: 'T1',
      assetQuantity: '1',
      metadata: assetMetadata1,
      label: '721',
      recipient: 'addr_test1qzad8gkam53lr8vx2ca37n6wu5lxc4e9uwpc9ejvljnmhl3uj2whl9s7hdgz0twpsedn90zv2ndxackqy864mnz70gpqe537kw',
    };
    tx.mintAsset(
      forgingScript,
      asset1,
    );

    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);

}

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CardanoWallet />
      <button onClick={() => otestTx()}>Test Mint</button>
      <button onClick={() => mintNFT()}>Test Mint 2</button>
      <br></br>
      <br></br>
      <br></br>
      <p id="utxos2">AssnanUlti? V9.3</p>
      <button onClick={() => burnTestTx()}>Test Burn</button>
      <button onClick={() => allAssets()}>get all assets</button>
      <p id="assetsAll"></p>
      <p id="walletAddress" style={{ display: ('none') }}>LMAO</p>
      <p id="utxos"></p>


    </>
  )
}

