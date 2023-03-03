import { CardanoWallet, useWallet } from '@meshsdk/react';
import {otestTx} from '@/backend/testTx';

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
      <button onClick={() => otestTx(wallet)}>Test Mint</button>
    </>
  )
}

