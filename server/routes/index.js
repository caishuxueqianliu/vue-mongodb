var express = require('express');
var router = express.Router();

var pageBlog = require('./pageBlog');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sitemap.xml',pageBlog.siteMap);

module.exports = router;
