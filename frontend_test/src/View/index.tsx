import { CardanoWallet, useWallet } from '@meshsdk/react';
import { sendingDataTobackend } from '@/backend/createTransaction';

export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
  async function testTx() {
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address", changeAddress);

    const utxos = await wallet.getUtxos();
    console.log("Here is the utxos", utxos);

    try {
      const { unsignedTx } = await sendingDataTobackend(changeAddress, utxos);
      console.log("Result of unsigned Tx", unsignedTx);

      const signedTx = await wallet.signTx(unsignedTx, true);
      console.log("Signed Tx", signedTx);

      const txHash = await wallet.submitTx(signedTx);
      console.log('Txhash', txHash);

    }
    catch (error) {
      console.log("Error", error);
    };
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
      <button onClick={() => testTx()}>Test Mint</button>
    </>
  )
}

