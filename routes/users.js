var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { say:"Hello" })
});

router.post('/process', function(req, res, next) {
  // res.send('respond with a resource');
  // res.render('users', { say:"Hello" })
  res.send(' '+req.body.word+' > '+req.body.word.toLowerCase());
});

module.exports = router;
