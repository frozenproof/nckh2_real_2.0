import { CardanoWallet, useWallet } from '@meshsdk/react';
import { testAPIPinata } from '@/backend/Pinata/testAuth'
import { pinFileToIPFS } from '@/backend/Pinata/testPinning'
// import {pinDirectoryToPinata} from '@/backend/Pinata/testPinning2'

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
      <button onClick={() => pinFileToIPFS()}>Test</button>
      {/* <button onClick={() => pinDirectoryToPinata()}>Test</button> */}
      {/* <div>
        <label>File (Images, Audio or Video)</label>
        <span>
          <div>It will be store on IPFS</div>
        </span>
        <input type="file" placeholder="file you want to create"></input>
      </div> */}
    </>
  )
}

