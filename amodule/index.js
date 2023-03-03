"use strict";
exports.__esModule = true;
var react_1 = require("@meshsdk/react");
var testTx_1 = require("./testTx");
// function Home() {
var _a = (0, react_1.useWallet)(), wallet = _a.wallet, connected = _a.connected, disconnect = _a.disconnect, error = _a.error;
temp = function () {
  <>
    <react_1.CardanoWallet />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button onClick={function () { return (0, testTx_1.otestTx)(wallet); }}>Test Mint</button>
  </>
}
return temp();