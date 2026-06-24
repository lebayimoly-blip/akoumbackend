const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configuration stockage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route upload
router.post("/", upload.single("file"), (req, res) => {
  res.json({
    message: "Fichier uploadé avec succès",
    file: req.file
  });
});

module.exports = router;
