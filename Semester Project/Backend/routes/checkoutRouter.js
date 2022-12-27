const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/checkout", async (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send({ data: "You are authenticated!" });
  } else {
    res.status(400).send({ error: "You are not authenticated!" });
  }
});

// router.get('/checkout',checkAuthentication,function(req,res){
//   res.status(200).send({ data: "You are authenticated!" });
//   //do something only if user is authenticated
// });
// function checkAuthentication(req,res,next){
//   if(req.isAuthenticated()){
//       //req.isAuthenticated() will return true if user is logged in
//       next();
//   } else{
//     res.status(400).send({ error: "You are not authenticated!" });
//   }
// }

module.exports = router;
