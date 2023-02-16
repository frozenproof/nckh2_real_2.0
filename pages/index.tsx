import { CardanoWallet, useWallet } from '@meshsdk/react';
import {testAPIPinata} from '@/backend/testsafty' 

export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
 
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
      {/* <button onClick={() => test()}>Test</button> */}
      <button onClick={() => testAPIPinata()}>Test</button>
    </>
  )
}

