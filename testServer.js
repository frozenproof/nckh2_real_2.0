/**
 * Retyped by frozenproof, Feb 19 2023
 * testServer.js
 */
const express = require("express");
const app = express();
const initRoutes = require(`${__dirname}/server/routes/systemRoute`);
app.use(express.json());
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));
// app.use(express.static("amodule"));
app.use(express.static(__dirname));
// Khởi tạo các routes cho ứng dụng
initRoutes(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 3001;
app.get('/', function(req, res) {
  // do something here.
});

// app.get("/:universalURL", (req, res) => {
//   res.send("404 URL NOT FOUND");
// });


app.listen(port, () => {
  console.log(`Hello meo con, I'm running at localhost:${port}`);
  console.log(`Hello meo con, I'm running at localdir:`+__dirname);
});