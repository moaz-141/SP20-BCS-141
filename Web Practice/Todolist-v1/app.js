const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const routinelistItems = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", (req, res) => {
  const day = date.getDate();

  res.render("list", { listTitle: day, listItems: routinelistItems });
});

app.post("/", (req, res) => {
  let item = req.body.item;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    routinelistItems.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", listItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
