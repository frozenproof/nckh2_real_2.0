(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    8312: function (t, n, e) { (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () { return e(4186) }]) }, 4186: function (t, n, e) {
        "use strict"; e.a(t, async function (t, o) {
            try {
                e.r(n), e.d(n, { default: function () { return l } }); var s = e(5893), i = e(7113), a = e(8433), c = t([i]); function l() {
                    let { wallet: Wallet, connected: n, disconnect: e, error: o } = (0, i.Os)(), axios = a.Z.create({ baseURL: "/api/", withCredentials: !0 });
                    async function l(recipentAddr, n) {
                        console.log("Sending request to backend");
                        try {
                            return await function (t) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return axios.post("".concat(t), n).then(t => {
                                    let { data: n } = t;
                                    return n
                                }).catch(t => { throw t })
                            }
                                // ("minting", { recipentAddress: t, utxos: n })
                                ("pining", { recipentAddress: recipentAddr, utxos: n })
                        } catch (t) { console.log(t) }
                    }

                    async function getwallet() {
                        var walletAddress;
                        try {
                            walletAddress = await Wallet.getChangeAddress();
                            var x = document.getElementById("walletConnect");
                            x.style.display = "none";
                            document.getElementById("mainform").style.display = "block";
                        }
                        catch
                        {
                            alert("Must pick and connect a wallet first!");
                            return;
                        }
                        console.log("Here is the Change address", walletAddress);
                        let utxos = await Wallet.getUtxos();
                        for (let o in await Wallet.getUtxos(),
                            console.log("Here is the utxos", utxos),
                            document.getElementById("reqcode").value = walletAddress, utxos[0])
                            try {
                                // let { unsignedTx: unsignedTx } = await l(walletAddress, e);
                                await function (t) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return axios.post("".concat(t), n).then(t => {
                                        let { data: n } = t;
                                        return n
                                    }).catch(t => { throw t })
                                }
                                    // ("minting", { recipentAddress: t, utxos: n })
                                    ("pining", { recipentAddress: walletAddress, utxos });
                            }
                            catch (t) { console.log("Error", t) }
                    }

                    async function finalSign() {
                        console.log("FINAL SIGN ONLY with CUSTOM");
                        let walletAddress = await Wallet.getChangeAddress();
                        console.log("Here is the Change address", walletAddress);
                        document.getElementById("signButton").style.display = "none";
                        document.getElementById("walletConnect").style.display = "block";
                        try {
                            //     // let { unsignedTx: unsignedTx } = await l(walletAddress, e);
                            //     let { unsignedTx: unsignedTx } = await function (t) {
                            //         let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            //         return axios.post("".concat(t), n).then(t => {
                            //             let { data: n } = t;
                            //             return n
                            //         }).catch(t => { throw t })
                            //     }
                            //         // ("minting", { recipentAddress: t, utxos: n })
                            //         ("signing", { recipentAddress: walletAddress, utxos});
                            let { unsignedTx: unsignedTx } = JSON.parse(document.getElementById("unsignedTx").innerHTML);
                            console.log("Unsigned Tx from inside react 2", unsignedTx);
                            console.log("Unsigned Tx type", typeof (unsignedTx));
                            let s = await Wallet.signTx(unsignedTx, !0);
                            console.log("Signed Tx", s);
                            let i = await Wallet.submitTx(s);
                            console.log("Txhash", i)
                        }
                        catch (t) { console.log("Error", t) }
                    }
                    return (0, s.jsxs)
                        (s.Fragment,
                            {
                                children: [
                                    // (0, s.jsx)(i.tZ, {}),
                                    (0, s.jsx)("div", {
                                        children: [
                                            (0, s.jsx)("br", {}),
                                            (0, s.jsx)("br", {}),
                                            // (0, s.jsx)("button", { onClick: () => getwallet(), children: "Start Minting", id: "walletButton" }),
                                            (0, s.jsx)("button", { onClick: () => getwallet(), children: "Start Minting", id: "walletButton", style: { display: ('flex') , width:('200px'),height:('60px'),background: ('linear-gradient(to left, #12c2e9, #c471ed, #f64f59)'),'border-radius':('20px'),'justify-content': ('center'),'align-items':('center'),'margin':('10px')} }),(0, s.jsx)(i.tZ, {}),
                                            (0, s.jsx)("br", {}),
                                            (0, s.jsx)("br", {}),
                                            (0, s.jsx)("br", {}),
                                        ], id: "walletConnect"
                                    }),
                                    // (0, s.jsx)("p", { id: "walletAddress" }),
                                    (0, s.jsx)("p", { id: "unsignedTx", style: { display: ('none'), DOMRectReadOnly }, children: "UNSIGNED" }),
                                    (0, s.jsx)("button", { onClick: () => finalSign(), children: "Sign", style: { display: ('none') }, id: "signButton" }),
                                ]
                            })
                } i = (c.then ? (await c)() : c)[0], o()
            } catch (t) { o(t) }
        })
    }
}, function (t) { t.O(0, [433, 774, 888, 179], function () { return t(t.s = 8312) }), _N_E = t.O() }]);