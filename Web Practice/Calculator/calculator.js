const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/bmicalculator", (req, res) =>
  res.sendFile(__dirname + "/bmiCalculator.html")
);

app.post("/", (req, res) => {
  let result = Number(req.body.num1) + Number(req.body.num2);

  res.send(
    "Result of adding " +
      req.body.num1 +
      " and " +
      req.body.num2 +
      " is " +
      result
  );
});

app.post("/bmicalculator", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, () => console.log("Server is listening at port 3000"));
