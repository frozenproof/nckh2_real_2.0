const ipfsMiddle = require("../middleware/ipfsMiddle");
let debug = console.log.bind(console);
const path = require("path");

let ipfsPin = async (req, res) => {
  try {
    // thực hiện upload

    console.log("Doing IPFS");
    
    // await ipfsMiddle(req,res);
    if(ipfsMiddle(req,res)=="[object Promise]")
    {
      console.log("Ready IPFS");
    }

    // console.log("funcres"+ipfsMiddle(req,res));
    
    // trả về cho người dùng cái thông báo đơn giản.
    return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/after.html`));
    
  } catch (error) {
    // Nếu có lỗi thì debug lỗi xem là gì ở đây
    debug(error);

    return res.send(`Error when trying upload many files: ${error}}`);
  }
};

module.exports = {
 ipfsPin: ipfsPin
};