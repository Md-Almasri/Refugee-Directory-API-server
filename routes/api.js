var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('no route available');
});

router.post('/add-organisation', function(req, res, next) {
    console.log(req.body);
    res.send('Received org');
  });

router.post('/add-branch', function(req, res, next) {
    console.log(req.body);
    res.send('Received branch');
});

router.post('/add-note', function(req, res, next) {
    console.log(req.body);
    res.send('Received note');
});

module.exports = router;