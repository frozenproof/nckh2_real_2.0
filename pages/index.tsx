import { CardanoWallet, useWallet } from '@meshsdk/react';
import {testAPIPinata} from '@/backend/Pinata/testAuth' 
import {pinFileToIPFS} from '@/backend/Pinata/testPinning' 

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
      {/* <button onClick={() => testAPIPinata()}>Test</button> */}
      <button onClick={() => pinFileToIPFS()}>Test</button>
    </>
  )
}

