exports.__esModule = true;
var core_1 = require("@meshsdk/core");
var core_2 = require("@meshsdk/core");
var fs = require('fs');
const path = require("path");

let getReq = (req, res) => {
    console.log("Sent to Express");
    console.log("Request is:" + req.body.recipentAddress);
    console.log("End");
    return res.sendFile(path.join(`${__dirname}/../../frontend/src/View/after.html`));
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var test_names, imageAddress, test_types, koiosProvider, recipentAddress, utxos, appWallet, costLovelace, selectedUtxos, tx, AppWalletAddress, forgingScript, i, assetName, assetMetadata, targetedNFTasset, _unsignedTx, unsignedTx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item_names = [];
                    item_types = [];
                    item_address = [];
                    let buffer = fs.readFileSync(`${__dirname}/../log/CutRes.log`);
                    let fileContent = buffer.toString();
                    let result = fileContent.split("\n");
                    for (var count = 0; count < result.length - 1; count += 3) {
                        console.log("test "+(count/3)+1+" :" + result[count].toString());
                        console.log("types " + result[count + 1].toString());
                        console.log("Address " + result[count + 2].toString());
                        item_names.push(result[count]);
                        item_types.push(result[count + 1]);
                        item_address.push(result[count + 2]);
                    }
                    console.log("Actual length of items: " + (result.length - 1) / 3);

                    let bufferInfo = fs.readFileSync(`${__dirname}/../log/request.log`);
                    let infoContent = bufferInfo.toString();
                    let resultInfo = infoContent.split("\n");
                    for (var infocount = 0; infocount < resultInfo.length ; infocount ++) {
                        console.log("Items at "+infocount+" :" + resultInfo[infocount]);
                    }
                   
                    if(parseInt( resultInfo[1])==721)
                    resultInfo[2]="1";

                    koiosProvider = new core_2.KoiosProvider("preprod");
                    recipentAddress = req.body.recipentAddress;
                    utxos = req.body.utxos;

                    console.log("In the 2nd spot before possible bug, high chance of broken undefined key");
                    costLovelace = '10000000';
                    selectedUtxos = (0, core_1.largestFirst)(costLovelace, utxos, true);
                    appWallet = new core_1.AppWallet({
                        networkId: 0,
                        fetcher: koiosProvider,
                        submitter: koiosProvider,
                        key: {
                            type: "mnemonic",
                            // words: process.env.walletKey,
                            words: ["solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution", "solution",]
                        }
                    });
                    tx = new core_1.Transaction({ initiator: appWallet });
                    tx.setTxInputs(selectedUtxos);
                    // forgingScript = core_1.ForgeScript.withOneSignature(AppWalletAddress);
                    forgingScript = core_1.ForgeScript.withOneSignature(recipentAddress);
                    for (i = 0; i < item_names.length; i++) {
                        assetName =  resultInfo[3]+" contain "+item_names[i];
                        assetMetadata = {
                            "name": resultInfo[3]+" contain "+item_names[i],
                            "image": "ipfs://" + item_address[i],
                            "mediaType": "image/" + item_types[i],
                            "description": resultInfo[0].toString()
                        };
                        targetedNFTasset = {
                            assetName: assetName,
                            assetQuantity: resultInfo[2],
                            metadata: assetMetadata,
                            label: resultInfo[1],
                            recipient: recipentAddress
                        };
                        tx.mintAsset(forgingScript, targetedNFTasset);
                        console.log("Flag the final possible bug 2nd");
                    }
                    tx.sendLovelace(recipentAddress, costLovelace);
                    console.log("Flag the final possible bug 3rd");
                    tx.setChangeAddress(recipentAddress);
                    console.log("Flag the final possible bug 4th, now building tx");
                    return [4 /*yield*/, tx.build()];
                case 1:
                    _unsignedTx = _a.sent();
                    console.log("Done building Tx");
                    return [4 /*yield*/, appWallet.signTx(_unsignedTx, true)];
                case 2:
                    unsignedTx = _a.sent();
                    console.log("Everything is ready");
                    res.status(200).json({ unsignedTx: unsignedTx });
                    return [2 /*return*/];
            }
        });
    });
}

module.exports = {
    // getAxios: getReq
    getAxios: handler
};