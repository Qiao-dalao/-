var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	   title: '1号店(yhd.com)_全球超市，轻松到家！' ,
	   
  });
});

module.exports = router;
