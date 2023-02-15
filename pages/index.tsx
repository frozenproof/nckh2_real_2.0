import { createTransaction } from '@/backend';
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
      const {unsignedTx} = await createTransaction(changeAddress, utxos);
      console.log("Unsigned Tx", unsignedTx);
      const signedTx = await wallet.signTx(unsignedTx, true);
      console.log("Signed Tx", signedTx);
      const txHash = await wallet.submitTx(signedTx);
    }
    catch(error){
      console.log("Error",error);
    }
  }
  return (
    <>
      <CardanoWallet />
      <button onClick={() => test()}>Test</button>
    </>
  )
}

