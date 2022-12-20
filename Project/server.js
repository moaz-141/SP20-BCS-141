require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000;
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect");
  });

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
