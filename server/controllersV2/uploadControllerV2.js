/**
 * multipleUploadController2.js
 */
const uploadMiddle = require("../middlewareV2/uploadMiddleV2");
const pinControllerV2 = require("../controllersV2/pinControllerV2");
const extractControllerV2 = require("../controllersV2/extractControllerV2");
const mintingControllerV2 = require("../controllersV2/mintingControllerV2");
const path = require("path");
let debug = console.log.bind(console);
let shell = require('shelljs')
var fs = require('fs');
const axios = require('axios');
var utxostemp=new Array();

let multipleUpload = async (req, res) => {
  try {
    // thực hiện upload

    let rootClient = `${__dirname}/../../iClient/`;
    //upload to server
    await uploadMiddle(req, res);

    //Generate log for minting: Tx main body
    let temp_req = JSON.stringify(req.body);
    let cut = temp_req.split("\"");

    fs.mkdir(rootClient + cut[3] + `/log`, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.mkdir(rootClient + cut[3] + `/loginIPFS`, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.mkdir(rootClient + cut[3] + `/logoutIPFS`, { recursive: true }, (err) => {
      if (err) throw err;
    });
    shell.exec(`echo "` + cut[11] + `" | cat > ` + rootClient + cut[3] + `/log/` + cut[3] + `.log`);
    shell.exec(`echo "` + cut[15] + `" | cat >> ` + rootClient + cut[3] + `/log/` + cut[3] + `.log`);
    shell.exec(`echo "` + cut[19] + `" | cat >> ` + rootClient + cut[3] + `/log/` + cut[3] + `.log`);
    shell.exec(`echo "` + cut[7] + `" | cat >> ` + rootClient + cut[3] + `/log/` + cut[3] + `.log`);
    shell.exec(`echo "` + cut[3] + `" | cat >> ` + rootClient + cut[3] + `/log/` + cut[3] + `.log`);

    //Pin to IPFS
    shell.exec(`echo ""| cat > ` + rootClient + cut[3] + `/loginIPFS/` + cut[3] + `.log`);
    shell.exec(`echo ""| cat > ` + rootClient + cut[3] + `/logoutIPFS/` + cut[3] + `.log`);
    console.log(rootClient + cut[3] + `/logoutIPFS/` + cut[3] + `.log`);
    var bufferPinning = await (pinControllerV2.pinningIPFS(rootClient + cut[3] + `/images`, rootClient + cut[3] + `/loginIPFS/` + cut[3] + `.log`));

    //Extract data into log for minting
    let bufferExtract = (extractControllerV2.extractData(rootClient + cut[3] + `/loginIPFS/` + cut[3] + `.log`, rootClient + cut[3] + `/logoutIPFS/` + cut[3] + `.log`));


    let buffer2 = fs.readFileSync(rootClient + cut[3] + `/` + cut[3] + `.log`);
    let fileContent2 = buffer2.toString();
    let result2 = fileContent2.split(`{\n"input" : { \n`);
    // console.log(fileContent2);

    for (var i = 0; i < result2.length - 1; i++) {
      var temp = `{\n"input" : { \n` + result2[i + 1].substring(0, (result2[i + 1].length - 2));
      console.log("i=" + i + ":" + temp + "\nEnding");
      var tempobj;
      try {
        tempobj = JSON.parse(temp);
        utxostemp.push(tempobj);
        console.log(typeof (tempobj));
      }
      catch
      {
        var temp = `{\n"input" : { \n` + result2[i + 1].substring(0, (result2[i + 1].length - 2)) + `}`;
        tempobj = JSON.parse(temp);
        utxostemp.push(tempobj);
        console.log(typeof (tempobj));
      }
      console.log(result2[i]);
    }
    console.log(`lmao` + utxostemp);
    console.log("\n\nEMPTY??????");
    console.log(result2.length);
    // let mintTest = (mintingControllerV2.Mint(cut[3], utxostemp,res));
    // return res.sendFile(path.join(`${__dirname}/../../out/index.html`));
    var options = {
      headers: {
        'user': cut[3],
        'title': "LmAO"
      }
    };
    return res.sendFile(path.join(`${__dirname}/../../frontend/src/View/upload.html`));

  } catch (error) {
    // Nếu có lỗi thì debug lỗi xem là gì ở đây
    debug(error);

    // Bắt luôn lỗi vượt quá số lượng file cho phép tải lên trong 1 lần
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send(`Exceeds the number of files allowed to upload.`);
    }

    return res.send(`Error when trying upload many files: ${error}}`);
  }
};

module.exports = {
  multipleUpload: multipleUpload
};