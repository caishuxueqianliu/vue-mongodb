var express = require('express');
var router = express.Router();


router.post("/login",(req,res,next)=>{
  const { username, password } = req.body
  console.log(username,password)
  res.send({msg:"ok"})
})

module.exports = router;
