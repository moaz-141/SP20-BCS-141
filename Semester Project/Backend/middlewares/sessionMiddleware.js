const session = require("express-session");


const sessionMiddleware = () =>
  session({
    secret: "Our little secret that will make some tricks.",
    resave: false,
    saveUninitialized: false,
  });

module.exports = sessionMiddleware;
