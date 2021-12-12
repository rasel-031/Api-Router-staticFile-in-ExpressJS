const express = require("express");
const admin = require("./Router/adminRouter");
const user = require("./Router/userRouter");
const app = express();

app.use("/", express.static("public"));

app.use(["/admin", "/manager"], admin);
app.use(["/user", "/customer"], user);

app.use((req, res) => {
  res.status(404);
  res.end("404 Page Not Found.");
});

app.listen(3001, () => {
  console.log(`Server is running on port: ${3001}`);
});
