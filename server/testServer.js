/**
 * Retyped by frozenproof, Feb 19 2023
 * testServer.js
 */
const express = require("express");
const app = express();
const initRoutes = require("./routes/systemRoute");
app.use(express.json());

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));
app.use(express.static("amodule"));

// Khởi tạo các routes cho ứng dụng
initRoutes(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 3001;

app.listen(port, () => {
  console.log(`Hello meo con, I'm running at localhost:${port}\n`);
});