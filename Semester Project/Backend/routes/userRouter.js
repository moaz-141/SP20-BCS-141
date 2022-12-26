const express = require("express");
const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
const router = express.Router();
const User = require("../models/userModel");

passport.use(User.createStrategy());

passport.serializeUser(
  User.serializeUser(function (user, done) {
    done(null, user.id);
  })
);
passport.deserializeUser(
  User.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  })
);

router.post("/create-user", (req, res) => {
  User.register(
    {
      username: req.body.username,
      email: req.body.email,
    },
    req.body.password,
    function (err, user) {
      if (err) {
        res.status(400).send({ error: err });
      } else {
        passport.authenticate("local")(req, res, function () {
          res.status(200).send({ data: user });
        });
      }
    }
  );
});

router.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);

      res.status(400).send({ error: err });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.status(200).send({ data: user });
      });
    }
  });
});

module.exports = router;
