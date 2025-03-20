const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/test_One", (req, res) => {
  res.send([2, 2]);
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
