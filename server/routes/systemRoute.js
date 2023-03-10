/**
 * Retyped by frozenproof, Feb 19 2023
 */
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const uploadController = require("../controllers/uploadController");
const mintingController=require("../controllers/mintingController");

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", [ uploadController.multipleUpload]);
 
  router.post("/api/minting", [ mintingController.getAxios]);

  router.get("/messages", (req, res) => {
    res.send("Hello");
});
  
  return app.use("/", router);
};

module.exports = initRoutes;