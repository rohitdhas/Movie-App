const upload = require("../controller/gfsStorage");
const express = require("express");
const router = express.Router();
const { uploadMovie, deleteMovie, readFileData } = require('../controller/fileController')

// Route to Upload files
router.post("/upload", upload.fields([{ name: "thumbnail" }, { name: "movie" }]), uploadMovie);

// Route to Read files
router.get("/:filename", readFileData);

// Route to delete File
router.delete("/:filename", deleteMovie);

module.exports = router;
