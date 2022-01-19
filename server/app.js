const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getName", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ name: "India" });
});

app.listen(5000, () => {
  console.log("SERVER STARTED");
});
