const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getName", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ name: "India" });
});

app.get("/calculateAmt", (req, res) => {
  const numOfDays = req.query?.numOfDays || 0;
  const calculatedAmount = 483 * numOfDays;

  setTimeout(() => {
    res.set("Access-Control-Allow-Origin", "*");
    res.send({ amount: calculatedAmount });
  }, 3000);
});

app.listen(5000, () => {
  console.log("SERVER STARTED");
});
