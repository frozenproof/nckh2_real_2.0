import { CardanoWallet,useWallet  } from '@meshsdk/react';

export default function Home() {
  const { wallet,connected, disconnect, error } = useWallet();
  async function test(){
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address",changeAddress);
    
    const utxos = await wallet.getUtxos();
    console.log("Here is the utxos",utxos);
    
  }
  return (
    <>
     <CardanoWallet />
     <button onClick={()=>test()}>Test</button>
    </>
  )
}
