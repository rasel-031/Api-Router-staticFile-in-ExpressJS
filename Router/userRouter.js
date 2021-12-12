const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.end("I am user or customer.");
});

var user = {
  1: {
    name: "rasel",
    age: 25,
  },
  2: {
    name: "raju",
    age: 23,
  },
  3: {
    name: "imran",
    age: 29,
  },
  4: {
    name: "ibrahim",
    age: 27,
  },
};
router.get("/:id", (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;
  if (Object.keys(user).length >= id) {
    res.end(JSON.stringify(user[id]));
  } else {
    next();
  }
});

router.get("/home", (req, res) => {
  console.log(req.originalUrl);
  res.sendFile(
    path.join(path.dirname(__dirname), "public/user.html"),
    (err) => {
      console.log("File sent error: " + err);
    }
  );
});

router.post("/insert", (req, res) => {
  console.log(req.body);
  console.log(req.originalUrl);
  res.end("You user data has inserted.");
});

router.use((req, res) => {
  res.status(404);
  res.end("404 User Not Found.");
});

module.exports = router;
