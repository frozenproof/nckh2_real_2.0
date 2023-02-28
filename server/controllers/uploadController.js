/**
 * multipleUploadController.js
 */
const uploadMiddle = require("../middleware/uploadMiddle");
const ipfsMiddle = require("../middleware/ipfsMiddle");
const path = require("path");
let debug = console.log.bind(console);


let multipleUpload = async (req, res) => {
  try {
    // thực hiện upload
 // if(ipfsMiddle(req,res)=="[object Promise]")
    // {
    //   console.log("Ready IPFS");
    // }
   
    await uploadMiddle(req, res);
    console.log(req.body);

    let buffer=ipfsMiddle(req,res);

    // console.log("\nSafe borderline\n\n----------------------------------\n\nHere is res"+res+"\n\nHere is req"+req+"\n\n--End");
    // Nếu upload thành công, không lỗi thì tất cả các file của bạn sẽ được lưu trong biến req.files
    // debug(req.files);

    // // Mình kiểm tra thêm một bước nữa, nếu như không có file nào được gửi lên thì trả về thông báo cho client
    // if (req.files.length <= 0) {
    //   return res.send(`You must select at least 1 file or more.`);
    // }

    // trả về cho người dùng cái thông báo đơn giản.
    // return res.send(`Your files has been uploaded to our server HII.`);
    // return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/pin.html`));
      return res.sendFile(path.join(`${__dirname}/../../frontend_test/src/View/after.html`));

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