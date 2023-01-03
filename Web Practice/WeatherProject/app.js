const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let city = req.body.cityName;
  let apiKey = "ed29942349adb674c504b1704ed3e473";
  let unit = "metric";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=" +
    unit +
    "&APPID=" +
    apiKey;

  https.get(url, (response) => {
    response.on("data", (data) => {
      let weatherData = JSON.parse(data);

      let temp = weatherData.main.temp;
      let weatherDesc = weatherData.weather[0].description;
      let icon = weatherData.weather[0].icon;
      let imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currentl " + weatherDesc + "</p>");
      res.write(
        "<h1>Temperature in " + city + " is " + temp + " degrees.</h1>"
      );
      res.write("<img src = " + imageUrl + ">");

      res.send();
    });
  });
});

app.listen(3000, () => console.log("Server is running at port 3000"));
