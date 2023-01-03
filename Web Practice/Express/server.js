const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello, World</h1>"));

app.get("/contact", function (req, res) {
  res.send("contact me at: i.moaz.ze69@gmail.com");
});

app.get("/about", (req, res) =>
  res.send(
    'My name is Muhammad Moaz Ahmed. To learn about more about me. <a href="https://moaz-ze69.github.io/about/">Click Here</a>'
  )
);

app.get("/hobbies", (req, res) =>
  res.send("<ul><li>Cricket</li><li>Football</li><li>Programming</li></ul>")
);

app.listen(3000, () => console.log("Server is running at port 3000"));
