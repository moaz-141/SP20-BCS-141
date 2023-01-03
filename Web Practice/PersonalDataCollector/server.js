const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  let name = req.body.fName + " " + req.body.lName;
  let age = req.body.age;
  let email = req.body.email;
  let phone = req.body.phone;

  res.send(
    "Your Entered Data: Name: " +
      name +
      " Age: " +
      age +
      " Email: " +
      email +
      " Phone: " +
      phone
  );
});

app.listen(3000, () => console.log("Server is running at port 3000"));
