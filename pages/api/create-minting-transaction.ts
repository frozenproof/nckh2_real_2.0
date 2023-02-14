// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AppWallet, KoiosProvider, ForgeScript, AssetMetadata, Mint } from '@meshsdk/core';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse) {

  const koiosProvider = new KoiosProvider('<api|preview|preprod|guild>');
  const recipentAddress = req.body.recipentAddress;
  const utxos = req.body.utxos;

  const wallet = new AppWallet({
    networkId: 0,
    fetcher: koiosProvider,
    submitter: koiosProvider,
    key: {
      type: 'mnemonic',
      words: ["solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution"],
    },
  });

  const AppWalletAddress = wallet.getPaymentAddress();
  const forgingScript = ForgeScript.withOneSignature(AppWalletAddress);

  const assetName = 'DemonMeoToken';

  const assetMetadata: AssetMetadata = {
    "name": "Demon Token",
    "image": "ipfs://QmZhn8oALDSpDv4MQjsFtafYCk35moAwE1cQmw7EpGTTTV",
    "mediaType": "image/png",
    "description": "This NFT is minted by Create NFT."
  };

  const asset: Mint = {
    assetName: assetName,
    assetQuantity: '1',
    metadata: assetMetadata,
    label: '721',
    recipient: recipentAddress,
  };
  res.status(200).json({})
}
