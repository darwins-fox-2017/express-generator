var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is Page');
});

router.get('/about', function(req, res, next) {
  // res.render('pages', { say: req.query.say });
  // res.send('about '+req.param('say'))
  res.send('about '+req.query.say+' '+req.query.word)
});

module.exports = router;
