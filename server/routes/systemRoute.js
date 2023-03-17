/**
 * Retyped by frozenproof, Feb 19 2023
 */
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const uploadController = require("../controllers/uploadController");
const mintingController=require("../controllers/mintingController");
const mintingControllerV2=require("../controllersV2/mintingControllerV2");
const multipleuploadVer2 = require("../controllersV2/uploadControllerV2");
const generateControllerV2 = require("../controllersV2/generateControllerV2");

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  // router.get("/", upload.getFrontend);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", [ uploadController.multipleUpload]);
  router.post("/mlupload2", [ multipleuploadVer2.multipleUpload]);
 
  
  router.post("/api/minting", [ mintingController.getAxios]);

  router.post("/api/signing", [ mintingControllerV2.Mint]);
  router.post("/api/pining", [ generateControllerV2.Generate]);

  router.get("/messages", (req, res) => {
    res.send("Hello");
});
  
  return app.use("/", router);
};

module.exports = initRoutes;