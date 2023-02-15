import { createTransaction, pinataAxios, pinataConfig } from '@/backend';
import { CardanoWallet, useWallet } from '@meshsdk/react';

export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
  async function test() {
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address", changeAddress);

    const utxos = await wallet.getUtxos();
    console.log("Here is the utxos", utxos);

    try {
      const { unsignedTx } = await createTransaction(changeAddress, utxos);
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
  async function testAPIPinata() {
    const res = await pinataAxios(pinataConfig);
    console.log(res.data);
  }
  return (
    <>
      <CardanoWallet />
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <button onClick={() => test()}>Test</button> */}
      <button onClick={() => testAPIPinata()}>Test</button>
    </>
  )
}

