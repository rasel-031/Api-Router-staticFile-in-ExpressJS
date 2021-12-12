const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.end("I am admin or manager.");
});

router.get("/home", (req, res) => {
  res.sendFile(
    path.join(path.dirname(__dirname), "public/admin.html"),
    (err) => {
      console.log("File sent error: " + err);
    }
  );
});

router.get("/about", (req, res) => {
  const rs = fs.createReadStream(
    path.join(path.dirname(__dirname), "public/admin.html")
  );
  rs.on("data", (chunk) => {
    res.type("application/octet-stream");
    res.end(chunk);
  });
});

router.post("/insert", (req, res) => {
  console.log(req.body);
  console.log(req.originalUrl);
  res.end("You admin data has inserted.");
});

router.use((req, res) => {
  res.status(404);
  res.end("404 Admin Not Found.");
});

module.exports = router;
