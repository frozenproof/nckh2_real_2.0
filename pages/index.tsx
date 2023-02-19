import { CardanoWallet, useWallet } from '@meshsdk/react';
import {createTransaction} from '@/backend/createTransaction'
 
export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
 async function mint_test() {
  const recipientAddress = await wallet.getChangeAddress();
  const utxos = await wallet.getUtxos();
  console.log("Change address",recipientAddress);
  console.log("Change address",utxos);
 };
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
      {/* <button onClick={() => testAPIPinata()}>Test</button> */}
      {/* <button onClick={() => pinFileToIPFS()}>Test</button> */}
      <button onClick={() => mint_test()}>Test</button>
    </>
  )
}

