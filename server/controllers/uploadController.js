/**
 * multipleUploadController.js
 */
const uploadMiddle = require("../middleware/uploadMiddle");
const ipfsMiddle = require("../middleware/ipfsMiddle");
const path = require("path");
let debug = console.log.bind(console);
let shell = require('shelljs')


let multipleUpload = async (req, res) => {
  try {
    // thực hiện upload
    // if(ipfsMiddle(req,res)=="[object Promise]")
    // {
    //   console.log("Ready IPFS");
    // }

    await uploadMiddle(req, res);
    let temp_req = JSON.stringify(req.body);
    let cut_temp_req = temp_req.split("\"");
    for (var i = 0; i < cut_temp_req.length; i++) {
      console.log(cut_temp_req[i]);
    }
    shell.exec(`echo "`+cut_temp_req[3] + `" | cat  >> ${__dirname}/../log/request.log`);
    shell.exec(`echo "`+cut_temp_req[7] + `" | cat  >> ${__dirname}/../log/request.log`);
    shell.exec(`echo "`+cut_temp_req[11] + `" | cat  >> ${__dirname}/../log/request.log`);

    // let buffer=ipfsMiddle(req,res);

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