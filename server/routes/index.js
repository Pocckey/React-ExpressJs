var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.json({title: "API"});
});

module.exports = router;
