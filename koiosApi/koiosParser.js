const axios = require("axios");
const axios2 = require("axios");

async function findMintAddress(assetHash) {
    // let assetPolicyId = `332f014f53a7eaaac26d614491c4c3a858ccc4b55165f686c0cf142f`;
    // let asset_name = "7a746f72616d2e706e67";
    let assetPolicyId = assetHash.substr(0, 56);
    let asset_name = assetHash.substr(56);
    let url = `https://preprod.koios.rest/api/v0/asset_info?_asset_policy=` + assetPolicyId + `&_asset_name=` + asset_name;
    var res;
    (res = getTxhash(url, assetHash));
    if (res != undefined) {
        // console.log("Resp in piece" + res);
        return res;
    } else if (res != Promise)
        return findMintAddress();
    // console.log("This " + txhashReal + "  has a type of " + typeof (txhashReal));
    // console.log("THis is equal" + typeof (txhashReal) == typeof ('56c9c284772e8c05382f53a43e5367dea5faf92fe60d36cf8e3d4ca73d56b171'));
};

async function getTxhash(url, assetHash) {
    return await axios.get(url, { timeout: 9000 }).then(resp => {
        // console.log(resp.data);
        try {
            console.log("Retrying ");
            let txHashSearch = JSON.stringify(resp.data).split(",");
            result = txHashSearch[4].split(":");
            var resultReal = result[1].split("\"");
            return gettingWallet(resultReal[1], assetHash);
        }
        catch {
            return getTxhash(url, assetHash);
        }
    })
}
async function gettingWallet(txhashVar, assetHash) {
    var realTxhash = txhashVar;
    console.log("Asset hash is \n" + assetHash);
    console.log("\n\nReal txhash is \n" + realTxhash);
    let response = await axios2.post(
        'https://preprod.koios.rest/api/v0/tx_info',
        {
            '_tx_hashes': [
                realTxhash,
                // realTxHash here is hex value
                // `56c9c284772e8c05382f53a43e5367dea5faf92fe60d36cf8e3d4ca73d56b171`
            ]
        },
        {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }
    );
    var positionAsset = 0;
    // while()
    // console.log("\nResponse", (response.data));
    console.log("\nAssets minted", (response.data[0]["assets_minted"]));
    console.log("\nBegan search\n");
    var i = 0;
    while (response.data[0]["outputs"][i] != null) {
        if (response.data[0]["outputs"][i]["asset_list"].length != 0) {
            var position = 0;
            while (response.data[0]["outputs"][i]["asset_list"][position] != null) {
                var getAssetRealData;
                var getCurrent = response.data[0]["outputs"][i]["asset_list"][position]['policy_id'] + response.data[0]["outputs"][i]["asset_list"][position]['asset_name'];
                var getOrigin = assetHash;
                var check = (getCurrent == getOrigin);
                console.log("Data is \n" + getCurrent);
                console.log("Original is\n" + getOrigin);
                console.log("Check result is " + check + "\n");
                if (check)
                {
                    getAssetRealData={
                        wallet:(response.data[0]["outputs"][i]["payment_addr"]["bech32"]),
                        quantity:(response.data[0]["outputs"][i]["asset_list"][position]["quantity"])
                    }
                    return getAssetRealData;
                }
                console.log("False Asset\n", (response.data[0]["outputs"][i]["asset_list"][position]));
                console.log("\n");
                position++;
                // +response.data[0]["outputs"][i]["asset_list"]["asset_name"]);
            }
            // console.log("\n\n\n\nresponse real\n", (response.data[0]["outputs"][i]["payment_addr"]["bech32"]));
            return false;
        }
        i++;
    }
}

async function callingDark() {
    // print();
    console.log("Begin 1st");

    let unit="ba4f55c24690ece71df250f1f51a5a928cd8ae6a662667a6c7e1643d7a746f72616d322e706e67";
    // let finalRes = await findMintAddress(`332f014f53a7eaaac26d614491c4c3a858ccc4b55165f686c0cf142f7a746f72616d2e706e67`);
    let finalRes = await findMintAddress(unit);

    console.log(finalRes);
    console.log("End");
}


callingDark();

// // module.export = {
// //     findMintAddress:findMintAddress
// // } 
// export { findMintAddress as findMintAddress };