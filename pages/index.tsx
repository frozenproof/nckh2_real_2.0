import { CardanoWallet, useWallet } from '@meshsdk/react';
import {sendingDataTobackend} from '@/backend/createTransaction'
 
export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
 async function testAddress() {
  const recipientAddress = await wallet.getChangeAddress();
  const utxos = await wallet.getUtxos();
  console.log("Change address",recipientAddress);
  console.log("Change address",utxos);
 };
async function begin(){
  const recipientAddress = await wallet.getChangeAddress();
  const utxos = await wallet.getUtxos();
  console.log("Running",recipientAddress,utxos);
  console.log("Result", sendingDataTobackend(recipientAddress,utxos));

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
      {/* <button onClick={() => testAPIPinata()}>Test</button> */}
      {/* <button onClick={() => pinFileToIPFS()}>Test</button> */}
      <button onClick={() => testAddress()}>Test Adress</button>
      <button onClick={() => begin()}>Test Mint</button>
    </>
  )
}

