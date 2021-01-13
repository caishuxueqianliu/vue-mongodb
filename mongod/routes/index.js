var express = require('express');
var router = express.Router();
var jwts = require('../utils/token.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  const xx = jwts.generateToken()
 // res.send({data:xx})
  console.log(xx)
  res.send({data:"ok"})
});
router.get('/receive', function(req, res, next) {

  console.log(req.body)

});
router.post('/receive', function(req, res, next) {

  console.log(req.body)

});
router.get('/captcha1', function (req,res,next) {
  res.send("ok");
});

module.exports = router;
