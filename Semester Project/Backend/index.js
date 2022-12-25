require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const database = require("./database");
const productRouter = require("./routes/productRouter");
const Order = require("./models/orderModel");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

database.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) =>
  res.json({ message: "Welcome to food-ordering backend." })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

app.use("/api/", productRouter);
