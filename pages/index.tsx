import { CardanoWallet, useWallet } from '@meshsdk/react';
import { testAPIPinata } from '@/backend/Pinata/testAuth'
import { pinFileToIPFS } from '@/backend/Pinata/testPinningFs'
// import {pinDirectoryToPinata} from '@/backend/Pinata/testPinning2'
import {uploadToPinata} from '@/backend/Pinata/testPinningHtml4'

export default function Home() {
  const { wallet, connected, disconnect, error } = useWallet();
  // const fs = require("fs/promises");
  // const src = "temp/img/download.jpg";
  // const file = fs.createReadStream(src);
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
      {/* <button onClick={() => pinFileToIPFS()}>Test</button> */}
      <button onClick={() => uploadToPinata()}>Test</button>
      <img src="../backend/Pinata/download.jpg" alt=""></img>
    </>
  )
}

