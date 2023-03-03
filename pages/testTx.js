import { sendingDataTobackend } from '@/pages/createTransaction';
export async function otestTx(wallet) {
    // console.log("Test is good");
    const changeAddress = await wallet.getChangeAddress();
    console.log("Here is the Change address", changeAddress);

    const utxos = await wallet.getUtxos();
    console.log("Here is the utxos", utxos);

    try {
        const { unsignedTx } = await sendingDataTobackend(changeAddress, utxos);
        console.log("Unsigned Tx", unsignedTx);
        const signedTx = await wallet.signTx(unsignedTx, true);
        console.log("Signed Tx", signedTx);

        const txHash = await wallet.submitTx(signedTx);
        console.log('Txhash', txHash);
    }
    catch (error) {
        console.log("Error", error);
    }
}