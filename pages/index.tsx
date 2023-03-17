import { CardanoWallet, useWallet } from '@meshsdk/react';
import { UTxO } from "@meshsdk/core";
import axios from "axios"

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
  async function sendingDataTobackend(
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
  async function otestTx() {
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address", changeAddress);

    let utxos = await wallet.getUtxos();
    const utxos2 = await wallet.getUtxos();
    console.log("Here is the utxos", utxos);
    document.getElementById("walletAddress")!.innerHTML = changeAddress;
    let txt = "";
    for (let x in utxos[0]) {
      for (let y in utxos[0][x]) {
        txt += utxos[0][x][y] + " ";
    };

  };


    try {
      const { unsignedTx } = await sendingDataTobackend(changeAddress, utxos);
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

  return (
    <>
      <CardanoWallet />
      <button onClick={() => otestTx()}>Test Mint</button>
      <p id="walletAddress"></p>
      <p id="utxos"></p>
    </>
  )
}

