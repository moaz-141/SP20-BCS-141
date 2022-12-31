const jwt = require("jsonwebtoken");

const catchAsyncError = require("./catchAsyncErrors");
const User = require("../models/userModel");

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).send({ error: "You are not authenticated!" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);
  
  console.log(decoded.id)

  next();
});

module.exports = isAuthenticated;
