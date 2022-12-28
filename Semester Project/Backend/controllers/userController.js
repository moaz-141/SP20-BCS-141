const passport = require("passport");

const catchAsyncError = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
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

const register = catchAsyncError(async (req, res, next) => {
  User.register(
    {
      username: req.body.username,
      email: req.body.email,
      avatar: {
        public_id: "this is sample id",
        url: "profilepicUrl",
      },
    },
    req.body.password,
    function (err, user) {
      if (err) {
        res.status(400).send({ error: err });
      } else {
        passport.authenticate("local")(req, res, function () {
          sendToken(user, 200, res);
        });
      }
    }
  );
});

const login = catchAsyncError(async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, { session: false }, (err) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      passport.authenticate("local")(req, res, function () {
        sendToken(user, 200, res);
      });
    }
  });
});

const logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).send({ success: true, message: "Logged out successfully" });
});

const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404).send({ error: "User not found with this email" });
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // Create reset password url

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/password/reset/${resetToken}`;

  const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Food Order Password Recovery",
      message,
    });

    res.status(200).send({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(400).send({ error: error });
  }
});

module.exports = { register, login, logout, forgotPassword };
