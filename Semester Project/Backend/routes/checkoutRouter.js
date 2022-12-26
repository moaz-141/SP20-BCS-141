const express = require("express");
const router = express.Router();

router.get("/checkout", async (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send({ data: "You are authenticated!" });
  } else {
    res.status(400).send({ error: "You are not authenticated!" });
    res.redirect("/login");
  }
});

module.exports = router;
