/**
 * Retyped by frozenproof, Feb 19 2023
 */
const util = require("util");
const path = require("path");
const multer = require("multer");

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
let storage = multer.diskStorage({

  // Định nghĩa nơi file upload sẽ được lưu lại
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/../../images`));
  },
  filename: (req, file, callback) => {
    // ở đây các bạn có thể làm bất kỳ điều gì với cái file nhé.
    // Mình ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
    let math = ["image/png", "image/jpg"];
    if (math.indexOf(file.mimetype) === -1) {
      let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpg or png.`;
      return callback(errorMess, null);
    }

    // Tên của file thì mình nối thêm một cái nhãn thời gian để tránh bị trùng tên file.
    // let filename = `${Date.now()}--${file.originalname}`;
    let filename = `${file.originalname}`;
    callback(null, filename);
  }

});

// Khởi tạo middleware uploadManyFiles với cấu hình như ở trên,
// Bên trong hàm .array() truyền vào name của thẻ input, ở đây mình đặt là "many-files", và tham số thứ hai là giới hạn số file được phép upload mỗi lần, mình sẽ để là 17 (con số mà mình yêu thích). Các bạn thích để bao nhiêu cũng được.

// Mục đích của util.promisify() là để bên controller có thể dùng async-await để gọi tới middleware này
let uploadManyFiles = multer({ storage: storage }).array("many-files", 64);

// let uploadManyFiles = async(req,res) => {
  // await multer({ storage: storage }).array("many-files", 64);
  // return true;
// } 

// const uploadManyFiles = function () {
//   return multer({ storage: storage }).array("many-files", 64);
// }

let uploadMiddle = util.promisify(uploadManyFiles);

module.exports = uploadMiddle;
// module.exports = shell.exec(`${__dirname}/../controllers/print.sh`);;