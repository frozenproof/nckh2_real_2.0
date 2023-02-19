/**
 * Retyped by frozenproof, Feb 19 2023
 */
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/testHomeController");
const multipleUploadController = require("../controllers/testMultipleUploadController");

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", multipleUploadController.multipleUpload);

  return app.use("/", router);
};

module.exports = initRoutes;