/**
 * Retyped by frozenproof, Feb 19 2023
 */
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const pinConfirm = require("../controllers/pinningConfirm");
const uploadController = require("../controllers/uploadController");

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", uploadController.multipleUpload);

  // Upload to IPFS
  router.post("/pinning", pinConfirm.getPin);

  return app.use("/", router);
};

module.exports = initRoutes;