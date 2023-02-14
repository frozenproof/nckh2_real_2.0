// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AppWallet, KoiosProvider,ForgeScript, AssetMetadata } from '@meshsdk/core';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse) {

    const koiosProvider = new KoiosProvider('<api|preview|preprod|guild>');
    const recipentAddress=req.body.recipentAddress;
    
    const wallet = new AppWallet({
      networkId: 0,
      fetcher: koiosProvider,
      submitter: koiosProvider,
      key: {
        type: 'mnemonic',
        words: ["solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution","solution"],
      },
    });

    const AppWalletAddress = wallet.getPaymentAddress();
    const forgingScript = ForgeScript.withOneSignature(AppWalletAddress);

    const assetName = 'DemonMeoToken';
      
    const assetMetadata: AssetMetadata = {
      "name": "Demon Token",
      "image": "ipfs://QmRzicpReutwCkM6aotuKjErFCUD213DpwPq6ByuzMJaua",
      "mediaType": "image/jpg",
      "description": "This NFT is minted by Mesh (https://meshjs.dev/)."
    };
  res.status(200).json({})
}
